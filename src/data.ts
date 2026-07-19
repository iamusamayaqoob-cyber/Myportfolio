import { PortfolioItem, ServiceItem, SkillItem, ExperienceItem, EducationItem, TestimonialItem } from './types';
import myProfilePic from '../assets/mypic.jpeg';

export const PERSONAL_INFO = {
  name: 'Usama Yaqoob',
  title: 'Professional Graphic Designer & Video Editor',
  shortBio: 'I create high-impact graphic branding, engaging video edits, professional Reels, modern Promo Ads, and YouTube videos that scale brand awareness.',
  bio: 'A highly creative and detail-oriented Professional Graphic Designer, Video Editor, and Computer Operator based in Rahim Yar Khan, Pakistan. Specialized in translating design concepts into stunning logos and visual graphics, as well as crafting highly professional video content—including viral Reels, Youtube pacing, and engaging promo ads. Also boasting over two years of extensive experience handling secure administration archives and office computer operations.',
  avatar: myProfilePic,
  phone: '+92 307 9989925',
  email: 'Usamayaqoob250@gmail.com',
  location: 'Rahim Yar Khan, Pakistan',
  experienceYears: 4,
  completedProjects: 140,
  happyClients: 95,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Developing iconic and memorable logo symbols that communicate core values and command brand authority natively.',
    iconName: 'Sparkles',
    features: ['Custom Vector Geometry', 'Brand Mark Variations', 'High-Res Deliverables (AI, EPS, SVG)', 'Golden Ratio Construction']
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Crafting cohesive brand guidelines, defining typography hierarchies, gold-standard color palettes, and stationery layouts.',
    iconName: 'Briefcase',
    features: ['Typographic Strategy', 'Extensive Corporate Style Guides', 'Custom Business Card Mockups', 'Social Medial Toolkits']
  },
  {
    id: 'video-editing',
    title: 'Professional Video Editing',
    description: 'Transforming raw footage into high-retention stories. Masterful editing for YouTube videos, cinematic vlogs, and corporate tutorials.',
    iconName: 'Video',
    features: ['Seamless Audio & Sound Design', 'Fast-Paced Retention Cuts', 'Crisp Dynamic Color Grading', 'High-Res 4K Render Files']
  },
  {
    id: 'promo-ads-reels',
    title: 'Promo Ads & Reels Specialty',
    description: 'Creating viral high-impact vertical content. Custom Instagram Reels, TikTok video scripts, and commercial product promo advertisements.',
    iconName: 'Film',
    features: ['Kinetic Typography Captions', 'Staggering Transition Effects', 'Strong Hook Focus Design', 'Trending Theme soundscapes']
  },
  {
    id: 'social-media',
    title: 'Social Media Posts',
    description: 'Designing pixel-perfect grids, instagram stories, sales flyers, and carousel banner graphics that explode click-through rates.',
    iconName: 'LayoutGrid',
    features: ['Visually Staggering Grids', 'Optimized Format & Compression', 'Actionable Layouts', 'Conversion Focused Copy Elements']
  },
  {
    id: 'photo-editing',
    title: 'Photo Editing & Retouching',
    description: 'Transforming raw shots into magazine-ready highlights. Expert skin retouching, background removal, and dynamic color grading.',
    iconName: 'Camera',
    features: ['High-Fidelity Skin Smoothing', 'Dynamic Range Compression', 'Object Removal & Masking', 'Product Highlight Focus']
  },
  {
    id: 'business-cards',
    title: 'Business Cards Design',
    description: 'Designing professional, modern business cards with exquisite finishes, dynamic typography pairings, and tactile layout structures.',
    iconName: 'CreditCard',
    features: ['Double-Sided Premium Layouts', 'Print-Ready Formats BLEED Support', 'Spot UV & Gold Foil Overlays', 'Elegant QR Code Integration']
  },
  {
    id: 'flyers-brochures',
    title: 'Flyers & Brochures',
    description: 'Structuring informative, engaging bi-fold and tri-fold publication print layouts that convert readers into recurring clients.',
    iconName: 'FileText',
    features: ['Visual Grid Alignment', 'High-Resolution PDF Files', 'Modern Fold Structures', 'Stunning Custom Visual Vectors']
  },
  {
    id: 'banner-design',
    title: 'Banner Design',
    description: 'Developing high-impact digital billboards, hero web banners, and physical conference backdrop canvas sheets.',
    iconName: 'Image',
    features: ['Wide Format Grid Control', 'High Contast Typography', 'Optimized Light Ratio', 'Universal Standard Vector Formats']
  },
  {
    id: 'vector-illustration',
    title: 'Vector Illustration',
    description: 'Tracing blueprints, rebuilding low-resolution images into infinitely scalable high-fidelity digital master files.',
    iconName: 'PenTool',
    features: ['Hand-drawn Vector Re-tracing', 'Custom Iconography Suites', 'Infinitesimal Magnification Safety', 'Vibrant Color Palettes']
  },
  {
    id: 'document-formatting',
    title: 'Document Formatting',
    description: 'Professional formatting of legal briefs, official registers, books, and business proposals into elite publishing files.',
    iconName: 'Layers',
    features: ['Word Styles Custom Alignment', 'Automated Dynamic Indexes', 'Strict Font & Margin Controls', 'Official Corporate Letterheads']
  },
  {
    id: 'data-entry',
    title: 'Data Entry Services',
    description: 'High-speed typing, ledger management, database cleanups, and administrative record oversight with absolute precision.',
    iconName: 'Database',
    features: ['100% Precision Rate Verification', 'Secure Ledger Sorting', 'Bulk Processing Speed', 'Export Compatibility (XLS, CSV)']
  }
];

export const SKILLS: SkillItem[] = [
  // DESIGN
  { name: 'Graphic Design', percentage: 95, category: 'design' },
  { name: 'Video Editing (Premiere Pro)', percentage: 93, category: 'design' },
  { name: 'Promo Ads & Reels Editing', percentage: 95, category: 'design' },
  { name: 'YouTube Video Editing & Pacing', percentage: 94, category: 'design' },
  { name: 'Adobe Photoshop', percentage: 92, category: 'design' },
  { name: 'Adobe Illustrator', percentage: 88, category: 'design' },
  { name: 'Photo Editing', percentage: 94, category: 'design' },
  { name: 'Brand Identity Design', percentage: 89, category: 'design' },
  { name: 'Logo Design', percentage: 91, category: 'design' },
  { name: 'Social Media Design', percentage: 93, category: 'design' },
  { name: 'Print Design', percentage: 87, category: 'design' },
  
  // OPERATIONS
  { name: 'MS Office Suite', percentage: 95, category: 'operations' },
  { name: 'Data Entry', percentage: 98, category: 'operations' },
  { name: 'Typing & Speed Formatting', percentage: 92, category: 'operations' },
  { name: 'Email Handling & Communication', percentage: 90, category: 'operations' },
  { name: 'Accounting & Bookkeeping', percentage: 85, category: 'operations' },
  { name: 'Record Management', percentage: 94, category: 'operations' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Al-Noor Agro Industries Logo',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    description: 'A modern, premium agricultural branding solution incorporating minimalist organic geometry with high-end gold-sand accents.',
    tools: ['Adobe Illustrator', 'Pen Tool Trace', 'Vector Balancing'],
    client: 'Al-Noor Agencies',
    date: '2024',
    highlights: ['Unique ear-of-wheat golden layout geometry', 'Custom typographic tailoring', 'Engineered for seamless print, embroidery, and digital signage']
  },
  {
    id: 'p2',
    title: 'Royal Cafe Visual Identity Suite',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1511467688468-d0796933c09e?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury coffee shop rebranding. Developed cohesive guidelines, menu layouts, physical coffee cup overlays, and uniform logos.',
    tools: ['Adobe Illustrator', 'Photoshop Mockups', 'Layout Sizing'],
    client: 'Royal Specialty Coffee',
    date: '2023',
    highlights: ['Cohesive dark-slate and copper color theme', 'Comprehensive double-sided menu cards', 'Custom hand-drawn coffee branch vector accents']
  },
  {
    id: 'p3',
    title: 'Zarai Green Pest Campaign Grid',
    category: 'Social Media Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'A social media suite delivering high engagement promotion graphics for agricultural fertilizer and pesticide solutions.',
    tools: ['Adobe Photoshop', 'Color Correction', 'Social Media Guide'],
    client: 'Zarai Pakistan Ltd',
    date: '2024',
    highlights: ['Enhanced conversion layouts for regional platforms', 'Optimized localized copywriting blocks', 'Dynamic high-contrast visual framing']
  },
  {
    id: 'p4',
    title: 'Beauty Splendor Magazine Retouching',
    category: 'Photo Editing',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Exquisite editorial skin and beauty retouching suite. Preserved authentic texture while balancing local color contrasts and blemishes.',
    tools: ['Adobe Photoshop', 'Frequency Separation', 'Dodge & Burn'],
    client: 'Splendor Studios',
    date: '2024',
    highlights: ['Advanced frequency separation retouching', 'Realistic hair and eyelash fine lighting restoration', 'Studio back-layer cleaning and vignette overlay']
  },
  {
    id: 'p5',
    title: 'Bar Association Official Registry Brochure',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    description: 'An elite, professionally formatted printed brochure outlining history, regulatory updates, and legal frameworks.',
    tools: ['InDesign / Word Styles', 'Adobe Illustrator', 'Foil Stamp Align'],
    client: 'District Bar Rahim Yar Khan',
    date: '2023',
    highlights: ['Perfect multi-grid column balance', 'Exquisite golden crest vector resolution', 'Print-ready bleed calibration with zero text layout warping']
  },
  {
    id: 'p6',
    title: 'RYK Industrial Cotton Mills Advertisements',
    category: 'Advertising',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    description: 'A set of large-scale trade summit signage, billboard banners, and magazine double-page ads built for regional prominence.',
    tools: ['Adobe Illustrator', 'Photo Compositing', 'Wide-Format Scale'],
    client: 'RYK Cotton Industry',
    date: '2023',
    highlights: ['Ultra-wide canvas output with zero pixelation', 'Industrial color balance (deep charcoal & copper)', 'Sturdy readable alignment for highway display']
  },
  {
    id: 'p7',
    title: 'Short-Form Kinetic Promo Ad',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=800&q=80',
    description: 'A high-converting promotional ad styled with fast-paced cuts, rich audio soundscapes, and kinetic typography captions designed for maximum target retention.',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Kinetic Typography', 'Sound Design'],
    client: 'Apex Software Digital',
    date: '2024',
    highlights: ['Catchy hook designed within first 2 seconds', 'Sync-to-beat audio transitions', 'Enhanced dynamic contrast color grading']
  },
  {
    id: 'p8',
    title: 'Professional Real Estate Reel & TikTok',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    description: 'An immersive social media vertical video (Reel) designed for high organic reach. Highlights luxury estate tours with cinematic cuts and motion tracking titles.',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Color Grading', 'Motion Tracking'],
    client: 'RYK Premium Realtors',
    date: '2024',
    highlights: ['9:16 vertical crop composition optimized for reels and shorts', 'Smooth custom lens blur transitions', 'Significant boost in property client inquiries']
  },
  {
    id: 'p9',
    title: 'High-Retention YouTube Video Editing',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    description: 'Full-length video editing for high-traffic YouTube channels. Fast-paced modern pacing, overlay graphics, premium lower thirds, B-roll insertions, and clear narrative structures.',
    tools: ['Adobe Premiere Pro', 'Audition', 'B-Roll Sync', 'Lower Thirds'],
    client: 'Chaudhry Vlog Channels',
    date: '2024',
    highlights: ['45% increase in average viewer retention rate', 'Premium noise-canceling dialog clarity boost', 'Dynamic pop-up visual assets & explanatory overlays']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Graphic Design Expert',
    company: 'Expert Graphics',
    location: 'Rahim Yar Khan, Pakistan',
    period: 'Jan 2023 – Present',
    responsibilities: [
      'Engineered hundreds of custom vector logos, branding palettes, and guidelines of supreme international aesthetics.',
      'Created engaging post layout files, carousels, and advertisement banners for local and international retail sectors.',
      'Managed extensive photo editing portfolios including professional color correction, studio masking, and dodging/burning.',
      'Presented multiple custom high-fidelity stationery items, business cards, corporate templates, and magazine spreadsheets.'
    ]
  },
  {
    id: 'exp2',
    role: 'Computer Operator & Document Specialist',
    company: 'District Bar Rahim Yar Khan',
    location: 'Rahim Yar Khan, Pakistan',
    period: 'Mar 2021 – Present (2 Years Equivalent)',
    responsibilities: [
      'Organized and formatted delicate legal documentation, case briefs, schedules, and official registries with meticulous detail.',
      'Conducted fast-paced data entry, typing registries, filing protocols, and digital backup records across official channels.',
      'Ensured seamless network operations, security scans, printer calibrations, and scanner layouts for executive lawyers.',
      'Drafted professional communications, official email structures, and financial logs supporting legal actions.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'The Islamia University of Bahawalpur',
    period: 'Ongoing / Present',
    description: 'Equipping cutting-edge software foundations, graphic design theory, algorithmic models, database architecture, and project workflows.'
  },
  {
    id: 'edu2',
    degree: 'Intermediate in Computer Science (ICS)',
    institution: 'BISE Bahawalpur Board of Education',
    period: 'Graduated',
    description: 'Learned fundamental logic, system setups, web authoring basics, and database controls.'
  },
  {
    id: 'edu3',
    degree: 'Matriculation in Science / Computers',
    institution: 'BISE Bahawalpur Board of Education',
    period: 'Graduated',
    description: 'Completed essential science studies with high honors, mastering basic computing paradigms.'
  }
];

export const SOFT_SKILLS = [
  { name: 'Elite Communication', description: 'Articulating designer choices clearly to gather business needs and feedback.' },
  { name: 'Active Teamwork', description: 'Coordinating projects alongside marketing directors, managers, and legal boards.' },
  { name: 'Infinite Creativity', description: 'Refashioning regular products into striking, world-class aesthetic designs.' },
  { name: 'Fast Adaptability', description: 'Shifting priorities instantly from fine vector trace files to delicate legal spreadsheets.' },
  { name: 'Structured Problem Solving', description: 'Restructuring low-fidelity assets into razor-sharp, print-ready files.' },
  { name: 'Uncompromising Work Ethics', description: 'Honoring complete user confidentiality, copyrights, and precise deadlines.' },
  { name: 'Time Management', description: 'Delivering multiple assets seamlessly under tight launch conditions.' }
];

export const HOBBIES = [
  { name: 'Creative Design & Sketching', icon: 'Brush' },
  { name: 'Self-Help Literature & Reading', icon: 'BookOpen' },
  { name: 'Street & Product Photography', icon: 'Camera' },
  { name: 'Exploring Natural Landscapes', icon: 'Compass' },
  { name: 'Ambient Instrumental Music', icon: 'Music' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Chaudhry Nabeel',
    role: 'Managing Director',
    company: 'Al-Noor Agro Industries',
    content: 'Usama delivered a luxury visual mark that completely separated us from regional copycats. His attention to detail, quick communication, and pure designing talent are of rare caliber.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sarah G.',
    role: 'E-Commerce Retailer',
    company: 'Splendor Boutique',
    content: 'The social media grid Usama designed boosted our Instagram engagement rate in just three weeks. His Photoshop color corrections are flawless. I highly recommend him for high-end graphic assets.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5
  },
  {
    id: 't3',
    name: 'Advocate Muhammad Asif',
    role: 'Senior Executive',
    company: 'District Bar Rahim Yar Khan',
    content: 'An incredibly gifted computer operator. He formatted hundreds of high-stake legal registers, newsletters, and letterheads with absolute precision, speed, and discretion. Essential asset.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    rating: 5
  }
];
