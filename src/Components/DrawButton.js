import React from 'react';
import '../Styles.css';


const DrawButton = ( { players, allTeams } ) => {


    const drawHandler = (players, allTeams) => {
        console.log(`All teams is ${allTeams}`);
        for ( let i=0; i < players.length; i++ ) {
          let allTeamsElementLength=[];
          allTeams.forEach(team => {
            allTeamsElementLength.push(team.length)                         // Stworz tablice z wielkosciami zespolow
          });
          console.log(allTeamsElementLength);
          let minTeam = Math.min( ...allTeamsElementLength);                //Wytypuj najmniejszy zespol
          let smallestTeamIndex = allTeamsElementLength.indexOf(minTeam);   //Znajdz indeks najmniejszego zespołu
          console.log(smallestTeamIndex);
          console.log(allTeams);
          allTeams[smallestTeamIndex].push(players[i])                      //Dodaj gracza do najmniejszego zespołu
          console.log(allTeams);

        }
      };



    return(
        <div className="draw-button-container">
            <button onClick={() => drawHandler(players, allTeams)}>Draw Teams</button>
        </div>

    )
};

export default DrawButton;