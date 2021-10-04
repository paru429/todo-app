module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:3000');
    res.header('Access-Control-Allow-Methods','POST, GET, OPTIONS, DELETE, PUT');
    next();
}