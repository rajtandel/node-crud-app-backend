var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message, url);
}

// module.exports.logMessage = log;

// Alternative way to export a single function
module.exports = log;