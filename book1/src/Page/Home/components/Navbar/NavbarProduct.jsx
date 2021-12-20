import React from 'react';
import { Link } from "react-router-dom";

const NavbarProduct = () => {
    return (
        <header className="header" style={{marginTop:'50px'}}>
            <div className="header-2">
                    <nav class="nav"  style={{position:'absolute', left:'40%'}}>
                        <Link Link to={`/products`} style={{fontSize:'30px'}}>Sách mới</Link>
                        <Link Link to={`/`}  style={{fontSize:'30px', marginLeft:'150px'}}>Sách bán chạy</Link>
                    </nav>
                </div>  
        </header>   
    )
}

export default NavbarProduct
