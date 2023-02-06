const products = require('../models/products')
const Product = require('../models/products')

const getAllProductsStatic = async (req, res) =>{
    const products = await Product.find({price:{$gt:30}})
    .sort('price')
    .select('name price').limit(10)
    .skip(3)
    res.status(200).json({ products, nbHits: products.length})
}



const getAllProducts = async (req, res) =>{
    const {featured, company, name,sort, fields, numericFilters} = req.query
    const queryObject = {}
    if (featured){
        queryObject.featured=featured === 'true'?true:false
    }
    if(company){
        queryObject.company=company
    }
    if (name) {
        queryObject.name = {$regex:name,$options:'i'}
    }
    if(numericFilters){
        console.log(numericFilters);
    }
    const page =  Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit;
    // adding sorting and geting specific fields also skip limit and page
    let result = await Product
    .find(queryObject)
    .select(fields?fields.split(',').join(' '):'')
    .sort(sort?sort.split(',').join(' '):'')
    .skip(skip)
    .limit(limit)    
    const products = await result
    res.status(200).json({ products, nbHits: products.length})
}


module.exports = {getAllProducts, getAllProductsStatic}