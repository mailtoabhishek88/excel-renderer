import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props){
		super(props);
	}

	
	  render() {
	    return (
	      <div className="App">
	          {this.props.name}
	      </div>
	    );
	  }
}

export default App;
