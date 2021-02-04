import React from "react";
import Team from "./Team";
import { v4 as uuidv4 } from 'uuid';


const TeamsNumber = ( {setTeamsNumber, allTeams, teamsNumber, setAllTeams } ) => {

    const changeNumberHandler = (e) => {
        e.preventDefault();
        // setAllTeams([]);
        setTeamsNumber(e.target.value);
        console.log(`Zmiana na ${e.target.value}`);
        if( allTeams !== []){
            // setAllTeams([]);
            console.log(`W ifie jest allTeams = ${allTeams}`);
        }

        for (let i = 0; i < e.target.value; i++) {
            allTeams.push(<Team key={uuidv4}/>)
            console.log('Push do tablicy');
        }
        console.log(`Na koniec alltemas = ${allTeams}`);


    };

    return(
        <form className="teamsnumber-container">
            <label htmlFor="teamsNumber">Teams number:</label>
            <select className="select" id="teamsNumberDropDown" name="teamsNumber" onChange={changeNumberHandler} defaultValue="4">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </form>
    )
};

export default TeamsNumber;