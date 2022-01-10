import React, { Component } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import Navbar from '../home/navbar/navbar';
import { withRouter } from 'react-router-dom';
class BorrowedTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            librarian: {},
            borrowed_ticket: {
                librarian: {},
                CMND_reader: "",
                name_reader: "",
                email_reader: "",
                phone_reader: "",
                array_books: [],
                date_borrowing: "",
                out_of_date: "",
                state: false
            }
        }
    }

    componentDidMount() {
        var cart = reactLocalStorage.getObject('cart');
        var librarian = reactLocalStorage.getObject('librarian');
        var array_books = []
        cart.map((c, index) => {
            array_books.push(c._id)
        })
        this.setState(pre => ({
            cart,
            librarian,
            borrowed_ticket: {
                ...pre.borrowed_ticket,
                array_books,
                librarian: librarian._id
            }
        }))
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState(pre => ({
            borrowed_ticket: {
                ...pre.borrowed_ticket,
                [name]: value
            }
        }))
    }

    showCart(cart) {
        var result = null;
        if (cart.length > 0) {
            result = cart.map((product, index) => {
                return (
                    <div className="item-per-row" style={{ marginTop: '0.5rem', display: "flex" }}>
                        <img style={{ height: "200px", width: "130px" }} src={product.picture} />
                        <div style={{ marginLeft: '1rem', display: 'flex', flexDirection: 'column', fontSize: '16px' }}>
                            <text>Tên: {product.name}</text>
                            <text>Mã sách: {product._id}</text>
                        </div>
                    </div>
                )
            })
        }
        return result;
    }

    onAdd = (borrow) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/borrowed_ticketes/add',
            data: borrow
        }).then(res => {
            const { history } = this.props;
            if (history) history.push('/');
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        var { cart, librarian, borrowed_ticket } = this.state
        const { history } = this.props;
        return (
            (history) ? <div>
                <Navbar />
                <Container style={{ padding: '5rem' }}>
                    <Row className="parent-row" style={{ padding: '1rem' }}>
                        <Row>
                            <Col className='col-left' md={6}>
                                <div className='section-phieumuon'>
                                    <h3>Thông tin phiếu mượn</h3>
                                    <Form style={{ marginTop: '0.5rem' }}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Control name="date_borrowing" size="lg" type="text" placeholder="Ngày đặt (dd/mm/yyyy)" onChange={this.onChange} />
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control name="out_of_date" size="lg" type="text" placeholder="Hạn trả (dd/mm/yyyy)" onChange={this.onChange} />
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                                <div style={{ marginTop: '2rem' }} className='section-nhanvien'>
                                    <h3>Thông tin nhân viên</h3>
                                    <Form style={{ marginTop: '0.5rem' }}>
                                        <Form.Control size="lg" type="text" placeholder="Họ tên nhân viên" value={librarian ? librarian.name : ""} />
                                    </Form>
                                </div>
                                <div style={{ marginTop: '2rem' }} className='section-khachhang'>
                                    <h3>Thông tin khách hàng</h3>
                                    <div className='form-khachang'>
                                        <Row className="child-row" style={{ marginTop: '0.5rem' }}>
                                            <Form>
                                                <Form.Control name="name_reader" size="lg" type="text" placeholder="Họ tên khách hàng" onChange={this.onChange} />
                                            </Form>
                                        </Row>
                                        <Row className="child-row" style={{ marginTop: '0.5rem' }}>
                                            <Form>
                                                <Form.Control name="CMND_reader" size="lg" type="text" placeholder="CMND" onChange={this.onChange} />
                                            </Form>
                                        </Row>
                                        <Row className="child-row" style={{ marginTop: '0.5rem' }}>
                                            <Col md={8}>
                                                <Form>
                                                    <Form.Control name="email_reader" size="lg" type="text" placeholder="Email" onChange={this.onChange} />
                                                </Form>
                                            </Col>
                                            <Col md={4}>
                                                <Form>
                                                    <Form.Control name="phone_reader" size="lg" type="text" placeholder="Số điện thoại " onChange={this.onChange} />
                                                </Form>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <Button style={{ marginTop: '1rem', float: 'right', width: '10rem', height: '4rem' }} onClick={() => this.onAdd(borrowed_ticket)}>Xác nhận</Button>
                            </Col>
                            <Col className='col-left' style={{ backgroundColor: '#e6e6e6', padding: '1rem' }} md={6}>
                                {this.showCart(cart)}
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div> : null

        )
    }
}
export default withRouter(BorrowedTicket);