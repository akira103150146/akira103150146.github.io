import { Outlet, Link } from "react-router-dom";
import MyLink from "./components/MyLink";
import banner from "./imgs/Br.png"

const Layout = () => {
  return (
    <>
      <nav>
        <img className="w-full lg:h-80 md:h-48"
          src={banner}></img>
        <ul className="w-full flex">
          <div className="flex-1"></div>
          <div className="contents">
            <div className="flex-1  flex flex-row">
              <MyLink url='/' name='題庫'></MyLink>
              <MyLink url='/english-class' name='上英文辣'></MyLink>
            </div>
          </div>
          <div className="flex-1"></div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;