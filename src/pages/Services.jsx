import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/cards/ServiceCard';
import CTA from '../components/sections/CTA';
import { services } from '../data/services';
import { staggerContainer, viewportOnce } from '../utils/motion';

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Residential, commercial and industrial solar, hybrid and off-grid systems, battery storage, EV charging and energy audits — complete solar solutions across Sri Lanka."
        keywords="solar services Sri Lanka, residential solar, commercial solar, battery storage, EV charging"
      />
      <PageHeader
        title="Solar Solutions for Every Scale"
        subtitle="From a single home rooftop to megawatt industrial plants — one team, end to end."
        breadcrumb={[{ label: 'Services' }]}
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x">
          <SectionTitle
            eyebrow="What We Do"
            title="Choose your path to clean energy"
            text="Every service below is delivered fully in-house: consultation, engineering, installation and lifetime support."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        title="Not sure which solution fits?"
        text="Talk to a consultant — we’ll analyse your bills and recommend the right system, free of charge."
      />
    </>
  );
}
