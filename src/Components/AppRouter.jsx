import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import PostPage from '../pages/PostPage'
import { privateRoutes, publicRoutes } from '../router/routes'
import { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/context'
import MyLoader from './UI/Loader/MyLoader'

const AppRouter = () => {

  const {auth, authLoading} = useContext(MyContext)

  if (authLoading) {
    return <MyLoader/>
  }

  return (
    auth
      ?
        <Routes>
            {privateRoutes.map(r => 
              <Route path={r.path} element={r.element} key={r.path}/>  
            )} 
        </Routes>
      :
        <Routes>
          {publicRoutes.map(r => 
            <Route path={r.path} element={r.element} key={r.path}/>
          )}
        </Routes>
  )
}

export default AppRouter
