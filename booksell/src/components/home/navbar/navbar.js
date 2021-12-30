import React, { Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { FaUser, FaBook, FaClipboard } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
import SearchBar from '../searchbar/search_bar';
import axios from 'axios';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            librarian: {},
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products',
            data: null
        }).then(res => {
            this.setState({
                products: res.data
            });
        }).catch(err => {
            console.log(err);
        })
        var librarian = reactLocalStorage.getObject('librarian');
        this.setState({
            librarian
        })
    }

    onLogout() {
        reactLocalStorage.setObject('librarian', {});
        reactLocalStorage.setObject('cart', []);
    }

    render() {
        var { products, librarian } = this.state
        return (
            <header style={{ backgroundColor: '#01a14b' }} className="header" >
                <div className="topbar" >
                    <div className="row" >
                        <div className="col-sm-7 col-xs-12">
                            <div className="topbar-nav" >
                                <span className="topbar-card">Thư viện BookLy</span>
                            </div>
                        </div>
                        <div className="col-sm-5 col-xs-12">
                            <div className="topbar-info">
                                <div className="taikhoan" style={{ width: '35rem' }}>
                                    {librarian.name ? <Row >
                                        <Col><p>{librarian.name}</p></Col>
                                        <Col><Link to="/login" onClick={() => this.onLogout()}>Đăng Xuất </Link></Col>
                                    </Row> : <Link to="/login">Đăng nhập </Link>}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="header-1">
                    <Link to="/" className="logo"> <FaBook /> BookLy </Link>
                    <SearchBar placeholder="Enter a Book Name..." data={products} />
                    <div class="icons" style={{ display: 'flex;' }}>
                        {librarian.name ?
                            <Link to="/cart"><FaClipboard /></Link> : null}
                        {librarian.name ?
                            <Link to="/admin/library_management"><FaUser /></Link> : null}
                    </div>
                </div>
                <div className="header-2">
                    <nav className="navbar" style={{ paddingLeft: '90px', paddingRight: '100px', marginTop: '1.2rem' }}>
                        <Link to="/" style={{ color: 'white', fontSize: '18px' }}>Trang chủ</Link>
                        <Link to="/products" style={{ color: 'white', fontSize: '18px' }}>Sách</Link>
                        <Link to="/" style={{ color: 'white', fontSize: '18px' }}>Thông tin</Link>
                        <Link to="/" style={{ color: 'white', fontSize: '18px' }}>Liên hệ</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar
