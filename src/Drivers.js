import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'
import './Drivers.scss'




const Drivers = ({ drivers }) => {

    const [showMore, setShowMore] = useState(false);

    

    return(
        <div className="drivers_standings">
            <h1>Drivers<br />Standings</h1>
            <ul>
                {drivers.map((driver, index) => {
                    if(index < (showMore ? 25 : 10) ){
                        return(
                            <Link to = {`/driver:${driver.Driver.driverId}`} key={driver.Driver.driverId}>
                                <li>
                                    {driver.position}. {driver.Driver.givenName} {driver.Driver.familyName}
                                    <b>{driver.points} pts</b>
                                    <span></span>
                                </li>
                            </Link>
                        )
                    }
                    return null;
                })}
            </ul>
                <Button onClick = {() => setShowMore(!showMore)}>{showMore ? "show less" : "show more"}</Button>
        </div>

    )
}

export default Drivers;