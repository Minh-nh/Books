import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
class DeletePublishingHouseNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    onDeteleItem(data) {
        this.handleClose();
        axios({
            method: 'DELETE',
            url: 'http://localhost:5000/api/publishing_houses/delete/' + data,
            data: null
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        window.location.reload();
    }

    render() {
        var { show } = this.state
        var { data } = this.props
        return (
            <>
                <Button onClick={this.handleShow} style={{ backgroundColor: 'black', border: '0px solid black' }} >
                    <FaTrash />
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bạn có muốn xoá</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button onClick={this.handleClose} variant="secondary" style={{ float: 'right', marginBottom: '1rem', marginLeft: '1rem' }}>Không</Button>
                        <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }} onClick={() => this.onDeteleItem(data)}>Xác nhận</Button>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}
export default DeletePublishingHouseNotification;