import React, { Component } from 'react';
import { Row, Button, Table, Container, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash, FaAngleDoubleDown } from 'react-icons/fa';
// import { Pagination } from '@material-ui/lab';
import axios from "axios";
class LibaryManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products',
            data: null
        }).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
    
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr>
                        <td>{product.name}</td>
						<td>{product.author}</td>
						<td>{product.publishing_house}</td>
						<td>{product.publish_year}</td>
						<td>{product.buy_year}</td>
                        <td>{product.tag}</td>
						<td>{product.status}</td>
						<td>{product.number_of_borrowed}</td>
                        <td>{product.state}</td>
                        <td>
						    <img src={product.picture} width="200px" height="300px" />
                        </td>
                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            {/* <button onClick={() => this.onClick(product)} key={index}><FaTrash /></button> */}
                            <button><FaEdit /></button>
                            {/* <button onClick={() => this.onClick(product)} key={index}><FaTrash /></button> */}
                            <button><FaTrash /></button>
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { products } = this.state
        console.log(products)
        return (
            <Container>
                <div style={{ backgroundColor: '#3ac9c9' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Product</p>
                </div>
                <Container>
                    <div style={{ backgroundColor: 'white' }}>
                        <Button variant="secondary" style={{ float: 'right', width: '5rem' }}> Thêm</Button>
                        <Table bordered hover style={{ backgroundColor: 'white', fontSize: '12px' }}>
                            <thead>
                                <tr>
                                    <th style={{ fontSize: '13px' }}>Tên sản phẩm</th>
                                    <th style={{ fontSize: '13px' }}>Tác giả</th>
                                    <th style={{ fontSize: '13px' }}>Nhà xuất bản</th>
                                    <th style={{ fontSize: '13px' }}>Năm xuất bản</th>
                                    <th style={{ fontSize: '13px' }}>Năm nhập sách</th>
                                    <th style={{ fontSize: '13px' }}>Tag</th>
                                    <th style={{ fontSize: '13px' }}>Tình trạng sách</th>
                                    <th style={{ fontSize: '13px' }}>Số lần đã mượn</th>
                                    <th style={{ fontSize: '13px' }}>Trạng thái mượn sách</th>
                                    <th style={{ fontSize: '13px' }}>Ảnh</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showProducts(products)}
                            </tbody>
                        </Table>
                        <Row style={{ marginTop: '1rem', float: 'right' }}>
                            {/* <Pagination count={10} /> */}
                        </Row>
                    </div>
                </Container>
            </Container>
        )
    }
}

export default LibaryManagement;