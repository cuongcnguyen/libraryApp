import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import LoginSignup from '../Views/LoginSignup'
import AdminAction from '../Views/AdminAction'

export const Router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [            
            
            {path:'', element: <LoginSignup />},            
            {path:'admin', element:<AdminAction /> }
            
        ]
    }
])
