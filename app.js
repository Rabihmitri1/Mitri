const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.get('/', function (req,res) {
    res.send('Hello World')
})

app.get('/team', function (req,res) {
    var data = [];
    data.push({name:"Rabih Mitri",position:"Web Developer" , url:"https://scontent.fbey5-2.fna.fbcdn.net/v/t1.6435-9/87990765_2604292406363761_5131218795993497600_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XWiPID7M3CkAX93w7ic&_nc_ht=scontent.fbey5-2.fna&oh=f38db5decee826db15bfcca463f22bab&oe=61B90FD3"});
    data.push({name:"Edgard Roumi",position:"Project Manager" , url:"https://scontent.fbey5-2.fna.fbcdn.net/v/t1.6435-9/189552386_1200310377081701_4430480058954564466_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=vIZkSL-vS3wAX_jbCaS&_nc_ht=scontent.fbey5-2.fna&oh=5990f85e35ca6b025ac5acaec029f804&oe=61B8C894"});
    res.send(data)
})

