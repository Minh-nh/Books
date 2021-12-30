import React, { Component } from 'react';
import { Row, Button, Table, Container, Card } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import axios from "axios";
import SideBarManagement from '../home/sidebar/sidebar_management';
import DeletePublishingHouseNotification from '../home/notification/delete_publishing_house_notification';
import ReactPaginate from 'react-paginate';
class PublishingHouseManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publishing_houses: [],
            offset: 0,
            orgtableData: [],
            perPage: 20,
            currentPage: 0
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/publishing_houses',
            data: null
        }).then(res => {
            var tdata = res.data;
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                orgtableData: tdata,
                publishing_houses: slice
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
            publishing_houses: slice
        })

    }

    showPublishingHouses(publishingHouses) {
        var result = null;
        if (publishingHouses.length > 0) {
            result = publishingHouses.map((publishingHouse, index) => {
                return (
                    <tr>
                        <td>
                            <img src={publishingHouse.logo} width="100px" height="100px" />
                        </td>
                        <td>{publishingHouse.name}</td>
                        <td>{publishingHouse.description}</td>
                        <td>{publishingHouse.address}</td>
                        <td>{publishingHouse.email}</td>
                        <td>{publishingHouse.hotline}</td>
                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Link to={"/admin/publishing_house/" + publishingHouse._id}>
                                <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                            <DeletePublishingHouseNotification data={publishingHouse._id} />
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { publishing_houses } = this.state
        return (
            <div>
                <SideBarManagement />
                <Container style={{ marginLeft: '5rem', maxWidth: '2000px' }}>
                    <div style={{ backgroundColor: '#01a14b' }}>
                        <Card.Title style={{ color: 'white', fontSize: '23px' }}>QUẢN LÝ NHÀ XUẤT BẢN</Card.Title>
                    </div>
                    <Card style={{ marginLeft: '5rem', maxWidth: '2000px', marginTop: '0px', backgroundColor: 'transparent' }}>
                        <div style={{ backgroundColor: 'white' }}>
                            <Link to="/admin/add_publishing_house">
                                <Button variant="secondary" style={{ float: 'right', width: '5rem' }}> Thêm</Button>
                            </Link>
                            <Table bordered hover style={{ backgroundColor: 'white', fontSize: '12px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: '13px' }}>Ảnh</th>
                                        <th style={{ fontSize: '13px' }}>Nhà xuất bản</th>
                                        <th style={{ fontSize: '13px' }}>Giới thiệu</th>
                                        <th style={{ fontSize: '13px' }}>Địa chỉ</th>
                                        <th style={{ fontSize: '13px' }}>Email</th>
                                        <th style={{ fontSize: '13px' }}>Hotline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showPublishingHouses(publishing_houses)}
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
                    </Card>
                </Container>
            </div>
        )
    }
}

export default PublishingHouseManagement;