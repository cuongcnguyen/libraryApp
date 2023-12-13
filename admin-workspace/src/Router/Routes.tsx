import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import LoginSignup from '../Views/LoginSignup'
import AdminAction from '../Views/AdminAction'
import Signup from '../Views/Signup'

export const Router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [            
            
            {path:'', element: <LoginSignup />},     
            {path:'signup', element: <Signup />},       
            {path:'admin', element:<AdminAction /> }            
            
        ]
    }
])
