import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1 className={'text-3xl font-bold cursor-pointer hover:bg-amber-400 bg-red-700 text-white p-3'}>Challenge-Track</h1>
            </div>
        </>
    )
}

export default App
