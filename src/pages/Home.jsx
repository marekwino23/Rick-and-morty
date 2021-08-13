import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const Home = () => {
    const [name,setName] = useState("");
    const [status,setStatus] = useState("");
    const [gender,setGender] = useState("");
    const history = useHistory(); 
    const handleChange = (e) => {
        if(e.target.name === "name"){
        setName(e.target.value)
        }
        else if(e.target.name === "status"){
        setStatus(e.target.value)
        }
        else if(e.target.name === "gender"){
        setGender(e.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/results/${name}/${status}/${gender}`);
    }

    return (
    <div className="content">
        <h2>Search for characters</h2>
        <form onSubmit={onSubmit}>
            <div className="field">
                <input aria-label="name" type="text" onChange={handleChange} name="name" value={name} required placeholder="Name*" />
            </div>
            <div className="field">
                <select aria-label="status" id="status" name="status" onChange={handleChange}>
                    <option value="">status</option>
                    <option value="alive">alive</option>
                    <option value="dead">dead</option>
                </select>
            </div>
            <div className="field">
                <select aria-label="gender" id="gender" name="gender" onChange={handleChange}>
                    <option value="">gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <button type="submit" className="search">Search</button>
        </form>
    </div>
    )
}

export default Home