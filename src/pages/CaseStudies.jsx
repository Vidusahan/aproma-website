import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTA from '../components/sections/CTA';
import { caseStudies } from '../data/projects';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="In-depth solar project case studies: the problem, the engineering, the installation and the measured results."
        keywords="solar case studies Sri Lanka, solar project results, commercial solar ROI"
      />
      <PageHeader
        title="Case Studies"
        subtitle="The full story behind our most interesting projects — problem, solution and measured results."
        breadcrumb={[{ label: 'Case Studies' }]}
        image="https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x">
          <SectionTitle
            eyebrow="Deep Dives"
            title="Results you can measure"
            text="Every case study includes real system data and a verified customer review."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-10"
          >
            {caseStudies.map((cs, i) => (
              <motion.article
                key={cs.id}
                variants={fadeUp}
                custom={i}
                className="group grid overflow-hidden rounded-[2rem] bg-white shadow-card transition-shadow hover:shadow-soft lg:grid-cols-2"
              >
                <div className="relative h-72 overflow-hidden lg:h-auto">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <h2 className="text-2xl font-bold leading-snug text-dark md:text-3xl">{cs.title}</h2>
                  <p className="mt-3 text-slate-500">{cs.subtitle}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4">
                    {cs.stats.slice(0, 4).map((s) => (
                      <div key={s.label} className="rounded-2xl bg-light p-4">
                        <dd className="text-xl font-extrabold text-primary">{s.value}</dd>
                        <dt className="mt-0.5 text-xs font-medium text-slate-400">{s.label}</dt>
                      </div>
                    ))}
                  </dl>
                  <Link
                    to={`/case-studies/${cs.id}`}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3.5"
                  >
                    Read the full case study <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
