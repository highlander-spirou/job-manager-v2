import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./components/layouts"
import App from "./App"

const createRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <App /> },
      ],
    },
  ])
}

export default createRouter