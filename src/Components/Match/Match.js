import React, {useState} from 'react';
import './Match.css'

 const Match = ({matchTitle, homeTeamLogo, opposingTeamLogo, homeTeamScore, opposingTeamScore}) => {

    const [displayScore, setDisplayScore] = useState(false);

    const handleClick = () => setDisplayScore(!displayScore);
    return (
        <div className='currentMatchContainer'>
            <span className='currentMatchTitle'>{matchTitle}</span>
            <div className='currentVs'>
                <div className='homeTeam'>
                    <img src={homeTeamLogo} alt='logo'/> 
                </div>
                <div className='currentScoresContainer'>
                    { displayScore && (
                        <div className='currentScores'>
                            <span className='homeTeamscore'>{homeTeamScore}</span>
                            -
                            <span className='opposingTeamscore'>{opposingTeamScore}</span>    
                        </div>
                    )
                    }
                <button className='toggleButton' onClick={handleClick}>{displayScore ? 'Hide' : 'Show'}</button>
                </div>
                <div className='opposingTeam'>
                    <img src={opposingTeamLogo} alt='logo'/> 
                </div>
            </div>
        </div>
    );
}

export default Match;
