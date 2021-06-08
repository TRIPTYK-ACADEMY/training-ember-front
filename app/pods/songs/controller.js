import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SongsController extends Controller {
  @service favoritesSong;

  @action
  deleteSong(song) {
    this.favoritesSong.remove(song);
    song.destroyRecord();
  }

  @action
  addFavorites(song) {
    this.favoritesSong.add(song);
  }
}
