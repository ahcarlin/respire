import React, { Component } from 'reactn';
import './App.css';
import SliderBox from './components/SliderBox';
import UserInputForm from './components/UserInputForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SliderBox></SliderBox>
        <UserInputForm></UserInputForm>
      </div>
    );
  }
}

export default App;
