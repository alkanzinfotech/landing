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

export const STATS = [
  { label: 'Rooms Delivered', value: 5, suffix: '' },
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

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Brands', to: '/brands' },
  { label: 'Configurator', to: '/configurator' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
