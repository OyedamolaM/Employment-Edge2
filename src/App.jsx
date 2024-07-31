import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Landing from './Components/LandingPage/Landing'
import Navbar from './Components/navbar/Navbar'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
   
    {/* Let your routes come in here */}
    
    <h1>Employment edge!!!</h1>
   
    <Landing/>
    </BrowserRouter>
    

</>
  )
}

export default App
