import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import MyPostedJob from "../pages/MyPostedJob";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequest from "../pages/BidRequest";
import AllJob from "../pages/AllJob";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-job/:email",
        element: (
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/postedJob/${params.email}`, {
            credentials: "include",
          }),
      },
      {
        path: "/update-job/:id",
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: "/bid-request",
        element: (
          <PrivateRoute>
            <BidRequest></BidRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "all-job",
        element: <AllJob></AllJob>
      }
    ],
  },
]);
export default router;
