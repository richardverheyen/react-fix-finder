import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      address: 'Vancouver, BC Canada'
    }

  this.onChange = (address) =>
    this.setState({ address })
  }


  handleFormSubmit = (event) => {
    event.preventDefault()
    const { getCafes } = this.props;

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => getCafes(latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    const options = {
      types: ['(regions)']
    }

    return (
      <div id="search-bar">
        <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete
          inputProps={inputProps}
          options={options}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
}
export default SearchBar
