import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { empty } from '@ember/object/computed';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BandsController extends Controller {
  @service router;

  @tracked isAddingBand = false;
  @tracked selectBand = {
    name: '',
  };

  @empty('selectBand.name') isAddButtonDisabled;

  @action
  addingBand() {
    this.isAddingBand = true;
  }

  @action
  async addBand(e) {
    e.preventDefault();
    this.isAddingBand = false;
    let record = this.store.createRecord('band', this.selectBand);
    await record.save();
    this.selectBand = {
      name: '',
    };
    this.router.transitionTo('bands.band.songs', record.id);
  }

  @action
  cancelBand() {
    this.isAddingBand = false;
    this.selectBand = {
      name: '',
    };
  }
}
