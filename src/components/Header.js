import Logo from '../images/logo.svg';

const Header = () => {
  return (
    <div className='bg-primary-intro flex justify-between items-center md:px-20 px-6 md:pt-20 pt-6 pb-16 font-special'>
      <img src={Logo} alt='logo' className='w-20 md:w-auto' />
      <nav>
        <ul className='flex items-center md:gap-14 gap-4 text-sm md:text-base'>
          <li className='cursor-pointer hover:underline hover:underline-offset-2'>Features</li>
          <li className='cursor-pointer hover:underline hover:underline-offset-2'>Team</li>
          <li className='cursor-pointer hover:underline hover:underline-offset-2'>Sign In</li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;