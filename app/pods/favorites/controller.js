import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FavoritesController extends Controller {
  @service favoritesSong;

  @action
  deleteFavorite(song) {
    this.favoritesSong.remove(song);
  }

  @action
  clearFavorites() {
    this.favoritesSong.empty();
  }
}
