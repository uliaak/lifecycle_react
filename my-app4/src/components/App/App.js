import React from 'react';
import LifecycleComp from '../LifecycleComp/LifecycleComp';
import './App.css';

class App extends React.Component {

  state = {
    isShow: true
  };

  handleClick() {
    this.setState({
        isShow: !this.state.isShow
    });
  };

  render() {
    return(
      <div className="App">

        <p>
          <button onClick={this.handleClick.bind(this)}>Click me!</button>
        </p>
                
        {
          this.state.isShow
            ? <LifecycleComp/>
            : <h1>Component is hidden</h1>
        }    
    </div>
    )
  } 
}

export default App;
