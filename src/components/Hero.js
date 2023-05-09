import HeroImg from "../images/illustration-intro.png";
import CurveDesktop from "../images/bg-curvy-desktop.svg";

const Hero = () => {
	return (
		<div className="flex flex-col items-center bg-primary-intro text-center">
			<img src={HeroImg} alt="hero" />
			<h1 className="text-4xl leading-relaxed font-special font-bold max-w-2xl py-8 z-10">All your files in one secure location, accessible anywhere.</h1>
			<p className="max-w-xl text-lg pb-8 z-10">
				Fylo stores all your most important files in one secure location. Access
				them wherever you need, share and collaborate with friends family, and
				co-workers.
			</p>
			<button className="rounded-3xl bg-gradient-to-r from-accent-cyan to-accent-blue px-24 py-4 font-special font-bold z-10">Get Started</button>
      <img src={CurveDesktop} alt="curve" className="w-full z-0 relative" />
    </div>
	);
};

export default Hero;
