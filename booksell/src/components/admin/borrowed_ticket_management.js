import React, { Component } from 'react';
import { Row, Button, Table, Container, Card } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import axios from "axios";
import SideBarManagement from '../home/sidebar/sidebar_management';
import ReactPaginate from 'react-paginate';
class BorrowedTicketManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            borrowed_ticketes: [],
            offset: 0,
            orgtableData: [],
            perPage: 10,
            currentPage: 0

        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/borrowed_ticketes',
            data: null
        }).then(res => {
            var tdata = res.data;
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                orgtableData: tdata,
                borrowed_ticketes: slice
            })
        }).catch(err => {
            console.log(err);
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
        const data = this.state.orgtableData;

        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            borrowed_ticketes: slice
        })

    }
    onPayBook = (borrow) => {
        // axios({
        //     method: 'UPDATE',
        //     url: 'http://localhost:5000/api/borrowed_ticketes/update',
        //     data: borrow
        // }).then(res => {
        //     // const { history } = this.props;
        //     // if (history) history.push('/');
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    showBorrowedTicketes(borrowed_ticketes) {
        var result = null;
        if (borrowed_ticketes.length > 0) {
            result = borrowed_ticketes.map((borrowed_ticket, index) => {
                return (
                    <tr>
                        <td>{borrowed_ticket?.librarian._id}</td>
                        <td>{borrowed_ticket?.librarian.name}</td>
                        <td>{borrowed_ticket.CMND_reader}</td>
                        <td>{borrowed_ticket.name_reader}</td>
                        <td>{borrowed_ticket.email_reader}</td>
                        <td>{borrowed_ticket.phone_reader}</td>
                        <td>{borrowed_ticket.date_borrowing}</td>
                        <td>{borrowed_ticket.out_of_date}</td>
                        <td>
                            <Button style={{ backgroundColor: 'black', border: '0px solid black' }} disabled={borrowed_ticket.state} onClick={() => this.onPayBook(borrowed_ticket)}>
                                {borrowed_ticket.state ? "???? TR??? S??CH" : "CH??A TR??? S??CH"}
                            </Button>
                        </td>
                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Link to={"/admin/borrowed_ticket/" + borrowed_ticket._id}>
                                <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { borrowed_ticketes } = this.state
        return (
            <div>
                <SideBarManagement />
                <div style={{ backgroundColor: '#01a14b' }}>
                    <Card.Title style={{ color: 'white', fontSize: '23px' }}>QU???N L?? S??CH</Card.Title>
                </div>
                <Card style={{ marginLeft: '5rem', maxWidth: '2000px', marginTop: '0px', backgroundColor: 'transparent' }}>

                    <Container>
                        <div style={{ backgroundColor: 'white' }}>
                            <Table bordered hover style={{ backgroundColor: 'white', fontSize: '12px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: '13px' }}>M?? nh??n vi??n</th>
                                        <th style={{ fontSize: '13px' }}>T??n nh??n vi??n</th>
                                        <th style={{ fontSize: '13px' }}>CMND</th>
                                        <th style={{ fontSize: '13px' }}>T??n ?????c gi???</th>
                                        <th style={{ fontSize: '13px' }}>Email</th>
                                        <th style={{ fontSize: '13px' }}>S??T</th>
                                        <th style={{ fontSize: '13px' }}>Ng??y m?????n</th>
                                        <th style={{ fontSize: '13px' }}>Ng??y d??? ki???n tr???</th>
                                        <th style={{ fontSize: '13px' }}>Tr???ng th??i</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showBorrowedTicketes(borrowed_ticketes)}
                                </tbody>
                            </Table>
                            <Row style={{ marginTop: '1rem', float: 'right' }}>
                                <ReactPaginate
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={this.state.pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"}
                                    disable={true} />
                            </Row>
                        </div>
                    </Container>

                </Card>
            </div>
        )
    }
}

export default BorrowedTicketManagement;