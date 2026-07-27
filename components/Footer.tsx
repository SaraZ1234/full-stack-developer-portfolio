'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail } from 'lucide-react'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Full-Stack Development', href: '#services' },
        { label: 'Custom Web Applications', href: '#services' },
        { label: 'Performance Optimization', href: '#services' },
        { label: 'Technical Support', href: '#services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ]

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/SaraZ1234/', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sarah-javaid-b24505338/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sarahjavaid111@gmail.com', label: 'Email' },
  ]

  const linkStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  }

  const linkItem = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  }

  return (
    <footer className="bg-gradient-to-t from-background via-background/95 to-background/50 border-t border-border py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="glass-light p-6 sm:p-8 rounded-xl mb-10 sm:mb-12 text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2.5 sm:mb-3">
            Ready to start?
          </h3>
          <p className="text-sm sm:text-base text-foreground/70 mb-5 sm:mb-6 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. Get in touch today.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="#contact"
              className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started Now
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="col-span-2 md:col-span-1"
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-3 sm:mb-4 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-sm sm:text-base">JS</span>
              </div>
              <span className="font-bold text-foreground text-sm sm:text-base">Developer</span>
            </Link>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-xs">
              Helping businesses grow online with modern websites and digital solutions.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              variants={linkStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.08 * (idx + 1) }}
            >
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li key={link.label} variants={linkItem}>
                    <Link
                      href={link.href}
                      className="relative inline-block text-xs sm:text-sm text-foreground/70 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="border-t border-border mb-6 sm:mb-8 origin-left"
        />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-foreground/60 text-center md:text-left"
          >
            © {currentYear} Full-Stack Developer. Made with ❤️ and ☕
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={linkStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-2 sm:gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  variants={linkItem}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <Icon width={18} height={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}