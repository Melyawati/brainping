import Login from '../pages/auth/login';
import Register from '../pages/auth/register'
import Dashboard from '../pages/dashboard';

const routes = [
    {
        path: "/",
        component: Dashboard,
        title: "Dashboard Page"
    },
    {
        path: "/login",
        component: Login,
        title: "Login Page",
        childs: [
           {
            path: "/login/register",
            component: Register,
            title: "Register Page",
           }
        ]
    },
    // {
    //     path: "/register",
    //     component: Register,
    //     title: "sukses"
    // }
]

export default routes