const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    hashed = keccak256(utf8ToBytes(message));
    return hashed;
}

module.exports = hashMessage;