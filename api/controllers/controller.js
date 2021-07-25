const Post = require('../models/Post');

exports.getPosts = (req, res) => {
	Post.findAll()
	.then(posts => {
		return res.status(200).json(posts);
	})
	.catch(err => { 
		console.log(err) 
	})
}

exports.createPost = (req, res) => {
	const name = req.body.name;
	Post.create({
		name: name
	})
	.then(result => {
		return res.redirect('/');
	})
	.catch(err => {
		console.log(err)
	});
}

exports.getPost = (req, res) => {
	Post.findByPk(req.params.id)
	.then(post => {
		return res.json(post);
	})
	.catch(err => {
		console.log(err);
	})
}

exports.updatePost = (req, res) => {
	Post.findByPk(req.body.id)
	.then(post => {
		post.name = req.body.name;
		return post.save();
	})
	.then(result => {
		res.redirect('/');
	})
	.catch(err => {
		console.log(err);
	})
}

exports.deletePost = (req, res) => {
	Post.destroy({ where: { id: req.body.id } })
	.then(result => {
		return res.redirect('/');
	})
	.catch(err => { 
		console.log(err);
	})
}