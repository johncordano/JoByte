import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, name: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/signup', {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log('response from post rqst:',response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/dashboard'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="">
					<div className="">
						<label className="" htmlFor="name">Name</label>
					</div>
					<div className="">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="">
					<div className="">
						<label className="" htmlFor="password">Email: </label>
					</div>
					<div className="">
						<input className="form-input"
							placeholder="email"
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="">
					<div className="">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="">
					<div className=""></div>
					<button
						className=""
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)
}
}

export default Signup
