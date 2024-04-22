import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        index: true,
        element:<Home />
      },
      {
        path:"/Sobre",
        element: <Sobre />,
    },
      {
        path:"/Contato",
        element: <Contato />
      },
      {
        path:"*",
        element:<PageNotFound />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
