import React, { useEffect, useState } from 'react';
import today from './TodaysDate';
import './Hero.scss';
import Button from './atoms/Button';
import Countdown from './Countdown';


const Hero = ({ races }) => {

    const [nextRace, setNextRace] = useState(false);
    const [fullscreen, setFullscreen] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    useEffect(() => {

        races.every(race => {
            if(race.date >= today){

                setNextRace(race);
                return false;
            }
            return true;
        })

    },[]) // eslint-disable-line


    useEffect(() => {
        window.addEventListener("fullscreenchange", fullScreenChange)

        return () => {
            window.removeEventListener("fullscreenchange", fullScreenChange)
        }
    })

    const fullScreenChange = () => document.fullscreenElement ? setFullscreen(true) : setFullscreen(false);


    const toggleFullScreen = () => {

        if (!document.fullscreenElement && 
            !document.mozFullScreenElement && !document.webkitFullscreenElement) {

            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            }

      }

    return(
        nextRace ? (
            <header>
                <div className="hero_logo"></div>

                <main>
                    <h1>{nextRace.raceName}</h1>
                    <h2><Countdown date={`${nextRace.date}T${nextRace.time.slice(0, -1)}`} /></h2>
                    <p>{nextRace.Circuit.circuitName}</p>
                    <p>{nextRace.date} at {nextRace.time.slice(0, -4)}</p>
                    { fullscreen ? null : <Button onClick = {() => toggleFullScreen()}>Go to full-screen</Button> }

                </main>
            </header>
        ) : null
    )

}

export default Hero;
