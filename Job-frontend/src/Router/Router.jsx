import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";
import CreateJob from "../pages/CreateJob";
import Home from "../pages/Home";
import Login from "../pages/components/Login";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/post-jobs",
                element: <CreateJob />
            },
            {
                path: "/my-jobs",
                element: <MyJobs />
            },
            {
                path: "edit-job/:id",
                element: <UpdateJob />,
                loader: ({params}) => fetch(`http://localhost:8080/all-jobs/${params.id}`),
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default router;