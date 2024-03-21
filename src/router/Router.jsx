import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
        </Route>
    )
)

export default Router
