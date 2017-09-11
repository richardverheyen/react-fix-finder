import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedCafe } from '../reducer/cafeId/actions';

class NearbyList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  arrangeHexagons = (results) => { //calculate the transform rules for each hexagon
    let i = 0

    for (let value of results) {
      let x = 34;
      let theta = Math.PI / 3;
      if ( i > 5 ) {
        i % 2 === 0 ? (
          x = 2 * x //distance from the centre if i is even
        ) : (
          x = x * 3 / Math.sqrt(3)  //distance from the centre if i is odd
        )
      }
      if (i > 5) { theta = Math.PI / 6 }

      let position = {
        top: (x*(Math.cos(theta*i))) + 'vw',
        left: (-x*(Math.sin(theta*i))) + 'vw',
      }
      let photoUrl
      if (results[i].hasOwnProperty('photos')) {
        photoUrl = results[i].photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500})
      } else {
        photoUrl = "/img/coffee-image-placeholder.jpg"
      }
      let backgroundImage = {
        background: 'url("' + photoUrl + '")',
        'backgroundSize': 'cover'
      }
      value.hexagonPos = position;
      value.backgroundImage = backgroundImage;
      i++;
    }
  }
  render() {
    const {results, sendToStore} = this.props;
    this.arrangeHexagons(results);

    return (
        <div id="results-list">
          <ul>
          <li id="you"></li>
          {results.slice(0, 18).map((p) =>
            <Link to={'/cafe'}
              key={p.id}
              className="hexagon"
              style={p.hexagonPos}
              onClick={() => {sendToStore(p.id) }}>

              <div className="hex-container">
                <div className="hex-container">
                  <div className="hex-container hex-inner" style={p.backgroundImage}>
                    <p>{p.rating}</p>
                  </div>
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
  sendToStore(cafeId) {
    dispatch(
      setSelectedCafe(cafeId)
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NearbyList);
