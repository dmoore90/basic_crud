import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		}

	}

	componentDidMount() {
		fetch('http://localhost:3000')
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					return this.props.history.push('/');
				}
			})
			.then(posts => {
				this.setState({ posts });
			})
	}

	render() {
		return (
			<div>
				<div>
					<h1>Create Post</h1>
				</div>
				<div>
					<Link to={'./create'}><button>create post</button></Link>
				</div>

				<div>
					{this.state.posts.map(post =>
					<Link to={`./update/${post.id}`}> 
						<li key={post.id}>{ post.name }</li>
					</Link>
					)}
				</div>
			</div>
		)
	}
}

export default Home;