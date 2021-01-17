import React from 'react';
import '../Styles.css';


const DrawButton = ( { players, setTeamA, teamsNumber } ) => {

    const drawHandler = () => {
        // players.map( (el) => el.teamA = Math.floor(Math.random() * teamsNumber + 1));
        // setTeamA(players.filter(() => players.teamA !== 0));
        // console.log(players);


    };

    return(
        <div className="draw-button">
            <button onClick={drawHandler}>Draw Teams</button>
        </div>

    )
};

export default DrawButton;