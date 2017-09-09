import React, { Component } from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';

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
      type: ['restaurant']
    };

    let service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, this.callback);
  }

  callback (results) {
    this.setState({results: results})
  }

  arrangeHexagons = (results) => { //calculate the transform rules for each hexagon
    const x = 33.33; //the side length of the hexagon in vw
    let i = 0
    for (let value of results) {
      let position = [x*(Math.sin((Math.PI/3)*i)) + 'vw,'-x*(Math.cos((Math.PI/3)*i)) + 'vw'];
      results.hexagonPos = position;
      i++;
    }
    return results
  }

  render() {
    const {results} = this.state;

    this.arrangeHexagons(results)

    return (
      <main>
        <SearchBar getCafes={this.onFormSubmit}/>
        <div id="list-component">
          <ul>
            <li id="you" className="hexagon">
              <div className="hex-container">
                <div className="hex-container">
                  <div className="hex-container hex-inner">You</div>
                </div>
              </div>
            </li>
            {results.map((p) =>
              <li key={p.id} className="hexagon">
                <div className="hex-container">
                  <div className="hex-container">
                    <div className="hex-container hex-inner">{p.name}</div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
