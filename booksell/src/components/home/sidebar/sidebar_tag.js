import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./sidebar_tag.css";


class SideBarTag extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tags: [],
    //     }
    // }

    // componentDidMount() {
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:5000/api/products',
    //         data: null
    //     }).then(res => {
    //         console.log(res);
    //         this.setState({
    //             tags: res.data.tag
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    render() {
        return (
            <ul>
                {/* <li><Link to="#home">Lightnovel<Link/></li>
                <li><Link to="#news">Manga<Link/></li>
                <li><Link to="#contact">Isekai<Link/></li>
                <li><Link to="#about">Action<Link/></li> */}
            </ul>
        );
    }
};

export default SideBarTag