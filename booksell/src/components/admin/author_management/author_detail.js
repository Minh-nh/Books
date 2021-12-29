import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import axios from "axios"
class AdminAuthorDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: {
            }
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

    }

    render() {
        var { author } = this.state
        return (
            <Container style={{ marginTop: '1rem' }}>
                <Card.Title style={{ fontSize: '24px', marginLeft:'2.5%' }}>CHI TIẾT TÁC GIẢ</Card.Title>
                <div>

                    <Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
                        <Row>
                            <Col sm={6}>
                                <Container>
                                    {/* <img src={product.picture}
                                        width="75%"
                                        height="75%"
                                    /> */}
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
            </Container>
        )
    }
}
export default AdminAuthorDetail;
