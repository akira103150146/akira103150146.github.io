import { Outlet, Link } from "react-router-dom";
import MyLink from "./components/MyLink";

const Layout = () => {
  const links: Map<string, string> = new Map([
    ['/', '首頁'],
    ['/english-class', '英文'],
    
  ]);
  return (
    <>
      <nav className="bg-gray-800 " >
        <ul className="inline-grid grid-cols-3 gap-4">
          <MyLink url='/' name='首頁'></MyLink>
          <MyLink url='/english-class' name='上英文辣'></MyLink>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;