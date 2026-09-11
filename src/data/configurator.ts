import type { LucideIcon } from 'lucide-react'
import { Laptop, Video, X } from 'lucide-react'

export type OptionType = 'image' | 'icon' | 'logo'

export interface ConfigOption {
  value: string
  label: string
  sub?: string
  img?: string
  icon?: LucideIcon
}

export interface ConfigStep {
  key: string
  title: string
  type: OptionType
}

export const CONFIG_STEPS: (ConfigStep & { options: ConfigOption[] })[] = [
  {
    key: 'roomSize',
    title: 'What room size are you setting up?',
    type: 'image',
    options: [
      { value: 'huddle', label: 'Huddle Room', sub: '2–4 pax', img: '/images/solutions/huddle-room.webp' },
      { value: 'small', label: 'Small Meeting Room', sub: '4–6 pax', img: '/images/solutions/small-meetingroom.webp' },
      { value: 'medium', label: 'Boardroom', sub: '6–12 pax', img: '/images/solutions/meeting-room.webp' },
      { value: 'large', label: 'Auditorium', sub: '12+ pax', img: '/images/solutions/auditoriums.jpg' },
    ],
  },
  {
    key: 'platform',
    title: 'What is your primary video conferencing platform?',
    type: 'icon',
    options: [
      { value: 'teams', label: 'Microsoft Teams', icon: Video },
      { value: 'zoom', label: 'Zoom Rooms', icon: Video },
      { value: 'meet', label: 'Google Meet', icon: Video },
      { value: 'byod', label: 'BYOD / Any', icon: Laptop },
    ],
  },
  {
    key: 'camera',
    title: 'Choose your camera bar brand',
    type: 'logo',
    options: [
      { value: 'yealink', label: 'Yealink', img: '/images/brands/yealink-logo.png' },
      { value: 'poly', label: 'Poly', img: '/images/brands/poly-logo.png' },
      { value: 'jabra', label: 'Jabra', img: '/images/brands/jabra-logo.png' },
      { value: 'logitech', label: 'Logitech', img: '/images/brands/logitech-logo.png' },
      { value: 'peoplelink', label: 'Peoplelink', img: '/images/brands/peoplelink-logo.png' },
    ],
  },
  {
    key: 'display',
    title: 'Choose your display provider',
    type: 'logo',
    options: [
      { value: 'samsung', label: 'Samsung', img: '/images/brands/samsung-logo.png' },
      { value: 'lg', label: 'LG', img: '/images/brands/lg-logo.png' },
      { value: 'sony', label: 'Sony', img: '/images/brands/sony-logo.png' },
    ],
  },
  {
    key: 'audio',
    title: 'Choose your audio provider',
    type: 'logo',
    options: [
      { value: 'shure', label: 'Shure', img: '/images/brands/shure-logo.png' },
      { value: 'ahuja', label: 'Ahuja', img: '/images/brands/ahuja-logo.png' },
      { value: 'jbl', label: 'JBL', img: '/images/brands/jbl-logo.png' },
    ],
  },
  {
    key: 'security',
    title: 'Would you like to add CCTV & access control?',
    type: 'logo',
    options: [
      { value: 'hikvision', label: 'Hikvision', img: '/images/brands/hikvision-logo.png' },
      { value: 'cpplus', label: 'CP Plus', img: '/images/brands/cp-plus-logo.png' },
      { value: 'none', label: 'Not Needed', icon: X },
    ],
  },
]

export const CONFIG_LABELS: Record<string, string> = {
  roomSize: 'Room Size',
  platform: 'VC Platform',
  camera: 'Camera Bar',
  display: 'Display',
  audio: 'Audio',
  security: 'Security Add-on',
}
