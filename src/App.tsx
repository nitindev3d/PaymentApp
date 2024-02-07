import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Signup from './components/signup';
import LandingPage from './components/landingpage';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <>
      <NavBar setIsAuthenticated={setIsAuthenticated} />
      {!isAuthenticated ?
        <Signup /> :
        <LandingPage />
      }
    </>
  )
}

export default App
