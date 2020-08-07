import piggy from '../porco.png';
import React from 'react';

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
        Show Greased{' '}
        <input
          type="checkbox"
          checked={props.showGreased}
          onChange={props.handleSetGreased}
        />{' '}
        Sort by: <select onChange={props.handleSetSort}>
          <option value="none"> --- </option>
          <option value="name">Name</option>
          <option value="nameRev">Name (reverse)</option>
          <option value="weight">Weight</option>
          <option value="weightRev">Weight (reverse)</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
