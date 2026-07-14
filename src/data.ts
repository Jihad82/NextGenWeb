import { ProjectItem, JournalItem, ExpertiseItem } from './types';

export const VIDEO_URL = "https://res.cloudinary.com/ddhdxfmzf/video/upload/v1783791088/16129133_1920_1080_30fps_mrukkr.mp4";

export const SERVICES = [
  'Web Development',
  'Digital Marketing',
  'SEO & Optimization',
  'Brand & UI Design',
  'E-Commerce Scaling',
  'Lead Generation',
  'Paid Ads Campaign',
  'Other'
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'vespera',
    num: '01',
    category: 'WEB + SEO',
    badge: '+400% SURGE',
    badgeColor: 'text-pink-400',
    title: 'Vespera Skincare',
    summary: 'Premium e-commerce overhaul built with React. Leveraged targeted semantic SEO to achieve a 400% organic traffic surge.',
    challenge: 'Vespera Skincare struggled with a sluggish, slow-loading legacy Shopify site and rising customer acquisition costs. Organic traffic was stagnant, and mobile users were bouncing before checking out due to unresponsive design layouts.',
    solution: 'We engineered an ultra-lightweight, high-performance custom React storefront designed with crisp typography, instant image loading libraries, and robust styling. Combined this with high-performance technical SEO schema, semantic site hierarchies, and deep audit optimizations to maximize Core Web Vitals scores.',
    results: 'Slashed average page load time down to 1.2 seconds, resulting in a 400% surge in organic search traffic and a 45% increase in mobile checkout conversion rate within 90 days.',
    services: ['Web Development', 'SEO & Optimization', 'Brand & UI Design', 'E-Commerce Scaling'],
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'apex',
    num: '02',
    category: 'DEV + CAMPAIGNS',
    badge: '3.4x ROAS',
    badgeColor: 'text-blue-400',
    title: 'Apex SaaS',
    summary: 'NextJS lead acquisition web app fused with structured Meta and Google Ads. Achieved a 3.4x return on ad spend.',
    challenge: 'Apex SaaS had a highly competitive B2B product but struggled to capture high-intent developer and enterprise leads cost-effectively. Their ad traffic was dropping off due to long, multi-step forms and unoptimized landing page experiences.',
    solution: 'Designed and developed a fast Next.js conversion funnel with simplified interactive step forms. Implemented robust automated pixel and API server-side conversion tracking. Set up high-performance targeted Meta and Google Search campaigns focused on high-value keywords and precise buyer personas.',
    results: 'Boosted overall lead-to-signup conversion rate by 120%, driving a 3.4x Return on Ad Spend (ROAS) and securing over 1,500 qualified sales demos in the first quarter alone.',
    services: ['Web Development', 'Paid Ads Campaign', 'Lead Generation', 'Digital Marketing'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kroma',
    num: '03',
    category: 'BRAND + CONVERSION',
    badge: '-42% CAC',
    badgeColor: 'text-emerald-400',
    title: 'Kroma Interactive',
    summary: 'Comprehensive brand voice redesign and landing page speed audit that slashed customer acquisition costs by 42%.',
    challenge: 'Kroma Interactive suffered from a generic digital identity that failed to represent their sophisticated interactive design agency work, leading to high sales friction and expensive customer acquisition costs (CAC).',
    solution: 'Reformed their complete brand voice with custom luxury typography, rich editorial spacing, and curated high-contrast aesthetics. Built a lightning-fast performance landing page with seamless Framer Motion micro-interactions to demonstrate design leadership and build immediate visitor trust.',
    results: 'Slashed client onboarding friction, leading to a 42% reduction in overall Customer Acquisition Cost (CAC) and a 65% surge in high-value inbound sales conversations.',
    services: ['Brand & UI Design', 'SEO & Optimization', 'Conversion Tuning', 'Lead Generation'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'lumina',
    num: '04',
    category: 'WEB + DIGITAL',
    badge: '+180% LEADS',
    badgeColor: 'text-amber-400',
    title: 'Lumina Capital',
    summary: 'Modern B2B fintech platform with secure user journeys and high-converting dynamic calculators that boosted inquiries by 180%.',
    challenge: 'Lumina Capital had a high-traffic fintech site but low conversion rates. Visitors bounced because of complex financial jargon and intimidating inquiry forms that required lengthy manual entry.',
    solution: 'We built a streamlined client application with engaging interactive financial simulators, automatic field validation, and responsive transitions. All forms were designed to load in steps, keeping user cognitive load low.',
    results: 'Inquiries increased by 180% in 60 days, with form abandonment dropping from 74% to 22%.',
    services: ['Web Development', 'Brand & UI Design', 'Lead Generation'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'zenith',
    num: '05',
    category: 'E-COMMERCE',
    badge: '+210% SALES',
    badgeColor: 'text-purple-400',
    title: 'Zenith Apparel',
    summary: 'Ultra-clean premium lifestyle store optimized for performance and custom product customization paths.',
    challenge: 'Zenith struggled with cart drop-offs on high-end custom orders, as their generic interface failed to deliver a premium luxury brand experience.',
    solution: 'Crafted custom, highly tactile product configurators with precise layouts, high-fidelity responsive previews, and instant sub-second checkout speeds.',
    results: 'Sales conversions climbed by 210%, with average order value increasing by 35% within the first month.',
    services: ['Web Development', 'E-Commerce Scaling', 'Brand & UI Design'],
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80'
  }
];

export const JOURNAL_DATA: JournalItem[] = [
  {
    id: 'lag-conversions',
    category: 'SEO & Speed',
    readTime: '4 min read',
    title: 'How 100ms lag directly impacts search positions and checkout conversions',
    summary: "Exploring Google's Core Web Vitals. Let's break down how sub-second speed boosts semantic search ranking weight and slashes card abandonment rates.",
    publishDate: 'July 2, 2026',
    introduction: "In modern digital commerce, speed isn't merely a convenience feature—it is a critical ranking factor and conversion engine. Google's transition to Core Web Vitals (including Interaction to Next Paint and Largest Contentful Paint) means slow websites are actively pushed down in organic search results. At the same time, every millisecond of loading lag represents friction that leaks qualified checkout revenue.",
    keyInsights: [
      "Search Rank Weight: Google heavily penalizes slow LCP (Largest Contentful Paint) scores by reducing crawl budgets and keyword index priority.",
      "Mobile Checkout Friction: Over 68% of e-commerce buyers bounce when interactive components take longer than 200ms to respond.",
      "The 100ms Formula: Shaving just 100ms off your average loading speed correlates directly with a 1.11% increase in absolute conversion rate."
    ],
    deepDive: "To optimize latency, we recommend moving away from bloated, heavy pre-built templates and transitioning toward high-performance React frameworks. By loading static assets on edge servers, minimizing cumulative layout shifts (CLS), and lazily initializing third-party marketing tags, brands can achieve instantaneous page feedback. Speed isn't just about code quality; it is a direct line item on your monthly income statement.",
    takeaway: "An instant storefront is the absolute foundation of successful modern customer acquisition. Optimize speed before scaling ad spend.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'custom-landing-pages',
    category: 'Performance Ads',
    readTime: '6 min read',
    title: 'Architecting custom landing pages for Meta & Google campaign success',
    summary: 'Forget standard generic builder page templates. How bespoke layouts with clean font pairing, precise loading buffers, and focused action steps scale return on ad spend.',
    publishDate: 'June 24, 2026',
    introduction: "A custom high-performance campaign landing page is essentially an editorial narrative focused on conversion. Traditional page builders compromise quality with dense overhead. By building tailored code structures, you remove user friction completely.",
    keyInsights: [
      "Shattering the Template Ceiling: Bloated visual builders inject thousands of lines of unneeded CSS/JS, degrading campaign loading speed and raising CPC.",
      "Uncompromising Focus: High-converting landing pages eliminate external links, multi-level headers, and secondary menus to align purely with a single target action.",
      "Data-driven Attribution: Real success requires robust, server-side conversion tracking (like Meta CAPI) to feed machine-learning ad auction models with high-quality user signals."
    ],
    deepDive: "A high-performing campaign landing page is essentially an editorial story. It starts with an authoritative display heading, uses custom letter-spacing and negative space to establish immediate premium credibility, and answers specific user objections sequentially. Using lightweight frameworks allows us to achieve immediate loads on mobile networks where ad traffic is most prominent.",
    takeaway: "To triple your ROAS, stop driving premium paid traffic to slow, general-purpose corporate websites. Build specialized, laser-focused landing pages.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'typography-trust',
    category: 'Brand Identity',
    readTime: '3 min read',
    title: 'Typography and user trust: why brand styling is the silent growth driver',
    summary: 'In crowded, saturated social feeds, modern visual clarity wins attention. Learn how premium custom letter-spacing and contrast elevate B2B sales authority.',
    publishDate: 'June 18, 2026',
    introduction: "Visual styling is the first point of contact with any prospective client. If your layout feels cluttered, dense, or styled with random margins, buyers project that operational untidiness onto your product quality.",
    keyInsights: [
      "The Aesthetic Contrast Ratio: High-contrast off-whites paired with deep charcoal grays feel sophisticated, instantly separating you from generic blue-purple templates.",
      "Visual Hierarchy Control: Consistent sizing contrasts (e.g., massive editorial serif headers paired with crisp monospace metadata) guide user attention seamlessly.",
      "Typography as Authority: When a layout looks clean, balanced, and elegant, users subconsciously assign a premium valuation and higher trust to the service itself."
    ],
    deepDive: "By utilizing spacious padding, modern, crisp, human-designed typefaces, and omitting unrequested noise, your brand commands premium fees without saying a word. In crowded, saturated social feeds, modern visual clarity wins attention.",
    takeaway: "Pristine visual styling is not cosmetic fluff. It is an extremely high-leverage business asset that builds immediate sales authority.",
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'conversion-design',
    category: 'Conversion Tuning',
    readTime: '5 min read',
    title: 'The anatomy of a landing page hero section that converts at 12%+',
    summary: 'Breaking down visual focal points, trust signals, and the exact spacing balance that compels actions without overwhelming readers.',
    publishDate: 'May 30, 2026',
    introduction: "The hero section of your page carries over 80% of the conversion weight. If visitors don't understand your unique value proposition within 3 seconds, they will bounce. Crafting a high-converting hero section requires a calculated intersection of visual typography hierarchy and immediate clarity.",
    keyInsights: [
      "The 3-Second Rule: Your primary headline must answer what you do, who it is for, and what action to take next, instantly.",
      "Eliminate Visual Noise: Remove massive uncompressed images, complex background patterns, and confusing dual-action CTAs.",
      "The Power of Negative Space: Generous margins focus the user's eyes on your core message and action buttons naturally."
    ],
    deepDive: "We recommend a single, bold, clean display heading, a secondary supporting text line that details the actual benefit, and a prominent call-to-action button flanked by authentic trust anchors like real outcome statistics or client logos. Keep animations minimal; subtle page entries perform better than distracting sliding carousels.",
    takeaway: "Keep your hero sections focused, fast, and clear. Slower pages with fancy clutter always leak conversion revenue.",
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'organic-seo-framework',
    category: 'SEO & Speed',
    readTime: '7 min read',
    title: 'Strategic semantic SEO: outranking venture-backed giants on a budget',
    summary: 'How to discover high-value search intent clusters and leverage technical page architecture to capture organic traffic without high budget dependencies.',
    publishDate: 'May 14, 2026',
    introduction: "Many companies believe SEO requires spending tens of thousands on continuous backlink buying campaigns. In reality, modern search engines reward deep semantic completeness and outstanding user loading experience above all else.",
    keyInsights: [
      "Intent Mapping: Group your keywords into hyper-targeted topic hubs rather than individual disconnected landing pages.",
      "Semantic Schema Markup: Use high-quality JSON-LD structured data to tell search engines exactly what your content represents.",
      "Mobile Responsiveness: Over 70% of organic search traffic originates on mobile; pages with slow mobile layouts are strictly deprioritized."
    ],
    deepDive: "By creating authoritative, high-density resource centers built on modern high-speed frameworks, your pages gain immediate indexing weight. Consistently audit your site's heading structure, compress and modernize images into lightweight formats, and ensure your site satisfies user intent immediately to keep bounce rates minimal.",
    takeaway: "Satisfy human intent with high-speed performance, and search engines will naturally promote your brand to page one.",
    image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?auto=format&fit=crop&w=600&q=80'
  }
];

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'web-dev',
    num: '01',
    category: 'ENGINEERING',
    title: 'Web Development',
    summary: 'Custom-coded React & NextJS websites, fast page loads, API proxy setups, and secure, responsive container architecture.',
    bgIconColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    iconName: 'Monitor',
    introduction: 'We engineer bespoke web applications with clean, production-grade codebase layouts and zero template overhead. By removing unnecessary libraries and utilizing lightweight React architectures, we ensure instant response times across both mobile and desktop screens.',
    methodology: [
      "Component Modularity: Deconstructing layouts into lightweight, reusable elements to prevent rendering bottlenecks.",
      "State Separation: Utilizing clean local states and Context engines for responsive, lightning-fast UI transitions.",
      "Container Deployment: Structuring applications for secure, scalable Docker environments running behind edge CDN routing."
    ],
    deepDive: "Performance is the single highest leverage design pattern. We focus heavily on Interaction to Next Paint (INP) and Largest Contentful Paint (LCP) optimizations. Every visual layout change is guided by responsive resize observers and smooth CSS transitions, elevating search indexing visibility and user trust concurrently.",
    takeaway: "Custom high-performance code forms the absolute core foundation of all modern marketing, security, and organic search campaigns.",
    deliverables: ['Next.js / Vite React', 'Tailwind Utility Systems', 'API Gateway Proxies', 'Secure Edge Provisioning']
  },
  {
    id: 'paid-ads',
    num: '02',
    category: 'CAMPAIGNS',
    title: 'Digital Marketing & Paid Ads',
    summary: 'Highly optimized Google and Meta ad campaigns, custom conversion tracking (CAPI), landing page creation, and lead pipelines.',
    bgIconColor: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    iconName: 'Layers',
    introduction: 'We design and run multi-channel campaign architectures that bridge the gap between creative visual narrative and robust quantitative tracking. We bypass generic ad structures, targeting precise custom intent groups with custom landing pages.',
    methodology: [
      "Server-Side Attribution: Integrating Facebook Conversions API and Google Tag Manager server-side to guarantee clean data streams.",
      "Ad Funnel Segmentation: Matching ad creatives directly to targeted user awareness levels (Top-of-Funnel vs. Bottom-of-Funnel).",
      "Landing Page Alignment: Custom-building landing layouts that continue the exact visual story and messaging of the ad."
    ],
    deepDive: "Successful digital marketing is a science of reducing friction. We continuous-test ad headlines and layout variants. Instead of driving premium paid traffic to slow, general-purpose corporate sites, we construct laser-focused campaign routes that guide users to action steps in under 15 seconds.",
    takeaway: "Highly targeted campaigns combined with instant, distraction-free landing structures are the fastest way to multiply your absolute ROAS.",
    deliverables: ['Meta Campaigns & Conversions API', 'Google Search & Performance Max', 'Multi-step Acquisition Funnels', 'Data-driven Campaign Auditing']
  },
  {
    id: 'seo-growth',
    num: '03',
    category: 'ORGANIC',
    title: 'SEO & Organic Growth',
    summary: 'Technical SEO auditing, high-performance page scores, semantic site hierarchies, and high-impact keyword ranking campaigns.',
    bgIconColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    iconName: 'TrendingUp',
    introduction: 'We help brands outrank venture-backed competitors on highly competitive search topics. Our organic methodology prioritizes semantic completeness, site architecture layout, and excellent technical Web Vitals over brute-force backlink buying.',
    methodology: [
      "Semantic Intent Mapping: Discovering and organizing keyword search clusters that match exact client pain points.",
      "Technical Core Web Vitals: Optimizing page speeds and cumulative layout shifts to gain maximum search crawling priority.",
      "Structured Metadata Schema: Injecting clean, rich JSON-LD data structures to ensure search engines index content with high context."
    ],
    deepDive: "Search engines are built to reward answers that satisfy human intent immediately. By designing clean, authoritative resource layouts and minimizing page latency, your site achieves sustainable organic visibility that continues to drive compound traffic without ad spend dependencies.",
    takeaway: "Satisfy search engines by delivering exceptional user experiences. Structural semantic alignment is the ultimate long-term growth asset.",
    deliverables: ['Technical Core Web Vitals Audits', 'Semantic Topic Clustering', 'Schema JSON-LD Structuring', 'Competitive Search Audits']
  }
];
