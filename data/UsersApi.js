var ADODB = require('node-adodb');

var users=[];

// Connect to the MS Access DB
// Only the jet drivers worked for me. :-(
var connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=data\\sample.mdb;');

var UsersApi = {
    getAllUsers: function(callback) {
        connection.query('SELECT * FROM [users]')
        .then(data => {
            // Display formatted JSON data
            console.log('Async Sending Response back to router: '+JSON.stringify(data,null,1));
            callback(null, data);
        })
        .catch(error => {
            console.error('Error occured while accessing database.');
            callback(error, null);
        });
    }
};

module.exports = UsersApi;