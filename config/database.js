// Generated by CoffeeScript 1.10.0
(function() {
  var Q, db, oio, orchestrate;

  oio = require('orchestrate');

  oio.ApiEndPoint = 'api.aws-eu-west-1.orchestrate.io';

  orchestrate = oio('11eff33e-251f-46ae-81c1-fa0b0472789f');

  db = {};

  Q = require('q');

  orchestrate.ping().fail(function(err) {
    console.log('Database unreachable');
  });

  db.list = function(collection) {
    var deferred;
    deferred = Q.defer();
    orchestrate.search('os', '*').then(function(result) {
      var key, os;
      os = [];
      for (key in result.body.results) {
        key = key;
        result.body.results[key].value.id = result.body.results[key].path.key;
        os.push(result.body.results[key].value);
      }
      deferred.resolve(os);
    }).fail(function(error) {
      console.log('Error retriving the os list');
      deferrend.reject(error);
    });
    return deferred.promise;
  };

  db.post = function(collection, object) {
    var deferred;
    deferred = Q.defer();
    orchestrate.post(collection, object).then(function(result) {
      q.resolve(result);
    }).fail(function(err) {
      q.reject(err);
    });
    return deferred.promise;
  };

  db.put = function(collection, key, object) {
    var deferred;
    deferred = Q.defer();
    orchestrate.put(collection, key, object).then(function(result) {
      q.resolve(result);
    }).fail(function(err) {
      q.reject(err);
    });
    return deferred.promise;
  };

  db["delete"] = function(collection, key) {
    var deferred;
    deferred = Q.defer();
    console.log(key);
    orchestrate.remove(collection, key, true).then(function(result) {
      q.resolve(result);
    }).fail(function(err) {
      q.reject(err);
    });
    return deferred.promise;
  };

  module.exports = db;

}).call(this);
