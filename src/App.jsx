import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import VisitContact from './components/VisitContact';

function App() {
  return (
    <div className="min-h-screen bg-[#fff8f1] text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-serif text-xl text-neutral-900">Woodward St Bakery Café</a>
          <nav className="hidden gap-6 text-sm text-neutral-700 md:flex">
            <a href="#about" className="hover:text-amber-700 transition-colors">About</a>
            <a href="#menu" className="hover:text-amber-700 transition-colors">Menu</a>
            <a href="#visit" className="hover:text-amber-700 transition-colors">Visit</a>
          </nav>
          <a href="#visit" className="rounded-full bg-amber-600 px-4 py-2 text-sm text-white shadow hover:bg-amber-700">Get Directions</a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <VisitContact />
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-[#fffaf4] py-8 text-center text-neutral-700">
        <p className="font-serif text-lg">Freshly baked, locally loved.</p>
        <p className="mt-2 text-sm">© 2025 Woodward St Bakery Café</p>
      </footer>
    </div>
  );
}

export default App;
