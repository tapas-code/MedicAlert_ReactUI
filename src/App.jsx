import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import kc from './authentication/Keycloak' // keycloak client

const App = () => {
  
  return (
    <ReactKeycloakProvider authClient={kc}>
      <div className='bg--main rounded-bottom-5 '>
        <RouterProvider router={Router}/>
      </div>
    </ReactKeycloakProvider>
  )
}

export default App
