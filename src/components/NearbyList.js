import React, { Component } from 'react';

class NearbyList extends Component {

  arrangeHexagons = (results) => { //calculate the transform rules for each hexagon
    let i = 0
    let x = 33.33
    let theta = Math.PI/3;


    for (let value of results) {
      i > 5 ? (
        i % 2 == 0 ? (
          x = 66.66 //distance from the centre if i is even
        ) : (
          x = 57.72 //distance from the centre if i is odd
        )
      ) : (x);
      i > 5 ? (theta = Math.PI/6) : (theta);

      let position = {
        transform: 'translate(' + (x*(Math.sin(theta*i))) + 'vw,' + (-x*(Math.cos(theta*i))) + 'vw)'}
      results[i].hexagonPos = position;
      i++;
    }
  }

  render() {
    const {results} = this.props;
    this.arrangeHexagons(results)

    return (
        <div id="list-component">
          <ul>
          <li id="you" className="hexagon">
            <div className="hex-container">
              <div className="hex-container">
                <div className="hex-container hex-inner">You</div>
              </div>
            </div>
          </li>
          {results.map((p) =>
            <li key={p.id} className="hexagon" style={p.hexagonPos}>
              <div className="hex-container">
                <div className="hex-container">
                  <div className="hex-container hex-inner">{p.name}</div>
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
