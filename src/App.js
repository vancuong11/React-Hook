import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';

import { useState, useEffect } from 'react';
import Covid from './components/Covid';
import { CountDown, NewCountDown } from './components/Coutdown';
import { Routes, Route } from 'react-router-dom';
import { path } from './utils/constain';
import Blog from './components/Blog';
import DetailBlog from './components/DetailBlog';
import AddNewBlog from './components/AddNewBlog';
import NotFound from './components/404NotFound';

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
                        <Route path={path.HOME} element={<Covid />} />
                        {/* <Route path={path.COVID} element={<Covid />} /> */}
                        <Route
                            path={path.TIMER_APP}
                            element={
                                <>
                                    <CountDown onTimesup={onTimesup} />
                                    <span>---------------------</span>
                                    <NewCountDown onTimesup={onTimesup} />
                                </>
                            }
                        />
                        <Route path={path.TODO} element={<Todo />} />
                        <Route path={path.BLOG} element={<Blog />} />
                        <Route path={path.DETAIL_BLOG} element={<DetailBlog />} />
                        <Route path={path.ABOUT} element={<div>About</div>} />
                        <Route path={path.ADD_NEW_BLOG} element={<AddNewBlog />} />
                        <Route path={'*'} element={<NotFound />} />
                    </Routes>
                </header>
            </div>
        </>
    );
}

export default App;
