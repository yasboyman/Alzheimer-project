import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home'
import Nav from "./components/Nav/Nav";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'



const App = () => {
    return (
        <div className="App" data-testid="app_container">
            <Nav />
            {/*<header className="App-header">*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    {/*<Route path="login" element={<Login />} />*/}
                    <Route path="/register" element={<Register />} />
                </Routes>
            <ToastContainer/>
            {/*</header>*/}
        </div>
    );
}

export default App;
