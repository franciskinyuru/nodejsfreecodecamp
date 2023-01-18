const express = require('express')
const router = express.Router();

router.get('/',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/methods-public/index.html'))
})

module.exports = router