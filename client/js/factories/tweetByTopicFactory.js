angular.module('tweet_by_topic', []).factory('Data', function($http, $window) {

  const token = $window.localStorage.getItem('token');

  // uncomment if you want to run locally
  // var methods = {
  //   getTweetsByTopic: function(topic) {
  //     return $http.post('http://localhost:8080/api/tweets_by_topic', topic, {
  //       headers: {
  //         'Authorization': 'Bearer ' + token
  //       }
  //     });
  //   },
  // };

  // uncomment if you want to run on heroku
  var methods = {
    getTweetsByTopic: function(topic) {
      return $http.post('https://glacial-gorge-85229.herokuapp.com/api/tweets_by_topic', topic, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
    },
  };
  return methods;
});
