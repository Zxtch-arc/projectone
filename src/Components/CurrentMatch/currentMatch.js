import React from 'react';
import './currentMatch.css'

 const CurrentMatch = () => {

    const handleClick = () => (('hey'));
  return (
      <div className='currentMatchContainer'>
         <span className='currentMatchTitle'>Current Match</span>
         <div className='currentVs'>
            <div className='homeTeam'>
                <img src='https://pbs.twimg.com/profile_images/1179402715392282627/AR4Xv02g_400x400.png'/> 
            </div>
            <div className='currentScoresContainer'>
                <div className='currentScores'>
                    <span className='homeTeamscore'>3</span>
                    -
                    <span className='opposingTeamscore'>2</span>    
                </div>
                <button onClick={handleClick}>Reveal Score</button>
            </div>
            <div className='opposingTeam'>
                <img src='https://eui6dii703-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/San-Francisco-Shock.png'/> 
            </div>
        </div>
    </div>
  );
}

export default CurrentMatch;
