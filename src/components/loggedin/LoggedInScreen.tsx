import React from 'react';
import axios, { AxiosResponse } from 'axios';
import PaginatedForm from './paginatedform/PaginatedForm';
import UserDropdown from './UserDropdown';

function LoggedInScreen() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');

    interface userType {
        displayName: string,
        userID: string
    }
    const [user, setUser] = React.useState<null | void | userType>(null);

    React.useEffect(() => {
        if(token) {
            axios({
                method: 'GET',
                url: 'http://localhost:5000/get-userdata',
                headers: {
                    'Authorization': token
                }
            }).then((user: any) => {
                setUser(user.data);
            }).catch((err: any) => {
                console.log(err);
            });
        }
    }, []);

    if(user) {
        return(
            <div className='logged-in'>
                <UserDropdown username={user.displayName} userID={user.userID} />
                <PaginatedForm user={user} />
            </div>
        );
    } else {
        return <></>
    }

}

export default LoggedInScreen;