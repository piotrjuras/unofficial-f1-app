import React from 'react';



const Loader = () => {


    return(
        <div style={loaderStyles}>
            <h1>Loading ...</h1>
        </div>
    )



}

const loaderStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    fontFamily: 'formula1-display-wide',
    fontSize: '13px',
    
}


export default Loader;