import NavbarApp from "../components/NavbarApp"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return(
    <div className="row-fluid">
      <NavbarApp/>
      <Outlet/>
    </div>
  )
}

export default MainLayout