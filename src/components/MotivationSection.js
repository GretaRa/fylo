import Illustration from '../images/illustration-stay-productive.png';
import Arrow from '../images/icon-arrow.svg';

const MotivationSection = () => {
  return (
    <div className="bg-primary-main flex flex-col md:flex-row items-center justify-center px-10 py-32 gap-16">
      <img src={Illustration} alt="collaboration" />
      <div className='flex flex-col items-start gap-5'>
        <h1 className='max-w-md text-lg md:text-4xl font-special font-bold'>Stay productive, wherever you are</h1>
        <p className='max-w-lg text-sm md:text-base'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className='max-w-lg text-sm md:text-base'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <div className='underline underline-offset-8'>
          <a className='text-accent-cyan text-sm md:text-base ' href='/'>See how Fylo works</a>
          <img src={Arrow} alt="arrow" className='inline-block ml-1' />
        </div>
      </div>
    </div>
  );
};

export default MotivationSection;