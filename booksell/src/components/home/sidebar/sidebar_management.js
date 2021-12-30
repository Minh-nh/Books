import React, { Component } from 'react';
import './sidebar_management.css';
import { Link } from "react-router-dom"
import { FaBook } from 'react-icons/fa';
class SideBarManagement extends Component {
    setActive = (pros) => {
        this.setState({
            active: pros
        })
    }

    render() {
        return (
            <>
                <div>
                    <link rel="stylesheet" type="text/css" href="css/menu.css" />
                    <link rel="stylesheet" type="text/css" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
                    <nav className="main-menu">
                        <div style={{ height: '56px', backgroundColor: 'white', padding: '1rem' }}>
                            <Link to="/">
                                <FaBook style={{height:'3rem', width:'3rem', color:'green'}}/>
                            </Link>
                        </div>
                        <div />
                        <div className="scrollbar" id="style-1">
                            <ul>
                                <li onClick={() => this.setActive("PhuTung")}>
                                    <Link to="/admin/library_management">
                                        <i className="fa fa-book fa-lg" />
                                        <span className="nav-text">Quản lý sách</span>
                                    </Link>
                                </li>
                                <li onClick={() => this.setActive("DichVu")}>
                                    <Link to="/admin/author_management">
                                        <i className="fa fa-user fa-lg" />
                                        <span className="nav-text">Quản lý tác giả</span>
                                    </Link>
                                </li>
                                <li onClick={() => this.setActive("Xe")}>
                                    <Link to="/admin/publishing_house_management">
                                        <i className="fa fa-users fa-lg" />
                                        <span className="nav-text">Quản lý nhà xuất bản</span>
                                    </Link>
                                </li>
                                <li onClick={() => this.setActive("Xe")}>
                                    <Link to="/admin/borrowed_ticket_management">
                                        <i className="fa fa-file fa-lg" />
                                        <span className="nav-text">Quản lý phiếu mượn</span>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
export default SideBarManagement;