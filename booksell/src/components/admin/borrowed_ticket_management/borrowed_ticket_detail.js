
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import axios from 'axios';
class AdminBorrowedTicketDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/borrowed_ticketes/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                borrowed_ticket: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }
    showBooks(books) {
        var result = null;
        if (books.length > 0) {
            result = books.map((book, index) => {
                return (
                    <tr>
                        <td><img style={{width:'150px'}} src={book.picture} /></td>
                        <td>{book._id}</td>
                        <td>{book.name}</td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { borrowed_ticket } = this.state
        return (
            (borrowed_ticket != null) ? <Container style={{ padding: '1rem' }}>
                <Card style={{ backgroundColor: 'white',padding:'0px' }}>
                    <Container style={{padding:'0px'}}>
                        <Card.Header style={{fontSize:'20px',backgroundColor:'green',color:'white',height:'4rem',padding:'1rem'}}>Chi tiết phiếu mượn</Card.Header>
                        <Row style={{ padding: '1rem' }}>
                            <Col lg="3" style={{ marginLeft: '1rem',marginTop:'2rem' }}>
                                <Col style={{ fontSize: '16px' }}>  
                                    <p>Thủ thư: {borrowed_ticket.librarian != null ? borrowed_ticket.librarian.name : null}</p>
                                    <p>CMND: {borrowed_ticket?.CMND_reader}</p>
                                    <p>Tên người mượn: {borrowed_ticket.name_reader}</p>
                                    <p>Email: {borrowed_ticket.email_reader}</p>
                                    <p>SDT: {borrowed_ticket.phone_reader}</p>
                                    <p>Ngày mượn: {borrowed_ticket.date_borrowing}</p>
                                    <p>Thời hạn: {borrowed_ticket.out_of_date}</p>
                                    <p>Tình trạng: {borrowed_ticket.state ? "ĐÃ TRẢ SÁCH" : "CHƯA TRẢ SÁCH"}</p>
                                </Col>
                            </Col>
                            <Col lg="7" style={{ margin: '1rem' }}>
                                <h3>Danh sách sách mượn:</h3>
                                <Table style={{ marginTop: '1rem' }} striped bordered hover size="md">
                                    <thead>
                                        <tr>
                                            <th>Hình ảnh</th>
                                            <th>Mã sách</th>
                                            <th>Tên sách</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.showBooks(borrowed_ticket.array_books)}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </Card>

            </Container> : null
        )
    }
}

export default AdminBorrowedTicketDetail;

