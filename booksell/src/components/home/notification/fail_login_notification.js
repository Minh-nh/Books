import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
class FailLoginNotification extends Component {

    handleClose = () => {
        this.props.handleClose()
    }

    render() {
        var { show } = this.props
        return (
            <>
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