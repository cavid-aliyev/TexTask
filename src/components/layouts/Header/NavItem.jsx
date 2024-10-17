const NavItem = ({onClick, children}) => {
  return (
    <li className='nav__item'>
      <button onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export {NavItem};