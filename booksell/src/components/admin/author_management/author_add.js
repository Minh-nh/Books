import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Table, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios"
import { withRouter } from 'react-router-dom';
class AdminAuthorAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: {
                name: "",
                description: "",
                email: "",
                phone: ""
            }
        }
    }
    onAdd = (author) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/authors/add',
            data: author
        }).then(res => {
            const { history } = this.props;
            if (history) history.push('/admin/author_management');
        }).catch(err => {
            console.log(err);
        })
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value.toUpperCase();
        this.setState(pre => ({
            author: {
                ...pre.author,
                [name]: value
            }
        }))
    }

    render() {
        var { author } = this.state
        const { history } = this.props;
        return (
            (history) ?
                <Container style={{ marginTop: '1rem' }}>
                    <Card.Title style={{ fontSize: '24px', marginLeft: '2.5%' }}>THÊM TÁC GIẢ</Card.Title>

                    <Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
                        <Row>
                            <Col sm={6}>
                                <Container>
                                    <img src="https://cdn.nap.edu.vn/avatar/202192/trend-avatar-facebook-1-1630566628626.jpg" alt="Ảnh đại diện"
                                        width="75%"
                                        height="75%"
                                    />
                                </Container>
                                <Link to="/admin/library_management">
                                    <Button style={{ float: 'right', marginTop: '1rem', width: "7rem" }}>Huỷ</Button>
                                </Link>
                                <Button style={{ float: 'right', marginTop: '1rem', width: "7rem" }} onClick={() => this.onAdd(author)}>Xác nhận</Button>
                            </Col>
                            <Col sm={6}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="tr-edit">
                                            <td style={{ padding: '5px' }}>1</td>
                                            <td style={{ padding: '5px' }}>Họ và tên</td>
                                            <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', textTransform: "uppercase" }} name="name" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                        </tr>
                                        <tr className="tr-edit">
                                            <td style={{ padding: '5px' }}>2</td>
                                            <td style={{ padding: '5px' }}>Giới thiệu</td>
                                            <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', textTransform: "uppercase" }} name="description" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                        </tr>
                                        <tr className="tr-edit">
                                            <td style={{ padding: '5px' }}>3</td>
                                            <td style={{ padding: '5px' }}>Email</td>
                                            <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', textTransform: "uppercase" }} name="email" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                        </tr>
                                        <tr className="tr-edit">
                                            <td style={{ padding: '5px' }}>4</td>
                                            <td style={{ padding: '5px' }}>SĐT</td>
                                            <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', textTransform: "uppercase" }} name="phone" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </Container >
                : null)
    }
}
export default withRouter(AdminAuthorAdd);
