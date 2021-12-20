import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Product from "./Product/Product";
import axios from "axios";

class Products extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    render(){
        var { products } = this.state
        return(
            <main>
                <Grid container justify="center"  spacing={4}>
                    {products.map((product)=> (
                        <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product } />   
                        </Grid>
                    ))}
                </Grid>
            </main>
        )
    }
} 
export default Products;