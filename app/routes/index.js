import Ember from 'ember';

export default Ember.Route.extend({

    page: 0,
    limit: 10,

    model(){
        return this.store.findAll('product');
    },

    afterModel(){
        this._fetchData();
    },

    _fetchData(){
        this.page++;

        let moreData = fetch('https://api.bolius.dk/husets-kalender/v2/products/?page='+this.page+'&limit=' + this.limit)
            .then(response => {
                if(response.ok){
                    return response.json()
                } else {
                    console.warn('Data not OK', response);
                    return;
                }
            })
            .then(data => {
                this.store.push(data);

                if(data.data.length === this.limit){
                    console.log('Load more data...', data.data.length)
                    this._fetchData();
                } else {
                    console.log('Don\'t load more data...', data.data.length)
                }
            })
            .catch(err => console.error('Error: ', err));
    }
});
