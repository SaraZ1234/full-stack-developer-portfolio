'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import Link from 'next/link'
import { INDUSTRIES } from '@/lib/data/industries'

export function IndustriesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section
  id="industries"
  aria-labelledby="industries-heading"
  className="relative pt-0 pb-20 sm:pb-24 lg:pb-32 px-4 sm:px-6 overflow-hidden"
>
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute top-0 left-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass-premium border border-primary/20 mb-6 backdrop-blur-md"
          >
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-primary">
              Who I Work With
            </span>
          </motion.div>

          <motion.h2
            id="industries-heading"
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-5 sm:mb-6 leading-[1.1] text-balance"
          >
            Industries{' '}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              I Serve
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light px-2 mb-6"
          >
            Helping businesses and organizations build professional online
            presence with modern, fast, and responsive websites.
          </motion.p>

          <motion.div
            variants={item}
            className="mx-auto h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </motion.div>

        {/* Industry Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          role="list"
        >
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.title}
                role="listitem"
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  delay: (idx % 3) * 0.1,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -8 }}
                className="group relative glass-premium p-6 sm:p-8 rounded-2xl border border-primary/15 hover:border-primary/40 transition-colors duration-300 overflow-hidden"
              >
                {/* Icon */}
                <motion.div
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <Icon
                    className="w-6 h-6 sm:w-7 sm:h-7 text-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2.5 leading-snug">
                  {industry.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-foreground/65 leading-relaxed font-light">
                  {industry.description}
                </p>

                {/* Animated underline accent */}
                <div className="mt-6 h-px w-full bg-foreground/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary to-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    style={{ transformOrigin: 'left' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>

                {/* Soft hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_-8px_rgba(0,217,255,0.25)]" />
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-2 mt-16 sm:mt-20 lg:mt-24 text-center"
        >
          <p className="text-base sm:text-lg font-bold text-foreground">
            Have a business idea?
          </p>
          <p className="text-sm sm:text-base text-foreground/60 font-light mb-6">
            Let&apos;s discuss how we can build your online presence.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#contact"
              className="px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-accent text-background rounded-xl font-bold text-sm sm:text-base uppercase tracking-wide hover:shadow-lg glow-primary transition-all flex items-center justify-center gap-2 sm:gap-3"
            >
              Start Your Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}