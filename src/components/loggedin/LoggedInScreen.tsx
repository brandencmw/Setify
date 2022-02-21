import React from 'react';
import axios, { AxiosResponse } from 'axios';
import PaginatedForm from './paginatedform/PaginatedForm';
import UserDropdown from './UserDropdown';

function LoggedInScreen() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');
    const [user, setUser] = React.useState<AxiosResponse | null | void >(null);
    const [playlists, setPlaylists] = React.useState<AxiosResponse | null | void | []>([]);

    React.useEffect(() => {
        if(token) {
            axios({
                method: 'GET',
                url: 'http://localhost:5000/get-userdata',
                headers: {
                    'Authorization': token
                }
            }).then((user: any) => {
                axios({
                    method: 'GET',
                    url: 'http://localhost:5000/get-playlists',
                    headers: {
                        'User': user.data['userID']
                    }
                }).then((playlists: any) => {
                    console.log(playlists);
                    setPlaylists(playlists);
                });
                setUser(user);
            }).catch((err: any) => {
                console.log(err);
            });
        }
    }, []);

    console.log(user);

    const renderUser = () => {
        if(user) {
            return(<UserDropdown username={user.data.displayName} userID={user.data.userID} />);
        }
    };

    return(
        <div className='logged-in'>
            {renderUser()}
            <PaginatedForm />
        </div>
    );
}

export default LoggedInScreen;