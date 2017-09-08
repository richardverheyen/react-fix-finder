import React, { Component } from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latLng: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(latLng) {
    this.setState({latLng})
  }

  render() {
    return (
      <SearchBar getCafes={this.onFormSubmit}/>
    );
  }
}

export default App;
