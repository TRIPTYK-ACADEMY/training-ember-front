import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StarRatingComponent extends Component {
  maxRating = 10;

  get stars() {
    const stars = [];

    const rating = this.args.rating; // Je récupère l'argument de mon component (passé avec le  @rating=...)

    for (let i = 1; i <= this.maxRating; i++) {
      stars.push({
        rating: i,
        isFull: rating >= i,
      });
    }
    return stars;
  }

  @action
  setRating(selectRating) {
    console.log(selectRating);
    console.log(this.args.item);
    this.args.item.set('rating', selectRating);
    this.args.item.save();
  }
}
