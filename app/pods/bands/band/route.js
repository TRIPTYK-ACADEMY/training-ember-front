import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
  model(params) {
    return this.store.findRecord('band', params.band_id, {
      include: 'songs',
    });
  }
}
