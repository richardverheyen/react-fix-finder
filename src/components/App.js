import React, { Component } from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';
import NearbyList from './NearbyList'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latLng: '',
      results: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.callback = this.callback.bind(this);
  }

  onFormSubmit(latLng) {
    let location = new window.google.maps.LatLng(latLng.lat,latLng.lng);

    let map = new window.google.maps.Map(document.getElementById('you'), {
        center: location,
        zoom: 15
      });

    let request = {
      location: location,
      radius: '500',
      type: ['cafes']
    };

    let service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, this.callback);
  }

  callback (results) {
    this.setState({results: results})
  }


  render() {

    return (
      <main>
        <SearchBar getCafes={this.onFormSubmit}/>
        <NearbyList results={this.state.results}/>
      </main>
    );
  }
}

export default App;
