import React, { useEffect, useState } from 'react';
import './styles/App.css'
import { Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import Home from './pages/Home'
import Posts from './pages/Posts'
import Navigation from './Components/UI/Navigation/Navigation';
import AppRouter from './Components/AppRouter';
import { MyContext } from './context/context';

function App() {

  const [auth, setAuth] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true)
      setAuthLoading(false)
    }
  }, [])
  
    
  return (
    <MyContext.Provider
      value={{
        auth,
        setAuth,
        authLoading
      }}
    >
      <BrowserRouter>
        <Navigation/>
        <AppRouter/>   
      </BrowserRouter>
    </MyContext.Provider>
    );

}

export default App;