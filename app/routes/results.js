import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=eada0edf6e4144d0848f0ead7ac9c15b&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON){
      var legislators = [];
      responseJSON.results.forEach(function(legislator){
        legislators.push(legislator);
      });
      return legislators;
    });
  }
});
