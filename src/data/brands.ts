export type BrandCategory =
  | 'conferencing'
  | 'displays'
  | 'computing'
  | 'audio'
  | 'security'
  | 'networking'

export interface Brand {
  slug: string
  name: string
  logo: string
  category: BrandCategory
  tagline: string
  description: string
  highlights: string[]
  featured?: boolean
  heroImage?: string
}

export const categoryLabels: Record<BrandCategory, string> = {
  conferencing: 'Conferencing',
  displays: 'Displays',
  computing: 'Computing',
  audio: 'Audio',
  security: 'Security',
  networking: 'Networking',
}

export const brands: Brand[] = [
  {
    slug: 'yealink',
    name: 'Yealink',
    logo: '/images/brands/yealink-logo.png',
    category: 'conferencing',
    tagline: 'Our lead conferencing partner',
    description:
      'AlKanz Infotech is a preferred Yealink integrator, deploying their full room ecosystem across boardrooms, huddle spaces and auditoriums — from AI-framing video bars to native Teams and Zoom room panels.',
    highlights: [
      'MeetingBar & video bar series for huddle-to-large rooms',
      'MVOIP desk phones and DECT handset ranges',
      'Native Teams / Zoom Rooms touch panels & schedulers',
      'Centralized device management via Yealink Management Cloud',
    ],
    featured: true,
    heroImage: '/images/index/yealink.jpg',
  },
  {
    slug: 'poly',
    name: 'Poly',
    logo: '/images/brands/poly-logo.png',
    category: 'conferencing',
    tagline: 'Studio-grade video & voice',
    description:
      'Poly (HP) hardware anchors many of the executive boardrooms we design, prized for its acoustic engineering and camera tracking in demanding rooms.',
    highlights: [
      'Studio series video bars with auto-framing',
      'Voyager & Blackwire headset ranges',
      'Trio conference phones for hybrid rooms',
      'Poly Lens fleet management & analytics',
    ],
  },
  {
    slug: 'jabra',
    name: 'Jabra',
    logo: '/images/brands/jabra-logo.png',
    category: 'conferencing',
    tagline: 'Personal & huddle-room audio',
    description:
      'For individual workstations and compact huddle rooms, Jabra headsets and speakerphones give every seat clear, dependable audio.',
    highlights: [
      'Evolve & Engage professional headsets',
      'Speak speakerphones for huddle spaces',
      'PanaCast intelligent video for small rooms',
      'Jabra Xpress for fleet provisioning',
    ],
  },
  {
    slug: 'logitech',
    name: 'Logitech',
    logo: '/images/brands/logitech-logo.png',
    category: 'conferencing',
    tagline: 'All-in-one room kits',
    description:
      'Logitech powers our fastest room turnarounds — appliance-simple bars and kits that scale from a two-person huddle room to a full boardroom.',
    highlights: [
      'Rally & MeetUp video bar systems',
      'Tap scheduling and room-control panels',
      'Brio and webcam ranges for BYOD desks',
      'Logitech Sync for remote fleet monitoring',
    ],
  },
  {
    slug: 'peoplelink',
    name: 'Peoplelink',
    logo: '/images/brands/peoplelink-logo.png',
    category: 'conferencing',
    tagline: 'Value-engineered Indian conferencing',
    description:
      'An India-built line of PTZ cameras and video bars we recommend where budget discipline matters without giving up room coverage or reliability.',
    highlights: [
      'PTZ cameras with wide-angle room coverage',
      'All-in-one video bars for SMB rooms',
      'Local support and fast replacement turnaround',
      'Strong price-to-performance for multi-room rollouts',
    ],
  },
  {
    slug: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung-logo.png',
    category: 'displays',
    tagline: 'Commercial displays & video walls',
    description:
      'Samsung commercial panels are our default recommendation for boardroom displays, reception signage and modular video walls.',
    highlights: [
      'QM/QB series commercial-grade displays',
      'The Wall & fine-pitch LED video wall modules',
      'Interactive flip panels for training rooms',
      'MagicINFO content & fleet management',
    ],
  },
  {
    slug: 'lg',
    name: 'LG',
    logo: '/images/brands/lg-logo.png',
    category: 'displays',
    tagline: 'Signage & large-format visuals',
    description:
      'LG rounds out our display line-up with slim commercial panels and video wall solutions built for always-on environments.',
    highlights: [
      'UH/UL series commercial signage displays',
      'Ultra-narrow-bezel video wall panels',
      'webOS content management platform',
      'Interactive touch displays for classrooms',
    ],
  },
  {
    slug: 'sony',
    name: 'Sony',
    logo: '/images/brands/sony-logo.png',
    category: 'displays',
    tagline: 'Projection & premium visuals',
    description:
      'For auditoriums and large presentation spaces, Sony projection and premium display hardware deliver the image quality the room demands.',
    highlights: [
      'Laser projectors for auditoriums & lecture halls',
      'BRAVIA professional display range',
      'Crestron / control-system integration',
      'Long-life laser light sources for low upkeep',
    ],
  },
  {
    slug: 'hp',
    name: 'HP',
    logo: '/images/brands/hp-logo.png',
    category: 'computing',
    tagline: 'Endpoint computing for meeting rooms',
    description:
      'HP laptops, desktops and mini-PCs power the room compute and BYOD side of our conferencing deployments.',
    highlights: [
      'EliteBook / ProBook laptop fleets',
      'HP mini and tower PCs for room compute',
      'Business-grade warranty & support paths',
      'Docking and peripheral integration',
    ],
  },
  {
    slug: 'dell',
    name: 'Dell',
    logo: '/images/brands/dell-logo.png',
    category: 'computing',
    tagline: 'Reliable business computing',
    description:
      'Dell notebooks, desktops and monitors are a common backbone for the office IT refreshes we run alongside AV projects.',
    highlights: [
      'Latitude / OptiPlex device ranges',
      'UltraSharp monitors for workstations',
      'Enterprise deployment & asset tagging',
      'ProSupport service coverage options',
    ],
  },
  {
    slug: 'lenovo',
    name: 'Lenovo',
    logo: '/images/brands/lenovo-logo.png',
    category: 'computing',
    tagline: 'Laptops, desktops & docking',
    description:
      'Lenovo hardware fits well into cost-conscious refresh cycles, and we deploy it across desks, labs and shared workstations.',
    highlights: [
      'ThinkPad / ThinkCentre device ranges',
      'ThinkVision monitors and docking hubs',
      'Fleet imaging and asset management',
      'Education & lab-scale bulk deployment',
    ],
  },
  {
    slug: 'jbl',
    name: 'JBL',
    logo: '/images/brands/jbl-logo.png',
    category: 'audio',
    tagline: 'Speakers & PA systems',
    description:
      'JBL loudspeakers cover our larger-venue audio needs — from auditorium reinforcement to background zones in lobbies and retail.',
    highlights: [
      'Line-array and point-source speakers',
      'Ceiling and pendant speakers for zoned audio',
      'Amplification & DSP-tuned systems',
      'Outdoor & high-ambient-noise options',
    ],
  },
  {
    slug: 'ahuja',
    name: 'Ahuja',
    logo: '/images/brands/ahuja-logo.png',
    category: 'audio',
    tagline: 'PA & announcement systems',
    description:
      'A trusted Indian PA brand we specify for campus-wide announcement systems, amplifier racks and ceiling speaker networks.',
    highlights: [
      'Public address amplifiers & mixers',
      'Ceiling and horn speakers for wide coverage',
      'Zone-based announcement systems',
      'Cost-effective coverage for large campuses',
    ],
  },
  {
    slug: 'shure',
    name: 'Shure',
    logo: '/images/brands/shure-logo.png',
    category: 'audio',
    tagline: 'Microphones & mic arrays',
    description:
      'Where speech clarity is critical — boardrooms, courtrooms, council chambers — Shure microphones and DSP is our go-to.',
    highlights: [
      'MXA ceiling & table microphone arrays',
      'Wireless handheld & lavalier mic systems',
      'IntelliMix DSP for automatic mixing',
      'Integration with leading VC platforms',
    ],
  },
  {
    slug: 'hikvision',
    name: 'Hikvision',
    logo: '/images/brands/hikvision-logo.png',
    category: 'security',
    tagline: 'IP cameras & video management',
    description:
      'Hikvision anchors most of our CCTV deployments, from single-site retail stores to multi-building campus surveillance.',
    highlights: [
      'IP bullet, dome & PTZ camera ranges',
      'NVR/DVR recording with long-term storage',
      'AI analytics: intrusion, line-crossing, counting',
      'Mobile & centralized VMS monitoring',
    ],
  },
  {
    slug: 'cp-plus',
    name: 'CP Plus',
    logo: '/images/brands/cp-plus-logo.png',
    category: 'security',
    tagline: 'Value-focused Indian CCTV',
    description:
      'CP Plus gives us a strong value option for surveillance rollouts across retail, warehouses and small offices.',
    highlights: [
      'IP & analog camera ranges',
      'NVR/DVR with mobile viewing apps',
      'Wide local service & spares availability',
      'Budget-friendly multi-camera packages',
    ],
  },
  {
    slug: 'tp-link',
    name: 'TP-Link',
    logo: '/images/brands/tp-link-logo.png',
    category: 'networking',
    tagline: 'Switching, Wi-Fi & structured networking',
    description:
      'TP-Link switches, access points and PoE hardware form the backbone network for the AV, security and IT systems we install.',
    highlights: [
      'Managed & PoE switches for AV-over-IP',
      'Enterprise Wi-Fi access points',
      'Omada centralized network controller',
      'Structured cabling & rack integration',
    ],
  },
  {
    slug: 'beetel',
    name: 'Beetel',
    logo: '/images/brands/beetel-logo.png',
    category: 'networking',
    tagline: 'Telecom & broadband CPE',
    description:
      'Beetel routers and telecom endpoints round out the last-mile connectivity layer for office and branch deployments.',
    highlights: [
      'Broadband routers & ONT/CPE devices',
      'Landline & cordless phone ranges',
      'Bulk branch-office provisioning',
      'Reliable last-mile connectivity hardware',
    ],
  },
]

export const getBrandBySlug = (slug: string) =>
  brands.find((b) => b.slug === slug)
