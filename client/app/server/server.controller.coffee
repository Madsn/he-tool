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
    Server.update id: server._id
    $scope.servers[server._id] = server

  $scope.copyToClipboard = (contents) ->
    window.prompt("Copy to clipboard: Ctrl+C, Enter", contents)