export const CONTACT = {
  phone: '+91 63768 98835',
  phoneHref: 'tel:+916376898835',
  email: 'alkanzinfotech@gmail.com',
  emailHref: 'mailto:alkanzinfotech@gmail.com',
  addressShort: 'Andheri (E), Mumbai 400059',
  addressFull:
    'Unit 2, 4th Floor, A Wing, Time Square Building, Marol, Nilkanth Park, Andheri (E), Mumbai, 400059',
  hours: 'Mon–Sat, 10:00–19:00',
  mapEmbed:
    'https://www.google.com/maps?q=UNT%20NO%20-%202%2C%204TH%20FLOOR%2C%20A%20WING%2C%20TIME%20SQUARE%20BUILDING%2C%20MAROL%2C%20NILKANTH%20PARK%2C%20ANDHERI%20(E)%2C%20MUMBAI%2C%20400059&z=16&output=embed',
}

export const EMAILJS = {
  serviceId: 'service_teli5hn',
  templateId: 'template_6b6a54x',
  publicKey: 'w2RNvrnXNfAwhUOPU',
}

export const WEB3FORMS = {
  accessKey: 'e3323258-9a61-43dc-b524-9c7be08477a0',
}

export const COMPARE_URL = 'https://compare.alkanzinfotech.in'

export const STATS = [
  { label: 'Rooms Delivered', value: 20, suffix: '+' },
  { label: 'Brand Partnerships', value: 18, suffix: '+' },
  { label: 'Certified Installs', value: 100, suffix: '%' },
  { label: 'Support Line', value: 24, suffix: '×7' },
]

export type Feature = {
  title: string
  description: string
  icon: 'camera' | 'display' | 'audio' | 'shield'
}

export const FEATURES: Feature[] = [
  {
    title: 'Camera Bars & VC',
    description:
      'AI framing, 4K PTZ, Teams / Zoom certified endpoints with robust cabling and control.',
    icon: 'camera',
  },
  {
    title: 'Displays & LED Walls',
    description:
      'Commercial signage, interactive panels, ultra-low bezel video walls, mounting and power.',
    icon: 'display',
  },
  {
    title: 'Audio Systems',
    description:
      'Ceiling mics, beamforming arrays, DSP tuning, acoustic treatment and speakers.',
    icon: 'audio',
  },
  {
    title: 'CCTV & Access',
    description:
      'IP cameras, NVRs, analytics, attendance and access control integrated securely.',
    icon: 'shield',
  },
]

export type Sector = {
  name: string
  description: string
  icon: 'corporate' | 'education' | 'healthcare' | 'public' | 'retail' | 'residential'
}

export const SECTORS: Sector[] = [
  { name: 'Corporate', description: 'Boardrooms, huddle spaces & enterprise-wide standards.', icon: 'corporate' },
  { name: 'Education', description: 'Smart classrooms, lecture capture & hybrid learning.', icon: 'education' },
  { name: 'Healthcare', description: 'Telemedicine, ward displays & secure surveillance.', icon: 'healthcare' },
  { name: 'Public Sector', description: 'Council chambers, auditoriums & citizen-facing displays.', icon: 'public' },
  { name: 'Retail', description: 'Digital signage, queue displays & in-store security.', icon: 'retail' },
  { name: 'Residential', description: 'Home theatres, smart security & seamless control.', icon: 'residential' },
]

export const PROCESS = [
  { num: '01', title: 'Consult', description: 'Understand your space, use-cases and budget.' },
  { num: '02', title: 'Design', description: 'Drawings, BoQ and signal flow tailored to the room.' },
  { num: '03', title: 'Supply', description: 'Genuine hardware sourced from authorized OEM partners.' },
  { num: '04', title: 'Install', description: 'Cabling, mounting, commissioning & DSP tuning on site.' },
  { num: '05', title: 'Support', description: 'Training, SLAs and a dedicated pan-India helpline.' },
]

export const WHY_US = [
  { title: 'Certified Engineers', description: 'OEM-trained technicians handle design through commissioning.' },
  { title: 'Genuine Hardware', description: 'Authorized partnerships mean real warranties, no grey imports.' },
  { title: 'Single Point of Contact', description: 'One team for AV, networking, security and support tickets.' },
  { title: 'Pan-India Service', description: 'Multi-site rollouts standardized across every location.' },
  { title: 'Future-Proof Design', description: 'Scalable systems that grow with your headcount and needs.' },
  { title: 'Transparent Pricing', description: 'Itemized BoQs — you see exactly what you are paying for.' },
]

export type Solution = {
  slug: string
  badge: string
  title: string
  description: string
  image?: string
  graphic?: 'security' | 'network'
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'meeting-rooms',
    badge: 'Meeting Rooms',
    title: 'Small, Medium & Boardrooms',
    description:
      'All-in-one bars, PTZ cameras, DSP, control panels, BYOD / room systems, cable management and display mounting.',
    image: '/images/solutions/small-meetingroom.webp',
  },
  {
    slug: 'auditoriums',
    badge: 'Auditoriums',
    title: 'Large Venues',
    description:
      'Line-array speakers, wireless mics, stage lighting, projection / LED walls and multi-camera switching.',
    image: '/images/solutions/auditoriums.jpg',
  },
  {
    slug: 'training-rooms',
    badge: 'Training Rooms',
    title: 'Interactive Learning',
    description:
      'Touch displays, tracking cameras, recording, hybrid teaching tools and acoustic treatment.',
    image: '/images/solutions/training-room.jpg',
  },
  {
    slug: 'huddle-spaces',
    badge: 'Huddle Spaces',
    title: 'Quick Collaboration',
    description:
      'USB bars, table mics, compact displays, wireless sharing and occupancy sensors.',
    image: '/images/solutions/huddle-room.webp',
  },
  {
    slug: 'cctv-access',
    badge: 'CCTV & Access',
    title: 'Security',
    description:
      'IP cameras, VMS, NVR, analytics, visitor & access control, secure storage and monitoring.',
    graphic: 'security',
  },
  {
    slug: 'network-control',
    badge: 'Network & Control',
    title: 'Infrastructure',
    description:
      'Structured cabling, PoE, AV-over-IP, control processors, touch panels and UPS.',
    graphic: 'network',
  },
]

export type DevService = {
  slug: string
  title: string
  description: string
  highlights: string[]
  icon: 'website' | 'software' | 'app'
}

export const DEV_SERVICES: DevService[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    description:
      'Fast, responsive websites and landing pages built for conversions — from company sites to product and campaign pages.',
    highlights: [
      'Custom design, not a template reskin',
      'Responsive across mobile, tablet and desktop',
      'SEO-friendly foundations from day one',
      'CMS-backed or fully custom, your choice',
    ],
    icon: 'website',
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    description:
      'Custom business software and internal tools that replace spreadsheets and manual processes with something built for how your team actually works.',
    highlights: [
      'Internal dashboards & admin panels',
      'Workflow and process automation',
      'Third-party integrations & APIs',
      'Built to scale as your team grows',
    ],
    icon: 'software',
  },
  {
    slug: 'app-development',
    title: 'App Development',
    description:
      'Mobile and web apps for your customers or your own team, from first prototype through to launch and support.',
    highlights: [
      'iOS, Android and cross-platform builds',
      'Progressive web apps',
      'Push notifications & offline support',
      'App store submission handled for you',
    ],
    icon: 'app',
  },
]

export const DEV_PROCESS = [
  { num: '01', title: 'Discover', description: 'Understand your goals, users and existing systems.' },
  { num: '02', title: 'Design', description: 'Wireframes and UI design built around your brand.' },
  { num: '03', title: 'Build', description: 'Iterative development with regular check-ins.' },
  { num: '04', title: 'Test', description: 'QA across devices, browsers and real-world scenarios.' },
  { num: '05', title: 'Launch & Support', description: 'Deployment, handover training and ongoing support.' },
]

export const DEV_WHY_US = [
  { title: 'One Team, Start to Finish', description: 'The same team designs, builds and supports your project — no handoffs.' },
  { title: 'Built to Scale', description: 'Architecture that grows with your business instead of needing a rebuild.' },
  { title: 'Transparent Timelines', description: 'Clear milestones and regular updates, no black-box development.' },
  { title: 'Support After Launch', description: 'We stay on for fixes, updates and new features after you go live.' },
]

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Brands', to: '/brands' },
  { label: 'Configurator', to: '/configurator' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
