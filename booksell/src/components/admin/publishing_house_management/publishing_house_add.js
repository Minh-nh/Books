import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Table, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios"
import { withRouter } from 'react-router-dom';
class AdminPublishingHouseAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publishing_house: {
                name: "",
                description: "",
                address: "",
                email: "",
                hotline: "",
                logo: ""
            }
        }
    }

    onAdd = (publishing_house) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/publishing_houses/add',
            data: publishing_house
        }).then(res => {
            const { history } = this.props;
            if (history) history.push('/admin/publishing_house_management');
        }).catch(err => {
            console.log(err);
        })
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if (name !== "logo") {
            value = value.toUpperCase();
        }
        this.setState(pre => ({
            publishing_house: {
                ...pre.publishing_house,
                [name]: value
            }
        }))
    }

    render() {
        var { publishing_house } = this.state
        console.log(publishing_house)
        const { history } = this.props;
        return (
            (history) ?
                <Container style={{ marginTop: '1rem' }}>
                    <Card.Title style={{ fontSize: '24px', marginLeft: '2.5%' }}>THÊM NHÀ XUẤT BẢN</Card.Title>
                    <Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
                        <Row>
                            <Col sm={6}>
                                <Container>
                                    <img src={publishing_house.logo} alt="Logo"
                                        width="75%"
                                        height="75%"
                                    />
                                </Container>
                                <Form style={{ marginTop: '1rem' }}>
                                    <Form.Control name="logo" type="input" placeholder="URL" onChange={this.onChange} />
                                </Form>
                                <Link to="/admin/library_management">
                                    <Button style={{ float: 'right', marginTop: '1rem', width: "7rem" }}>Huỷ</Button>
                                </Link>
                                <Button style={{ float: 'right', marginTop: '1rem', width: "7rem" }} onClick={() => this.onAdd(publishing_house)}>Xác nhận</Button>
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
                                            <td style={{ padding: '5px' }}>Nhà xuất bản</td>
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
                                            <td style={{ padding: '5px' }}>HotLinne</td>
                                            <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', textTransform: "uppercase" }} name="hotline" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                        </tr>
                                        <tr className="tr-edit">
                                            <td style={{ padding: '5px' }}>5</td>
                                            <td style={{ padding: '5px' }}>Address</td>
                                            <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', textTransform: "uppercase" }} name="addresss" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
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
export default withRouter(AdminPublishingHouseAdd);
