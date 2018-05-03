import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Heroes from './components/Heroes';

class App extends Component {

  render() {
    return (
      <div >
        <h1>Dolphin Dishes</h1>
		<h2>You wish, we dish!</h2>
			<div className ="header-bar" />
			<Heroes/>
      </div>
    );
  }
}

export default App;
