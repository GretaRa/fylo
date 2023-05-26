import SignUp from "./SignUp";
import Logo from "../images/logo.svg";
import Location from "../images/icon-location.svg";
import Phone from "../images/icon-phone.svg";
import Email from "../images/icon-email.svg";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="bg-primary-footer relative">
			<SignUp />
			<div className="container mx-auto lg:px-20 px-10 pb-10 pt-20">
				<img src={Logo} alt="logo" />
				<div className="flex flex-col lg:flex-row justify-between pt-8 gap-4">
					<div className="flex gap-8">
						<i className="shrink-0">
							<img src={Location} alt="icon" />
						</i>
						<p className="font-special text-lg max-w-md">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<div className="flex gap-8">
								<i>
									<img src={Phone} alt="icon" />
								</i>
								<p>+1-543-123-4567</p>
							</div>
							<div className="flex gap-8">
								<i>
									<img src={Email} alt="icon" />
								</i>
								<p>example@fylo.com</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4 mt-8 lg:mt-0">
						<h3 className=" font-special text-lg hover:font-bold cursor-pointer">
							About Us
						</h3>
						<ul className="flex flex-col gap-2">
							<li className="cursor-pointer">Jobs</li>
							<li className="cursor-pointer">Press</li>
							<li className="cursor-pointer">Blog</li>
						</ul>
					</div>
					<div className="flex flex-col gap-4 mt-8 lg:mt-0">
						<h2 className=" font-special text-lg hover:font-bold cursor-pointer">
							Contact Us
						</h2>
						<ul className="flex flex-col gap-2">
							<li className="cursor-pointer">Terms</li>
							<li className="cursor-pointer">Privacy</li>
						</ul>
					</div>
					<div className="flex gap-4 justify-center mt-6 lg:mt-0">
						<AiOutlineFacebook className="text-3xl hover:fill-accent-cyan cursor-pointer" />
						<AiOutlineTwitter className="text-3xl hover:fill-accent-cyan cursor-pointer" />
						<AiOutlineInstagram className="text-3xl hover:fill-accent-cyan cursor-pointer" />
					</div>
				</div>
			</div>
			<p class="text-center pb-5">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:text-accent-cyan" rel="noreferrer">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/GretaRa" className="hover:text-accent-cyan">Greta Rakauskaite</a>.
    	</p>
		</footer>
	);
};

export default Footer;
