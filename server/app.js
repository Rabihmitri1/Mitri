const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/team', function (req, res) {
    var data = [];
    data.push({name:"Joseph Sarkis",position:"CTO"});
    data.push({name:"Mhmd Mhmd",position:"Architect"});
    data.push({name:"Noura",position:"Graphic"});
    res.send(data)

  })
 
app.listen(3000)