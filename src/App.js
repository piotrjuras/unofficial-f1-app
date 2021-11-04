import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Hero from './Hero';
import Standings from './Standings';
import DriverDetails from './DriverDetails';
import ConstructorDetails from './ConstructorDetails';


const App = () => {

  const [races, setRaces] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [constructors, setConstructors] = useState([]);


  const [loaded, setLoaded] = useState(false);



  useEffect(() => {

      fetch("http://ergast.com/api/f1/current.json")
      .then(res => res.json())
      .then(data => {
        setRaces(data.MRData.RaceTable.Races)
        setLoaded(true);
      })
      .catch(err => console.log(err))

      fetch("http://ergast.com/api/f1/current/driverStandings.json")
      .then(res => res.json())
      .then(data => {
        setDrivers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        setLoaded(true);
      })
      .catch(err => console.log(err))

      fetch("http://ergast.com/api/f1/current/constructorStandings.json")
      .then(res => res.json())
      .then(data => {
        setConstructors(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
        setLoaded(true);
      })
      .catch(err => console.log(err))

  },[])

  return (

    loaded ? (
      <div className="App">
        <BrowserRouter basename="/f1">
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
    ) : null

  );



}

export default App;
