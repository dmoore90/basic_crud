import React, { Component } from 'react';

class Create extends Component {
	constructor() {
		super();
		this.state = {
			name: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { value, name } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:3000', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (res.status === 200) {
				return this.props.history.push('/')
			} else {
				const error = new Error(res.error);
				throw error;
			}
		})
		.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<div>
					<h1>Create Post</h1>
				</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>name:</label>
						<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
						<input type="submit" value="submit" />
					</form>
				</div>
			</div>
		)
	}
}

export default Create;