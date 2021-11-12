import React from 'react';
import Drivers from './Drivers';
import Constructors from './Constructors';
import './Standings.scss';

const Standings = ({ drivers, constructors}) => {

    return(
        <section className="standings">
            <Drivers drivers = {drivers} />
            <Constructors constructors = {constructors} />
        </section>
    )


}



export default Standings;