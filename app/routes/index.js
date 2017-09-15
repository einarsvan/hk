import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        return [{name:'Einar'},{name:'Gudny'},{name:'Ella'},{name:'Viktor'}];
    }
});
