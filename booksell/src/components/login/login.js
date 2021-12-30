import React, { Component } from 'react'
import { Form, InputGroup, Container, Card, FormControl, Button } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import NavBar from '../home/navbar/navbar';
import axios from "axios";
import { reactLocalStorage } from 'reactjs-localstorage';
import { withRouter } from 'react-router-dom';
import FailLoginNotification from '../home/notification/fail_login_notification';
class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			show: false
		}
	}

	redirectToHome = () => {
		const { history } = this.props;
		var { username, password } = this.state;
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/librarians/search?username=' + username + '&password=' + password,
			data: null
		}).then(res => {
			if (res.data === null) {
				this.setState({
					show: true
				})
			} else {
				var person = {
					_id: res.data._id,
					name: res.data.name
				}
				reactLocalStorage.setObject('librarian', person);
				if (history) history.push('/');
			}
		}).catch(err => {
			console.log(err);
		})

	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]: value
		})
	}

	onShow = () => {
		this.setState({
			show: false
		})
	}

	render() {
		const { history } = this.props;
		var { show } = this.state
		return (
			(history)
				? <div>
					<NavBar />
					<Container>
						<Card.Title style={{ fontSize: '25px' }}>ĐĂNG NHẬP</Card.Title>
						<div className="form" style={{ marginTop: "13rem" }}>
							<Card style={{ width: "40rem", margin: 'auto', padding: '2rem', boxShadow: '3px 3px #e6e6e6' }}>
								<div>
									<Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
										Username
									</Form.Label>
									<InputGroup className="mb-2">
										<InputGroup.Text><FaUser style={{ fontSize: '20px' }} /></InputGroup.Text>
										<FormControl style={{ fontSize: '20px' }} name="username" placeholder="Tên đăng nhập" onChange={this.onChange} />
									</InputGroup>
								</div>
								<div>
									<Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
										Username
									</Form.Label>
									<InputGroup className="mb-2">
										<InputGroup.Text><FaLock style={{ fontSize: '20px' }} /></InputGroup.Text>
										<FormControl style={{ fontSize: '20px' }} name="password" type="password" placeholder="Mật khẩu" onChange={this.onChange} />
									</InputGroup>
								</div>
								<Button style={{ width: '16rem', height: "4rem", paddingTop: '2px', backgroundColor: "#01a14b", fontSize: '20px' }} onClick={this.redirectToHome}>Đăng nhập</Button>
								<FailLoginNotification show={show} handleClose={this.onShow} />
							</Card>
						</div>
					</Container>
				</div>
				: null
		)
	}
}
export default withRouter(Login);