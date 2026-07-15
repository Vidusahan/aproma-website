// Project portfolio data. `category` drives the filter tabs on /projects.

export const projectCategories = ['All', 'Residential', 'Commercial', 'Industrial', 'Hybrid'];

export const projects = [
  {
    id: 'nugegoda-residence',
    title: 'Two-Storey Residence, Nugegoda',
    category: 'Residential',
    location: 'Nugegoda, Colombo District',
    capacity: '8.2 kW',
    client: 'Private Homeowner',
    savings: 'LKR 68,000 / month',
    completed: 'March 2026',
    image:
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'galle-boutique-hotel',
    title: 'Boutique Hotel Rooftop Array',
    category: 'Commercial',
    location: 'Galle Fort, Southern Province',
    capacity: '86 kW',
    client: 'Heritage Hospitality Group',
    savings: 'LKR 1.2M / month',
    completed: 'January 2026',
    image:
      'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'katunayake-apparel',
    title: 'Apparel Factory Solar Plant',
    category: 'Industrial',
    location: 'Katunayake EPZ, Gampaha',
    capacity: '1.4 MW',
    client: 'Export Apparel Manufacturer',
    savings: 'LKR 14M / month',
    completed: 'November 2025',
    image:
      'https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'kandy-hybrid-villa',
    title: 'Hillside Villa Hybrid System',
    category: 'Hybrid',
    location: 'Kandy, Central Province',
    capacity: '12 kW + 20 kWh storage',
    client: 'Private Homeowner',
    savings: 'LKR 95,000 / month',
    completed: 'February 2026',
    image:
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 'colombo-office-tower',
    title: 'Office Tower Carport Solar',
    category: 'Commercial',
    location: 'Colombo 03',
    capacity: '210 kW',
    client: 'Financial Services Firm',
    savings: 'LKR 3.1M / month',
    completed: 'October 2025',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 'kurunegala-warehouse',
    title: 'Distribution Warehouse Rooftop',
    category: 'Industrial',
    location: 'Kurunegala',
    capacity: '620 kW',
    client: 'FMCG Distributor',
    savings: 'LKR 6.4M / month',
    completed: 'August 2025',
    image:
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 'negombo-family-home',
    title: 'Beachside Family Home',
    category: 'Residential',
    location: 'Negombo',
    capacity: '5.5 kW',
    client: 'Private Homeowner',
    savings: 'LKR 42,000 / month',
    completed: 'May 2026',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 'ella-eco-resort',
    title: 'Eco Resort Hybrid Microgrid',
    category: 'Hybrid',
    location: 'Ella, Uva Province',
    capacity: '45 kW + 80 kWh storage',
    client: 'Eco Tourism Operator',
    savings: '90% diesel displacement',
    completed: 'December 2025',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 'jaffna-supermarket',
    title: 'Supermarket Chain Rollout',
    category: 'Commercial',
    location: 'Jaffna, Northern Province',
    capacity: '3 × 55 kW',
    client: 'Retail Chain',
    savings: 'LKR 2.3M / month',
    completed: 'April 2026',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
];

// Case studies expand on selected projects with a full narrative.
export const caseStudies = [
  {
    id: 'katunayake-apparel',
    title: 'Powering Export Apparel with 1.4 MW of Rooftop Solar',
    subtitle: 'How a leading manufacturer cut energy costs by 62% and met buyer sustainability targets.',
    image:
      'https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=1400&q=80',
    stats: [
      { label: 'System size', value: '1.4 MW' },
      { label: 'Annual generation', value: '2.05 GWh' },
      { label: 'Cost reduction', value: '62%' },
      { label: 'CO₂ avoided / year', value: '1,450 t' },
    ],
    problem:
      'The manufacturer faced rising fuel-adjustment tariffs that were eroding export margins, while key international buyers introduced renewable energy requirements into supplier scorecards. Diesel backup costs during grid instability compounded the problem.',
    solution:
      'Aproma designed a 1.4 MW rooftop system spread across four production halls, engineered around the factory’s three-shift load profile. The design included HT connection upgrades, protection coordination studies and integration with the factory’s existing energy management system.',
    installation:
      'Installation was completed in 14 weeks with zero lost production hours. Works were phased hall-by-hall, with all crane lifts and roof penetrations scheduled during planned maintenance windows. Over 3,100 panels were installed with walkway systems for safe future maintenance.',
    results:
      'The system now supplies the majority of daytime consumption, cutting grid energy costs by 62%. Generation certificates supplied by Aproma satisfied buyer sustainability audits in the first assessment cycle, and the client has commissioned a feasibility study for battery storage phase two.',
    review: {
      quote:
        'Aproma delivered a megawatt-class project without a single hour of production downtime. The savings exceeded the proposal, and their reporting made our buyer audits straightforward.',
      author: 'Director of Operations',
      company: 'Export Apparel Manufacturer, Katunayake',
    },
    gallery: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'galle-boutique-hotel',
    title: 'A Heritage Hotel Goes Solar Without Touching Its Skyline',
    subtitle: 'Discreet 86 kW rooftop design preserving Galle Fort aesthetics while slashing energy bills.',
    image:
      'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=1400&q=80',
    stats: [
      { label: 'System size', value: '86 kW' },
      { label: 'Monthly savings', value: 'LKR 1.2M' },
      { label: 'Payback period', value: '3.8 years' },
      { label: 'Guest disruption', value: 'Zero' },
    ],
    problem:
      'Air conditioning and kitchen loads made electricity the hotel’s second-largest operating cost. Any solar solution had to be invisible from street level to protect the property’s heritage character and guest experience.',
    solution:
      'Aproma designed a low-profile, all-black 86 kW array on the rear roof planes, verified with sight-line studies from every surrounding street. String-level optimisation handled partial shading from the property’s mature trees.',
    installation:
      'The installation was completed in 11 days, with noisy works confined to a two-hour late-morning window agreed with hotel management. All materials were staged off-site and lifted before guest breakfast hours.',
    results:
      'Daytime grid consumption fell by more than 70%. The hotel now features its solar transition in sustainability-focused marketing, and monthly savings of LKR 1.2M flow directly to the bottom line.',
    review: {
      quote:
        'Our guests never noticed the installation happening — but our accountants certainly noticed the results. Professional from survey to handover.',
      author: 'General Manager',
      company: 'Heritage Hospitality Group, Galle',
    },
    gallery: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'ella-eco-resort',
    title: 'Replacing Diesel with Sunshine at 1,000 Metres',
    subtitle: 'A hybrid microgrid delivering silent, clean power to a remote eco resort in Ella.',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=80',
    stats: [
      { label: 'Solar array', value: '45 kW' },
      { label: 'Battery storage', value: '80 kWh' },
      { label: 'Diesel displaced', value: '90%' },
      { label: 'Generator hours', value: '-94%' },
    ],
    problem:
      'The resort ran almost entirely on diesel generators — expensive, noisy and at odds with its eco-tourism brand. Fuel deliveries up mountain roads added cost and risk during monsoon season.',
    solution:
      'Aproma designed a hybrid microgrid: a 45 kW solar array, 80 kWh LiFePO₄ battery bank and an automated changeover that keeps the existing generator as a rarely-used backup for extended cloudy periods.',
    installation:
      'All equipment was transported in stages to the hilltop site and installed over three weeks, including a purpose-built power house. Staff received full operational training before handover.',
    results:
      'Generator runtime dropped by 94%, the nightly soundscape returned to the jungle, and fuel logistics all but disappeared. The resort now markets certified low-carbon stays at a premium rate.',
    review: {
      quote:
        'The silence is the first thing returning guests mention. Aproma understood both the engineering and the experience we were protecting.',
      author: 'Owner',
      company: 'Eco Tourism Operator, Ella',
    },
    gallery: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

export const getCaseStudyById = (id) => caseStudies.find((c) => c.id === id);
