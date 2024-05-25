const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    key = publicKey.slice(1);
    hash = keccak256(key);
    return hash.slice(-20);
}

module.exports = getAddress;