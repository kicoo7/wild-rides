const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({});
const { UNICORNS_TABLE_NAME } = process.env;

exports.lambda_handler = async (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    try {
        const params = {
            TableName: UNICORNS_TABLE_NAME
        };

        const unicorns = await documentClient.scan(params).promise();

        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                Output: 'Test'
            })
        });
    }
    catch (err) {
        console.log("\n Error:", err);
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                Output: "Something bad happened."
            })
        });
    }

};