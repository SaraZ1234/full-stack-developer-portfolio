export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'general' | 'technical' | 'pricing' | 'process'
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What type of websites do you build?',
    answer:
      'I build modern, responsive websites for businesses, restaurants, clinics, schools, academies, and startups. My services include business websites, landing pages, website redesigns, and custom web applications.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in modern web technologies including Next.js, React, TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js, and databases like MySQL and MongoDB.',
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'What is your experience level?',
    answer:
      'I have hands-on experience building full-stack web applications, business websites, and real-world projects. I have also gained professional experience through software development roles and industry collaborations.',
  },
  {
    id: 'faq-4',
    category: 'process',
    question: 'What is your website development process?',
    answer:
      'My process includes understanding your requirements, planning the structure, designing the user interface, developing the website, testing responsiveness and performance, deploying the project, and providing support after delivery.',
  },
  {
    id: 'faq-5',
    category: 'process',
    question: 'How long does it take to build a website?',
    answer:
      'The timeline depends on the project requirements. Simple business websites usually take 2-4 weeks, while larger websites and custom web applications may require more time.',
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: 'How much does a website cost?',
    answer:
      'The cost depends on the number of pages, features, design requirements, and technical complexity. Small business websites start from PKR 25,000+, while custom applications are priced according to requirements.',
  },
  {
    id: 'faq-7',
    category: 'pricing',
    question: 'Do you require advance payment?',
    answer:
      'Yes, projects usually start with an advance payment to begin development. Payment milestones can be discussed depending on the project size and requirements.',
  },
  {
    id: 'faq-8',
    category: 'technical',
    question: 'Will my website work on mobile devices?',
    answer:
      'Yes, all websites are developed with responsive design principles to ensure they work smoothly on mobile phones, tablets, and desktop devices.',
  },
  {
    id: 'faq-9',
    category: 'technical',
    question: 'Do you provide SEO optimization?',
    answer:
      'Yes, I implement basic SEO practices including proper page structure, metadata setup, performance optimization, and mobile-friendly development to improve search visibility.',
  },
  {
    id: 'faq-10',
    category: 'process',
    question: 'Can you redesign my existing website?',
    answer:
      'Yes, I can redesign outdated websites by improving the user interface, responsiveness, performance, and overall user experience.',
  },
  {
    id: 'faq-11',
    category: 'process',
    question: 'Do you provide support after website delivery?',
    answer:
      'Yes, I provide post-launch support for bug fixes, updates, and improvements. Maintenance plans are also available for businesses that need ongoing technical assistance.',
  },
  {
    id: 'faq-12',
    category: 'general',
    question: 'Can you work with international clients?',
    answer:
      'Yes, I work remotely and can collaborate with clients from different countries through online communication, regular updates, and transparent project management.',
  },
]
