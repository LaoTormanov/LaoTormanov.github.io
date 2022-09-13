import React from 'react'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import PostPage from '../pages/PostPage'
import Auth from '../pages/Auth'
import { Navigate } from 'react-router-dom'


export const privateRoutes = [
    {path: '/', element: <Home/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostPage/>},
    {path: '*', element: <Navigate to='/'/>},
    {path: 'auth', element: <Auth/>}
]

export const publicRoutes = [
    {path: '/', element: <Home/>},
    {path: 'auth', element: <Auth/>},
    {path: '*', element: <Navigate to='auth'/>}
]