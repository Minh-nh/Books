import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Table, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios"
import { withRouter } from 'react-router-dom';
class AdminProductAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: "",
                author: {},
                publishing_house: {},
                buy_year: "",
                publish_year: "",
                tag: [],
                status: "",
                state: true,
                number_of_borrowed: 0,
                picture: ""
            },
            authors: [],
            publishing_houses: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/authors',
            data: null
        }).then(res => {
            this.setState(pre => ({
                authors: res.data,
                product: {
                    ...pre.product,
                    author: res.data[0]
                }
            }));
        }).catch(err => {
            console.log(err);
        });
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/publishing_houses',
            data: null
        }).then(res => {
            this.setState(pre => ({
                publishing_houses: res.data,
                product: {
                    ...pre.product,
                    publishing_house: res.data[0]
                }
            }));
        }).catch(err => {
            console.log(err);
        });

    }

    showAuthors(authors) {
        var result = null;
        if (authors.length > 0) {
            result = authors.map((author, index) => {
                return <option key={index} value={author._id} onClick={() => this.onChange()}>{author.name}</option>
            });
        }
        return result;
    }

    showPublishingHouses(publishingHouses) {
        var result = null;
        if (publishingHouses.length > 0) {
            result = publishingHouses.map((publishingHouse, index) => {
                return <option key={index} value={publishingHouse._id} onClick={() => this.onChange()}>{publishingHouse.name}</option>
            });
        }
        return result;
    }

    onAdd = (product) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/products/add',
            data: product
        }).then(res => {
            const { history } = this.props;
            if (history) history.push('/admin/library_management');
        }).catch(err => {
            console.log(err);
        })
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if (name !== "picture") {
            value = value.toUpperCase();
        }
        if (name === "author") {
            var { authors } = this.state;
            authors.map((author, index) => {
                if (value === author._id) {
                    value = author
                }
            })
        }
        if (name === "publishing_house") {
            var { publishing_houses } = this.state;
            publishing_houses.map((publishing_house, index) => {
                if (value === publishing_house._id) {
                    value = publishing_house
                }
            })
        }
        if (name === "tag") {
            value = value.split(', ')
        }
        this.setState(pre => ({
            product: {
                ...pre.product,
                [name]: value
            }
        }))
    }

    render() {
        var { product, authors, publishing_houses } = this.state
        const { history } = this.props;
        return (
            (history) ?
                <Container style={{ marginTop: '1rem' }}>
                    <Card style={{ backgroundColor: 'white', padding: '0px' }}>
                        <Card.Title style={{ color: 'white', fontSize: '24px', backgroundColor: 'green', height: '5rem', padding: '1rem' }}>THÊM SÁCH</Card.Title>
                        <Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
                            <Row>
                                <Col style={{ margin: 'auto' }} sm={6}>
                                    <Container>
                                        <img style={{ width: '30rem', marginLeft: '15rem' }} src={product.picture} alt="Ảnh sách"
                                            width="75%"
                                            height="75%"
                                        />
                                    </Container>
                                    <Form style={{ marginTop: '1rem' }}>
                                        <Form.Control style={{ width: '30rem', marginLeft: '16.5rem' }} name="picture" type="input" placeholder="URL" onChange={this.onChange} />
                                    </Form>

                                </Col>
                                <Col style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}} sm={6}>
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
                                                <td style={{ padding: '5px' }}>Tên sách</td>
                                                <td style={{ padding: '0px' }}><Form.Control style={{ height: '3rem', width: '100%', textTransform: "uppercase" }} name="name" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                            </tr>
                                            <tr className="tr-edit">
                                                <td style={{ padding: '5px' }}>2</td>
                                                <td style={{ padding: '5px' }}>Tác giả</td>
                                                <Form.Control name="author" onChange={this.onChange} style={{ height: '3rem', fontSize: '12px' }} as="select">
                                                    {this.showAuthors(authors)}
                                                </Form.Control>
                                            </tr>
                                            <tr className="tr-edit">
                                                <td style={{ padding: '5px' }}>3</td>
                                                <td style={{ padding: '5px' }}>Nhà xuất bản</td>
                                                <Form.Control name="publishing_house" onChange={this.onChange} style={{ height: '3rem', fontSize: '12px' }} as="select">
                                                    {this.showPublishingHouses(publishing_houses)}
                                                </Form.Control>
                                            </tr>
                                            <tr className="tr-edit">
                                                <td style={{ padding: '5px' }}>4</td>
                                                <td style={{ padding: '5px' }}>Năm xuất bản</td>
                                                <td style={{ padding: '0px' }}><Form.Control style={{ height: '3rem', width: '100%', textTransform: "uppercase" }} name="publish_year" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                            </tr>
                                            <tr className="tr-edit">
                                                <td style={{ padding: '5px' }}>5</td>
                                                <td style={{ padding: '5px' }}>Năm mua</td>
                                                <td style={{ padding: '0px' }}><Form.Control style={{ height: '3rem', width: '100%', textTransform: "uppercase" }} name="buy_year" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                            </tr>
                                            <tr className="tr-edit">
                                                <td style={{ padding: '5px' }}>6</td>
                                                <td style={{ padding: '5px' }}>Thể loại</td>
                                                <td style={{ padding: '0px' }}><Form.Control style={{ height: '3rem', width: '100%', textTransform: "uppercase" }} name="tag" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                            </tr>
                                            <tr className="tr-edit">
                                                <td style={{ padding: '5px' }}>7</td>
                                                <td style={{ padding: '5px' }}>Tình trạng</td>
                                                <td style={{ padding: '0px' }}><Form.Control style={{ height: '3rem', width: '100%', textTransform: "uppercase" }} name="status" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div>
                                        <Link to="/admin/library_management">
                                            <Button style={{ float: 'right', marginTop: '1rem', width: "10rem",height:'3rem',backgroundColor:'#121212' }}>Huỷ</Button>
                                        </Link>
                                        <Button style={{ float: 'right', marginTop: '1rem', width: "10rem",height:'3rem' ,backgroundColor:'#121212'}} onClick={() => this.onAdd(product)}>Xác nhận</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Container >
                : null)
    }
}
export default withRouter(AdminProductAdd);
