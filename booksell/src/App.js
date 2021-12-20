import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import LibaryManagement from './components/admin/libary_management';

class App extends Component {
    render() {
        return (
            <Router>
 
                    <div className="App">
                        {/* {this.showContentMenus(routes)} */}
                        <LibaryManagement>
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
                        </LibaryManagement>
                    </div>             
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        render={route.render}
                    />
                );
            });
        }
        return 
        <Routes>{result}</Routes>;
    }

}

export default App;