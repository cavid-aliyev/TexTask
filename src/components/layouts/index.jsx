import {Header} from "./Header/index.jsx";
import {MenuProvider} from "@context/AsideMenuContext.jsx";
import {AsideMenu} from "@layouts/AsideMenu/index.jsx";

const Layout = ({children}) => {
  return (
    <MenuProvider>
      <Header/>
      <AsideMenu />
      {children}
    </MenuProvider>
  );
};

export {Layout}