import React, { useEffect, useState } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    useParams
  } from "react-router-dom";
  import Loader from "react-loader-spinner";

const Search = () => {
    const [characters,setCharacters] = useState([])
    const element = useParams()
    const{name,status,gender} = element 
    const onClick = () => {
      window.location.href="/"
    }
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`,{
          method: 'GET'
        })
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      },[name,status,gender])
      console.log(characters)
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
      <i class="fa fa-arrow-left" onClick={onClick}
      ></i>
      </div>
      <div className="options">
      <p style={{color: "#1C4D43"}}>Options:</p> <button className="option"><p>Name:{name}</p></button> <button className="option"><p>Gender:{gender}</p></button>
      </div>
      <table>
                        <tr>
                          <th>Photo </th>
                          <th>Name</th>
                          <th>Gender</th>
                          <th>Location</th>
                        </tr>
               {characters.map((character) => {
                   return(
                        <tr key={character.id} className="character">
                          <td><img width="40%" alt="character" src={character.image}></img></td>
                          <td>{character.name}</td>
                          <td>{character.gender}</td>
                          <td>{character.location.name}</td>
                        </tr>
                   )
               })}
               </table>
        </div>   
    )}


export default Search;