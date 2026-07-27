'use client'

import { motion } from 'framer-motion'
import { pricingPlans } from '@/lib/data/pricing'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function Pricing() {
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
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
<section id="pricing" className="pt-4 sm:pt-6 lg:pt-8 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 max-w-7xl mx-auto">      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 sm:mb-16 lg:mb-20"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Flexible Plans for Every Project
        </h2>
        <p className="text-base sm:text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed">
          Transparent pricing with no hidden fees. Choose a plan below or reach out for something custom.
        </p>
      </motion.div>

      {/* Pricing Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch"
      >
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.id}
            variants={item}
            className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
              plan.highlighted
                ? 'lg:-translate-y-3 bg-gradient-to-b from-primary/[0.08] to-transparent border-2 border-primary shadow-xl shadow-primary/10'
                : 'border border-border/60 bg-foreground/[0.02] hover:border-primary/30'
            }`}
          >
            {/* Popular badge */}
            {plan.highlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/30">
                <Sparkles size={12} />
                Most Popular
              </div>
            )}

            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${
                  plan.highlighted ? 'bg-primary/15' : 'bg-foreground/5'
                }`}
              >
                {plan.icon}
              </div>

              {/* Name + description */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5">{plan.name}</h3>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed min-h-[2.5rem]">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border/60">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                    {plan.price}
                  </span>
                </div>
                {plan.period && (
                  <div className="text-xs text-foreground/50 mt-1 font-medium">{plan.period}</div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-7 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-primary/20' : 'bg-foreground/10'
                      }`}
                    >
                      <Check size={10} strokeWidth={3} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground/75 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all group ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20'
                    : 'bg-foreground/5 text-foreground hover:bg-foreground/10 border border-border/60'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-14 sm:mt-16 rounded-2xl border border-border/60 bg-foreground/[0.02] px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5">
            Not sure which plan fits?
          </h3>
          <p className="text-sm sm:text-base text-foreground/60">
            Book a free 15-minute call and I'll help you figure out the right scope.
          </p>
        </div>
        <Link
          href="#contact"
          className="shrink-0 inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
        >
          Schedule Free Consultation
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  )
}