/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Servers = require('./server.model.js');

exports.register = function(socket) {
  Servers.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Servers.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('servers:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('servers:remove', doc);
}