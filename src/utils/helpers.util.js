const apiConfig = require('../config/api.config')

const generateRandomString = function (length) {
    let /** {string | undefined} */ randomString = '';
    const /** {string} */ possibleLetters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < length - 1; i++) {
        const /*** {number} */ randomIndex = Math.floor(Math.random() *
        possibleLetters.length);
        randomString += possibleLetters[randomIndex]
    }

    return randomString;
}
    module.exports = {
        generateRandomString
}