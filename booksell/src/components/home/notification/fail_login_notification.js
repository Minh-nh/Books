import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
class FailLoginNotification extends Component {
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

    render() {
        var { show } = this.props
        return (
            <>
                <Button onClick={this.handleShow} style={{ backgroundColor: 'black', border: '0px solid black' }} >
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bạn nhập sai tài khoản hoặc mật khẩu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button onClick={this.handleClose} variant="secondary" style={{ float: 'right', marginBottom: '1rem', marginLeft: '1rem' }}>Xác nhận</Button>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}
export default FailLoginNotification;