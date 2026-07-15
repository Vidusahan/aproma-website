import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiSun,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
} from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { company } from '../../data/site';
import { services } from '../../data/services';

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Industries', to: '/industries' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-dark text-slate-300">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-center gap-6 py-12 md:flex-row md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Stay charged with solar insights</h2>
            <p className="mt-1 text-slate-400">
              Monthly updates on tariffs, technology and clean energy in Sri Lanka.
            </p>
          </div>
          {subscribed ? (
            <p className="rounded-full bg-primary-50/10 px-6 py-3 font-medium text-secondary">
              Subscribed — welcome aboard.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder:text-slate-500 focus:border-secondary"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-dark transition-colors hover:bg-amber-400"
              >
                Subscribe <FiArrowRight aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <Link to="/" className="flex items-center gap-2.5" aria-label="Aproma Energy — Home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <FiSun className="text-xl" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-white">APROMA</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary">
                Energy Solutions
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            {company.name} designs, installs and maintains solar energy systems for homes,
            businesses and industry across Sri Lanka — over 50 MW delivered since 2011.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: <FaFacebookF />, href: company.social.facebook, label: 'Facebook' },
              { icon: <FaInstagram />, href: company.social.instagram, label: 'Instagram' },
              { icon: <FaLinkedinIn />, href: company.social.linkedin, label: 'LinkedIn' },
              { icon: <FaYoutube />, href: company.social.youtube, label: 'YouTube' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h3>
          <ul className="mt-5 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-slate-400 transition-colors hover:text-secondary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Services</h3>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-sm text-slate-400 transition-colors hover:text-secondary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + map placeholder */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li className="flex gap-3">
              <FiMapPin className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
              {company.address}
            </li>
            <li className="flex gap-3">
              <FiPhone className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-secondary">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <FiMail className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-secondary">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <FiClock className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
              {company.hours}
            </li>
          </ul>
          {/* Google Maps placeholder — replace with a real embed */}
          <div
            className="mt-5 flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs text-slate-500"
            role="img"
            aria-label="Map placeholder showing office location"
          >
            Google Maps embed placeholder
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Powering Sri Lanka’s clean energy future.</p>
        </div>
      </div>
    </footer>
  );
}
