import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Etusivu', href: '/' },
    {
      name: 'Palvelut',
      dropdown: [
        { name: 'Kuljetuspalvelut', href: '/kuljetuspalvelut' },
        { name: 'Varastointipalvelut', href: '/varastointipalvelut' },
        { name: 'Liiketila', href: '/liiketila' },
        { name: 'Koulutus & Kokous', href: '/koulutus' },
      ]
    },
    {
      name: 'Yritys',
      dropdown: [
        { name: 'Kalusto', href: '/kalusto' },
        { name: 'Historia', href: '/historia' },
      ]
    },
    { name: 'Yhteystiedot', href: '/yhteystiedot' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled && !isOpen ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <img src={logo} alt="MN Kuljetus" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href || '#'}
                className="nav-link text-xs uppercase tracking-[0.2em] font-black"
              >
                <span className="flex items-center gap-2">
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="opacity-30" />}
                </span>
              </Link>

              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full -left-4 mt-6 w-64 bg-white border border-black/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
                    >
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-6 py-4 text-sm font-bold text-dark/60 hover:text-secondary hover:bg-slate-50 transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link to="/ota-yhteytta" className="px-8 py-4 bg-secondary text-white rounded-full font-black text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/20">
            PYYDÄ TARJOUS
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden relative z-[60] w-12 h-12 flex items-center justify-center text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col justify-center p-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <Link to={link.href || '#'} className="text-4xl font-black uppercase text-dark hover:text-secondary group flex items-center gap-4">
                    {link.name}
                    {link.dropdown && <span className="text-sm opacity-20">▼</span>}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-4 pl-6 border-l border-black/5">
                      {link.dropdown.map((item) => (
                        <Link key={item.name} to={item.href} className="text-xl font-bold text-dark/60 hover:text-secondary">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/ota-yhteytta" className="mt-8 text-center py-6 bg-secondary text-white text-xl font-black rounded-3xl shadow-2xl shadow-secondary/30">
                OTA YHTEYTTÄ
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
