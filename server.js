const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'})
})

app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server listening on port ${port}`) 
})