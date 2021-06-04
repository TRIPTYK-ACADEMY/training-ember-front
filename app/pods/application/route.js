import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

export default class ApplicationRoute extends Route {
  model() {
    return A([
      EmberObject.create({
        title: 'Numb',
        band: 'Linkin Park',
        rating: 5,
      }),
      EmberObject.create({
        title: 'Time',
        band: 'Pink Floyd',
        rating: 4,
      }),
      EmberObject.create({
        title: 'Karma Police',
        band: 'Radiohead',
        rating: 2,
      }),
    ]);
  }
}
