const express = require('express');
const path = require('path');

// Port number to be run
const PORT = process.env.PORT || 4600;

const app = express();

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/posts', posts);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/visualApp/index.html'));
});

app.listen(PORT, (req, res) => {
    console.log('server running on port: ', PORT);
});