import React, { Component } from 'react';

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
        left: (-x*(Math.sin(theta*i))) + 'vw'
      }
      value.hexagonPos = position;
      i++;
    }
  }

  render() {
    const {results} = this.props;
    this.arrangeHexagons(results)

    return (
        <div id="list-component">
          <ul>
          <li id="you"></li>
          {results.slice(0, 18).map((p) =>
            <li key={p.id} className="hexagon" style={p.hexagonPos} >
              <div className="hex-container">
                <div className="hex-container">
                  <div className="hex-container hex-inner">
                    <p>{p.name}</p>
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default NearbyList;
