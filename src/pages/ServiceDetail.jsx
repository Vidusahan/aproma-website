import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import Timeline from '../components/sections/Timeline';
import Gallery from '../components/sections/Gallery';
import Accordion from '../components/ui/Accordion';
import CTA from '../components/sections/CTA';
import { services, getServiceBySlug } from '../data/services';
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

/**
 * Dynamic service detail page rendered at /services/:slug.
 * All content comes from src/data/services.js — add a service there
 * and this page renders it automatically.
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <SEO
        title={service.title}
        description={service.short}
        keywords={`${service.title} Sri Lanka, solar installation, Aproma Energy`}
        image={service.image}
      />
      <PageHeader
        title={service.title}
        subtitle={service.hero}
        breadcrumb={[{ label: 'Services', to: '/services' }, { label: service.title }]}
        image={service.image}
      />

      {/* Description + benefits */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="eyebrow">Overview</span>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              {service.title}, done properly
            </h2>
            <p className="mt-5 text-lg text-slate-500">{service.description}</p>
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="mt-8 aspect-video w-full rounded-3xl object-cover shadow-soft"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:pt-16"
          >
            <div className="rounded-3xl bg-light p-8 md:p-10">
              <h3 className="text-xl font-bold text-dark">Key benefits</h3>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-white">
                      <FiCheck aria-hidden="true" />
                    </span>
                    <span className="text-slate-600">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other services quick links */}
            <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Related services
              </h3>
              <ul className="mt-4 divide-y divide-slate-100">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="group flex items-center justify-between py-3 font-medium text-dark transition-colors hover:text-primary"
                    >
                      {s.title}
                      <FiArrowRight
                        aria-hidden="true"
                        className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-primary"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle
            eyebrow="Our Process"
            title={`How we deliver ${service.title.toLowerCase()}`}
            text="A managed, transparent journey from first call to long-term support."
          />
          <Timeline items={service.process} numbered />
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow="Gallery" title="Recent work" text="Image placeholders — replace with real project photos." />
          <Gallery images={service.gallery} alt={service.title} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-light">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-4"
          >
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Common questions</h2>
            <p className="mt-4 text-slate-500">
              Can’t find your answer? Our consultants are a phone call away.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-8"
          >
            <Accordion items={service.faqs} />
          </motion.div>
        </div>
      </section>

      <CTA
        title={`Ready to start your ${service.title.toLowerCase()} project?`}
        text="Get a free site assessment and a written proposal with your exact savings forecast."
      />
    </>
  );
}
