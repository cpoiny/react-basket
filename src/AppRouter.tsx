import App from "App"
import CartPage from "pages/CartPage"
import HomePage from "pages/HomePage"
import ProductDetailsPage from "pages/ProductDetailsPage"
import ProductsPage from "pages/ProductsPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children : [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: "/products",
                    element: <ProductsPage />
                },
                {
                    path: "/product-details",
                    element: <ProductDetailsPage />
                },
                {
                    path: "/cart",
                    element: <CartPage />
                }
            ]
        }
    ])
    return (<RouterProvider router={router} />)
    }

    export default AppRouter;