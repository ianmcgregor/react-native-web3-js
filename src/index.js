global.Buffer = Buffer;

global.btoa = function(str) {
    return new Buffer(str, 'binary').toString('base64');
};

global.atob = function(b64Encoded) {
    return new Buffer(b64Encoded, 'base64').toString('binary');
};

export const Web3EthPersonal = require('web3-eth-personal');
export default require('web3');
