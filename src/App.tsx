import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ServiceIntro from './components/ServiceIntro';
import UseCases from './components/UseCases';
import Rules from './components/Rules';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <ServiceIntro />
        <UseCases />
        <Rules />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
