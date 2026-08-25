'use client'

import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { sendContactEmail, getWhatsAppLink } from '@/lib/email'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  budget: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  budget: '',
}

const inputClasses =
  'w-full px-4 py-3 text-base bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 ' +
  'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-background hover:border-primary/50'

const labelClasses = 'sr-only'

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const nameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const budgetId = useId()
  const subjectId = useId()
  const messageId = useId()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await sendContactEmail(formData)
      setSubmitted(true)
      setFormData(initialFormData)
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sarahjavaid111@example.com',
      href: 'mailto:sarahjavaid111@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+923435176201',
      href: 'tel:+923435176201',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Message on WhatsApp',
      href: getWhatsAppLink("Hi! I'm interested in your services."),
      external: true,
    },
  ]

  return (
    <section id="contact" className="pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance tracking-tight">
        Let&apos;s Work Together
      </h2>
      <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto text-pretty leading-relaxed">
        Ready to start your next project? Reach out and let&apos;s create something amazing.
      </p>
    </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Contact Methods */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
        >
          {contactMethods.map(({ icon: Icon, label, value, href, external }) => (
            <motion.div
              key={label}
              variants={item}
              className="glass-light p-5 sm:p-6 rounded-lg h-full"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 bg-primary/20 rounded-lg">
                  <Icon size={22} className="text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">{label}</h3>

                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors break-words focus-visible:outline-none focus-visible:underline"
                  >
                    {value}
                  </a>
                </div>              </div>
            </motion.div>
          ))}

          <motion.div variants={item} className="glass-light p-5 sm:p-6 rounded-lg sm:col-span-3 lg:col-span-1">
            <h3 className="font-semibold text-foreground mb-3">Response Time</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <span aria-hidden="true">⚡</span>
                <span>Within 24 hours for all inquiries</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">📞</span>
                <span>Priority response for consultation requests</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          noValidate
          className="lg:col-span-2 glass-light p-6 sm:p-8 rounded-lg"
        >
          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor={nameId} className={labelClasses}>
                Your name
              </label>
              <input
                id={nameId}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor={emailId} className={labelClasses}>
                Your email
              </label>
              <input
                id={emailId}
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor={phoneId} className={labelClasses}>
                Phone number
              </label>
              <input
                id={phoneId}
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor={budgetId} className={labelClasses}>
                Budget range
              </label>
              <select
                id={budgetId}
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                <option value="">Select Budget Range</option>
                <option value="under-50k">Under PKR 50,000</option>
                <option value="50k-100k">PKR 50,000 - 100,000</option>
                <option value="100k-200k">PKR 100,000 - 200,000</option>
                <option value="above-200k">PKR 200,000+</option>              </select>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-4">
            <label htmlFor={subjectId} className={labelClasses}>
              Project subject
            </label>
            <input
              id={subjectId}
              type="text"
              name="subject"
              placeholder="Project Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </motion.div>

          <motion.div variants={item} className="mb-4">
            <label htmlFor={messageId} className={labelClasses}>
              Project details
            </label>
            <textarea
              id={messageId}
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClasses} resize-y min-h-[120px]`}
            />
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
              aria-live="assertive"
              className="mb-4 p-3 flex items-start gap-2 bg-destructive/10 border border-destructive/30 text-destructive rounded-lg text-sm"
            >
              <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>{error}</span>
            </motion.div>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
              aria-live="polite"
              className="mb-4 p-3 flex items-start gap-2 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm"
            >
              <CheckCircle2 size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>Message sent successfully! I&apos;ll get back to you within 24 hours.</span>
            </motion.div>
          )}

          <motion.button
            variants={item}
            type="submit"
            disabled={loading}
            className="w-full py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold
              transition-all duration-200 hover:bg-primary/90 active:scale-[0.99]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
              flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" aria-hidden="true" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={20} aria-hidden="true" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>

          <p className="text-xs text-foreground/60 mt-4 text-center leading-relaxed">
            By submitting this form, you agree to our privacy policy
          </p>
        </motion.form>
      </div>
    </section>
  )
}