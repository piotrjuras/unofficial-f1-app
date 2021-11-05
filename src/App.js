import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Hero from './Hero';
import Standings from './Standings';
import DriverDetails from './DriverDetails';
import ConstructorDetails from './ConstructorDetails';
import Loader from './Loader'

const App = () => {

  const [races, setRaces] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [constructors, setConstructors] = useState([]);


  const [loaded, setLoaded] = useState(false);

  const urls = ["http://ergast.com/api/f1/current.json", "http://ergast.com/api/f1/current/driverStandings.json", "http://ergast.com/api/f1/current/constructorStandings.json"]


  useEffect(() => {

    Promise.all(urls.map(url => fetch(url, {cache: 'no-store'})))
    .then(
        (responses) => Promise.all(responses.map(response => response.json()))
    )
    .then(
        (data) => {

          setRaces(data[0].MRData.RaceTable.Races)
          setDrivers(data[1].MRData.StandingsTable.StandingsLists[0].DriverStandings)
          setConstructors(data[2].MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
          setLoaded(true);
          
        }

    )
    .catch(
        (error) => {
            console.log(error)
        }
    )


  },[])

  return (

    loaded ? (
      <div className="App">
        <BrowserRouter>
          <Route exact path = "/">
            <Hero races = {races} />
            <Standings drivers = {drivers} constructors = {constructors} />
          </Route>
          <Route path = "/driver:params">
            <DriverDetails drivers = {drivers} />
          </Route>
          <Route path = "/constructor:params">
            <ConstructorDetails constructors = {constructors} />
          </Route>
        </BrowserRouter>
      </div>
    ) : <Loader />

  );



}

export default App;
