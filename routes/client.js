const router = require("express").Router();
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'))
})  

router.get('/css-initial', (req,res)=>{
    res.sendFile(path.resolve(__dirname+'/build/static/css/2.b28305bc.chunk.css'))
})

router.get('/css-final', (req,res)=>{
    res.sendFile(path.resolve(__dirname+'/build/static/css/main.b1eed2c3.chunk.css'))
})

router.get('/js-inital', (req,res)=>{
    res.sendFile(path.resolve(__dirname+'/static/js/2.9de7726f.chunk.js'))
})

module.exports = router;