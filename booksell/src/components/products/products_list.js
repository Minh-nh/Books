import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Product from "./product/product";
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            offset: 0,
            orgtableData: [],
            perPage: 9,
            currentPage: 0,
        }
    }

    componentDidMount() {
        const { history } = this.props;
        if (history.location.search) {
            axios({
                method: 'GET',
                url: 'http://localhost:5000/api/products/search?name=' + history.location.search.slice(1, history.location.search.length).toUpperCase(),
                data: null
            }).then(res => {
                var tdata = res.data;
                var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData: tdata,
                    products: slice
                });
            }).catch(err => {
                console.log(err);
            })
        } else {
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
                });
            }).catch(err => {
                console.log(err);
            })
        }

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

    showProducts(products, check) {
        var result = null;
        if (products.length > 0) {
            var number = 0;
            result = products.map((product, index) => {
                if (check === "0") {
                    if (product.state && number < 8) {
                        number = number + 1;
                        return (
                            <Box style={{ marginLeft: '5rem' }} item key={product.id} >
                                <Link to={"/product/" + product._id}>
                                    <Product product={product} />
                                </Link>
                            </Box>
                        )
                    }
                } else {
                    return (
                        <Box style={{ marginLeft: '3rem' }} item key={product.id} >
                            <Link to={"/product/" + product._id}>
                                <Product product={product} />
                            </Link>
                        </Box>
                    )
                }

            })
        }
        return result;
    }

    render() {
        var { products } = this.state
        var { check } = this.props
        return (
            <main>
                {check === "0" ? <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.showProducts(products, check)}
                </Box> : <div><Box style={{ display: 'flex', flexWrap: 'wrap', width: '110rem', height: "165rem" }}>
                    {this.showProducts(products, check)}

                </Box>
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
                </div>}

            </main>
        )
    }
}
export default withRouter(ProductsList);