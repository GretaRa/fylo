import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import MotivationSection from './components/MotivationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-main text-neutral-white bg-primary-main flex flex-col h-screen justify-between">
      <Header />
      <Hero />
      <ProductGrid />
      <MotivationSection />
      <Footer />
    </div>
  );
}

export default App;
