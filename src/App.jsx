import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'

const App = () => {
  return (
    <div className='bg--main rounded-bottom-5 '>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
