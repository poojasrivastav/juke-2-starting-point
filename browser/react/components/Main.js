import React, { Component } from 'react';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import {HashRouter, Route} from 'react-router-dom';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      // albums: [],
      selectedAlbum: {}
    };
    // this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  // componentDidMount () {
  //   axios.get('/api/albums/')
  //     .then(res => res.data)
  //     .then(albums => {
  //       this.setState({ albums })
  //     });
  // }

  // selectAlbum (albumId) {
  //   axios.get(`/api/albums/${albumId}`)
  //     .then(res => res.data)
  //     .then(album => this.setState({
  //       selectedAlbum: album
  //     }));
  // }

  deselectAlbum () {
    this.setState({ selectedAlbum: {}});
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <HashRouter>
        <div className="col-xs-10">
        <Route exact path= '/' component={AllAlbums}/>
        <Route path= '/albums' component={AllAlbums}/>
        </div>
        </HashRouter>
        <Player />
      </div>
    );
  }
}
