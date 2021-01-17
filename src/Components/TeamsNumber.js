import React from "react";

const TeamsNumber = ( {setTeamsNumber} ) => {

    const dropdownChangeHandler = (e) => {
        setTeamsNumber(e.target.value);
    }

    return(
        <form className="teamsnumber-container">
            <label htmlFor="teamsNumber">Teams number:</label>
            <select className="select" id="teamsNumberDropDown" name="teamsNumber" onChange={dropdownChangeHandler}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </form>
    )
}

export default TeamsNumber;