import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cafe extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return(
      <main>
        <Link to={'/'}>Back</Link>
      </main>
    );
  }
}

const mapStateToProps = ({ cafeId }) => ({
  cafeId
});

export default connect(mapStateToProps)(Cafe);
