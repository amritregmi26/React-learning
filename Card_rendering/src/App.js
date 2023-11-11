import React from 'react';
import userData from './userdata';
import './App.css'

const Card = (props) => {
    return(
        <>
        <div className='card'>
            <h2> Name: {props.name} </h2>
            <h2> Age: {props.age} </h2>
            <h3> Address: {props.addr} </h3>
            </div>
            {console.log(userData)}
        </>
    );
}

const App = () => {
    return (
        <>
        <Card name = {userData[0].name} 
              age = {userData[0].age}
              addr = {userData[0].Address}
        />
        <Card name = {userData[1].name} 
              age = {userData[1].age}
              addr = {userData[1].Address}
        />
        <Card name = {userData[2].name} 
              age = {userData[2].age}
              addr = {userData[2].Address}
        />
        <Card name = {userData[3].name} 
              age = {userData[3].age}
              addr = {userData[3].Address}
        />
        <Card name = {userData[4].name} 
              age = {userData[4].age}
              addr = {userData[4].Address}
        />
        <Card name = {userData[5].name} 
              age = {userData[5].age}
              addr = {userData[5].Address}
        />
        <Card name = {userData[6].name} 
              age = {userData[6].age}
              addr = {userData[6].Address}
        />
        </>
    );
}

export default App;