'use strict'

angular.module 'heToolApp'
.controller 'ServerCtrl', ($scope, $http, Auth, Server) ->

  $http.get '/api/servers'
  .success (servers) ->
    $scope.servers = servers

  $scope.delete = (server) ->
    Server.remove id: server._id
    _.remove $scope.servers, server

  $scope.ipToStr = (ip) ->
    return ip[1] + "." + ip[2] + "." + ip[3] + "." + ip[4]

  $scope.update = (server) ->
    $http.put '/api/servers/' + server._id,
      nick: server.nick
      ip: server.ip
      npc: server.npc
      hasher: server.hasher

  $scope.changeHasher = (server, inc) ->
    server.hasher = (server.hasher*10 + inc)/10
    console.log(server.hasher)
    if (server.hasher < 1)
      server.hasher = 1

  $scope.copyToClipboard = (contents) ->
    window.prompt("Copy to clipboard: Ctrl+C, Enter", contents)
