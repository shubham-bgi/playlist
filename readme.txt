For Backend Developer

1.1 Data processing 
- File fixPlaylist.js fixes the playlist.json file into fixedPlaylist.json

1.2 API (Using Express Js and fs)
- playlistAPI.js runs on - http://localhost:3000/
    /api - Retrieve the whole playlist

    /api/{index} - Retrieve song object by index
    example URL: http://localhost:3000/api/index?p=1

    /api/{title} - Retrieve song obect by title
    example URL: http://localhost:3000/api/title?s=Bad Romance

    /api/post/addstars - Upadates JSON with the star rating, searching by title 
    example URL: http://localhost:3000/api/post/addstars
    example body: {
        "title": "Back Home",
        "star_rating": "2"
    }