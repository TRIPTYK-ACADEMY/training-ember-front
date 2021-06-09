import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SongsController extends Controller {
  queryParams = ['name'];
  @tracked name = 'asc'; // J'ai défini plus haut une queryParams (name qui est une propriété sur le controller) mais ici je définis une valeur par défaut à ma queryParams et je lui ajouté un décorateur tracked pour qu'elle soit suivi et qu'elle mette à jour le template quand elle est modifié

  @service favoritesSong;

  get direction() {
    return this.model.query == 'asc' ? 'desc' : 'asc';
  }

  get filteredSong() {
    let songs = this.model.songs;
    if (this.name === 'asc') {
      return songs.sortBy('title');
    } else {
      return songs.sortBy('title').reverse();
    }
  }

  @action
  deleteSong(song) {
    this.favoritesSong.remove(song);
    song.destroyRecord();
  }

  @action
  toggleFavorites(song) {
    if (this.favoritesSong.items.includes(song)) {
      this.favoritesSong.remove(song);
    } else {
      this.favoritesSong.add(song);
    }
  }
}
