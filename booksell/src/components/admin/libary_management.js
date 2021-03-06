import React, { Component } from 'react';
import { Row, Button, Table, Container, Card } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteProductNotification from '../home/notification/delete_product_notification';
import SideBarManagement from '../home/sidebar/sidebar_management';
import ReactPaginate from 'react-paginate';
class LibaryManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            offset: 0,
            orgtableData: [],
            perPage: 10,
            currentPage: 0

        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products',
            data: null
        }).then(res => {
            var tdata = res.data;
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                orgtableData: tdata,
                products: slice
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
            products: slice
        })

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

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr>
                        <td>
                            <img src={product.picture} width="100px" height="100px" />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.author?.name}</td>
                        <td>{product.publishing_house?.name}</td>
                        <td>{product.publish_year}</td>
                        <td>{product.buy_year}</td>
                        <td>{this.showTag(product.tag)}</td>
                        <td>{product.status}</td>
                        <td>{product.number_of_borrowed}</td>
                        <td>{product.state ? "C?? s???n" : "???? m?????n"}</td>

                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Link to={"/admin/product/" + product._id}>
                                <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                            <DeleteProductNotification data={product._id} />
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { products } = this.state
        return (
            <div>
                <SideBarManagement />
                <div style={{ backgroundColor: '#01a14b' }}>
                    <Card.Title style={{ color: 'white', fontSize: '23px' }}>QU???N L?? S??CH</Card.Title>
                </div>
                <Card style={{ marginLeft: '5rem', maxWidth: '2000px', marginTop: '0px', backgroundColor: 'transparent' }}>

                    <Container>
                        <div style={{ backgroundColor: 'white' }}>
                            <Link to="/admin/add_product">
                                <Button variant="secondary" style={{ float: 'right', width: '5rem' }}> Th??m</Button>
                            </Link>
                            <Table bordered hover style={{ backgroundColor: 'white', fontSize: '12px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: '13px' }}>???nh</th>
                                        <th style={{ fontSize: '13px' }}>T??n s???n ph???m</th>
                                        <th style={{ fontSize: '13px' }}>T??c gi???</th>
                                        <th style={{ fontSize: '13px' }}>Nh?? xu???t b???n</th>
                                        <th style={{ fontSize: '13px' }}>N??m xu???t b???n</th>
                                        <th style={{ fontSize: '13px' }}>N??m nh???p s??ch</th>
                                        <th style={{ fontSize: '13px' }}>Tag</th>
                                        <th style={{ fontSize: '13px' }}>T??nh tr???ng s??ch</th>
                                        <th style={{ fontSize: '13px' }}>S??? l???n ???? m?????n</th>
                                        <th style={{ fontSize: '13px' }}>Tr???ng th??i m?????n s??ch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showProducts(products)}
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

export default LibaryManagement;