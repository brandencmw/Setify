import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CSS from 'csstype'
import LoggedOutScreen from './loggedout/LoggedOutScreen';
import LoggedInScreen from './loggedin/LoggedInScreen';


const bodyStyle: CSS.Properties = {
    color: "white",
    flexGrow: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    padding: "40px"
}

function Body() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');
    let disp;
    if(token != null) {
        disp = <LoggedInScreen />
    } else {
        disp = <LoggedOutScreen />
    }

    return(
        <div style={bodyStyle}>
            {disp}
        </div>
    );
}

export default Body;