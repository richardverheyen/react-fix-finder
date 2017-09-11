import React, { Component } from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';
import NearbyList from './NearbyList';
import { connect } from 'react-redux';
import { setResults } from '../reducer/results/actions';

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

    let map = new window.google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
      });

    let request = {
      location: location,
      rankby: 'prominence',
      radius: '2000',
      type: 'cafe',
      keyword: 'brew'
    };

    let service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, this.callback);
  }

  callback (results) {
    this.props.sendToStore(results);
  }

  render() {

    return (
      <main>
        <SearchBar getCafes={this.onFormSubmit}/>
        <NearbyList/>
      </main>
    );
  }
}

const mapStateToProps = ({ results }) => ({
  results
});

const mapDispatchToProps = dispatch => ({
  sendToStore(results) {
    dispatch(
      setResults(results)
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
