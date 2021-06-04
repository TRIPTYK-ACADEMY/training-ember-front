import Model, { attr, hasMany } from '@ember-data/model';

export default class BandModel extends Model {
  @attr('string') name;
  @hasMany('song') songs; // On fait la liaison entre mon modèle band et le modèle song et on dit qu'il y a plusieurs songs avec le hasMany
}
