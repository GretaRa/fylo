import Logo from '../images/logo.svg';

const Header = () => {
  return (
    <div className='bg-primary-intro flex justify-between items-center md:px-20 px-6 md:pt-16 pt-6 pb-16'>
      <img src={Logo} alt='logo' className='w-20 md:w-auto' />
      <nav>
        <ul className='flex items-center md:gap-14 gap-4 text-sm md:text-base'>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;