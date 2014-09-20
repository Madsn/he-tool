'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ServerSchema = new Schema({
  nick: { type: String, default: ""},
  ip: {1:Number,2:Number,3:Number,4:Number},
  hasher: { type: Number, default: 0 },
  npc: { type: Boolean, default: false }
});

module.exports = mongoose.model('Server', ServerSchema);