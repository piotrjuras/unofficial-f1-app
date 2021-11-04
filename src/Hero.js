import React, { useEffect, useState } from 'react';
import today from './TodaysDate';
import './Hero.scss';

import Countdown from './Countdown';

const Hero = ({ races }) => {

    const [nextRace, setNextRace] = useState(false);

    useEffect(() => {

        races.every(race => {
            if(race.date > today){
                setNextRace(race);
                return false;
            }
            return true;
        })

    },[]) // eslint-disable-line


    return(
        nextRace ? (
            <header>
                <div className="hero_logo"></div>

                <main>
                    <h1>{nextRace.raceName}</h1>
                    <h2><Countdown date={`${nextRace.date}T${nextRace.time.slice(0, -1)}`} /></h2>
                    <p>{nextRace.Circuit.circuitName}</p>
                    <p>{nextRace.date} at {nextRace.time.slice(0, -4)}</p>
                </main>
            </header>
        ) : null
    )

}

export default Hero;