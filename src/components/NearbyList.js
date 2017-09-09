import React, { Component } from 'react';

class NearbyList extends Component {

  arrangeHexagons = (results) => { //calculate the transform rules for each hexagon
    const x = 33.33; //the side length of the hexagon in vw
    let i = 0
    for (let value of results) {
      let position = {
        transform: 'translate(' + (x*(Math.sin((Math.PI/3)*i))) + 'vw,' + (-x*(Math.cos((Math.PI/3)*i))) + 'vw)'}
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
