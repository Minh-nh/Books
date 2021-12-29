import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import axios from "axios"
class AdminProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                tag: []
            }
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                product: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }

    showTag(tags) {
        var result = "";
        if (tags.length > 0) {
            result = tags.map((tag, index) => {
                if (index != tags.length - 1) {
                    return tag + ", "
                } else {
                    return tag
                }
            })
        }

        return result
    }

    render() {
        var { product } = this.state
        return (
            <Container style={{ marginTop: '1rem' }}>
                <Card.Title style={{ fontSize: '24px', marginLeft:'2.5%' }}>CHI TIẾT SÁCH</Card.Title>
                <div>

                    <Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
                        <Row>
                            <Col sm={6}>
                                <Container>
                                    <img src={product.picture}
                                        width="75%"
                                        height="75%"
                                    />
                                </Container>
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
                                            <td>{product._id}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Tên</td>
                                            <td>{product.name}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Tác giả</td>
                                            <td>{product.author?.name}</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Nhà phát hành</td>
                                            <td>{product.publishing_house?.name}</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Năm xuất bản</td>
                                            <td>{product.publish_year}</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Năm mua</td>
                                            <td>{product.buy_year}</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Tags</td>
                                            <td>{this.showTag(product?.tag)}</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Tình trạng</td>
                                            <td>{product.status}</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Số lần đã mượn</td>
                                            <td>{product.number_of_borrowed}</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Trạng thái</td>
                                            <td>{product.state ? "Có sẵn" : "Đã mượn"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        )
    }
}
export default AdminProductDetail;
