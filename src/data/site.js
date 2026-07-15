// Sitewide data: stats, testimonials, partners, team, jobs, FAQs, industries, company info.

export const company = {
  name: 'Aproma Energy Solutions (Pvt) Ltd',
  shortName: 'Aproma Energy',
  tagline: 'Powering Sri Lanka’s clean energy future',
  phone: '+94 11 234 5678',
  hotline: '+94 77 123 4567',
  email: 'info@apromaenergy.lk',
  address: 'No. 128, Galle Road, Colombo 03, Sri Lanka',
  hours: 'Mon – Fri: 8.30 AM – 5.30 PM · Sat: 9.00 AM – 1.00 PM',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
};

export const stats = [
  { value: 1000, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: 'MW+', label: 'Capacity Installed' },
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

export const whyChooseUs = [
  {
    icon: 'engineer',
    title: 'Certified Engineers',
    text: 'Chartered electrical engineers and internationally certified installers on every project.',
  },
  {
    icon: 'quality',
    title: 'Premium Equipment',
    text: 'Tier-1 panels and globally trusted inverters — no grey imports, ever.',
  },
  {
    icon: 'warranty',
    title: '25-Year Warranty',
    text: 'Performance warranties backed by manufacturers and honoured locally by us.',
  },
  {
    icon: 'support',
    title: 'After-Sales Care',
    text: 'Dedicated service team, remote monitoring and guaranteed response times.',
  },
  {
    icon: 'finance',
    title: 'Flexible Financing',
    text: 'Partnered with leading banks for solar loans and green financing schemes.',
  },
  {
    icon: 'island',
    title: 'Island-wide Service',
    text: 'Installation and support teams covering all nine provinces of Sri Lanka.',
  },
];

export const processSteps = [
  { title: 'Consultation', text: 'A free discussion of your bills, goals and options — no obligation.' },
  { title: 'Site Visit', text: 'Engineers assess your roof, shading, wiring and structure on site.' },
  { title: 'Proposal', text: 'A written design with system size, savings forecast and payback.' },
  { title: 'Installation', text: 'Certified crews install with minimal disruption to your routine.' },
  { title: 'Commissioning', text: 'Utility approvals, metering and a full system performance test.' },
  { title: 'Support', text: 'Monitoring, maintenance and warranty care for the system’s life.' },
];

export const testimonials = [
  {
    name: 'Ruwan Jayasekara',
    role: 'Homeowner · Nugegoda',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    quote:
      'From the first consultation to switching on, everything was handled professionally. My bill dropped from LKR 74,000 to under LKR 6,000 in the first month.',
  },
  {
    name: 'Shanika Perera',
    role: 'Hotel Owner · Galle',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote:
      'They understood that a heritage property needs a sensitive approach. The installation was invisible to guests and the savings are very visible to us.',
  },
  {
    name: 'Mohamed Rizwan',
    role: 'Factory Director · Katunayake',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    quote:
      'A megawatt-scale project delivered on schedule with zero production downtime. Their engineering team is genuinely world-class.',
  },
  {
    name: 'Dilani Fernando',
    role: 'Homeowner · Kandy',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    quote:
      'The hybrid system keeps our home running through every power cut. The monitoring app is excellent and support responds within hours.',
  },
  {
    name: 'Asanka Wickramasinghe',
    role: 'Operations Manager · Kurunegala',
    rating: 4,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote:
      'Professional feasibility study, transparent pricing and a warehouse rooftop that now pays us back every single day the sun shines.',
  },
];

export const partners = [
  { name: 'JA Solar', logo: 'https://placehold.co/220x80/F8FAFC/94A3B8?text=JA+Solar&font=inter' },
  { name: 'Jinko Solar', logo: 'https://placehold.co/220x80/F8FAFC/94A3B8?text=Jinko+Solar&font=inter' },
  { name: 'Huawei', logo: 'https://placehold.co/220x80/F8FAFC/94A3B8?text=Huawei&font=inter' },
  { name: 'SMA', logo: 'https://placehold.co/220x80/F8FAFC/94A3B8?text=SMA&font=inter' },
  { name: 'Fronius', logo: 'https://placehold.co/220x80/F8FAFC/94A3B8?text=Fronius&font=inter' },
  { name: 'LONGi', logo: 'https://placehold.co/220x80/F8FAFC/94A3B8?text=LONGi&font=inter' },
  { name: 'BYD', logo: 'https://placehold.co/220x80/F8FAFC/94A3B8?text=BYD&font=inter' },
  { name: 'Growatt', logo: 'https://placehold.co/220x80/F8FAFC/94A3B8?text=Growatt&font=inter' },
];

export const clients = [
  { name: 'Client One', logo: 'https://placehold.co/200x72/FFFFFF/CBD5E1?text=Client+Logo&font=inter' },
  { name: 'Client Two', logo: 'https://placehold.co/200x72/FFFFFF/CBD5E1?text=Client+Logo&font=inter' },
  { name: 'Client Three', logo: 'https://placehold.co/200x72/FFFFFF/CBD5E1?text=Client+Logo&font=inter' },
  { name: 'Client Four', logo: 'https://placehold.co/200x72/FFFFFF/CBD5E1?text=Client+Logo&font=inter' },
  { name: 'Client Five', logo: 'https://placehold.co/200x72/FFFFFF/CBD5E1?text=Client+Logo&font=inter' },
  { name: 'Client Six', logo: 'https://placehold.co/200x72/FFFFFF/CBD5E1?text=Client+Logo&font=inter' },
];

export const team = [
  {
    name: 'Pradeep Amarasinghe',
    role: 'Managing Director',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Nadeesha Silva',
    role: 'Head of Engineering',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Kasun Rathnayake',
    role: 'Head of Projects',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Tharushi Gunawardena',
    role: 'Head of Customer Success',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ravindu Peiris',
    role: 'Commercial Director',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ishara Weerakoon',
    role: 'Head of O&M',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
];

export const milestones = [
  { year: '2011', title: 'Founded in Colombo', text: 'Aproma begins as a three-person residential solar installer.' },
  { year: '2014', title: 'First commercial project', text: 'A 40 kW rooftop for a Colombo office marks our commercial entry.' },
  { year: '2017', title: '100th installation', text: 'Island-wide teams established across all provinces.' },
  { year: '2020', title: 'First megawatt project', text: 'Industrial division delivers a 1 MW factory rooftop plant.' },
  { year: '2023', title: 'Storage & EV division', text: 'Battery storage and EV charging services launched.' },
  { year: '2026', title: '50 MW installed', text: 'Cumulative installed capacity passes 50 MW across 1,000+ projects.' },
];

export const values = [
  { title: 'Integrity', text: 'Honest sizing, transparent pricing and proposals we can stand behind for 25 years.' },
  { title: 'Engineering Excellence', text: 'Every design is reviewed by chartered engineers — no shortcuts, ever.' },
  { title: 'Customer for Life', text: 'A solar system is a 25-year relationship. We staff and plan accordingly.' },
  { title: 'Sustainability', text: 'We measure success in megawatt-hours of clean energy delivered to the grid.' },
];

export const certifications = [
  { name: 'Sri Lanka Sustainable Energy Authority Registered', logo: 'https://placehold.co/160x160/F8FAFC/94A3B8?text=SLSEA&font=inter' },
  { name: 'ISO 9001:2015 Quality Management', logo: 'https://placehold.co/160x160/F8FAFC/94A3B8?text=ISO+9001&font=inter' },
  { name: 'ISO 45001 Occupational Safety', logo: 'https://placehold.co/160x160/F8FAFC/94A3B8?text=ISO+45001&font=inter' },
  { name: 'CEB Approved Contractor', logo: 'https://placehold.co/160x160/F8FAFC/94A3B8?text=CEB&font=inter' },
];

export const awards = [
  { year: '2025', title: 'National Green Energy Award — Installer of the Year (Placeholder)' },
  { year: '2024', title: 'Best Commercial Solar Project — Industry Excellence Awards (Placeholder)' },
  { year: '2023', title: 'Customer Service Excellence — Renewable Sector (Placeholder)' },
];

export const industries = [
  {
    title: 'Hospitality & Leisure',
    text: 'Hotels, resorts and restaurants cutting one of their largest operating costs while strengthening eco credentials.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Manufacturing & Export',
    text: 'Apparel, food processing and export manufacturers meeting buyer sustainability requirements with MW-scale solar.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Retail & Commercial',
    text: 'Supermarkets, showrooms and office buildings offsetting heavy daytime air-conditioning loads.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Agriculture & Plantations',
    text: 'Solar-powered irrigation, cold storage and processing for estates and farms across the island.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Healthcare & Education',
    text: 'Hospitals, clinics and schools securing reliable, affordable power for critical services.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Residential Communities',
    text: 'Individual homes and apartment complexes generating their own clean electricity.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  },
];

export const faqCategories = ['General', 'Cost & Financing', 'Installation', 'Maintenance & Warranty'];

export const faqs = [
  {
    category: 'General',
    q: 'Is solar power suitable for Sri Lanka’s climate?',
    a: 'Absolutely. Sri Lanka receives strong, consistent solar irradiance year-round — among the best conditions in South Asia. Systems generate through the monsoon too, just at reduced output on heavily overcast days.',
  },
  {
    category: 'General',
    q: 'What is the difference between net metering, net accounting and net plus?',
    a: 'Net metering offsets your consumption unit-for-unit. Net accounting pays you for excess exported energy at a set rate while billing imports normally. Net plus pays for all generation while you pay for all consumption separately. We recommend the best scheme for your usage pattern.',
  },
  {
    category: 'General',
    q: 'How long do solar panels last?',
    a: 'Tier-1 panels carry 25-year performance warranties and typically continue producing well beyond that, with gradual output decline of around 0.5% per year.',
  },
  {
    category: 'Cost & Financing',
    q: 'How much does a home solar system cost?',
    a: 'Costs depend on system size, roof type and equipment selection. As a guide, typical homes install 3–10 kW systems. Request a free consultation for an exact quotation based on your bills.',
  },
  {
    category: 'Cost & Financing',
    q: 'Are solar loans available?',
    a: 'Yes. We work with several leading banks offering dedicated solar loan schemes with attractive rates and tenures. Our team assists with the application paperwork.',
  },
  {
    category: 'Cost & Financing',
    q: 'What is the typical payback period?',
    a: 'Residential systems typically pay back in 3–5 years; commercial and industrial systems often faster due to higher daytime tariffs. Your proposal includes a project-specific forecast.',
  },
  {
    category: 'Installation',
    q: 'How long does installation take?',
    a: 'Most residential systems are installed in 1–2 days. Commercial projects run from one to several weeks, and industrial projects are scheduled in phases — always planned around your operations.',
  },
  {
    category: 'Installation',
    q: 'Will installation damage my roof?',
    a: 'No. We use engineered mounting systems appropriate to your roof type, with waterproofing warranted as part of the installation. Structural checks are completed before any work begins.',
  },
  {
    category: 'Installation',
    q: 'Do you handle the CEB / LECO paperwork?',
    a: 'Yes — completely. From application to meter installation and final approval, our team manages the entire utility process on your behalf.',
  },
  {
    category: 'Maintenance & Warranty',
    q: 'How much maintenance does a solar system need?',
    a: 'Very little. Periodic panel cleaning and an annual inspection keep systems at peak output. Our O&M packages handle everything, and remote monitoring flags issues before you notice them.',
  },
  {
    category: 'Maintenance & Warranty',
    q: 'What warranties do I get?',
    a: 'Typically: 25-year panel performance warranty, 5–12 year inverter warranty (extendable), and Aproma’s own workmanship warranty on the installation.',
  },
  {
    category: 'Maintenance & Warranty',
    q: 'What if something goes wrong after installation?',
    a: 'Contact our service hotline. Remote diagnostics resolve many issues immediately; where a site visit is needed, our island-wide teams respond within guaranteed timeframes.',
  },
];

export const jobs = [
  {
    id: 'solar-design-engineer',
    title: 'Solar Design Engineer',
    type: 'Full-time',
    location: 'Colombo 03 (Head Office)',
    summary: 'Design residential to industrial PV systems, produce single-line diagrams and support proposals.',
  },
  {
    id: 'installation-team-lead',
    title: 'Installation Team Lead',
    type: 'Full-time',
    location: 'Island-wide',
    summary: 'Lead rooftop installation crews with responsibility for quality, safety and schedule.',
  },
  {
    id: 'sales-consultant',
    title: 'Solar Sales Consultant',
    type: 'Full-time',
    location: 'Colombo / Kandy / Galle',
    summary: 'Guide homeowners and businesses from first enquiry to signed agreement.',
  },
  {
    id: 'om-technician',
    title: 'O&M Service Technician',
    type: 'Full-time',
    location: 'Regional',
    summary: 'Maintain and troubleshoot installed systems, with training on major inverter platforms.',
  },
];

export const careerBenefits = [
  { title: 'Growth industry', text: 'Build a career in Sri Lanka’s fastest-growing energy sector.' },
  { title: 'Training & certification', text: 'Manufacturer training and support for professional qualifications.' },
  { title: 'Health coverage', text: 'Comprehensive medical insurance for you and your family.' },
  { title: 'Performance bonuses', text: 'Project and annual bonuses tied to measurable outcomes.' },
  { title: 'Modern equipment', text: 'Proper tools, safety gear and vehicles — no compromises.' },
  { title: 'Purpose', text: 'Every workday adds clean energy to the national grid.' },
];
