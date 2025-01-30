import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import More from "../pages/More/More";
import Login from "../pages/Login/Login";
import HomeDetails from "../pages/HomeDetails/HomeDetails";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/more',
                element: <More></More>
            },
            {
                path: '/:id',
                loader: ({params})=>fetch(`https://api2-kohl.vercel.app/allhouses/${params.id}`),
                element:<HomeDetails></HomeDetails>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    },
])

export default router;