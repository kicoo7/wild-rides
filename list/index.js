const AWS = require('aws-sdk');

exports.lambda_handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    var message = "Hello World!1";

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            Output: message
        })
    });
};