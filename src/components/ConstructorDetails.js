import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './atoms/Button';
import './DriverDetails.scss';
import Loader from './../Loader';



const ConstructorDetails = ({ constructors }) => {


    const [constructorData, setconstructorData] = useState(false);

    const params = useParams();
    const constructorId = params.params.slice(1)

    useEffect(() => {

        constructors.forEach(constructorItem => {
            if(constructorItem.Constructor.constructorId === constructorId){
                setconstructorData(constructorItem)
            }
        })


    }) // eslint-disable-line



    return(
        constructorData ? (
            <div className="driver_details">
                <h1>{constructorData.Constructor.name}</h1>
                <h2>{constructorData.Constructor.nationality} team</h2>

                <p>championship position: <b>{constructorData.position}</b></p>
                <p>championship points: <b>{constructorData.points}</b></p>
                <p>wins in current season: <b>{constructorData.wins}</b></p>
                <a href={constructorData.Constructor.url}><Button>learn more</Button></a>
            </div>
        ) : <Loader />
    )

}

export default ConstructorDetails;