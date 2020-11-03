import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './componenets/Navigation/Navigation';
import Logo from './componenets/Logo/Logo';
import Rank from './componenets/Rank/Rank';
import ImageLinkForm from './componenets/ImageLinkForm/ImageLinkForm';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
  return (
    <div className="App">
    <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}
}

export default App;
