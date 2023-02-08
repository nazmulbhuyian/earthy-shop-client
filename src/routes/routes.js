import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../login/Register";
import Shop from "../pages/shop/Shop";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Shop></Shop>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])