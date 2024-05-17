import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AboutBox, MainBox, ErrorPage} from './App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainBox/>,
        errorElement:<MainBox> <ErrorPage/></MainBox>

    },
    {
        path:'/About',
        element:<AboutBox><ErrorPage/></AboutBox>

    }
   
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

