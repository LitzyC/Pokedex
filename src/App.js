// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";

function Logo() {
  return (
    <header>
      <h1>Welcome To Pokedex of Litzy</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokemon Pidgeot"
      />
    </header>
  );
}

function BestPokemon() {
  return <p>Mi Pokemon favorito eres tú.</p>;
}

const App =()=>{
  return (
    <div>
      <Logo/>
      <BestPokemon/>
    </div>
  );
};

export default App;