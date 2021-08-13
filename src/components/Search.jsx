import React, { useEffect, useState } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    useParams
  } from "react-router-dom";
  import Loader from "react-loader-spinner";

const Search = () => {
    const [characters, setCharacters] = useState([]);
    const{ name, status, gender } = useParams();
    const onClick = () => {
      window.location.href="/"
    }
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`,{
          method: 'GET'
        })
      .then(response => response.json())
      .then(data => {
        if(data.error) {
          console.log('error: ', data.error);
          return;
        }
        setCharacters(data.results)
      })
      },[name,status,gender]);

    return (
    <div className="content">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000}
        />
      <div>
        <h1>Search results</h1>
        <i className="fa fa-arrow-left" onClick={onClick}
        ></i>
      </div>
      <div className="options">
        <p style={{color: "#1C4D43"}}>Options:</p> <button className="option"><p>Name:{name}</p></button> <button className="option"><p>Gender:{gender}</p></button>
        </div>
        <table>
          <thead>
          <tr>
              <th>Photo </th>
              <th>Name</th>
              <th>Gender</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {characters.length ? characters.map((character) => (
                    <tr key={character.id} className="character">
                      <td><img width="40%" alt="character" src={character.image}></img></td>
                      <td>{character.name}</td>
                      <td>{character.gender}</td>
                      <td>{character.location.name}</td>
                    </tr>
                )): <tr><td colSpan={4}>No results</td></tr>}
              </tbody>
          </table>
        </div>   
    )}


export default Search;