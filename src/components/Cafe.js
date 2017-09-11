import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cafe extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return(
      <main id="cafe-page">
        <Link to={'/'}>Back</Link>
        <div id="cafe-map"></div>
      </main>
    );
  }

  componentDidMount () {
    let latLng = this.props.selectedCafe.geometry.location;
    let map = new window.google.maps.Map(document.getElementById('cafe-map'), {
      center: latLng,
      zoom: 18
    });
    new window.google.maps.Marker({
      position: latLng,
      map: map
    });
  }

}

const mapStateToProps = ({ selectedCafe }) => ({
  selectedCafe
});

export default connect(mapStateToProps)(Cafe);
