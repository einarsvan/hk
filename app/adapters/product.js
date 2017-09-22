import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api.bolius.dk/husets-kalender',
    namespace: 'v2',
    urlForFindAll(modelName, snapshot){
        let baseUrl = this.buildURL(modelName);
        return `${baseUrl}/?page=0&limit=10`;
    }
});
