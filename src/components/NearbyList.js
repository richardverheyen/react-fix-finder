import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NearbyList extends Component {

  arrangeHexagons = (results) => { //calculate the transform rules for each hexagon
    let i = 0

    for (let value of results) {
      let x = 34;
      let theta = Math.PI / 3;
      i > 5 ? (
        i % 2 === 0 ? (
          x = 2 * x //distance from the centre if i is even
        ) : (
          x = x * 3 / Math.sqrt(3)  //distance from the centre if i is odd
        )
      ) : (x)
      i > 5 ? (theta = Math.PI / 6) : (theta);

      let position = {
        top: (x*(Math.cos(theta*i))) + 'vw',
        left: (-x*(Math.sin(theta*i))) + 'vw',
      }
      let backgroundImage = {
        background: 'url("' + results[i].photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500}) + '")',
        'backgroundSize': 'cover'
      }
      value.hexagonPos = position;
      value.backgroundImage = backgroundImage;
      i++;
    }
  }

  render() {
    const {results} = this.props;
    this.arrangeHexagons(results)

    return (
        <div id="results-list">
          <ul>
          <li id="you"></li>
          {results.slice(0, 18).map((p) =>
            <Link to={'/cafe'} key={p.id} className="hexagon" style={p.hexagonPos} >
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

export default NearbyList;
