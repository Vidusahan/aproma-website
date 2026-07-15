import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiZap, FiTrendingDown, FiShield, FiPlay } from 'react-icons/fi';
import Button from '../ui/Button';

/**
 * Full-screen home hero: parallax solar imagery, gradient overlay,
 * floating glass statistic chips and an animated wave divider.
 */
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']); // parallax

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-dark">
      {/* Parallax background image placeholder — replace with a real installation photo */}
      <motion.img
        style={{ y: bgY }}
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-[120%] w-full object-cover"
        loading="eager"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-primary-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-x relative z-10 grid items-center gap-12 pt-32 pb-40 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
            Sri Lanka’s trusted solar partner since 2011
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Your roof.
            <br />
            Your power plant.
            <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Your savings.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-slate-300"
          >
            Aproma Energy designs, installs and maintains premium solar systems for homes,
            businesses and industry — over 1,000 projects and 50 MW delivered island-wide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" size="lg" variant="accent">
              Get a Free Consultation
            </Button>
            <Button to="/projects" size="lg" variant="ghost">
              <FiPlay aria-hidden="true" /> See Our Projects
            </Button>
          </motion.div>
        </div>

        {/* Floating statistic chips */}
        <div className="relative hidden lg:col-span-5 lg:block" aria-hidden="false">
          {[
            {
              icon: <FiZap />,
              value: '50 MW+',
              label: 'Installed capacity',
              className: 'top-0 right-8',
              delay: 0.6,
            },
            {
              icon: <FiTrendingDown />,
              value: 'Up to 90%',
              label: 'Bill reduction',
              className: 'top-40 -left-4',
              delay: 0.8,
            },
            {
              icon: <FiShield />,
              value: '25 years',
              label: 'Panel warranty',
              className: 'top-80 right-16',
              delay: 1.0,
            },
          ].map((chip) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: chip.delay }}
              className={`glass absolute flex items-center gap-4 rounded-2xl px-6 py-4 animate-float ${chip.className}`}
              style={{ animationDelay: `${chip.delay}s` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl text-white">
                {chip.icon}
              </span>
              <span>
                <span className="block text-xl font-extrabold text-dark">{chip.value}</span>
                <span className="block text-xs font-medium text-slate-500">{chip.label}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" className="block w-full" preserveAspectRatio="none">
          <path
            d="M0,64 C240,110 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0,64 C240,110 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z;
                      M0,50 C240,20 480,100 720,70 C960,40 1200,60 1440,90 L1440,120 L0,120 Z;
                      M0,64 C240,110 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>
    </section>
  );
}
