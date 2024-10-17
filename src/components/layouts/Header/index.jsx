import {Logo} from "@ui/Logo.jsx";
import {List} from "@ui/List.jsx";
import {navBtns} from '@constants/navItems.js';
import {user} from "@mocks/user.js";
import {AsideBtn} from "./AsideBtn.jsx";
import {NavItem} from "./NavItem.jsx";
import {BalanceBtn} from "./BalanceBtn.jsx";
import {UserIcon} from "./UserIcon.jsx";

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className='header__inner'>
          <div className='header__left'>
            <AsideBtn />
            <Logo/>
          </div>
          <nav className='nav'>
            <List className='nav__list'>
              {navBtns.map((navItem) => (
                <NavItem
                  key={navItem.id}
                  onClick={navItem.onClick}
                >
                  <img
                    src={navItem.icon}
                    alt={navItem.alt}
                    width='24'
                    height='24'
                  />
                </NavItem>
              ))}
            </List>
            <BalanceBtn
              balance={user.balance}
              percent={user.percent}
            />
            <UserIcon icon={user.icon}/>
          </nav>
        </div>
      </div>
    </header>
  );
};

export {Header};