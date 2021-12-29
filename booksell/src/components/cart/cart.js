import React, { Component } from 'react';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navbar from '../home/navbar/navbar';
class Cart extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        }
    }

    componentDidMount() {
        var cart = reactLocalStorage.getObject('cart');
        this.setState({
            cart
        })
    }

    onDeleteItem(index, cart) {
        cart.splice(index, 1)
        reactLocalStorage.setObject('cart', cart);
        window.location.reload();
    }

    showProducts(cart) {
        var result = null;
        if (cart.length > 0) {
            result = cart.map((product, index) => {
                return (
                    <Card style={{ width: '60rem', margin: '1rem', height: '30rem' }}>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col>
                                    <img src={product.picture} style={{ width: '15rem', height: '25rem' }} />
                                </Col>
                                <Col>
                                    <Card.Title style={{ fontSize: '21px' }}>{product.name}</Card.Title>
                                    <Card.Text style={{ fontSize: '18px', color: 'green' }}>
                                        {product.status}
                                    </Card.Text>
                                    <Card.Text>
                                        {"Tác giả: " + product.author}
                                    </Card.Text>
                                    <Card.Text>
                                        {"Nhà xuất bản: " + product.publishing_house}
                                    </Card.Text>
                                    <Button style={{ float: 'right', width: '8rem', height: '3.5rem', background: 'green' }} onClick={() => this.onDeleteItem(index, cart)}>Xoá</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )
            });
        }
        return result;
    };

    render() {
        var { cart } = this.state
        return (
            <div>
                <Navbar />
                <Card.Title style={{ fontSize: '25px', marginLeft: "8%" }}>DANH SÁCH MƯỢN</Card.Title>
                <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {cart.length > 0 ? this.showProducts(cart) : <Card.Title style={{ fontSize: "25px", marginLeft: "38%" }}>KHÔNG CÓ SẢN PHẨM</Card.Title>}
                </Container>
                {cart.length > 0 ? <Link to="/borrowed_ticket"><Button style={{ marginLeft: '38%', width: '30rem', height: '5rem', fontSize: '24px', background: 'green' }} variant="primary">Tiến hành tạo phiếu mượn</Button></Link>
                    : null}
            </div>
        )
    }
}
export default Cart;
