import React from 'react';
import './Style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header" >
                <div className="topbar" >
                    <div className="row" >
                        <div className="col-sm-7 col-xs-12">
                            <div className="topbar-nav" >
                                <span className="topbar-card">Công ty Cổ phần Xuất bản và Truyền thông IPM</span>
                            </div>
                        </div>
                        <div className="col-sm-5 col-xs-12">
                            <div className="topbar-info">
                            <div className="taikhoan">
                                <a href="#" className="link" title="Đăng nhập">Đăng nhập </a>
                                <span className="sep"> | </span>
                                <a href="#" className="link" title="Đăng ký"> Đăng ký</a>      
                            </div>
                    </div>
                        </div>
                    </div>
                   
                </div>
                <div class="header-1">
                    <a href="#" className="logo"> <i class="fas fa-book"></i> bookly </a>
                    <form action="" class="search-form">
                        <input type="search" name="" placeholder="search here..." id="search-box"/>
                        <label for="search-box" class="fas fa-search"></label>
                    </form>
                    <div class="icons">
                        <div id="search-btn" class="fas fa-search"></div>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <div id="login-btn" class="fas fa-user"></div>
                    </div>
                </div>
                <div className="header-2">
                    <nav className="navbar"  style={{paddingLeft: '90px', paddingRight: '100px'}}>
                        <Link Link to={`/`}>Trang chủ</Link>
                        <Link Link to={`/products`}>Sản phẩm</Link>
                        <Link Link to={`/`}>Tin tức</Link>
                        <Link Link to={`/`}>Liên hệ</Link>
                    </nav>
                </div>    
    </header>
    )
}

export default Navbar
