import React from 'react'
import LoggedOutScreen from './LoggedOutScreen'
import Navbar from './navbar/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <LoggedOutScreen />
        </div>
    );
}

export default App;