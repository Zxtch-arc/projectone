import React from 'react';
import './currentMatch.css'

 const CurrentMatch = () => {
  return (
      <div className='currenMatchContainer'>
         <span className='currentMatchTitle'>Current Match</span>
         <div className='currentVs'>
            <div className='homeTeam'>
                <img src='https://pbs.twimg.com/profile_images/1179402715392282627/AR4Xv02g_400x400.png'/> 
            </div>
            <div className='currentScores'>
                <span className='homeTeamscore'>3</span>
                VS.
                <span className='opposingTeamscore'>2</span>    
            </div>
            <div className='opposingTeam'>
                <img src='https://pbs.twimg.com/profile_images/1179402715392282627/AR4Xv02g_400x400.png'/> 
            </div>
        </div>
    </div>
  );
}

export default CurrentMatch;
