const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/clubs', (req, res) => {
    res.send([
        {
            'id' : 1,
            'logo' : 'https://placeimg.com/64/64/any',
            'name' : 'AnA',
            'department' : 'software',
            'nop' : 16
        },
        {
            'id' : 2,
            'logo' : 'https://placeimg.com/64/64/any',
            'name' : 'Apple:Pie',
            'department' : 'software',
            'nop' : 22
        },
        {
            'id' : 3,
            'logo' : 'https://placeimg.com/64/64/any',
            'name' : 'EDCAN',
            'department' : 'software',
            'nop' : 13
        }
    ])
})

app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server listening on port ${port}`) 
})