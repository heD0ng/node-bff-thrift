const thrift = require('thrift');
const UserService = require('../gen-nodejs/UserService.js');

const users = {};
const server = thrift.createServer(UserService, {
    addUser: function (user, result) {
        users[user.id] = user
        console.log("[ADD_USER] add:", user, " current:", users)
        result(null)
    },
    getUser: function (id, result) {
        result(null, users[id])
    }
});

server.listen(3001);
console.log('server start');