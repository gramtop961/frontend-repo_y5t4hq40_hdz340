import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <div className="h-7 w-7 rounded-md bg-blue-600 text-white grid place-items-center font-bold">CC</div>
          <span>© {new Date().getFullYear()} Competence Consulting. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#approach" className="hover:text-blue-700">Approach</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
