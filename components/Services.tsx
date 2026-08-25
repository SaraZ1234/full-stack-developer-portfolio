'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data/services'
import {
  Check,
  ArrowRight,
  Code2,
  UtensilsCrossed,
  Stethoscope,
  GraduationCap,
  RefreshCw,
  Wrench,
} from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 sm:w-8 sm:h-8" />,
  Stethoscope: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />,
  GraduationCap: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
  RefreshCw: <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8" />,
  Wrench: <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />,
}

export function Services() {
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
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16 lg:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 sm:mb-6 text-balance">
          Services
          <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mt-1 sm:mt-2">
            Website Solutions for Businesses
          </span>
        </h2>
        <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed px-2">
          End-to-end expertise from concept to deployment. I deliver production-ready solutions that scale with your vision.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={item}
            className="relative group"
            whileHover={{ y: -8 }}
          >
            {/* Glow background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            <div className="glass-premium p-6 sm:p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col">
              {/* Icon with glow */}
              <motion.div
                className="text-primary mb-5 sm:mb-6 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {iconMap[service.icon as keyof typeof iconMap]}
              </motion.div>

              {/* Title and Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 mb-5 sm:mb-6 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Features with enhanced styling */}
              <div className="space-y-2 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-primary/10">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-xs text-primary/80 font-semibold pt-2">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>

              {/* Timeline and Price with premium styling */}
              <div className="flex items-center justify-between pt-2 gap-2">
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-foreground/50 font-semibold">
                  {service.timeline}
                </div>
                <div className="text-sm font-bold text-primary transition-colors">
                  {service.price}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12 sm:mt-16"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-accent text-background rounded-xl font-bold text-sm sm:text-base uppercase tracking-wide glow-lg hover:shadow-2xl transition-all"
          >
            Request Quote
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}