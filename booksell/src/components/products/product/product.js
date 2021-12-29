
import React from 'react';
import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@material-ui/core';
import { Component } from 'react';

class Product extends Component {

    render() {
        var { product } = this.props
        return (
            <Card style={{
                width: "30rem", boxShadow: 'none',
                height: '95%',
                marginLeft:'1.5rem'
            }}>
                <CardActionArea style={{ width: "25rem", height: '50rem' }}>
                    <CardMedia
                        component="img"
                        image={product.picture}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography style={{ textAlign: 'center', fontSize: '13px' }} gutterBottom component="div">
                            {product.name}
                        </Typography>
                        <Typography style={{ textAlign: 'center', color: 'green', fontSize: '13px' }} gutterBottom component="div">
                            {product.status}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        )
    }
}

export default Product;
