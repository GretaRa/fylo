import HeroImg from "../images/illustration-intro.png";

const Hero = () => {
	return (
		<div className="flex flex-col items-center bg-primary-intro text-center">
			<img src={HeroImg} alt="hero" className="max-w-xs md:max-w-lg lg:max-w-3xl"/>
			<h1 className="md:text-4xl text-2xl leading-relaxed font-special font-bold md:max-w-3xl max-w-xs py-8">All your files in one secure location, accessible anywhere.</h1>
			<div className="flex flex-col items-center bg-hero-pattern-mobile lg:bg-hero-pattern bg-cover bg-no-repeat bg-bottom min-w-full pb-80 -mb-[60px]">
				<p className="md:max-w-xl md:text-lg max-w-xs pb-8">
					Fylo stores all your most important files in one secure location. Access
					them wherever you need, share and collaborate with friends family, and
					co-workers.
				</p>
				<button className="rounded-3xl bg-gradient-to-r from-accent-cyan to-accent-blue hover:to-accent-cyan px-24 py-4 font-special font-bold z-10">Get Started</button>
			</div>
    </div>
	);
};

export default Hero;
