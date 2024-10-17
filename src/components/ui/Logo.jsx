import LogoIcon from '@assets/icons/logo.svg';

const Logo = () => {
  return (
    <a className='logo' href='/'>
      <img
        src={LogoIcon}
        alt='TexTask'
      />
    </a>
  );
};

export {Logo};