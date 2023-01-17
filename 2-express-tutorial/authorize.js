const authorize = (req, res, next)=>{
    console.log('authorize');
    const {user} = req.query;
    if(user === 'Francis'){
        req.user = {name: 'Francis', id:45}
        next()
    }
    else{
        res.status(401).send('Authorized')
        //next()
    }

}
module.exports = authorize