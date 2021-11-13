import React, {useEffect, useState} from 'react';

import './Toggler.css'



export const Toggler = () => {

    const [toggler, setToggler] = useState(false);


    useEffect(() => {

        if(localStorage.getItem("theme_setting")){
            setToggler(true);
            document.documentElement.className = "dark";

        } else {
            setToggler(false);
            document.documentElement.className = "light";

        }

    },[toggler])


    const togglerHandler = () => {
        toggler ? setToggler(false) : setToggler(true);
        !toggler ? localStorage.setItem("theme_setting", "dark") : localStorage.removeItem("theme_setting");

    }

    
    return (
        <div className="toggle_container">dark mode
            <div className="toggle_switch" onClick={() => togglerHandler()}>
                <div className="outer">
                    <span className={`inner ${toggler ? "dark" : "light"}`}>

                    </span>
                </div>
            </div>
        </div>
      );


}




