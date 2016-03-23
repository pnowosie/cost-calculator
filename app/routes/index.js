import Ember from 'ember';

const Mediation = Ember.Object.extend({
      roomRentFee: 50.0,
      sessionFee: 50.0,
      litigationValue: 10000.0,
      grossRate: 1.23,
      participants: 2.0,
      valid: false,
      
      cost: Ember.computed('litigationValue', 'roomRentFee', 'sessionFee', 'grossRate', 'participants',
      function() {
        const grossRate = Number(this.get('grossRate')),
          litigationValue = Number(this.get('litigationValue')),
          roomRentFee = Number(this.get('roomRentFee')),
          sessionFee = Number(this.get('sessionFee')),
          participants = Number(this.get('participants')),
          onePercent = 0.01;
          
        return grossRate * (onePercent * litigationValue + roomRentFee + sessionFee) / participants; 
      })
    });

export default Ember.Route.extend({
  actions: {
    selectedParticipant(model, value) {
      model.set('participants', Number(value))
      console.log(value);
    }
  }, 
  model() {
    return Mediation.create();
  }

});
