export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  deliverables: string[]
  timeline: string
  price: string
}

export const services = [
  {
    id: 'business-website',
    title: 'Business Website Development',
    description: 'Create modern, responsive, and SEO-friendly websites that help businesses build credibility and attract more customers',
    icon: 'Code2',
    features: [
      'Responsive on all devices',
      'Modern UI/UX design',
      'Fast loading performance',
      'Contact forms & Google Maps',
      'Basic SEO optimization',
      'WhatsApp integration',
    ],
    deliverables: [
      'Fully responsive business website',
      'Contact form with email delivery',
      'Google Maps location embed',
      'Basic on-page SEO setup',
    ],
    timeline: '2-4 weeks',
    price: 'Starting from PKR 35,000',
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Website Development',
    description: 'Professional restaurant websites with menu display, online reservations, location maps, gallery, and WhatsApp ordering integration',
    icon: 'UtensilsCrossed',
    features: [
      'Digital menu',
      'Table reservation',
      'Gallery & food showcase',
      'Google Maps integration',
      'WhatsApp ordering',
      'Mobile-first design',
    ],
    deliverables: [
      'Digital menu with categories & pricing',
      'Reservation/booking form',
      'Photo gallery section',
      'WhatsApp ordering button integration',
    ],
    timeline: '2-4 weeks',
    price: 'Starting from PKR 45,000',
  },
  {
    id: 'clinic-website',
    title: 'Clinic & Healthcare Website',
    description: 'Professional websites for dental clinics, medical centers, and healthcare professionals to improve their online presence',
    icon: 'Stethoscope',
    features: [
      'Appointment booking',
      'Doctor profiles',
      'Services section',
      'Google Maps integration',
      'Contact forms',
      'Mobile responsive',
    ],
    deliverables: [
      'Appointment booking form',
      'Doctor/staff profile pages',
      'Services & treatments section',
      'Clinic location with Google Maps',
    ],
    timeline: '2-4 weeks',
    price: 'Starting from PKR 45,000',
  },
  {
    id: 'school-website',
    title: 'School & Academy Website',
    description: 'Modern websites for schools, colleges, academies, and educational institutions',
    icon: 'GraduationCap',
    features: [
      'Admission information',
      'Courses & programs',
      'Faculty profiles',
      'Contact forms',
      'Gallery',
      'Responsive design',
    ],
    deliverables: [
      'Admissions/enrollment page',
      'Courses & programs listing',
      'Faculty profile section',
      'Photo gallery & contact form',
    ],
    timeline: '3-5 weeks',
    price: 'Starting from PKR 55,000',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern, fast, responsive, and visually appealing business websites',
    icon: 'RefreshCw',
    features: [
      'Complete UI redesign',
      'Mobile optimization',
      'Speed improvements',
      'Better navigation',
      'SEO improvements',
      'Performance optimization',
    ],
    deliverables: [
      'Redesigned, modern UI',
      'Mobile-optimized layout',
      'Before/after speed report',
      'Improved navigation & SEO structure',
    ],
    timeline: '2-3 weeks',
    price: 'Starting from PKR 30,000',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Support',
    description: 'Keep your website secure, updated, and running smoothly with regular maintenance and technical support',
    icon: 'Wrench',
    features: [
      'Bug fixes',
      'Content updates',
      'Security updates',
      'Performance optimization',
      'Backup management',
      'Priority support',
    ],
    deliverables: [
      'Monthly maintenance report',
      'Regular backups',
      'Security patch updates',
      'Priority support channel',
    ],
    timeline: 'Ongoing',
    price: 'Starting from PKR 8,000/month',
  },
]
