import React from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage  from "./pages/RegistrationPage.tsx";
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import PrivateRoute from './routes/PrivateRoute.tsx';

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegistrationPage/>}/>
            <Route path={'/in'} element={
         
            <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
                }/>
        </Routes>
    )
}

export default App
