export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  metrics?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "ECC Team",
    role: "JavaScript Development Internship",
    company: "ECC",
    image: "/testimonials/ecc.jpg",
    quote:
      "Sarah demonstrated strong problem-solving skills, completed assigned JavaScript development tasks on time, and showed a willingness to learn new technologies while collaborating effectively with the development team.",
    rating: 5,
    metrics: "JavaScript Development",
  },
  {
    id: "2",
    name: "Development Team",
    role: "JavaScript Developer",
    company: "Indus BPO",
    image: "/testimonials/indus.jpg",
    quote:
      "Sarah contributed to frontend development by building responsive user interfaces, implementing JavaScript features, and maintaining clean, organized, and scalable code. She consistently delivered quality work and collaborated effectively with the team.",
    rating: 5,
    metrics: "JavaScript Development",
  },
  {
    id: "3",
    name: "Project Team",
    role: "Web Development Project",
    company: "Fast Company",
    image: "/testimonials/fast-company.jpg",
    quote:
      "Sarah played an important role in developing the Virtual Learning Academy platform using Next.js, React, TypeScript, and Tailwind CSS. She delivered responsive interfaces with attention to performance and user experience.",
    rating: 5,
    metrics: "Next.js & React",
  },
  {
    id: "4",
    name: "Virtual Learning Academy",
    role: "Educational Platform",
    company: "Project Experience",
    image: "/testimonials/vla.jpg",
    quote:
      "The project showcases Sarah’s ability to build modern educational platforms with authentication, responsive layouts, and a clean user interface using current web technologies.",
    rating: 5,
    metrics: "Full-Stack Project",
  },
];
