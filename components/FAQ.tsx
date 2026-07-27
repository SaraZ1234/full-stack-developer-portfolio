'use client'

import { useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '@/lib/data/faqs'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { key: 'general', label: 'General' },
  { key: 'process', label: 'My Process' },
  { key: 'technical', label: 'Technical' },
  { key: 'pricing', label: 'Pricing & Payment' },
] as const

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]['key']>('general')
  const [openId, setOpenId] = useState<string | null>(null)
  const baseId = useId()

  const visibleFaqs = faqs.filter((f) => f.category === activeCategory)

  const handleTabChange = (key: (typeof categories)[number]['key']) => {
    setActiveCategory(key)
    setOpenId(null)
  }

  return (
<section id="faq" className="pt-4 sm:pt-6 pb-16 sm:pb-20 px-4 sm:px-6 max-w-3xl mx-auto">      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          <span className="w-4 h-px bg-primary/60" />
          FAQ
          <span className="w-4 h-px bg-primary/60" />
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-foreground/60 max-w-md mx-auto leading-relaxed">
          Have questions? Find answers to common inquiries below.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        role="tablist"
        aria-label="FAQ categories"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key
          const count = faqs.filter((f) => f.category === cat.key).length
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleTabChange(cat.key)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                isActive ? 'text-primary-foreground' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="faq-tab-bg"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {!isActive && (
                <span className="absolute inset-0 border border-border/60 rounded-full -z-10" />
              )}
              {cat.label}
              {count > 0 && (
                <span className={`ml-1.5 ${isActive ? 'text-primary-foreground/70' : 'text-foreground/40'}`}>
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </motion.div>

      {/* FAQ List */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-2.5 sm:space-y-3 min-h-[120px]"
      >
        {visibleFaqs.length === 0 ? (
          <div className="text-center py-10 text-sm text-foreground/50">
            No questions in this category yet — reach out below and I'll answer directly.
          </div>
        ) : (
          visibleFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id
            const panelId = `${baseId}-panel-${faq.id}`
            const buttonId = `${baseId}-button-${faq.id}`
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`rounded-xl overflow-hidden border transition-colors duration-300 ${
                  isOpen ? 'border-primary/40 bg-primary/[0.03]' : 'border-border/60 bg-foreground/[0.02] hover:border-primary/25'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 text-left flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                        isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                        isOpen ? 'bg-primary/15' : 'bg-foreground/5'
                      }`}
                    >
                      <ChevronDown size={14} className="text-primary" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <p className="px-4 sm:px-5 pb-4 text-sm text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })
        )}
      </motion.div>

      {/* Still have questions CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="mt-10 sm:mt-12 rounded-2xl border border-border/60 bg-foreground/[0.02] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div>
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Still have questions?</h3>
          <p className="text-sm text-foreground/60">Send me a message and I'll get back to you directly.</p>
        </div>
        <Link
          href="#contact"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
        >
          Get in Touch
          <ArrowRight size={15} />
        </Link>
      </motion.div>
    </section>
  )
}