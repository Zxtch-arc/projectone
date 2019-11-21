import React, {useState} from 'react';
import './Match.css'

 const Match = ({matchTitle, homeTeamLogo, opposingTeamLogo}) => {

    const [displayScore, setDisplayScore] = useState(false);

    const handleClick = () => setDisplayScore(!displayScore);
    console.log('this is the value of displayScore',displayScore)
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
                            <span className='homeTeamscore'>3</span>
                            -
                            <span className='opposingTeamscore'>2</span>    
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
