//console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV == 'production') {
    module.exports = require('./store.configure.prod');
}else{
    module.exports = require('./store.configure.dev');
}