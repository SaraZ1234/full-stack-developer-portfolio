export interface PricingPlan {
  id: string
  name: string
  description: string
  price: string
  period?: string
  features: string[]
  highlighted?: boolean
  cta: string
  icon: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for personal websites, portfolios, and small business landing pages.',
    price: 'PKR 25,000+',
    period: 'project',
    features: [
      'Responsive landing page or portfolio website',
      'Modern UI with Tailwind CSS',
      'Contact form integration',
      'Basic SEO setup',
      'Deployment support',
      '7-day free support',
    ],
    cta: 'Get Started',
    icon: '🚀',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for startups, restaurants, clinics, schools, and growing businesses.',
    price: 'PKR 60,000+',
    period: 'project',
    highlighted: true,
    features: [
      'Up to 8 custom pages',
      'Professional business website',
      'Responsive design for all devices',
      'WhatsApp/contact integration',
      'SEO optimization',
      '30-day free support',
    ],
    cta: 'Start Your Project',
    icon: '⭐',
  },
  {
    id: 'enterprise',
    name: 'Full Stack Solution',
    description: 'Custom web applications and advanced solutions tailored to business needs.',
    price: 'PKR 150,000+',
    period: 'project',
    features: [
      'Custom dashboard & admin panel',
      'User authentication system',
      'REST API development',
      'Database design & integration',
      'Deployment & production setup',
      '60-day free support',
    ],
    cta: 'Request a Quote',
    icon: '👑',
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    description: 'Keep your website secure, updated, and running smoothly.',
    price: 'PKR 10,000',
    period: 'month',
    features: [
      'Bug fixes & troubleshooting',
      'Website content updates',
      'Performance improvements',
      'Security updates',
      'Priority support',
    ],
    cta: 'Subscribe Now',
    icon: '🔧',
  },
]