import React from 'react';
import { Link } from 'react-router-dom';
import './Drivers.scss'




const Constructors = ({ constructors }) => {

    

    return(
        <div className="drivers_standings">
            <h1>Constructors<br />Standings</h1>
            <ul>
                {constructors.map(constructor => {
                    return(
                        <Link to = {`/constructor:${constructor.Constructor.constructorId}`} key={constructor.Constructor.constructorId}>
                            <li>
                                {constructor.position}. {constructor.Constructor.name}
                                <b>{constructor.points} pts</b>
                                <span></span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>

    )
}

export default Constructors;