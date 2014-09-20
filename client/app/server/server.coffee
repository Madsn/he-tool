'use strict'

angular.module 'heToolApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'server',
    url: '/server'
    templateUrl: 'app/server/server.html'
    controller: 'ServerCtrl'
