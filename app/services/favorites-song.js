import Service from '@ember/service';
import { A } from '@ember/array';

export default class FavoritesSongService extends Service {
  items = A([]);

  add(item) {
    this.items.pushObject(item);
    this.items = this.items.uniq();
  }

  remove(item) {
    this.items.removeObject(item);
  }

  empty() {
    this.items.clear();
  }
}
