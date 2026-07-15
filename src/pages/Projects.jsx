import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/cards/ProjectCard';
import Button from '../components/ui/Button';
import CTA from '../components/sections/CTA';
import { projects, projectCategories } from '../data/projects';
import { staggerContainer, viewportOnce } from '../utils/motion';

const PAGE_SIZE = 6;

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = category === 'All' ? projects : projects.filter((p) => p.category === category);
  const shown = filtered.slice(0, visible);

  const selectCategory = (c) => {
    setCategory(c);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <SEO
        title="Projects"
        description="Browse Aproma Energy’s portfolio: 1,000+ residential, commercial, industrial and hybrid solar installations across Sri Lanka."
        keywords="solar projects Sri Lanka, solar installation portfolio, rooftop solar projects"
      />
      <PageHeader
        title="Our Projects"
        subtitle="A portfolio built rooftop by rooftop — over 50 MW installed across all nine provinces."
        breadcrumb={[{ label: 'Projects' }]}
        image="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x">
          <SectionTitle
            eyebrow="Portfolio"
            title="Explore completed installations"
            text="Filter by project type to see relevant work — or browse everything."
          />

          {/* Category filter tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filter projects by category">
            {projectCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                onClick={() => selectCategory(c)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  category === c
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-light text-slate-600 hover:bg-primary-50 hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {shown.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {shown.length === 0 && (
            <p className="py-16 text-center text-slate-400">No projects in this category yet.</p>
          )}

          {/* Load more */}
          {visible < filtered.length && (
            <div className="mt-12 text-center">
              <Button variant="secondary" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Your project could be next"
        text="Join over a thousand property owners already generating their own clean electricity."
      />
    </>
  );
}
