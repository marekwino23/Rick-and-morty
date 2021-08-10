import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">s
     <div class="layout">
      <h1>Rick and Morty</h1>
      <img src={`${process.env.PUBLIC_URL}/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png`} width="55%" alt="photo" />
     </div>
     <div className="box">
      <h2>Search for characters</h2>
      <form>
        <input type="text" required placeholder="Name*"></input>
        <br></br>
        <br></br>
        <input type="text" placeholder="Status"></input>
        <br></br>
        <br></br>
        <input type="text" placeholder="Gender"></input>
        <br></br>
        <br></br>
        <button>Search</button>
      </form>
     </div>
    </div>
  );
}

export default App;
