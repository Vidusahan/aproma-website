import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiSun, FiArrowRight } from 'react-icons/fi';
import useScrollPosition from '../../hooks/useScrollPosition';
import { services } from '../../data/services';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', mega: true },
  { label: 'Projects', to: '/projects' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Industries', to: '/industries' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

/**
 * Sticky navbar: transparent over the home hero, glassmorphic once scrolled
 * or on inner pages. Includes a Services mega menu and a mobile drawer.
 */
export default function Navbar() {
  const scrolled = useScrollPosition(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        {/* Logo placeholder — replace with the company logo image */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Aproma Energy — Home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-soft">
            <FiSun className="text-xl" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className={`block text-lg font-extrabold tracking-tight ${solid ? 'text-dark' : 'text-white'}`}>
              APROMA
            </span>
            <span className={`block text-[10px] font-semibold uppercase tracking-[0.25em] ${solid ? 'text-primary' : 'text-secondary'}`}>
              Energy Solutions
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.mega ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      solid
                        ? isActive
                          ? 'text-primary'
                          : 'text-slate-600 hover:text-primary'
                        : 'text-white/90 hover:text-white'
                    }`
                  }
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                >
                  {link.label}
                  <FiChevronDown
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`}
                  />
                </NavLink>

                {/* Mega menu */}
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4"
                    >
                      <div className="glass rounded-3xl p-6">
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-primary-50"
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                <FiSun aria-hidden="true" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-dark group-hover:text-primary">
                                  {s.title}
                                </span>
                                <span className="mt-0.5 block text-xs text-slate-500 line-clamp-2">
                                  {s.short}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/services"
                          className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-dark py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
                        >
                          View all services <FiArrowRight aria-hidden="true" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? isActive
                        ? 'text-primary'
                        : 'text-slate-600 hover:text-primary'
                      : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" size="sm" variant={solid ? 'primary' : 'accent'}>
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden text-2xl ${solid ? 'text-dark' : 'text-white'}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) =>
                link.mega ? (
                  <div key={link.to}>
                    <button
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-medium text-dark hover:bg-primary-50"
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <FiChevronDown
                        aria-hidden="true"
                        className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 font-medium ${
                        isActive ? 'bg-primary-50 text-primary' : 'text-dark hover:bg-primary-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <div className="mt-2 px-4 pb-2">
                <Button to="/contact" className="w-full">
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
