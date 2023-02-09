const CustomApiError = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes')
const errorHandler = (err, req, res, next) =>{
    if (err instanceof CustomApiError) {
        res.status(err.statusCode).json({msg:err.message})    
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err: 'Something went wrong, please try again later'})
}
module.exports = errorHandler


