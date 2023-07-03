import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';

import { useState, useEffect } from 'react';
import Covid from './components/Covid';
import { CountDown, NewCountDown } from './components/Coutdown';
import { Routes, Route } from 'react-router-dom';
import { path } from './utils/constain';

function App() {
    // let name = 'Valne Cường'; // string

    // useEffect(function) => call when render
    // useEffect(function, []) => componentDidMount()
    // useEffect(function, [state]) => componentDidUpdate()

    const onTimesup = () => {
        alert('times up');
    };

    // re-render
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <CountDown onTimesup={onTimesup} />
                    <span>---------------------</span>
                    <NewCountDown onTimesup={onTimesup} /> */}

                    {/* Router */}
                    <Routes>
                        <Route path={path.COVID} element={<Covid />} />
                        <Route path={path.TODO} element={<Todo />} />
                    </Routes>
                </header>
            </div>
        </>
    );
}

export default App;
