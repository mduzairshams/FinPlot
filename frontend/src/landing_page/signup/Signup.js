import React from 'react';
import OpenAccount from "../OpenAccount"
import Hero from "./Hero"
import OpenNow from "./OpenNow"
import Investment from "./Investment"

function Signup() {
    return ( 
        <>
        <Hero/>
        <OpenNow/>
        <Investment/>
        <OpenAccount/>        
        </>
        
     );
}

export default Signup;