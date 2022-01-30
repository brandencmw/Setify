import React from 'react';
import CSS from 'csstype'
import PaginatedForm from './paginatedform/PaginatedForm';

function LoggedInScreen() {
    return(
        <div className='logged-in'>
            <PaginatedForm />
        </div>
    );
}

export default LoggedInScreen;