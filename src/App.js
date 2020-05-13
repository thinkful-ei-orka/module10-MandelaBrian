import React, { Component } from 'react';
import './App.css';
// import TheDate from './state/TheDate'
// import Counter from './state/Counter '
// import Tabs from './state/Tabs'
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'


// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        {/* <Bomb /> */}
        <RouletteGun />
      </div>
    );
  }
}

export default App;