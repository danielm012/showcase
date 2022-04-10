const express = require('express');
const router = express.Router();

const axios = require('axios');

const postApi = 'https://jsonplaceholder.typicode.com';
// Get || Post


   router.get('/:n', (req, res) => {
    var n = req.params.n;
    console.log(n);
       axios.get(`${postApi}/posts/`+n).then(post=> {
           console.log(post.data);
            res.send(post.data);
               
       }).catch(function(error) {
       res.send('<h1> Invalid Input! </h1>');
    });
   });

module.exports = router;