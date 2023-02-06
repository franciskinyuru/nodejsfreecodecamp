const notFound =(req, res) => res.status(404).send('Route does note exists')
module.exports = notFound