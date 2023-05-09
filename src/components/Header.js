import Logo from '../images/logo.svg';

const Header = () => {
  return (
    <div className='bg-primary-intro text-neutral-white flex justify-between px-20 pt-10 pb-4'>
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