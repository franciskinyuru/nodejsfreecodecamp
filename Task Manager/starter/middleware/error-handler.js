const {CustomApiError} = require('../errors/custom-error')
const errorHandler = (err, req, res, next) =>{
    if (err instanceof CustomApiError) {
        res.status(err.statusCode).json({msg:err.message})    
    }
    return res.status(500).json({err: 'SOmething went wrong, please try again later'})
}
module.exports = errorHandler