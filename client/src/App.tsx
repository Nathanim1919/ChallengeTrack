import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage  from "./pages/RegistrationPage.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegistrationPage/>}/>
        </Routes>
    )
}

export default App
