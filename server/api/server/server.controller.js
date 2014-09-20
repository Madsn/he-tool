'use strict';

var _ = require('lodash');
var Server = require('./server.model.js');

// Get list of serverss
exports.index = function(req, res) {
  Server.find(function (err, serverss) {
    if(err) { return handleError(res, err); }
    return res.json(200, serverss);
  });
};

// Get a single server
exports.show = function(req, res) {
  Server.findById(req.params.id, function (err, servers) {
    if(err) { return handleError(res, err); }
    if(!servers) { return res.send(404); }
    return res.json(servers);
  });
};

// Creates a new server in the DB.
exports.create = function(req, res) {
  Server.create(req.body, function(err, servers) {
    if(err) { return handleError(res, err); }
    return res.json(201, servers);
  });
};

// Updates an existing server in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Server.findById(req.params.id, function (err, servers) {
    if (err) { return handleError(res, err); }
    if(!servers) { return res.send(404); }
    var updated = _.merge(servers, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, servers);
    });
  });
};

// Deletes a server from the DB.
exports.destroy = function(req, res) {
  Server.findById(req.params.id, function (err, servers) {
    if(err) { return handleError(res, err); }
    if(!servers) { return res.send(404); }
    servers.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}