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
                tag: []
            },
            cart: [],
            librarian: {}
        }
    }

    componentDidMount() {
        var cart = reactLocalStorage.getObject('cart');
        var librarian = reactLocalStorage.getObject('librarian');
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                product: res.data,
                cart,
                librarian
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


    onCheckInCard(product, cart, librarian) {
        var result = false;
        if (!librarian.name) {
            result = true
        }
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
        var { product, cart, librarian } = this.state
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
                                            <p>T??c gi???: {product.author?.name}</p>
                                            <p>Nh?? xu???t b???n: {product.publishing_house?.name}</p>
                                            <p>N??m xu???t b???n: {product.publish_year}</p>
                                            <p>N??m mua: {product.buy_year}</p>
                                            <p>Th??? lo???i: {this.showTag(product.tag)}</p>
                                            <p>S??? l???n m?????n: {product.number_of_borrowed}</p>
                                            <p>Tr???ng th??i: {product.state ? "C?? s???n" : "???? m?????n"}</p>
                                        </Col>
                                    </Row>
                                    <div >
                                        <button class="add-to-cart btn btn-default" disabled={this.onCheckInCard(product, cart, librarian)} type="button" onClick={() => this.onAddCart(product)}>M?????n s??ch</button>
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