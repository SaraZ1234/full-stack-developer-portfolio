'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data/projects'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.67.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-3 sm:px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-3 sm:mb-4 md:mb-6 text-balance">
          Featured Projects
          <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mt-1.5 sm:mt-2 md:mt-3">
            Real Projects & Development Work
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed px-2">
          A selection of websites and web applications I've designed and developed for businesses and educational organizations.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={item}
            className="group relative"
            whileHover={{ y: -12 }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />

            <div className="glass-premium border border-primary/10 hover:border-primary/30 rounded-2xl overflow-hidden h-full flex flex-col transition-all">
              {/* Premium Project Image with Parallax */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-40" />
                </motion.div>
              </div>

              {/* Premium Project Info */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full mb-2.5 sm:mb-3 md:mb-4">
                    {project.category}
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground mb-2 sm:mb-2.5 md:mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed flex-grow">
                  {project.shortDescription}
                </p>

                {/* Key Metrics - Enhanced */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 pb-4 sm:pb-5 md:pb-6 border-b border-primary/10">
                  {project.metrics.slice(0, 2).map((metric, idx) => (
                    <motion.div
                      key={idx}
                      className="glass-light p-2.5 sm:p-3 md:p-4 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-sm sm:text-base md:text-lg font-black text-primary">{metric.value}</div>
                      <div className="text-[8px] sm:text-[9px] md:text-xs uppercase tracking-widest text-foreground/60 font-semibold mt-0.5 sm:mt-1">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies - Premium Styling */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2 mb-4 sm:mb-5 md:mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="text-[9px] sm:text-[10px] md:text-xs px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/20 rounded-lg text-foreground/80 font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[9px] sm:text-[10px] md:text-xs px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 text-primary/60 font-bold">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Premium Links */}
                <div className="flex gap-1.5 sm:gap-2 md:gap-3 pt-1 sm:pt-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent text-background rounded-lg text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wide hover:shadow-lg transition-all text-center"
                  >
                    View Case Study
                  </Link>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 md:p-3 glass-premium text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 md:p-3 glass-premium text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}