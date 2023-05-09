import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-main text-neutral-white bg-primary-main flex flex-col h-screen justify-between">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
