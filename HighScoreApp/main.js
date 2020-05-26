const express = require('express');
const cors = require('cors')
const path = require('path');

const app = express();
app.use(cors());

const scores = [];

//main page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// gets all scores
app.get("/scores",(req,res)=>{
    res.send(JSON.stringify(scores))
});

//url called to add score
app.get("/scores/:name/:points", (req,res)=>{
    
    let name = req.params.name;
    let points = Number(req.params.points);
    let score = {name:name, points:points};

    scores.push(score);

    
    let compare = (a, b) => {
        if (a.points > b.points) return -1;
        if (b.points > a.points) return 1;
        return 0;
      }
    
    scores.sort(compare);

    res.send(JSON.stringify(score));
});

app.listen(8000, () =>{console.log("Started my High Score server")});