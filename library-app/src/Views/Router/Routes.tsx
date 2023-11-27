import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import ShopGridSidebar from '../ShopGridSidebar'
import ShopDetail from '../ShopDetail'
import LoginSignup from '../LoginSignup'
import ShopCart from '../ShopCart'


export const Router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {path:'', element: <ShopGridSidebar />},
            {path:'shopDetails/:id', element: <ShopDetail />},
            {path:'signup', element: <LoginSignup />},
            {path:'shopCart', element: <ShopCart />},            
        ]
    }
])
