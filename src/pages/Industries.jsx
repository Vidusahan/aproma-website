import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTA from '../components/sections/CTA';
import { industries } from '../data/site';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Solar energy solutions for hospitality, manufacturing, retail, agriculture, healthcare and residential sectors across Sri Lanka."
        keywords="solar for hotels Sri Lanka, factory solar, solar for business"
      />
      <PageHeader
        title="Industries We Serve"
        subtitle="Sector-specific solar expertise — because a hotel, a factory and a farm need very different systems."
        breadcrumb={[{ label: 'Industries' }]}
        image="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x">
          <SectionTitle
            eyebrow="Sectors"
            title="Purpose-built for how your sector uses energy"
            text="We model each design around real load profiles, operating hours and sector regulations."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((ind, i) => (
              <motion.article
                key={ind.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-card transition-shadow hover:shadow-soft"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{ind.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        title="Your sector, your numbers"
        text="Request a sector-specific feasibility study with load modelling and a written savings forecast."
      />
    </>
  );
}
