import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiAward,
  FiShield,
  FiHeadphones,
  FiCreditCard,
  FiMap,
  FiUsers,
  FiTarget,
  FiEye,
} from 'react-icons/fi';
import SEO from '../components/ui/SEO';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ServiceCard from '../components/cards/ServiceCard';
import ProjectCard from '../components/cards/ProjectCard';
import BlogCard from '../components/cards/BlogCard';
import Stats from '../components/sections/Stats';
import Timeline from '../components/sections/Timeline';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import PartnerSlider from '../components/sections/PartnerSlider';
import CTA from '../components/sections/CTA';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { blogs } from '../data/blogs';
import { whyChooseUs, processSteps, partners, clients } from '../data/site';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../utils/motion';

// Icon lookup for the Why Choose Us feature cards
const whyIcons = {
  engineer: <FiUsers />,
  quality: <FiAward />,
  warranty: <FiShield />,
  support: <FiHeadphones />,
  finance: <FiCreditCard />,
  island: <FiMap />,
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const latestBlogs = blogs.slice(0, 3);

  return (
    <>
      <SEO
        title="Solar Power Systems for Homes & Businesses in Sri Lanka"
        description="Aproma Energy Solutions designs, installs and maintains premium solar systems across Sri Lanka — residential, commercial, industrial, hybrid, battery storage and EV charging."
        keywords="solar Sri Lanka, solar panels Colombo, rooftop solar, net metering, solar company Sri Lanka"
      />

      {/* 1–2. Navbar (in layout) + Hero */}
      <Hero />

      {/* 3. Trusted By — infinite client logo slider */}
      <section className="py-12">
        <div className="container-x">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading homes & businesses across Sri Lanka
          </p>
          <PartnerSlider items={clients} />
        </div>
      </section>

      {/* 4. About preview */}
      <section className="section bg-light">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Image placeholder — replace with a company / team photo */}
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80"
              alt="Aproma engineers inspecting a rooftop solar installation"
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-soft aspect-[4/3]"
            />
            <div className="glass absolute -bottom-6 -right-4 hidden rounded-2xl px-6 py-4 sm:block md:-right-8">
              <p className="text-3xl font-extrabold text-primary">15+</p>
              <p className="text-xs font-medium text-slate-500">Years powering Sri Lanka</p>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="eyebrow">About Aproma Energy</span>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-5xl">
              Engineering Sri Lanka’s transition to clean energy
            </h2>
            <p className="mt-5 text-lg text-slate-500">
              Since 2011, Aproma Energy Solutions has helped over a thousand homes, businesses and
              factories generate their own electricity — combining international engineering
              standards with deep local expertise.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <FiTarget className="text-2xl text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-dark">Our Mission</h3>
                <p className="mt-1.5 text-sm text-slate-500">
                  Make premium solar energy simple, reliable and financially rewarding for every
                  Sri Lankan property owner.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <FiEye className="text-2xl text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-dark">Our Vision</h3>
                <p className="mt-1.5 text-sm text-slate-500">
                  A Sri Lanka powered predominantly by clean, distributed renewable energy.
                </p>
              </div>
            </div>
            <Button to="/about" className="mt-8">
              Learn More About Us <FiArrowRight aria-hidden="true" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 5. Services grid */}
      <section className="section">
        <div className="container-x">
          <SectionTitle
            eyebrow="What We Do"
            title="Complete solar solutions, end to end"
            text="From single rooftops to megawatt plants — design, installation, financing and lifetime care under one roof."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary">
              View All Services <FiArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle
            eyebrow="Why Aproma"
            title="Built on engineering, backed for decades"
            text="A solar system is a 25-year decision. Here’s why over a thousand customers trusted us with theirs."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white p-8 shadow-card transition-shadow hover:shadow-soft"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-2xl text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {whyIcons[f.icon]}
                </span>
                <h3 className="mt-5 text-lg font-bold text-dark">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Our process — timeline */}
      <section className="section">
        <div className="container-x">
          <SectionTitle
            eyebrow="How It Works"
            title="From consultation to clean power in six steps"
            text="A clear, managed journey — you always know what happens next."
          />
          <Timeline items={processSteps} numbered />
        </div>
      </section>

      {/* 8. Featured projects */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Proof on rooftops across the island"
            text="Recent installations from our portfolio of 1,000+ completed projects."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Button to="/projects" variant="secondary">
              Explore All Projects <FiArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Statistics — animated counters */}
      <Stats />

      {/* 10. Testimonials */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle
            eyebrow="Testimonials"
            title="What our customers say"
            text="Real feedback from homeowners, hoteliers and factory directors across Sri Lanka."
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* 11. Call to action */}
      <CTA />

      {/* 12. Latest blogs */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle
            eyebrow="From the Blog"
            title="Solar insights & guides"
            text="Plain-language articles on tariffs, technology and going solar in Sri Lanka."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {latestBlogs.map((b, i) => (
              <BlogCard key={b.id} post={b} index={i} />
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Button to="/blog" variant="secondary">
              Read More Articles <FiArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* 13. Partners — brand logos */}
      <section className="py-16">
        <div className="container-x">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Technology partners & authorised brands
          </p>
          <PartnerSlider items={partners} />
        </div>
      </section>

      {/* 14. Footer is rendered by the layout */}
    </>
  );
}
