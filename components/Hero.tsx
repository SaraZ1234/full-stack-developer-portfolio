'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Mail } from 'lucide-react'
import Link from 'next/link'
import { getWhatsAppLink } from '@/lib/email'

// Lucide-react no longer ships brand/logo icons, so these are defined locally.
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.67.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function Hero() {
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

  const statsVariant = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.6,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const socialLinks = [
    { href: 'https://github.com/SaraZ1234/', label: 'GitHub', icon: GithubIcon },
    { href: 'https://www.linkedin.com/in/sarah-javaid-b24505338/', label: 'LinkedIn', icon: LinkedinIcon },
    {
      href: getWhatsAppLink("Hi! I'm interested in your services."),
      label: 'WhatsApp',
      icon: MessageCircle,
    },
    { href: 'mailto:sarahjavaid111@gmail.com', label: 'Email', icon: Mail },
  ]

  const stats = [
    { value: '30+', label: 'Projects Completed' },
    { value: '10+', label: 'Web Apps' },
    { value: '1+', label: 'Experience' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass-premium border border-primary/20 mb-6 sm:mb-8 backdrop-blur-md hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full shrink-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-primary">
              Available for Freelance projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={item} className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 sm:mb-6 leading-[1.1] text-balance">
              Build Your
              <br />
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Digital Future
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light px-2"
          >
            Professional Full-Stack Web Developer helping businesses, startups, restaurants, clinics, and educational institutions build modern, fast, and responsive websites that attract customers and grow online.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 max-w-md sm:max-w-2xl mx-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Link
                href="#projects"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-accent text-background rounded-xl font-bold text-sm sm:text-base uppercase tracking-wide hover:shadow-lg glow-primary transition-all flex items-center justify-center gap-2 sm:gap-3"
              >
                View My Portfolio                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Link
                href="#contact"
                className="block px-6 sm:px-8 py-3.5 sm:py-4 glass-premium text-foreground font-bold text-sm sm:text-base uppercase tracking-wide rounded-xl border border-primary/30 hover:border-primary/60 transition-all text-center"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex justify-center gap-3 sm:gap-4 mb-16 sm:mb-20">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 glass-premium text-foreground rounded-xl hover:text-primary border border-primary/20 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xs sm:max-w-2xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                custom={idx}
                variants={statsVariant}
                className="glass-premium p-3 sm:p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all group hover:glow-primary"
                whileHover={{ y: -5 }}
              >
                <div className="text-xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-xs uppercase tracking-widest text-foreground/60 font-semibold mt-1 sm:mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}