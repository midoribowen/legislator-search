import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?congress=114&sponsor_id=' + params.bioguideId + '&apikey=eada0edf6e4144d0848f0ead7ac9c15b';
    return Ember.$.getJSON(url).then(function(responseJSON){
      var bills = [];
      responseJSON.results.forEach(function(bill){
        bills.push(bill);
      });
      return bills;
    });
  },
});
