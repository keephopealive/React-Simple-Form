import React, { Component } from 'react';
import TaskApp from './components/TaskApp';

class App extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <TaskApp/>
      </div>
    )
  }
}

export default App;
