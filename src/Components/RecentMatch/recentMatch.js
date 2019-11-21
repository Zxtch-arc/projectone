import React from 'react';
import './recentMatch.css'

 const RecentMatch = () => {
    const handleClick = () => (('hey'));
  return (
      <div className='recentMatchContainer'>
         <span className='recentMatchTitle'>Recent Match</span>
         <div className='recentVs'>
            <div className='homeTeam'>
                <img src='https://pbs.twimg.com/profile_images/1179402715392282627/AR4Xv02g_400x400.png'/> 
            </div>
            <div>
            <div className='recentScores'>
                <span className='homeTeamscore'>4</span>
                -
                <span className='opposingTeamscore'>0</span>    
            </div>
            <button onClick={handleClick}>Reveal Score</button>
            </div>
            <div className='opposingTeam'>
                <img src='https://www.motherdesign.com/wp-content/uploads/NYXL_STILL_00000-800x536.jpg'/> 
            </div>
        </div>
    </div>
  );
}

export default RecentMatch;     