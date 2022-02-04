const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){

    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/2',function(req,res){

    res.sendFile(path.join(__dirname+'/index2.html'));
})

app.use('/',router);
app.listen(process.env.port || 3000);

console.log('Rodando');