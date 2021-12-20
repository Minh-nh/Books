
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';
import useStyles from './Style';
import product from '../db';
import { Link } from "react-router-dom";


const  Product = ({ product }) => {
    const classes = useStyles();
    return (
        <Link to={`/products/${product.id}`}>
            <Card className={classes.root}>
                        <CardMedia className={classes.media}  image ={product.image} title={Product.name}/> 
                <CardContent>
                    <div className={classes.CardContent}>
                            <Typography  align="center" variant='h5'>
                                {product.name}
                            </Typography>
                            <Typography align="center" color='green' variant='h5' >
                                {product.price}
                            </Typography>
                    </div>
                </CardContent>
            </Card>
        </Link>
            
    )
}

export default Product;
