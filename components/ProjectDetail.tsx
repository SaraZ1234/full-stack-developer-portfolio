'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, GitBranch, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { getProject } from '@/lib/data/projects'

type Project = NonNullable<ReturnType<typeof getProject>>

export function ProjectDetail({ project }: { project: Project }) {
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 sm:mb-8"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft size={18} className="shrink-0" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg sm:rounded-xl overflow-hidden mb-6 sm:mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold text-primary bg-primary/20 rounded-full mb-3 sm:mb-4">
              {project.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance mb-3 sm:mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={16} className="shrink-0" />
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 glass-light rounded-lg text-sm sm:text-base font-semibold hover:glass transition-colors"
            >
              <GitBranch size={16} className="shrink-0" />
              Repository
            </a>
          </div>        </div>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
      >
        {/* Challenge */}
        <motion.div variants={item} className="glass-light p-5 sm:p-6 rounded-lg">
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-2.5 sm:mb-3 flex items-center gap-2">
            <Users size={18} className="text-primary shrink-0" />
            The Challenge
          </h3>
          <p className="text-foreground/80 text-sm leading-relaxed">{project.challenge}</p>
        </motion.div>

        {/* Solution */}
        <motion.div variants={item} className="glass-light p-5 sm:p-6 rounded-lg">
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-2.5 sm:mb-3 flex items-center gap-2">
            <TrendingUp size={18} className="text-primary shrink-0" />
            The Solution
          </h3>
          <p className="text-foreground/80 text-sm leading-relaxed">{project.solution}</p>
        </motion.div>

        {/* Case Study */}
        <motion.div variants={item} className="glass-light p-5 sm:p-6 rounded-lg sm:col-span-2 md:col-span-1">
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-2.5 sm:mb-3">
            About This Project
          </h3>
          <p className="text-foreground/80 text-sm leading-relaxed">{project.caseStudy}</p>
        </motion.div>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
          Key Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {project.results.map((result, idx) => (
            <div key={idx} className="glass-light p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
          Project Metrics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="glass-light p-4 sm:p-6 rounded-lg text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-foreground/60">{metric.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/20 text-primary rounded-lg font-medium text-xs sm:text-sm hover:bg-primary/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass-light p-6 sm:p-8 rounded-lg text-center mb-8 sm:mb-12"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2.5 sm:mb-3">
          Ready to build something similar?
        </h3>
        <p className="text-sm sm:text-base text-foreground/70 mb-5 sm:mb-6 max-w-xl mx-auto">
          Let&apos;s discuss your project needs and create something amazing together.
        </p>
        <Link
          href="/#contact"
          className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  )
}