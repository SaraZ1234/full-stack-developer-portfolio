export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

// export const projects: Project[] = [
//   {
//     id: 'ecommerce-platform',
//     title: 'Premium E-Commerce Platform',
//     description: 'Full-stack e-commerce solution with advanced features and seamless checkout',
//     shortDescription: 'Next.js e-commerce with Stripe integration and real-time inventory',
//     image: '/projects/ecommerce.png',
//     category: 'E-Commerce',
//     technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
//     liveUrl: 'https://ecommerce-demo.com',
//     githubUrl: 'https://github.com/yourname/ecommerce-platform',
//     caseStudy: 'Led complete redesign and implementation of an e-commerce platform serving 50K+ monthly users',
//     challenge: 'The legacy platform suffered from slow load times (5s+), poor user experience, and frequent payment failures. Conversion rate was only 1.2%.',
//     solution: 'Migrated to Next.js with optimized images, implemented server-side rendering for critical pages, integrated Stripe for reliable payments, and redesigned checkout flow to reduce friction.',
//     results: [
//       'Page load time reduced by 75% (from 5s to 1.2s)',
//       'Conversion rate increased to 3.8% (+216%)',
//       'Payment failure rate dropped to 0.02%',
//       'Mobile traffic increased by 45%',
//     ],
//     metrics: [
//       { label: 'Load Time Improvement', value: '75%' },
//       { label: 'Conversion Rate Increase', value: '216%' },
//       { label: 'Monthly Active Users', value: '50K+' },
//       { label: 'Revenue Growth', value: '+$2.1M/year' },
//     ],
//   },
//   {
//     id: 'saas-dashboard',
//     title: 'Enterprise SaaS Dashboard',
//     description: 'Real-time analytics and management dashboard for enterprise clients',
//     shortDescription: 'React-based SaaS dashboard with real-time data visualization',
//     image: '/projects/saas.png',
//     category: 'SaaS',
//     technologies: ['React', 'Next.js', 'TypeScript', 'WebSocket', 'Chart.js', 'PostgreSQL'],
//     liveUrl: 'https://saas-demo.com',
//     githubUrl: 'https://github.com/yourname/saas-dashboard',
//     caseStudy: 'Architected and developed a comprehensive dashboard for enterprise analytics and reporting',
//     challenge: 'Need to handle millions of data points, provide real-time updates, and ensure sub-100ms response times for a global user base.',
//     solution: 'Implemented WebSocket for real-time updates, optimized database queries with indexing, used React hooks for state management, and built custom visualization components.',
//     results: [
//       'Reduced data query time by 85%',
//       'Real-time updates with <50ms latency',
//       'Support for 100+ concurrent users',
//       'Dashboard adoption rate reached 98%',
//     ],
//     metrics: [
//       { label: 'Query Performance', value: '85%↓' },
//       { label: 'Real-time Latency', value: '<50ms' },
//       { label: 'Concurrent Users', value: '100+' },
//       { label: 'Adoption Rate', value: '98%' },
//     ],
//   },
//   {
//     id: 'mobile-app',
//     title: 'Cross-Platform Mobile App',
//     description: 'Native iOS and Android app with seamless synchronization',
//     shortDescription: 'React Native mobile app with real-time sync and offline support',
//     image: '/projects/mobile.png',
//     category: 'Mobile',
//     technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'SQLite'],
//     liveUrl: 'https://apps.apple.com/app/yourapp',
//     githubUrl: 'https://github.com/yourname/mobile-app',
//     caseStudy: 'Developed a cross-platform mobile application reaching 100K+ downloads',
//     challenge: 'Build a reliable offline-first app with complex data synchronization across multiple devices and platforms.',
//     solution: 'Implemented Redux for state management, SQLite for local storage, Firebase for backend sync, and optimized app bundle size.',
//     results: [
//       '100K+ downloads in first month',
//       '4.8-star rating across app stores',
//       '95% user retention after 30 days',
//       'Zero critical bugs in production',
//     ],
//     metrics: [
//       { label: 'Total Downloads', value: '100K+' },
//       { label: 'Average Rating', value: '4.8★' },
//       { label: 'User Retention', value: '95%' },
//       { label: 'App Size', value: '45MB' },
//     ],
//   },
//   {
//     id: 'marketing-website',
//     title: 'High-Performance Marketing Site',
//     description: 'SEO-optimized marketing website with conversion optimization',
//     shortDescription: 'Next.js marketing site with 98 Lighthouse score',
//     image: '/projects/marketing.png',
//     category: 'Web Design',
//     technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
//     liveUrl: 'https://marketing-demo.com',
//     githubUrl: 'https://github.com/yourname/marketing-website',
//     caseStudy: 'Designed and developed a high-performance marketing website with exceptional SEO',
//     challenge: 'Create a visually stunning website that performs exceptionally well (90+ Lighthouse), ranks for competitive keywords, and converts visitors.',
//     solution: 'Used Next.js for optimal performance, implemented image optimization, structured data for SEO, and smooth animations with Framer Motion.',
//     results: [
//       '98/100 Lighthouse score',
//       '1st page ranking for 50+ keywords',
//       'Organic traffic increased by 300%',
//       'Lead generation cost reduced by 60%',
//     ],
//     metrics: [
//       { label: 'Lighthouse Score', value: '98/100' },
//       { label: 'Organic Traffic', value: '+300%' },
//       { label: 'Keywords Ranking', value: '50+' },
//       { label: 'Lead Quality', value: '+60%' },
//     ],
//   },
// ]

export const projects: Project[] = [
  {
    id: "virtual-learning-academy",
    title: "Virtual Learning Academy",
    description:
      "A full-stack Learning Management System with secure authentication, course management, and student enrollment.",
    shortDescription:
      "Complete Learning Management System with student enrollment, authentication, course management, and responsive dashboard",
    image: "/projects/virtual-learning-academy.png",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
    ],
    liveUrl: "https://virtual-learning-academy-lilac.vercel.app/",
    githubUrl: "https://github.com/SaraZ1234/virtual-learning-academy",
    caseStudy:
      "Designed and developed a modern Learning Management System featuring role-based authentication, course management, and enrollment functionality.",
    challenge:
      "Building a secure and scalable LMS with authentication, role-based access, and relational database management while maintaining a clean and responsive user experience.",
    solution:
      "Developed REST APIs using Express.js, implemented JWT authentication, designed a MySQL relational database, and built a responsive frontend using Next.js, React, and Tailwind CSS.",
    results: [
      "Implemented secure JWT authentication",
      "Role-based Admin and Student dashboards",
      "Complete CRUD functionality for courses",
      "Responsive design optimized for all devices",
    ],
    metrics: [
      { label: "Frontend", value: "Next.js" },
      { label: "Backend", value: "Node.js" },
      { label: "Database", value: "MySQL" },
      { label: "Authentication", value: "JWT" },
    ],
  },
  {
    id: "fast-media-agency",
    title: "FAST Media Agency",
    description:
      "Modern agency website designed to showcase services, improve online presence, and generate customer inquiries.",
    shortDescription:
      "Modern business website built with Next.js, React, and Tailwind CSS with responsive design and optimized performance.",
    image: "/projects/fast-media-agency.png",
    category: "Business Website",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://fast-media-agency-five.vercel.app/",
    githubUrl: "https://github.com/SaraZ1234/fast-media-agency",
    caseStudy:
      "Designed and developed a high-performance agency website with a modern UI, responsive layouts, and engaging animations.",
    challenge:
      "Creating a visually appealing business website that delivers excellent responsiveness, performance, and user experience across all screen sizes.",
    solution:
      "Built reusable React components, integrated Framer Motion animations, optimized layouts, and created a clean, professional design system using Tailwind CSS.",
    results: [
      "Fully responsive across all devices",
      "Smooth animations and interactive UI",
      "Reusable component-based architecture",
      "Optimized performance and accessibility",
    ],
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Animations", value: "Framer Motion" },
      { label: "Responsive", value: "100%" },
    ],
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description:
      "Full-stack fitness tracking application with user management, progress tracking, and database integration.",
    shortDescription:
      "Full-stack fitness application with user management, progress tracking, and MongoDB database integration.",
    image: "/projects/fitness-tracker.png",
    category: "Web Application",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/SaraZ1234/workout-goal-tracker-auth",
    caseStudy:
      "Developed a fitness management platform with secure authentication and workout management features.",
    challenge:
      "Managing secure user authentication, workout records, and user-specific data while maintaining application performance.",
    solution:
      "Implemented JWT authentication, developed REST APIs with Express.js, and integrated MongoDB for efficient data management.",
    results: [
      "Secure user authentication",
      "Workout management with CRUD operations",
      "RESTful backend architecture",
      "Responsive and user-friendly interface",
    ],
    metrics: [
      { label: "Backend", value: "Node.js" },
      { label: "Database", value: "MongoDB" },
      { label: "Authentication", value: "JWT" },
      { label: "Architecture", value: "REST API" },
    ],
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    description:
      "A responsive Airbnb-inspired frontend application demonstrating modern UI development practices.",
    shortDescription: "Responsive React and Tailwind CSS Airbnb clone",
    image: "/projects/airbnb-clone.png",
    category: "Frontend",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/SaraZ1234/Home-Rental-Web-Application",
    caseStudy:
      "Recreated Airbnb’s interface to practice responsive layouts, reusable components, and frontend architecture.",
    challenge:
      "Building a pixel-perfect responsive interface while ensuring maintainable and reusable React components.",
    solution:
      "Developed reusable React components, responsive layouts with Tailwind CSS, and implemented a clean, modern UI.",
    results: [
      "Responsive layout for all devices",
      "Reusable React component architecture",
      "Modern Airbnb-inspired interface",
      "Clean and maintainable frontend codebase",
    ],
    metrics: [
      { label: "Frontend", value: "React" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Responsive", value: "100%" },
      { label: "Components", value: "Reusable" },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}
