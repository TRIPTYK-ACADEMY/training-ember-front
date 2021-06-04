import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

export default class BandsRoute extends Route {
  model() {
    return A([
      EmberObject.create({
        title: 'Linkin Park',
      }),
      EmberObject.create({
        title: 'Pink Floyd',
      }),
      EmberObject.create({
        title: 'Radiohead',
      }),
    ]);
  }
}
