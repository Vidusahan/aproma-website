import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import Accordion from '../components/ui/Accordion';
import CTA from '../components/sections/CTA';
import { faqs, faqCategories } from '../data/site';

export default function FAQ() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return faqs.filter((f) => {
      const catOk = category === 'All' || f.category === category;
      const qOk = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [category, search]);

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about solar in Sri Lanka: costs, net metering, installation, maintenance and warranties."
        keywords="solar FAQ Sri Lanka, net metering questions, solar cost questions"
      />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Straight answers about costs, schemes, installation and warranties."
        breadcrumb={[{ label: 'FAQ' }]}
        image="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="Help Centre"
            title="Everything you wanted to ask about solar"
            text="Search or browse by topic. Still stuck? Contact our consultants — advice is always free."
          />

          {/* Search */}
          <div className="relative mx-auto mb-8 max-w-md">
            <FiSearch aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <label htmlFor="faq-search" className="sr-only">Search questions</label>
            <input
              id="faq-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions…"
              className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-11 pr-5 focus:border-primary"
            />
          </div>

          {/* Category tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="FAQ categories">
            {['All', ...faqCategories].map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  category === c
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-light text-slate-600 hover:bg-primary-50 hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length ? (
            <Accordion items={filtered} />
          ) : (
            <p className="py-16 text-center text-slate-400">
              No questions match your search — try different keywords, or ask us directly.
            </p>
          )}
        </div>
      </section>

      <CTA
        title="Still have questions?"
        text="Talk to a consultant — no jargon, no pressure, just clear answers about your options."
      />
    </>
  );
}
