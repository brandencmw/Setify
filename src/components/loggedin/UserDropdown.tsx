import React from "react";

interface userProps {
    username: String,
    userID: String,
}

function UserDropdown(props: userProps) {
    return(<h5 className='user-dropdown'>Welcome, {props.username}</h5>);
}

export default UserDropdown;