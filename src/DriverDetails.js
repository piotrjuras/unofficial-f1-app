import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DriverDetails.scss';
import Loader from './Loader';
import Button from './Button';


const DriverDetails = ({ drivers }) => {


    const [driverData, setDriverData] = useState(false);

    const [raceResults, setRaceResults] = useState([]);


    const params = useParams();
    const driverId = params.params.slice(1)

    useEffect(() => {

        drivers.forEach(driver => {
            if(driver.Driver.driverId === driverId){
                setDriverData(driver)
            }
        })


    }) // eslint-disable-line

    useEffect(() => {
        fetch(`http://ergast.com/api/f1/current/drivers/${driverId}/results.json`)
        .then(res => res.json())
        .then(data => setRaceResults(data.MRData.RaceTable))
    },[]) // eslint-disable-line

    const { Races } = raceResults;

    return(
        driverData && Races ? (
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
                <h1>Race results in {raceResults.season}</h1>

                <div className="drivers_standings">
                    <ul>
                        {Races.map(({ raceName, Results }) => {
                            return (
                                <li key = {raceName}>
                                    {raceName} <b>position {Results[0].position}</b>
                                </li>                                     
                            )
                        })}
                    </ul>
                </div>
                
                
            </div>
        ) : <Loader />
    )

}

export default DriverDetails;