'use strict'

angular.module 'heToolApp'
.factory 'Server', ($resource) ->
  $resource '/api/servers/:id/:controller',
    id: '@_id'
  ,

    get:
      method: 'GET'
      params:
        id: 'me'
