import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cafe extends Component {

  constructor({ cafeId }) {
    super({ cafeId });
    this.state = {};
  }

  render () {
    return(
      <main>hi</main>
    );
  }
}
const mapStateToProps = ({ cafeId }) => ({
  cafeId
});

export default connect(mapStateToProps)(Cafe);
