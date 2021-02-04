import React from 'react';
import Team from './Team';
// import { useEffect } from 'react';

//Import components
// import Team from './Team';

const TeamsList = ({teamsNumber, allTeams, setAllTeams}) => {


    // useEffect(() => {
    //    function  setAllTeamsHandler() {
    //         setAllTeams([]);
    //         console.log(allTeams);
    //         for (let i = 0; i < teamsNumber; i++) {
    //            allTeams.push(<Team key={i} />);
    //         };
    //         console.log(allTeams);
    //    }

    //     setAllTeamsHandler();
    // }, [teamsNumber]);


    return (
        <div className="teamslist-container">
          {allTeams.map((players, idx) => (
            <Team players={players} key={`team_${idx}`} />
          ))}
        </div>
    );
};

export default TeamsList;

        // eslint-disable-next-line
