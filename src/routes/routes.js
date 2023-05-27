import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../login/Register";
import Shop from "../pages/shop/Shop";
import Test from "../pages/shop/Test";
import Test2 from "../pages/shop/Test2";


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
                // element: <Login></Login>
                element: <Test></Test>
            },
            {
                path: '/login/data',
                // element: <Login></Login>
                element: <Test2></Test2>
            }
        ]
    }
])