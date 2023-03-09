import { createBrowserRouter } from "react-router-dom"
import FormUser from "../components/users/FormUser"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import UsersIndex from "../pages/users/UsersIndex"

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <UsersIndex/>
          },
          {
            path: "add",
            element: <FormUser/>
          },
          {
            path: ":id",
            element: <FormUser/>
          }
        ]
      }
    ]
  },
])

export default MainRouter