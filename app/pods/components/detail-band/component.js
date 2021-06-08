import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DetailBandComponent extends Component {
  @tracked isEditing = false;

  @action
  editBandDetail() {
    this.isEditing = true;
  }

  @action
  updateBandDetail() {
    this.isEditing = false;
    const { band, description } = this.args;
    band.set('description', description);
    band.save();
  }
}
