import React from 'react'
import Header  from './components/header'
import AllRoute from './routes/AllRouter'
import './App.css'

const App = () => {
    return(
        <div className='App'>
            <Header />
            <main>
                <AllRoute/>
            </main>
        </div>

    );
};

export default App;