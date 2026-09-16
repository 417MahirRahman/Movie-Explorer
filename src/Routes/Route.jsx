import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../Root/Root";
import All_Movies from "../pages/All-Movies/All_Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/allMovies",
        Component: All_Movies
      }
    ]
  },
]);