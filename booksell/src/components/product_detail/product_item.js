import React, { Component } from "react"
import axios from "axios"
import './style.css'
import { Col, Row } from 'react-bootstrap';
import Navbar from "../home/navbar/navbar";
import { reactLocalStorage } from 'reactjs-localstorage';
class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                tag:[]
            },
            cart: []
        }
    }

    componentDidMount() {
        var cart = reactLocalStorage.getObject('cart');
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                product: res.data,
                cart
            });
        }).catch(err => {
            console.log(err);
        });

    }

    onAddCart(product) {
        var products = reactLocalStorage.getObject('cart');
        products.push(product)
        reactLocalStorage.setObject('cart', products);
        window.location.reload();
    }


    onCheckInCard(product, cart) {
        var result = false;
        if (cart.length > 0) {
            cart.map((c, index) => {
                if (c._id === product._id || !product.state)
                    result = true
            })
        }
        return result
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
        var { product, cart } = this.state
        console.log(product)
        return (
            <div>
                <Navbar />
                <div class="container">
                    <div class="card">
                        <div class="container-fliud">
                            <div class="wrapper row">
                                <div class="preview col-md-6">
                                    <div class="preview-pic tab-content">
                                        <div class="tab-pane active" id="pic-1"><img src={product.picture} alt="" /></div>
                                    </div>
                                </div>
                                <div class="details col-md-6">
                                    <h1 class="product-title">{product.name}</h1>
                                    <h2 class="status"><span>{product.status}</span></h2>
                                    <Row class="details-container">
                                        <Col style={{ fontSize: '16px' }}>
                                            <p>Tác giả: {product.author?.name}</p>
                                            <p>Nhà xuất bản: {product.publishing_house?.name}</p>
                                            <p>Năm xuất bản: {product.publish_year}</p>
                                            <p>Năm mua: {product.buy_year}</p>
                                            <p>Thể loại: {this.showTag(product.tag)}</p>
                                            <p>Số lần mượn: {product.number_of_borrowed}</p>
                                            <p>Trạng thái: {product.state ? "Có sẵn" : "Đã mượn"}</p>
                                        </Col>
                                    </Row>
                                    <div >
                                        <button class="add-to-cart btn btn-default" disabled={this.onCheckInCard(product, cart)} type="button" onClick={() => this.onAddCart(product)}>Mượn sách</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail