import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cafe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: ''
    };
  }

  render () {
    return(
      <main>
        <Link to={'/'}>Back</Link>
        <div id="CafeMap"></div>
      </main>
    );
  }

  componentDidMount(){
    new window.google.maps.Map(document.getElementById('CafeMap'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    })
  }

}

const mapStateToProps = ({ cafeId }) => ({
  cafeId
});

export default connect(mapStateToProps)(Cafe);
