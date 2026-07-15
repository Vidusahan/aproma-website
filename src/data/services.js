// All service content lives here so copy can be replaced without touching components.
// Each entry powers a card on /services and a full detail page at /services/:slug.

export const services = [
  {
    slug: 'residential-solar',
    title: 'Residential Solar',
    short:
      'Rooftop solar systems engineered for Sri Lankan homes — cut your electricity bill from day one.',
    icon: 'home',
    image:
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
    hero:
      'Turn your rooftop into a power plant. Our residential systems are designed around your household consumption, roof structure and CEB / LECO tariff scheme.',
    description:
      'Aproma designs, supplies and installs complete rooftop solar systems for homes across Sri Lanka. Every project begins with a detailed consumption analysis and shading study, so the system you receive is sized for your actual usage — not a one-size-fits-all package. We handle net metering, net accounting and net plus applications end-to-end, including all utility paperwork.',
    benefits: [
      'Reduce monthly electricity bills by up to 90%',
      'Net metering, net accounting and net plus scheme support',
      'Tier-1 solar panels with 25-year performance warranty',
      'Full CEB / LECO application handling',
      'Roof-safe mounting engineered for monsoon wind loads',
      'Real-time monitoring from your phone',
    ],
    process: [
      { title: 'Free consultation', text: 'We review 6 months of electricity bills and your goals.' },
      { title: 'Site assessment', text: 'Engineers survey the roof, shading and wiring on site.' },
      { title: 'Custom proposal', text: 'System size, savings forecast and payback period in writing.' },
      { title: 'Installation', text: 'Certified crews complete most homes in 1–2 days.' },
      { title: 'Utility commissioning', text: 'We coordinate metering and grid connection approval.' },
      { title: 'Lifetime support', text: 'Monitoring, cleaning schedules and warranty service.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=800&q=80',
    ],
    faqs: [
      {
        q: 'How much roof space do I need?',
        a: 'A typical 5 kW home system needs roughly 25–30 m² of unshaded roof area. Our site survey confirms the exact usable space.',
      },
      {
        q: 'What happens during a power cut?',
        a: 'Grid-tied systems switch off for safety. Adding a hybrid inverter and battery keeps essential circuits running — ask us about hybrid options.',
      },
      {
        q: 'How long is the payback period?',
        a: 'Most residential customers recover their investment in 3–5 years depending on tariff scheme and consumption.',
      },
    ],
  },
  {
    slug: 'commercial-solar',
    title: 'Commercial Solar',
    short:
      'Reduce operating costs for offices, hotels, retail and healthcare with rooftop or carport solar.',
    icon: 'building',
    image:
      'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=1200&q=80',
    hero:
      'Electricity is one of the largest controllable costs in a commercial building. We turn unused roof area into a long-term hedge against rising tariffs.',
    description:
      'From boutique hotels in the south to office complexes in Colombo, Aproma delivers commercial solar systems that pay for themselves through avoided daytime consumption. We model your interval load data against solar generation to size the system precisely, and structure projects as outright purchase or financed models.',
    benefits: [
      'Significant reduction in peak daytime tariff costs',
      'Detailed financial modelling with IRR and payback analysis',
      'Minimal business disruption — installation scheduled around operations',
      'Corporate sustainability and CSR reporting support',
      'Remote monitoring with monthly performance reports',
      'Flexible financing through partner banks',
    ],
    process: [
      { title: 'Load analysis', text: 'We study interval data and tariff structure.' },
      { title: 'Feasibility study', text: 'Structural review, generation modelling and financials.' },
      { title: 'Board-ready proposal', text: 'CAPEX, financed and PPA style options compared.' },
      { title: 'Installation', text: 'Phased works planned around business hours.' },
      { title: 'Commissioning', text: 'Grid approval, testing and staff handover.' },
      { title: 'O&M contract', text: 'Cleaning, inspections and guaranteed response times.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
    ],
    faqs: [
      {
        q: 'Can our roof carry the additional load?',
        a: 'A structural assessment is part of every feasibility study. Where needed we design lightweight mounting or ground-mount alternatives.',
      },
      {
        q: 'Will installation disrupt operations?',
        a: 'Works are phased and scheduled with your facilities team; most disruption is limited to a short shutdown at grid connection.',
      },
    ],
  },
  {
    slug: 'industrial-solar',
    title: 'Industrial Solar',
    short:
      'Megawatt-scale rooftop and ground-mount systems for factories, warehouses and processing plants.',
    icon: 'factory',
    image:
      'https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=1200&q=80',
    hero:
      'Manufacturing runs on predictable energy costs. Industrial-scale solar locks in a large share of your daytime load at a fixed cost for 25 years.',
    description:
      'Aproma engineers megawatt-class systems for apparel factories, food processing plants, warehouses and export manufacturers. Our in-house team handles HT connection coordination, protection studies and SCADA integration, delivering systems that meet the reliability standards industrial clients expect.',
    benefits: [
      'MW-scale rooftop, ground-mount and carport designs',
      'HT / MV grid connection engineering and protection studies',
      'Compliance support for export market sustainability audits',
      'SCADA and factory energy management integration',
      'Performance-guaranteed O&M contracts',
      'Reduced exposure to fuel-adjustment tariff increases',
    ],
    process: [
      { title: 'Energy audit', text: 'Full load profiling across shifts and seasons.' },
      { title: 'Engineering design', text: 'Structural, electrical and grid studies.' },
      { title: 'Procurement', text: 'Tier-1 modules and inverters with factory warranties.' },
      { title: 'Construction', text: 'Dedicated project manager and HSE supervision.' },
      { title: 'Grid connection', text: 'CEB coordination through to energisation.' },
      { title: 'Performance O&M', text: 'Guaranteed availability with penalty-backed SLAs.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?auto=format&fit=crop&w=800&q=80',
    ],
    faqs: [
      {
        q: 'Do you handle HT connections?',
        a: 'Yes. Our engineering team manages protection coordination, relay settings and all CEB HT connection requirements.',
      },
      {
        q: 'Can solar help with export compliance?',
        a: 'Many buyers now require renewable energy sourcing. We provide generation certificates and reporting for audits such as Higg FEM.',
      },
    ],
  },
  {
    slug: 'hybrid-solar',
    title: 'Hybrid Solar Systems',
    short:
      'Solar plus battery storage — generate by day, store the surplus, and stay powered through outages.',
    icon: 'hybrid',
    image:
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=1200&q=80',
    hero:
      'The best of both worlds: grid-tied economics with battery-backed independence. Hybrid systems keep your essential loads running when the grid does not.',
    description:
      'Hybrid systems pair solar generation with lithium battery storage and an intelligent inverter that manages grid, solar and battery in real time. During outages, essential circuits switch to battery seamlessly. During normal operation, stored solar offsets expensive evening consumption.',
    benefits: [
      'Seamless backup power during grid outages',
      'Use stored solar during peak evening tariff hours',
      'Expandable battery capacity as needs grow',
      'Intelligent load prioritisation for essential circuits',
      'Single app to monitor solar, battery and grid flows',
      'Future-ready for time-of-use tariffs',
    ],
    process: [
      { title: 'Load mapping', text: 'We identify essential vs. deferrable circuits.' },
      { title: 'System design', text: 'Solar array, inverter and battery sized together.' },
      { title: 'Proposal', text: 'Backup runtimes and savings clearly quantified.' },
      { title: 'Installation', text: 'Battery-safe wiring and changeover configuration.' },
      { title: 'Commissioning', text: 'Outage simulation test before handover.' },
      { title: 'Support', text: 'Firmware updates and battery health monitoring.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509390836518-c981e2c8f5c3?auto=format&fit=crop&w=800&q=80',
    ],
    faqs: [
      {
        q: 'How long can the battery power my home?',
        a: 'A typical 10 kWh battery runs essential circuits — lights, fans, fridge, router — for 8–12 hours. We size batteries to your target runtime.',
      },
      {
        q: 'Can I add batteries later?',
        a: 'Yes. We install hybrid-ready inverters so storage can be added or expanded without rewiring.',
      },
    ],
  },
  {
    slug: 'off-grid-solar',
    title: 'Off-grid Solar',
    short:
      'Complete energy independence for estates, farms, eco-resorts and locations beyond the grid.',
    icon: 'offgrid',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    hero:
      'No grid? No problem. Purpose-built off-grid systems deliver reliable, silent power to locations diesel generators used to dominate.',
    description:
      'For plantations, remote resorts, farms, telecom sites and island properties, Aproma designs fully autonomous solar systems with generous battery banks and optional generator integration for extended cloudy periods. Every system is modelled against local irradiance data to guarantee year-round autonomy.',
    benefits: [
      'True energy independence — no grid connection required',
      'Eliminate or drastically reduce diesel generator running hours',
      'Silent, zero-emission power for eco-tourism properties',
      'Autonomy modelling against 20-year local weather data',
      'Optional automatic generator backup integration',
      'Remote monitoring even at off-grid sites via 4G',
    ],
    process: [
      { title: 'Site study', text: 'Load audit, irradiance data and autonomy targets.' },
      { title: 'System design', text: 'Array, battery bank and backup sized for worst-case months.' },
      { title: 'Logistics plan', text: 'Delivery planning for remote or difficult sites.' },
      { title: 'Installation', text: 'Complete power house, wiring and distribution.' },
      { title: 'Commissioning', text: 'Autonomy verification and operator training.' },
      { title: 'Support', text: 'Preventive maintenance visits and remote diagnostics.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    ],
    faqs: [
      {
        q: 'What happens after several cloudy days?',
        a: 'Systems are sized with autonomy margins, and can include an auto-start generator that tops up batteries only when needed.',
      },
    ],
  },
  {
    slug: 'battery-storage',
    title: 'Battery Storage',
    short:
      'Lithium battery systems that store solar energy, back up critical loads and cut peak charges.',
    icon: 'battery',
    image:
      'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=1200&q=80',
    hero:
      'Storage turns solar from a daytime discount into round-the-clock energy strategy. Bank your sunshine and spend it when it matters.',
    description:
      'Aproma supplies and integrates lithium iron phosphate (LiFePO₄) battery systems from leading global manufacturers, retrofitting storage onto existing solar systems or designing new storage-first installations for homes, businesses and industry.',
    benefits: [
      'LiFePO₄ chemistry — safe, long-life, 6000+ cycles',
      'Retrofit compatible with most existing solar systems',
      'Scalable from 5 kWh homes to containerised MWh systems',
      'Peak shaving for commercial demand charges',
      'UPS-grade switchover for sensitive equipment',
      '10-year manufacturer warranties',
    ],
    process: [
      { title: 'Assessment', text: 'Existing system review and storage goals.' },
      { title: 'Design', text: 'Capacity, inverter compatibility and placement.' },
      { title: 'Proposal', text: 'Runtime and savings modelling.' },
      { title: 'Installation', text: 'Certified battery-safe installation.' },
      { title: 'Configuration', text: 'Charge / discharge strategy programming.' },
      { title: 'Monitoring', text: 'Battery health tracked remotely for life.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=800&q=80',
    ],
    faqs: [
      {
        q: 'Can I add a battery to my existing solar system?',
        a: 'In most cases yes — either via a hybrid inverter swap or an AC-coupled battery that works alongside your current inverter.',
      },
    ],
  },
  {
    slug: 'ev-charging',
    title: 'EV Charging',
    short:
      'Home and commercial EV charging stations — powered by your own solar where possible.',
    icon: 'ev',
    image:
      'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80',
    hero:
      'Charge your electric vehicle with sunshine. We install smart AC and DC chargers for homes, apartments, hotels and fleet depots.',
    description:
      'As Sri Lanka’s EV fleet grows, Aproma installs future-ready charging infrastructure — from 7 kW home wallboxes to multi-bay commercial DC fast charging. Solar-integrated chargers can prioritise self-generated energy, making every kilometre effectively free.',
    benefits: [
      'Type 2 AC wallboxes and DC fast charging options',
      'Solar-priority charging modes',
      'Load management to protect your building supply',
      'OCPP-compliant chargers for payment integration',
      'Hotel and workplace destination-charging packages',
      'Full electrical upgrade assessment included',
    ],
    process: [
      { title: 'Site check', text: 'Supply capacity and parking layout review.' },
      { title: 'Charger selection', text: 'Matched to vehicles and usage patterns.' },
      { title: 'Installation', text: 'Dedicated circuit, protection and signage.' },
      { title: 'Commissioning', text: 'App setup and charging test.' },
      { title: 'Support', text: 'Firmware updates and servicing.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
    ],
    faqs: [
      {
        q: 'Can my home supply handle an EV charger?',
        a: 'Most single-phase homes can support a 7 kW charger. Our assessment confirms this and includes any upgrade recommendations.',
      },
    ],
  },
  {
    slug: 'energy-audits',
    title: 'Energy Audits',
    short:
      'Professional energy audits that find waste, quantify savings and build your efficiency roadmap.',
    icon: 'audit',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    hero:
      'Before you generate cheaper energy, stop wasting the energy you already buy. Our audits routinely find 10–25% savings before a single panel is installed.',
    description:
      'Aproma’s certified energy auditors analyse consumption patterns, equipment efficiency, power quality and building systems to produce a prioritised savings roadmap. Audits are available standalone or as the first phase of a solar project.',
    benefits: [
      'Walk-through and detailed investment-grade audit options',
      'Power quality and harmonics analysis',
      'Equipment-level consumption breakdown',
      'Prioritised measures ranked by payback',
      'Tariff optimisation recommendations',
      'Baseline for sustainability reporting',
    ],
    process: [
      { title: 'Data collection', text: 'Bills, equipment lists and operating schedules.' },
      { title: 'Site measurement', text: 'Logging meters installed on key circuits.' },
      { title: 'Analysis', text: 'Consumption modelling and loss identification.' },
      { title: 'Report', text: 'Findings, measures and financial cases.' },
      { title: 'Implementation', text: 'Optional delivery of recommended measures.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    ],
    faqs: [
      {
        q: 'How long does an audit take?',
        a: 'A walk-through audit takes 1–2 days on site. Investment-grade audits with logging typically run 2–4 weeks.',
      },
    ],
  },
];

/** Convenience lookup used by the service detail route. */
export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
