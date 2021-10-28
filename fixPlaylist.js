const playlist = require('./playlist.json');
const fs = require('fs');
const playlistKeys = Object.keys(playlist);
let fixedPlaylist = [];

for(let i = 0; i < Object.keys(playlist.id).length ; i++) {
    let ob = {};
    for(let j = 0; j < playlistKeys.length ; j++) {
        ob[playlistKeys[j]] = playlist[playlistKeys[j]][i];
    }
    fixedPlaylist.push(ob);
}

//Save it as a Json file
let json = JSON.stringify(fixedPlaylist);
fs.writeFile('fixedPlaylist.json', json, function(err, result) {
    if(err) console.log('error', err);
});