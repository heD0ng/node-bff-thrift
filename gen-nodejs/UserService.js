//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = require('./user_types');
//HELPER FUNCTIONS AND STRUCTURES

var UserService_addUser_args = function(args) {
  this.user = null;
  if (args) {
    if (args.user !== undefined && args.user !== null) {
      this.user = new ttypes.User(args.user);
    }
  }
};
UserService_addUser_args.prototype = {};
UserService_addUser_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.user = new ttypes.User();
        this.user.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_addUser_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_addUser_args');
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRUCT, 1);
    this.user.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserService_addUser_result = function(args) {
};
UserService_addUser_result.prototype = {};
UserService_addUser_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_addUser_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_addUser_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserService_getUser_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
UserService_getUser_args.prototype = {};
UserService_getUser_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_getUser_args.prototype.write = function(output) {
  output.writeStructBegin('UserService_getUser_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserService_getUser_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.User(args.success);
    }
  }
};
UserService_getUser_result.prototype = {};
UserService_getUser_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.User();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserService_getUser_result.prototype.write = function(output) {
  output.writeStructBegin('UserService_getUser_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UserServiceClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
UserServiceClient.prototype = {};
UserServiceClient.prototype.seqid = function() { return this._seqid; };
UserServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };

UserServiceClient.prototype.addUser = function(user, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_addUser(user);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addUser(user);
  }
};

UserServiceClient.prototype.send_addUser = function(user) {
  var output = new this.pClass(this.output);
  var params = {
    user: user
  };
  var args = new UserService_addUser_args(params);
  try {
    output.writeMessageBegin('addUser', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

UserServiceClient.prototype.recv_addUser = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_addUser_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};

UserServiceClient.prototype.getUser = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getUser(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getUser(id);
  }
};

UserServiceClient.prototype.send_getUser = function(id) {
  var output = new this.pClass(this.output);
  var params = {
    id: id
  };
  var args = new UserService_getUser_args(params);
  try {
    output.writeMessageBegin('getUser', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

UserServiceClient.prototype.recv_getUser = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new UserService_getUser_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getUser failed: unknown result');
};
var UserServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
UserServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
UserServiceProcessor.prototype.process_addUser = function(seqid, input, output) {
  var args = new UserService_addUser_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addUser.length === 1) {
    Q.fcall(this._handler.addUser.bind(this._handler),
      args.user
    ).then(function(result) {
      var result_obj = new UserService_addUser_result({success: result});
      output.writeMessageBegin("addUser", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("addUser", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.addUser(args.user, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new UserService_addUser_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("addUser", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("addUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
UserServiceProcessor.prototype.process_getUser = function(seqid, input, output) {
  var args = new UserService_getUser_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getUser.length === 1) {
    Q.fcall(this._handler.getUser.bind(this._handler),
      args.id
    ).then(function(result) {
      var result_obj = new UserService_getUser_result({success: result});
      output.writeMessageBegin("getUser", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("getUser", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.getUser(args.id, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new UserService_getUser_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getUser", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
