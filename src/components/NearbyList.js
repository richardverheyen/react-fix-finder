import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedCafe } from '../reducer/selectedCafe/actions';

class NearbyList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hoverItem: {}
    };
  }

  arrangeHexagons = (results) => { //calculate the transform rules for each hexagon

    let i = 0
    for (let value of results) {
      let x = 34;
      let position = {};
      if (window.innerWidth > 600) { //Sets the width for 205px instead of 34vw
        x = 205;
      }

      let theta = Math.PI / 3;
      if ( i > 5 ) {
        i % 2 === 0 ? (
          x = 2 * x //distance from the centre if i is even
        ) : (
          x = x * 3 / Math.sqrt(3)  //distance from the centre if i is odd
        )
      }
      if (i > 5) { theta = Math.PI / 6 }

      if (window.innerWidth > 600) { // sets the position of the hexagons based on screen width
        position = {
          top: (x*(Math.cos(theta*i))) + 'px',
          left: (-x*(Math.sin(theta*i))) + 'px',
        }
      } else {
        position = {
          top: (x*(Math.cos(theta*i))) + 'vw',
          left: (-x*(Math.sin(theta*i))) + 'vw',
        }
      }


      let photoUrl
      if (results[i].hasOwnProperty('photos')) { // Checks to see if there is a photo before calling it
        photoUrl = results[i].photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500})
      } else {
        photoUrl = "/img/coffee-image-placeholder.jpg"
      }
      let backgroundImage = {
        background: 'url("' + photoUrl + '")',
        'backgroundSize': 'cover'
      }

      if (results[i].rating >= 4.5) { //Places stars on results which have a high rating
        value.class = 'recommended hexagon';
      } else {
        value.class = 'hexagon';
      }
      value.hexagonPos = position;
      value.backgroundImage = backgroundImage;
      i++;
    }
  }
  render() {
    const {results, sendToStore} = this.props;
    const { hoverItem } = this.state;
    this.arrangeHexagons(results);
    return (
        <div id="results-list">
          <ul>
          <li id="centre">
            <p>{hoverItem.name}</p>
            <p>{hoverItem.rating}</p>
          </li>
          {results.slice(0, 18).map((p) =>
            <Link to={'/cafe'}
              key={p.id}
              className={p.class}
              style={p.hexagonPos}
              onMouseOver={() => { this.setState({ hoverItem: p })}}
              onClick={() => {sendToStore(p) }}>

              <div className="hex-container">
                <div className="hex-container">
                  <div className="hex-container hex-inner" style={p.backgroundImage}></div>
                </div>
              </div>
            </Link>
          )}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = ({ results }) => ({
  results
});

const mapDispatchToProps = dispatch => ({
  sendToStore(cafe) {
    dispatch(
      setSelectedCafe(cafe)
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NearbyList);
