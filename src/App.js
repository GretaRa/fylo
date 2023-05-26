import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import MotivationSection from "./components/MotivationSection";
import ReviewGrid from "./components/ReviewGrid";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="font-main text-neutral-white bg-primary-main flex flex-col h-screen justify-between">
			<div className="bg-hero-pattern-mobile lg:bg-hero-pattern bg-no-repeat bg-bottom bg-contain bg-primary-intro pb-16 lg:pb-56">
				<Header />
				<Hero />
			</div>
			<ProductGrid />
			<MotivationSection />
			<ReviewGrid />
			<Footer />
		</div>
	);
}

export default App;
