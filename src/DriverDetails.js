import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DriverDetails.scss';
import Loader from './Loader';
import Button from './Button';


const DriverDetails = ({ drivers }) => {


    const [driverData, setDriverData] = useState(false);

    const params = useParams();
    const driverId = params.params.slice(1)

    useEffect(() => {

        drivers.forEach(driver => {
            if(driver.Driver.driverId === driverId){
                setDriverData(driver)
            }
        })


    }) // eslint-disable-line



    return(
        driverData ? (
            <div className="driver_details">
                <h1>{driverData.Driver.permanentNumber} {driverData.Driver.code}</h1>
                <h2>{driverData.Driver.givenName} {driverData.Driver.familyName}</h2>
                <p>championship position: <b>{driverData.position}</b></p>
                <p>championship points: <b>{driverData.points}</b></p>


                <p>born: <b>{driverData.Driver.dateOfBirth}</b></p>
                <p>number: <b>{driverData.Driver.permanentNumber}</b></p>
                <p>wins in current season: <b>{driverData.wins}</b></p>
                <p>team: <b>{driverData.Constructors[0].name}</b></p>
                <a href={driverData.Driver.url}><Button>learn more</Button></a>

            </div>
        ) : <Loader />
    )

}

export default DriverDetails;