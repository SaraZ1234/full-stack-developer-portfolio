import {
  Building2,
  Utensils,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

export interface Industry {
  icon: LucideIcon
  title: string
  description: string
}

export const INDUSTRIES: Industry[] = [
  {
    icon: Building2,
    title: 'Small Businesses',
    description:
      'Professional websites that help local businesses showcase their services and attract more customers.',
  },
  {
    icon: Utensils,
    title: 'Restaurants & Food Businesses',
    description:
      'Digital menus, online ordering support, location integration, and websites that improve customer experience.',
  },
  {
    icon: Stethoscope,
    title: 'Clinics & Healthcare',
    description:
      'Modern healthcare websites with doctor profiles, services, appointment information, and contact options.',
  },
  {
    icon: GraduationCap,
    title: 'Schools & Academies',
    description:
      'Educational websites with course information, admissions details, and online learning support.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Stores',
    description:
      'Responsive online stores with product pages, customer-friendly design, and business-focused features.',
  },
  {
    icon: Rocket,
    title: 'Startups & Companies',
    description:
      'Scalable websites and web applications designed to support growing businesses.',
  },
]