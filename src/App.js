import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Standings from './components/Standings';
import DriverDetails from './components/DriverDetails';
import ConstructorDetails from './components/ConstructorDetails';
import Loader from './Loader'
import RaceCalendar from './components/RaceCalendar';
import FastestLap from './components/FastestLap';

const App = () => {

  const [races, setRaces] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [constructors, setConstructors] = useState([]);
  const [fastestLaps, setFastestLaps] = useState([]); //eslint-disable-line



  const [loaded, setLoaded] = useState(false);

  const urls = ["http://ergast.com/api/f1/current.json", "http://ergast.com/api/f1/current/driverStandings.json", "http://ergast.com/api/f1/current/constructorStandings.json", "http://ergast.com/api/f1/current/fastest/1/results.json"]


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
          setFastestLaps(data[3].MRData.RaceTable.Races)

          setLoaded(true);
          
        }

    )
    .catch(
        (error) => {
            console.log(error)
        }
    )


  },[]) // eslint-disable-line

  return (

    loaded ? (
      <div className="App">
        <BrowserRouter basename = "/f1">
          <Route exact path = "/">
            <Hero races = {races} />
            <Standings drivers = {drivers} constructors = {constructors} />

            <section className = "standings">
              <RaceCalendar races = {races} />
              <FastestLap fastestLaps = {fastestLaps} />
            </section>

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
