import AsideMenuIcon from "@assets/icons/aside-menu.svg"
import {useMenu} from "@context/AsideMenuContext.jsx";

const AsideBtn = () => {
  const { openMenu } = useMenu();

  return (
    <button
      onClick={openMenu}
      className='aside-btn'>
      <img
        src={AsideMenuIcon}
        alt='Burger Menu'
        width='24'
        height='24'
      />
    </button>
  );
};

export {AsideBtn};