import Ember from 'ember';

const Mediation = Ember.Object.extend({
      roomRentFee: 50.0,
      sessionFee: 50.0,
      litigationValue: 10000.0,
      grossRate: 1.23,
      valid: false,
      
      cost: Ember.computed('litigationValue', 'roomRentFee', 'sessionFee', 'grossRate', function() {
        const grossRate = Number(this.get('grossRate')),
          litigationValue = Number(this.get('litigationValue')),
          roomRentFee = Number(this.get('roomRentFee')),
          sessionFee = Number(this.get('sessionFee')),
          participants = 2.0,
          onePercent = 0.01;
          
        return grossRate * (onePercent * litigationValue + roomRentFee + sessionFee) / participants; 
      })
    });

export default Ember.Route.extend({
  model() {
    return Mediation.create();
  }
});
