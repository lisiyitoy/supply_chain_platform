import React, {useReducer} from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/login' element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
