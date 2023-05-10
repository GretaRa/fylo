import HeroImg from "../images/illustration-intro.png";
import CurveDesktop from "../images/bg-curvy-desktop.svg";

const Hero = () => {
	return (
		<div className="flex flex-col items-center bg-primary-intro text-center">
			<img src={HeroImg} alt="hero" className="max-w-xs md:max-w-lg"/>
			<h1 className="md:text-4xl text-2xl leading-relaxed font-special font-bold md:max-w-2xl max-w-xs py-8 z-10">All your files in one secure location, accessible anywhere.</h1>
			<p className="md:max-w-xl md:text-lg max-w-xs pb-8 z-10">
				Fylo stores all your most important files in one secure location. Access
				them wherever you need, share and collaborate with friends family, and
				co-workers.
			</p>
			<button className="rounded-3xl bg-gradient-to-r from-accent-cyan to-accent-blue hover:to-accent-cyan px-24 py-4 font-special font-bold z-10">Get Started</button>
      <img src={CurveDesktop} alt="curve" className="w-full z-0 relative" />
    </div>
	);
};

export default Hero;
