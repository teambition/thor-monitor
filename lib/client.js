// Generated by CoffeeScript 1.6.3
(function() {
  var axon, client, config, req, rpc;

  axon = require('axon');

  req = axon.socket('req');

  rpc = require('axon-rpc');

  config = require('./config');

  client = new rpc.Client(req);

  req.connect(config.server);

  module.exports = client;

}).call(this);
