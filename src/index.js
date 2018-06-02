global.Buffer = Buffer;

global.btoa = function(str) {
    return new Buffer(str, 'binary').toString('base64');
};

global.atob = function(b64Encoded) {
    return new Buffer(b64Encoded, 'base64').toString('binary');
};

module.exports = require('web3');
