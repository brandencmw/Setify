import React from "react";

interface userProps {
    username: String,
    userID: String,
}

function UserDropdown(props: userProps) {
    return(<h1>Welcome, {props.username}</h1>);
}

export default UserDropdown;