import Logo from '../images/logo.svg';
import Location from '../images/icon-location.svg';
import Phone from '../images/icon-phone.svg';
import Email from '../images/icon-email.svg';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary-footer">
      <div className="container mx-auto px-20 py-10">
      <img src={Logo} alt="logo" />
        <div className="flex justify-between pt-8"> 
          <div className="flex gap-8">
            <i><img src={Location} alt="icon" /></i>
            <p className="font-special text-lg max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              <div className="flex gap-8">
                <i><img src={Phone} alt="icon" /></i>
                <li>+1-543-123-4567</li>
              </div>
              <div className="flex gap-8">
                <i><img src={Email} alt="icon" /></i>
                <li>example@fylo.com</li>
              </div>
            </ul>
          </div>      
          <div className="flex flex-col gap-4">
            <h3 className=" font-special text-lg">About Us</h3>
            <ul className="flex flex-col gap-2">
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className=" font-special text-lg">Contact Us</h3>
            <ul className="flex flex-col gap-2">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <AiOutlineFacebook className="text-3xl" />
            <AiOutlineTwitter className="text-3xl" />
            <AiOutlineInstagram className="text-3xl" />
          </div>                
        </div>
      </div>
    </footer>
  )
};

export default Footer;