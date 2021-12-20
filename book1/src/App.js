import React from 'react';
import Navbar from './Page/Home/components/Navbar/Navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import { Link, Switch } from "react-router-dom";
import Productitem from './Page/Productspage/ProductView/Productitem';
import ProductsList from './Page/Productspage/Products/ProductsList';
import CarouselContainer from './Page/Home/components/Banner/CarouselContainer'
import NavbarProduct from './Page/Home/components/Navbar/NavbarProduct'

const App = () => {
    return (
        <BrowserRouter>
                   <Switch>
                    <Route exact path="/">
                            <Navbar/>
                            <CarouselContainer/>
                            <NavbarProduct/>
                            <ProductsList/>
                    </Route>
                    <Route exact path="/products">
                            <Navbar/>
                            <ProductsList />
                    </Route>
                    <Route path="/products/:productId">
                            <Navbar/>
                            <Productitem />   
                            <h1 style={{position:'absolute', textAlign:'center'}}>Sản phẩm khác</h1>                    
                            <ProductsList/>
                    </Route>
      </Switch> 
        </BrowserRouter>
    )
}

export default App; 
