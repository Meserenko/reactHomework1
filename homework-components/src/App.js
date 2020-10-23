import React from 'react';
import Search from "./components/search/search";
import RandomOutput from "./components/randomOutput/randomOutput";
import './App.css';

function App(props) {
    return (
        <div className='wrapper'>
            <h1>Hello World!</h1>
            <Search text='Test' />
            <RandomOutput />
        </div>

    )
}

export default App;
