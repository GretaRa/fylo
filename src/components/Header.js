import Logo from '../images/logo.svg';

const Header = () => {
  return (
    <div className='bg-primary-intro flex justify-between items-center px-20 pt-16 pb-16'>
      <img src={Logo} alt='logo' />
      <nav>
        <ul className='flex items-center gap-14'>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;