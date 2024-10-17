import {useMenu} from "@context/AsideMenuContext.jsx";
import {Logo} from "@ui/Logo.jsx";
import CloseIcon from "@assets/icons/close.svg"
import {asideMenuItems} from "@constants/asideMenuItems.js"
import {List} from "@ui/List.jsx";
import {AsideMenuItem} from "./AsideMenuItem.jsx";
import {Fragment} from "react";

const AsideMenu = () => {
  const {closeMenu, isMenuOpen} = useMenu();

  return (
    <aside className={`aside ${isMenuOpen ? 'aside--open' : 'aside--inactive'}`}>
      <div className='aside__top'>
        <Logo/>
        <button
          onClick={closeMenu}
        >
          <img
            src={CloseIcon}
            alt='Close aside menu'
          />
        </button>
      </div>
      <List className='aside__bottom'>
        {asideMenuItems.map((asideMenuItem) => (
          <Fragment key={asideMenuItem.id}>
            <AsideMenuItem {...asideMenuItem}/>
          </Fragment>
        ))}
      </List>
    </aside>
  );
};

export {AsideMenu};