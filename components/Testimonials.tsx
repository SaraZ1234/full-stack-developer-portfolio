'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data/testimonials'
import { Star } from 'lucide-react'
import Image from 'next/image'

export function Testimonials() {
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
    <section id="testimonials" className="pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
          Professional Experience
        </h2>
        <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-2">
          Experience gained through internships, development projects, and industry collaboration.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={item}
            className="glass-light p-5 sm:p-6 rounded-xl hover:glass transition-all flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-3 sm:mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm sm:text-base text-foreground/80 mb-5 sm:mb-6 flex-grow italic leading-relaxed">
              {`"${testimonial.quote}"`}
            </p>

            {/* Metrics if available */}
            {testimonial.metrics && (
              <div className="bg-primary/10 px-3 py-2 rounded-lg mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-primary">{testimonial.metrics}</span>
              </div>
            )}

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-border">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-foreground text-sm sm:text-base truncate">
                  {testimonial.name}
                </div>
                <div className="text-xs text-foreground/60 truncate">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}