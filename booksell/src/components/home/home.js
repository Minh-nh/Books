import React, { Component } from "react";
import ProductsList from '../products/products_list';
import Navbar from "./navbar/navbar";
import { reactLocalStorage } from 'reactjs-localstorage';
class Home extends Component {

    createCart() {
        var products = reactLocalStorage.getObject('cart');
        if (products.length > 0)
            return null;
        reactLocalStorage.setObject('cart', []);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <ProductsList check="0" />
                {this.createCart()}
            </div>
        )
    }
}
export default Home;