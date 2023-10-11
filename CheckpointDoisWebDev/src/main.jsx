import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './routes/Error/error.jsx'
import Home from './routes/Home/home.jsx'
import Aparelhos from './routes/Aparelhos/aparelhos.jsx'
import VisualizarAparelho from './routes/VisualizarAparelho/visualizar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/Aparelhos',
        element: <Aparelhos/>
      },
      {
        path: '/VisualizarAparelho/:id',
        element: <VisualizarAparelho/>
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
