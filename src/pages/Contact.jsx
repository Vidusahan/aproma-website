import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/sections/ContactForm';
import { company } from '../data/site';
import { fadeLeft, fadeRight, viewportOnce } from '../utils/motion';

const details = [
  { icon: <FiMapPin />, label: 'Head Office', value: company.address },
  { icon: <FiPhone />, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
  { icon: <FiPhone />, label: '24/7 Hotline', value: company.hotline, href: `tel:${company.hotline.replace(/\s/g, '')}` },
  { icon: <FiMail />, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: <FiClock />, label: 'Working Hours', value: company.hours },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get a free solar consultation from Aproma Energy Solutions. Call, email or visit our Colombo office — island-wide service across Sri Lanka."
        keywords="contact solar company Sri Lanka, free solar quote, solar consultation Colombo"
      />
      <PageHeader
        title="Let’s Talk Solar"
        subtitle="Free consultation, honest advice and a written proposal — no obligation, ever."
        breadcrumb={[{ label: 'Contact' }]}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-5">
          {/* Office details */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <span className="eyebrow">Contact Details</span>
            <h2 className="mt-4 text-3xl md:text-4xl">We’re easy to reach</h2>
            <ul className="mt-8 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-xl text-primary">
                    {d.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="font-semibold text-dark transition-colors hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-dark">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-light text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <div className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-100 md:p-12">
              <h2 className="text-2xl font-bold">Request a free consultation</h2>
              <p className="mt-2 text-slate-500">
                Tell us about your property and we’ll respond within one working day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map placeholder — replace this block with a Google Maps iframe embed */}
      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div
            className="flex h-80 items-center justify-center rounded-[2rem] bg-light text-slate-400 ring-1 ring-slate-100"
            role="img"
            aria-label="Map placeholder showing the Aproma Energy head office in Colombo"
          >
            <div className="text-center">
              <FiMapPin className="mx-auto text-4xl text-primary" aria-hidden="true" />
              <p className="mt-3 font-medium">Google Maps embed placeholder</p>
              <p className="text-sm">{company.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
