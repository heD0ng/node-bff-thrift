const thrift = require('thrift');
const UserService = require('../gen-nodejs/UserService.js');
const UserTypes = require('../gen-nodejs/user_types');

const connection = thrift.createConnection('localhost', 3001, {connect_timeout:3000});
const client = thrift.createClient(UserService, connection);

connection.on('error', function (err) {
    console.error(err);
});

function addUser(user) {
    client.addUser(user, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("user added", user.id);
        }
    });
}

function getUser(userId) {
    client.getUser(userId, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log("get user", response);
        }
    })
}

const user = new UserTypes.User({
    id: '2',
    name: "hd",
    age: 22
});

addUser(user)
if(getUser('2')) {
    getUser('2')
}
