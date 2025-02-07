// Create web server
// Create comments array
// Create a GET /comments route that returns the comments array
// Create a POST /comments route that adds a new comment to the comments array
// Create a DELETE /comments route that deletes a comment from the comments array

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.json({message: 'Comment deleted'});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Test with Postman
// GET localhost:3000/comments
// POST localhost:3000/comments
// DELETE localhost:3000/comments/0