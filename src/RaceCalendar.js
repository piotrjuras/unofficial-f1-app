import React from 'react';
import './RaceCalendar.scss'




const Drivers = ({ races }) => {


    return(
        <div className="race_calendar">
            <h1>{races[0].season} calendar</h1>
            <ul>
                {races.map((race, index) => {
                        return(
                            <a href={race.url} key={race.date}>
                                <li>
                                    {race.round}. {race.raceName} <b>{race.date} {race.Circuit.circuitName}</b>
                                    <span></span>
                                </li>
                            </a>
                        )
                })}
            </ul>
        </div>

    )
}

export default Drivers;