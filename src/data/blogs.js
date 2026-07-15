// Blog posts. `content` is an array of paragraphs so the detail page can render clean prose.

export const blogCategories = ['All', 'Solar Basics', 'Financing', 'Technology', 'Case Insights', 'Policy'];

export const blogs = [
  {
    id: 'net-metering-vs-net-accounting-2026',
    title: 'Net Metering vs. Net Accounting vs. Net Plus: Which Scheme Fits Your Home in 2026?',
    category: 'Policy',
    date: 'June 18, 2026',
    author: 'Nadeesha Silva',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Choosing the right grid connection scheme can change your payback period by years. Here is a plain-language guide to Sri Lanka’s three options.',
    featured: true,
    content: [
      'When you connect a rooftop solar system to the national grid in Sri Lanka, you choose one of three schemes: net metering, net accounting, or net plus. The right choice depends almost entirely on how your household uses electricity — and getting it wrong can stretch your payback period by years.',
      'Net metering is the simplest: every unit you export offsets a unit you import. If your system is sized close to your consumption, this keeps your bill near zero. It suits households whose daytime and evening usage are roughly balanced across the month.',
      'Net accounting pays you a fixed rate for excess exported energy while billing your imports at the normal tariff. This becomes attractive when your system generates significantly more than you consume — the surplus becomes income rather than banked units.',
      'Net plus separates the two flows entirely: the utility buys all your generation at an agreed rate, and you buy all your consumption at the standard tariff. This suits property owners installing large systems primarily as an investment.',
      'Our consultants model all three schemes against your last six months of bills before recommending one. The difference between the best and worst choice for a typical 8 kW home system can exceed LKR 40,000 per year — which is why this analysis is part of every Aproma proposal, free of charge.',
    ],
  },
  {
    id: 'how-solar-panels-handle-monsoon',
    title: 'How Solar Panels Perform Through Sri Lanka’s Monsoon Seasons',
    category: 'Solar Basics',
    date: 'May 30, 2026',
    author: 'Kasun Rathnayake',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'A common worry: “What happens to my solar system during the monsoon?” The data may surprise you.',
    featured: false,
    content: [
      'One of the most common questions we hear at consultations is whether solar makes sense in a country with two monsoon seasons. The short answer: yes, emphatically — and the generation data from our 1,000+ installed systems proves it.',
      'Solar panels generate from light, not heat. Even under heavy cloud, systems typically produce 20–40% of their clear-sky output. Across a full monsoon month, most of our customers see monthly generation dip by 25–35% compared to peak months — a seasonal variation we build into every savings forecast.',
      'Rain actually helps in one respect: it washes dust and debris from panels, restoring output that gradual soiling takes away. Many customers notice a small performance bump immediately after the first heavy rains.',
      'Wind loading is the real engineering consideration. Aproma mounting systems are specified for Sri Lankan coastal and highland wind zones, with pull-out tests performed on roof fixings during installation. This is one of the areas where premium installation practices matter far more than panel brand.',
      'The bottom line: annual generation forecasts in our proposals already account for both monsoons using 20-year local irradiance data. What you see in your proposal is what your system delivers across a full year — monsoons included.',
    ],
  },
  {
    id: 'solar-loan-guide-sri-lanka',
    title: 'The Complete Guide to Solar Loans in Sri Lanka',
    category: 'Financing',
    date: 'May 12, 2026',
    author: 'Ravindu Peiris',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'You don’t need the full system cost in hand to go solar. Here is how green financing works, step by step.',
    featured: false,
    content: [
      'The single biggest misconception about rooftop solar is that you need the entire system cost upfront. In reality, a growing number of Sri Lankan banks offer dedicated solar loan products — and for many households, the monthly loan installment is lower than the electricity bill it replaces.',
      'Solar loans typically cover 70–100% of the system cost with tenures of five to seven years. Because the system starts saving money from the day it is commissioned, the effective cost of the loan is offset by your reduced bill from month one.',
      'The sweet spot occurs when monthly savings exceed the loan installment — meaning you are cash-flow positive from the start, and after the loan term ends, the full savings flow to you for the remaining 18+ years of system life.',
      'Documentation is straightforward: proof of income, recent electricity bills, and the system proposal from your installer. Aproma prepares the technical documentation banks require and can introduce you directly to partner bank officers who specialise in solar lending.',
      'Our advice: get your solar proposal first, then compare loan offers against it. The proposal defines your savings, and the savings define which loan structures make sense. Both steps are free — so there is no reason not to run the numbers.',
    ],
  },
  {
    id: 'lifepo4-batteries-explained',
    title: 'Why LiFePO₄ Became the Standard for Home Battery Storage',
    category: 'Technology',
    date: 'April 22, 2026',
    author: 'Nadeesha Silva',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Lithium iron phosphate chemistry dominates modern home storage. Here’s what makes it different — and safer.',
    featured: false,
    content: [
      'If you have researched battery storage recently, you have seen the term LiFePO₄ (lithium iron phosphate) everywhere. It has become the default chemistry for stationary storage worldwide, and for good reasons that matter in Sri Lankan conditions.',
      'Safety is the headline. LiFePO₄ cells are thermally stable and highly resistant to the thermal runaway failures associated with other lithium chemistries — a meaningful consideration for batteries installed inside homes in a tropical climate.',
      'Cycle life is the economic story. Quality LiFePO₄ batteries are rated for 6,000+ charge cycles, which translates to well over 15 years of daily use. Older lead-acid systems needed replacement every 3–5 years; the lifetime economics are not close.',
      'Heat tolerance matters here specifically. Ambient temperatures in Sri Lanka accelerate degradation in most battery chemistries. LiFePO₄ degrades slower at elevated temperatures than alternatives, though proper ventilation and placement — part of every Aproma installation — still extend life meaningfully.',
      'When comparing quotes, look past the headline kWh figure: check the cycle rating, depth-of-discharge specification, and warranty terms. A cheaper battery rated for fewer cycles at lower depth of discharge often costs more per usable kilowatt-hour over its life.',
    ],
  },
  {
    id: 'factory-solar-buyer-audits',
    title: 'How Rooftop Solar Helps Sri Lankan Exporters Pass Buyer Sustainability Audits',
    category: 'Case Insights',
    date: 'April 3, 2026',
    author: 'Ravindu Peiris',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'International buyers increasingly score suppliers on renewable energy. Solar has become a competitive requirement, not a nice-to-have.',
    featured: false,
    content: [
      'For Sri Lanka’s export manufacturers, sustainability scorecards from international buyers have moved from marketing material to purchase-order prerequisites. Renewable energy sourcing is now a scored line item in frameworks like Higg FEM — and rooftop solar is the most direct way to score it.',
      'The mechanics matter: buyers want verifiable generation data, not claims. Modern solar installations log generation at the inverter level, and Aproma provides monthly certified generation reports formatted for audit submission.',
      'Beyond the audit checkbox, the economics stand alone. Factories running daytime shifts consume power exactly when solar generates it, meaning self-consumption rates above 95% are common — the best possible economics for a solar investment.',
      'Our Katunayake apparel client is a working example: their 1.4 MW system satisfied buyer renewable energy requirements in the first audit cycle after commissioning, while cutting grid energy costs by 62%. The sustainability requirement effectively paid for itself.',
      'If your factory exports to Europe or North America, we recommend starting with an energy audit and a solar feasibility study now — buyer requirements are tightening annually, and grid connection approvals take time to process.',
    ],
  },
  {
    id: 'ev-charging-at-home',
    title: 'Charging Your EV at Home: What Sri Lankan Owners Need to Know',
    category: 'Technology',
    date: 'March 15, 2026',
    author: 'Kasun Rathnayake',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'A dedicated home charger is safer, faster and smarter than a wall socket. Here’s the practical guide.',
    featured: false,
    content: [
      'Every electric vehicle can technically charge from a standard wall socket — but “can” and “should” are different things. A dedicated home charging point is safer, three to seven times faster, and unlocks smart features that a socket never will.',
      'A 7 kW Type 2 wallbox adds roughly 35–40 km of range per hour of charging, meaning a full overnight charge for almost any EV on Sri Lankan roads. Standard sockets deliver a fraction of that, while running at their thermal limits for hours — a genuine fire consideration in older wiring.',
      'The installation itself involves a dedicated circuit from your distribution board with appropriate protection. Our site check confirms your supply capacity; most single-phase homes accommodate a 7 kW charger comfortably.',
      'The smart part: if you have rooftop solar, a solar-priority charging mode diverts excess generation into your vehicle instead of exporting it. Depending on your tariff scheme, this can make your driving cheaper than any export credit would.',
      'Installation typically takes half a day. If you are planning both solar and EV charging, mention it during your consultation — designing them together is cheaper than adding the charger later.',
    ],
  },
];

export const getBlogById = (id) => blogs.find((b) => b.id === id);
