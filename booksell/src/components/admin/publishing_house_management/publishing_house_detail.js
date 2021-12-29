import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import axios from "axios"
class AdminPublishingHouseDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publishing_house: {
            }
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/publishing_houses/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                publishing_house: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }

    render() {
        var { publishing_house } = this.state
        return (
            <Container style={{ marginTop: '1rem' }}>
                <Card.Title style={{ fontSize: '24px', marginLeft:'2.5%' }}>CHI TIẾT SÁCH</Card.Title>
                <div>

                    <Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
                        <Row>
                            <Col sm={6}>
                                <Container>
                                    <img src={publishing_house.logo}
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
                                            <td>{publishing_house._id}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Nhà xuất bản</td>
                                            <td>{publishing_house.name}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Giới thiệu</td>
                                            <td>{publishing_house.description}</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Địa chỉ</td>
                                            <td>{publishing_house.address}</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Email</td>
                                            <td>{publishing_house.email}</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>HotLine</td>
                                            <td>{publishing_house.hotline}</td>
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
export default AdminPublishingHouseDetail;
