import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { empty } from '@ember/object/computed';
import { action } from '@ember/object';

export default class SongsBandSongsController extends Controller {
  @tracked isAddingSong = false;
  @tracked selectSong = {
    title: '',
    rating: 0,
  };

  @empty('selectSong.title') isAddButtonDisabled;

  @action
  addingSong() {
    this.isAddingSong = true;
  }

  @action
  async addSong(e) {
    e.preventDefault();
    this.isAddingSong = false;
    let record = this.store.createRecord('song', {
      title: this.selectSong.title,
      rating: this.selectSong.rating,
      band: this.model,
    });
    await record.save();
    this.selectSong = {
      title: '',
      rating: 0,
    };
  }

  @action
  updateRating(params) {
    // Action appelé au click du bouton dans le component (DDAU (Data Down Action Up))
    const { song, rating } = params;
    song.set('rating', rating);
    song.save();
  }

  @action
  cancelSong() {
    this.isAddingSong = false;
    this.selectSong = {
      title: '',
      rating: 0,
    };
  }
}
