import Route from '@ember/routing/route';

export default class SongsRoute extends Route {
  queryParams = {
    name: {
      refreshModel: true, // Cette ligne nous permet juste de dire que notre model doit se remettre à jour dès qu'on modifie une queryParams
    },
    rating: {
      refreshModel: true,
    },
  };
  model(params) {
    const songs = this.store.findAll('song', { include: 'band' });
    return {
      query: params.name,
      queryRating: params.rating,
      songs,
    };
  }
}
