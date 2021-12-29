import React, { Component } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import Navbar from '../home/navbar/navbar';
class BorrowedTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            librarian: {},
            user: {},
            borrowedDate: "",
            giveBackDate: ""
        }
    }

    componentDidMount() {
        var cart = reactLocalStorage.getObject('cart');
        var librarian = reactLocalStorage.getObject('librarian');
        this.setState({
            cart,
            librarian
        })
    }

    onChangeUser = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState(pre => ({
            user: {
                ...pre.user,
                [name]: value
            }
        }))
    }

    onChangeDate = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
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

    render() {
        var { cart, librarian } = this.state
        return (
            <div>
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
                                                <Form.Control name="borrowedDate" size="lg" type="text" placeholder="Ngày đặt (dd/mm/yyyy)" onChange={this.onChangeDate} />
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control name="giveBackDate" size="lg" type="text" placeholder="Hạn trả (dd/mm/yyyy)" onChange={this.onChangeDate} />
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
                                                <Form.Control name="name" size="lg" type="text" placeholder="Họ tên khách hàng" onChange={this.onChangeUser} />
                                            </Form>
                                        </Row>
                                        <Row className="child-row" style={{ marginTop: '0.5rem' }}>
                                            <Col md={8}>
                                                <Form>
                                                    <Form.Control name="email" size="lg" type="text" placeholder="Email" onChange={this.onChangeUser} />
                                                </Form>
                                            </Col>
                                            <Col md={4}>
                                                <Form>
                                                    <Form.Control name="phone_number" size="lg" type="text" placeholder="Số điện thoại " onChange={this.onChangeUser} />
                                                </Form>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <Button style={{ marginTop: '1rem', float: 'right', width: '10rem', height: '4rem' }}>Xác nhận</Button>
                            </Col>
                            <Col className='col-left' style={{ backgroundColor: '#e6e6e6', padding: '1rem' }} md={6}>
                                {this.showCart(cart)}
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>

        )
    }
}
export default BorrowedTicket;