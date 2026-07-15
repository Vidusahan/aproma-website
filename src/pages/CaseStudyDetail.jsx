import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import Gallery from '../components/sections/Gallery';
import CTA from '../components/sections/CTA';
import { getCaseStudyById } from '../data/projects';
import { fadeUp, scaleIn, viewportOnce, staggerContainer } from '../utils/motion';

const sections = [
  { key: 'problem', label: 'The Problem' },
  { key: 'solution', label: 'The Solution' },
  { key: 'installation', label: 'The Installation' },
  { key: 'results', label: 'The Results' },
];

export default function CaseStudyDetail() {
  const { id } = useParams();
  const cs = getCaseStudyById(id);

  if (!cs) return <Navigate to="/case-studies" replace />;

  return (
    <>
      <SEO title={cs.title} description={cs.subtitle} image={cs.image} />
      <PageHeader
        title={cs.title}
        subtitle={cs.subtitle}
        breadcrumb={[{ label: 'Case Studies', to: '/case-studies' }, { label: 'Case Study' }]}
        image={cs.image}
      />

      {/* Key stats */}
      <section className="relative z-10 -mt-10">
        <div className="container-x">
          <motion.dl
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-5 lg:grid-cols-4"
          >
            {cs.stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={i}
                className="glass rounded-3xl p-6 text-center"
              >
                <dd className="text-2xl font-extrabold text-primary md:text-3xl">{s.value}</dd>
                <dt className="mt-1 text-xs font-medium text-slate-500 md:text-sm">{s.label}</dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Narrative sections */}
      <section className="section">
        <div className="container-x mx-auto max-w-3xl space-y-14">
          {sections.map(({ key, label }, i) => (
            <motion.div
              key={key}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <span className="eyebrow">{label}</span>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{cs[key]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-light">
        <div className="container-x">
          <span className="eyebrow mb-8 justify-center flex">Project Gallery</span>
          <Gallery images={cs.gallery} alt={cs.title} />
        </div>
      </section>

      {/* Customer review */}
      <section className="section">
        <div className="container-x">
          <motion.figure
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl rounded-[2rem] bg-dark p-10 text-center md:p-14"
          >
            <blockquote className="text-xl font-medium leading-relaxed text-white md:text-2xl">
              “{cs.review.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-bold text-secondary">{cs.review.author}</p>
              <p className="text-sm text-slate-400">{cs.review.company}</p>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <CTA title="Want results like these?" />
    </>
  );
}
