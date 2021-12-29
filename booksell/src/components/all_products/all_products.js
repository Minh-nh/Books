import React, { Component } from 'react';
import Navbar from '../home/navbar/navbar';
import ProductsList from '../products/products_list';
import { Card, Container } from 'react-bootstrap'
import SideBarTag from '../home/sidebar/sidebar_tag';

class AllProducts extends Component {

    render() {

        return (
            <main>
                <Navbar />
                <Card.Title style={{ fontSize: '25px', marginLeft:"7%" }}>TẤT CẢ SÁCH</Card.Title>
                <Container style={{display:'flex'}}>
                    <SideBarTag />
                    <ProductsList check="1" />
                </Container>
            </main>
        )
    }
}
export default AllProducts;