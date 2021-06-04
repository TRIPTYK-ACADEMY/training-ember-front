import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BandsController extends Controller {
  @tracked isAddingBand = false;
  @tracked selectBand = {
    name: '',
  };

  @action
  addingBand() {
    this.isAddingBand = true;
  }

  @action
  async addBand(e) {
    e.preventDefault();
    let record = this.store.createRecord('band', this.selectBand);
    await record.save();
    this.isAddingBand = false;
    this.selectBand = {
      name: '',
    };
  }
}
