import React, { Suspense, lazy } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//         key:"h1"
//     },
//     "Heading sample 1   "
// )

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense><About /></Suspense>
            },
            {
                path: '/restaurants/:restId',
                element: <RestaurantMenu />
            },
        ],
    },

])


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)