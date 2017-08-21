import React, { Component } from 'react';
import Songs from '../components/Songs';

export default class SingleAlbum extends Component {

  render () {

    const album = this.props.album;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
