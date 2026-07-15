import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiCheckCircle, FiUpload } from 'react-icons/fi';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { jobs, careerBenefits } from '../data/site';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../utils/motion';

/** Simple application form — wire the submit handler to your ATS or email. */
function ApplicationForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', message: '' });
  const [fileName, setFileName] = useState('');
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.position) return;
    // TODO: post application data + CV to your backend
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary-50 p-12 text-center">
        <FiCheckCircle className="text-5xl text-primary" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-dark">Application received</h3>
        <p className="max-w-sm text-slate-500">
          Thank you for your interest in joining Aproma. Our HR team will review your application
          and be in touch.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-dark placeholder:text-slate-400 focus:border-primary';

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="ap-name" className="mb-1.5 block text-sm font-semibold text-dark">Full name</label>
        <input id="ap-name" required type="text" value={form.name} onChange={update('name')} placeholder="Your name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="ap-email" className="mb-1.5 block text-sm font-semibold text-dark">Email</label>
        <input id="ap-email" required type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="ap-phone" className="mb-1.5 block text-sm font-semibold text-dark">Phone</label>
        <input id="ap-phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+94 7X XXX XXXX" className={inputClass} />
      </div>
      <div>
        <label htmlFor="ap-position" className="mb-1.5 block text-sm font-semibold text-dark">Position</label>
        <select id="ap-position" required value={form.position} onChange={update('position')} className={inputClass}>
          <option value="">Select a vacancy</option>
          {jobs.map((j) => (
            <option key={j.id} value={j.id}>{j.title}</option>
          ))}
          <option value="general">General application</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="ap-cv" className="mb-1.5 block text-sm font-semibold text-dark">CV / Resume</label>
        <label
          htmlFor="ap-cv"
          className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-light px-5 py-8 text-slate-500 transition-colors hover:border-primary hover:text-primary"
        >
          <FiUpload aria-hidden="true" />
          {fileName || 'Click to attach your CV (PDF)'}
        </label>
        <input
          id="ap-cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="ap-message" className="mb-1.5 block text-sm font-semibold text-dark">Cover note</label>
        <textarea id="ap-message" rows={4} value={form.message} onChange={update('message')} placeholder="Tell us briefly why you’d like to join Aproma…" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">Submit Application</Button>
      </div>
    </form>
  );
}

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join Aproma Energy Solutions — engineering, installation, sales and service careers in Sri Lanka’s fastest-growing energy sector."
        keywords="solar jobs Sri Lanka, energy careers, engineering jobs Colombo"
      />
      <PageHeader
        title="Build Your Career in Clean Energy"
        subtitle="Join the team installing Sri Lanka’s energy future — one rooftop at a time."
        breadcrumb={[{ label: 'Careers' }]}
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Culture */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <motion.img
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            alt="Aproma team collaborating at the office"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="eyebrow">Life at Aproma</span>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Meaningful work, measured in megawatts
            </h2>
            <p className="mt-5 text-slate-500">
              We’re engineers, installers, designers and problem-solvers united by one idea:
              Sri Lanka’s energy future should be clean, local and reliable. Our culture is
              practical, safety-first and generous with knowledge — senior engineers teach,
              juniors are trusted early, and every completed project is a shared win.
            </p>
            <p className="mt-4 text-slate-500">
              If you want a career where your work is visible on rooftops across the island, you’ll
              feel at home here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle eyebrow="Benefits" title="Why people stay at Aproma" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {careerBenefits.map((b, i) => (
              <motion.div key={b.title} variants={fadeUp} custom={i} className="rounded-3xl bg-white p-8 shadow-card">
                <h3 className="font-bold text-dark">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{b.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow="Open Positions" title="Current vacancies" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl space-y-5"
          >
            {jobs.map((j, i) => (
              <motion.article
                key={j.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-dark">{j.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{j.summary}</p>
                  <p className="mt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1.5"><FiBriefcase aria-hidden="true" /> {j.type}</span>
                    <span className="flex items-center gap-1.5"><FiMapPin aria-hidden="true" /> {j.location}</span>
                  </p>
                </div>
                <Button href="#apply" variant="secondary" size="sm" className="shrink-0">
                  Apply Now
                </Button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section bg-light">
        <div className="container-x mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Apply"
            title="Send us your application"
            text="Don’t see a matching vacancy? Send a general application — we’re always meeting good people."
          />
          <div className="rounded-[2rem] bg-white p-8 shadow-card md:p-12">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
