const express = require('express');
const fixedPlaylist = require('./fixedPlaylist.json');
const app = express();
const port = 3000;
const fs = require('fs');
app.listen(port, () => console.log(`Server started!`));
app.use(express.json());

app.get('/api', (req, res) => {
    res.json(fixedPlaylist);
});


app.get('/api/index', (req, res) => {
    let page = parseInt(req.query.p);
    res.json(fixedPlaylist[page-1]);
});

app.get('/api/title', (req, res) => {
    let title = req.query.s;
    res.json(fixedPlaylist.filter( obj => {
        return obj.title === title;
    }))
})

app.post('/api/post/addstars', (req, res) => {
    let jsonData = req.body;
    fixedPlaylist.map( song => {
        if(song.title === jsonData.title){
            //console.log(song);
            song["star_rating"] = jsonData.star_rating;
            return song;
        } else {
        return song;
        }
    })
    fs.writeFile('./fixedPlaylist.json', JSON.stringify(fixedPlaylist), function(err, result) {
        if(err) console.log('error', err);
    });
    res.send('OK');
})