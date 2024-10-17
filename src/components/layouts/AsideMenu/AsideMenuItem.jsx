const AsideMenuItem = ({title, link}) => {
  return (
    <li className='aside__bottom-item'>
      <a href={link}>
        {title}
      </a>
    </li>
  );
};

export {AsideMenuItem};