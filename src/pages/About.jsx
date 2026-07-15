import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiAward } from 'react-icons/fi';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import Timeline from '../components/sections/Timeline';
import Gallery from '../components/sections/Gallery';
import CTA from '../components/sections/CTA';
import { team, milestones, values, certifications, awards } from '../data/site';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../utils/motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Aproma Energy Solutions — 15+ years of solar engineering excellence in Sri Lanka. Meet our team, values, certifications and journey to 50 MW installed."
        keywords="about Aproma Energy, solar company Sri Lanka, solar engineers Colombo"
      />
      <PageHeader
        title="About Aproma Energy"
        subtitle="Fifteen years, a thousand rooftops, one mission: clean, affordable energy for Sri Lanka."
        breadcrumb={[{ label: 'About Us' }]}
        image="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Company story */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              From three engineers and a van to Sri Lanka’s trusted solar partner
            </h2>
            <div className="mt-6 space-y-4 text-slate-500">
              <p>
                Aproma Energy Solutions was founded in Colombo in 2011 by three engineers who
                believed rooftop solar would transform how Sri Lanka powers itself — years before
                net metering became a household term.
              </p>
              <p>
                What began with residential installations grew, project by project, into a full
                energy solutions company. Today our teams design and deliver everything from 3 kW
                home systems to megawatt-scale industrial plants, with in-house engineering,
                installation, O&M and financing support.
              </p>
              <p>
                Through tariff changes, supply crises and a national energy transition, one thing
                has stayed constant: we engineer every system as if it were going on our own roof.
              </p>
            </div>
          </motion.div>
          <motion.img
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80"
            alt="Large rooftop solar array installed by Aproma Energy"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section bg-light">
        <div className="container-x grid gap-7 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl bg-white p-10 shadow-card"
          >
            <FiEye className="text-3xl text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-slate-500">
              A Sri Lanka powered predominantly by clean, distributed renewable energy — where
              every suitable rooftop contributes to national energy independence.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl bg-white p-10 shadow-card"
          >
            <FiTarget className="text-3xl text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-slate-500">
              To make premium solar energy simple, reliable and financially rewarding for every Sri
              Lankan home and business — through honest advice, excellent engineering and lifetime
              customer care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow="Core Values" title="What we refuse to compromise on" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card"
              >
                <span className="text-4xl font-extrabold text-primary-100">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-bold text-dark">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MD message */}
      <section className="section bg-dark text-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-4"
          >
            {/* MD photo placeholder */}
            <img
              src={team[0].photo}
              alt={`${team[0].name}, Managing Director`}
              loading="lazy"
              className="aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover shadow-soft"
            />
          </motion.div>
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-8"
          >
            <span className="eyebrow text-secondary">Message from the Managing Director</span>
            <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-slate-100 md:text-3xl">
              “Every kilowatt we install is a promise — that it will perform for decades, that our
              customer made a sound decision, and that Sri Lanka is a little more energy
              independent than yesterday. We take that promise personally.”
            </blockquote>
            <p className="mt-6 font-bold text-white">{team[0].name}</p>
            <p className="text-sm text-slate-400">Managing Director, Aproma Energy Solutions (Pvt) Ltd</p>
          </motion.div>
        </div>
      </section>

      {/* Company timeline */}
      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow="Our Journey" title="Milestones along the way" />
          <Timeline items={milestones} />
        </div>
      </section>

      {/* Team */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle
            eyebrow="Leadership"
            title="The people behind the panels"
            text="A leadership team combining chartered engineering, project delivery and customer care."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {team.map((m, i) => (
              <motion.figure
                key={m.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-card"
              >
                <div className="h-72 overflow-hidden">
                  {/* Team photo placeholder */}
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6 text-center">
                  <p className="font-bold text-dark">{m.name}</p>
                  <p className="text-sm text-primary">{m.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container-x">
          <SectionTitle
            eyebrow="Certifications"
            title="Accredited & audited"
            text="Certification logo placeholders — replace with official marks."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center gap-4 rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card"
              >
                <img src={c.logo} alt={c.name} loading="lazy" className="h-24 w-24 rounded-2xl object-contain" />
                <p className="text-sm font-medium text-slate-500">{c.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle eyebrow="Recognition" title="Awards & honours" />
          <div className="mx-auto max-w-3xl space-y-4">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-xl text-accent">
                  <FiAward aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-dark">{a.title}</p>
                  <p className="text-sm text-slate-400">{a.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow="Gallery" title="Aproma at work" text="Photo placeholders from installations and team life." />
          <Gallery images={galleryImages} alt="Aproma Energy at work" />
        </div>
      </section>

      <CTA />
    </>
  );
}
