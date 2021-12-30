import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import axios from "axios"
import { withRouter } from 'react-router-dom'
class AdminAuthorDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: {
            },
            products: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/authors/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                author: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products/author?id=' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                products: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }

    redirectToProductDetail = (id) => {
        const { history } = this.props;
        if (history) history.push('/admin/product/' + id);

    }

    showBooksOfAuthor(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr onClick={() => this.redirectToProductDetail(product._id)}>
                        <th>{index + 1}</th>
                        <th>{product._id}</th>
                        <th>{product.name}</th>
                    </tr>
                )
            });
        }
        return result;
    }

    render() {
        var { author, products } = this.state
        const { history } = this.props;
        return (
            (history) ?
                <Container style={{ marginTop: '1rem' }}>
                    <Card.Title style={{ fontSize: '24px', marginLeft: '2.5%' }}>CHI TIẾT TÁC GIẢ</Card.Title>
                    <div>

                        <Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
                            <Row>
                                <Col sm={6}>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>ID</th>
                                                <th>Tên sách</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.showBooksOfAuthor(products)}
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col sm={6}>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>ID</td>
                                                <td>{author._id}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Tên</td>
                                                <td>{author.name}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Giới thiệu</td>
                                                <td>{author.description}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Email</td>
                                                <td>{author.email}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>SĐT</td>
                                                <td>{author.phone}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container> : null
        )
    }
}
export default withRouter(AdminAuthorDetail);
