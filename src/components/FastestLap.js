import React from 'react';
import './RaceCalendar.scss'




const FastestLap = ({ fastestLaps }) => {


    return(
        <div className="race_calendar">
            <h1>DHL {fastestLaps[0].season} fastest lap</h1>
            <ul>
                {fastestLaps.map((fastestLap, index) => {
                        const [ driver ] = fastestLap.Results;
                        const { Driver: {givenName, familyName}, FastestLap: { Time: { time } } } = driver;
                        return(
                            <a href={fastestLap.url} key={fastestLap.round}>
                                <li>
                                    {fastestLap.round}. {fastestLap.raceName} <b>{time} {givenName} {familyName}</b>
                                    <span></span>
                                </li>
                            </a>
                        )
                })}
            </ul>
        </div>

    )
}

export default FastestLap;