import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogList from './HogList';

const sorter = {
  none: () => {},
  name: (a, b) => a.name.localeCompare(b.name),
  weight: (a, b) => a.weight - b.weight,
  nameRev: (a, b) => b.name.localeCompare(a.name),
  weightRev: (a, b) => b.weight - a.weight,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs,
      showGreased: true,
      sortBy: 'none',
    };
  }

  setGreased = (e) => {
    this.setState({ showGreased: e.target.checked });
  };

  setSort = (e) => {
    this.setState({ sortBy: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Nav
          showGreased={this.state.showGreased}
          handleSetGreased={this.setGreased}
          handleSetSort={this.setSort}
        />
        <HogList
          hogs={this.state.hogs
            .filter((hog) => this.state.showGreased || !hog.greased)
            .sort(sorter[this.state.sortBy])}
        />
      </div>
    );
  }
}

export default App;
