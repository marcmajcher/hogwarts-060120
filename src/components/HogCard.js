import React, { Component } from 'react';

export default class HogCard extends Component {
  constructor() {
    super();
    this.state = {
      details: false,
    };
  }

  render() {
    const nameRx = / /g;
    const hog = this.props.hog;

    return (
      <div
        className="pigTile"
        onClick={() => this.setState({ details: !this.state.details })}
      >
        <div>
          <b>{hog.name}</b>
        </div>
        <img
          alt={hog.name}
          src={`/hog-imgs/${hog.name.toLowerCase().replace(nameRx, '_')}.jpg`}
        />
        {this.state.details ? (
          <div>
            <div>Weight: {hog.weight}</div>
            <div>Specialty: {hog.specialty}</div>
            <div>{hog.greased ? "I'm Greased!" : 'Not greasy'}</div>
            <div className="achievementText">
              Achievement: {hog['highest medal achieved']}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
