import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Abstract from './sections/Abstract';
import Methodology from './sections/Methodology';
import Results from './sections/Results';
import Conclusion from './sections/Conclusion';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Abstract />
        <Methodology />
        <Results />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
