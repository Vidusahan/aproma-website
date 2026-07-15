import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { scaleIn, viewportOnce } from '../../utils/motion';
import { company } from '../../data/site';
import { FiPhoneCall } from 'react-icons/fi';

/** Reusable call-to-action band with gradient background. */
export default function CTA({
  title = 'Ready to go solar?',
  text = 'Book a free, no-obligation consultation. We’ll analyse your bills and show you exactly what solar can save you.',
}) {
  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-800 via-primary to-primary-600 px-8 py-16 text-center md:px-16 md:py-20"
        >
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white md:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-100">{text}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg" variant="accent">
              Get a Free Consultation
            </Button>
            <Button href={`tel:${company.hotline.replace(/\s/g, '')}`} size="lg" variant="ghost">
              <FiPhoneCall aria-hidden="true" /> {company.hotline}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
