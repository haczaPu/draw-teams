import React from 'react';

//Import components
import Team from './Team';

const TeamsList = ( {players , setPlayers, teamA, setTeamA, player, teamsNumber}) => {


    return (
        <form  className="teamslist-container">
            <ul>
                <Team />
                <Team />

            </ul>
        </form>
    )
}

export default TeamsList;