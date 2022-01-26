import React from "react";
import CSS from "csstype"
import LoggedOutScreen from "./loggedout/LoggedOutScreen";


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
    return(
        <div style={bodyStyle}>
            <LoggedOutScreen />
        </div>
    );
}

export default Body;