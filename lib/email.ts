// Email configuration and utilities
export const EMAIL_CONFIG = {
  // EmailJS Configuration
  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',

  // Formspree Configuration
  FORMSPREE_FORM_ID: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || '',

  // Contact Email
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'your-email@example.com',

  // WhatsApp
  WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+1234567890',
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  budget?: string
}

export const sendEmailViaEmailJS = async (data: ContactFormData) => {
  try {
    // Dynamic import to avoid loading EmailJS on server
    const emailjs = await import('emailjs-com')

    await emailjs.send(
      EMAIL_CONFIG.EMAILJS_SERVICE_ID,
      EMAIL_CONFIG.EMAILJS_TEMPLATE_ID,
      {
        to_email: EMAIL_CONFIG.CONTACT_EMAIL,
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        subject: data.subject,
        message: data.message,
        budget: data.budget || 'Not specified',
      },
      EMAIL_CONFIG.EMAILJS_PUBLIC_KEY
    )

    return { success: true, message: 'Email sent successfully via EmailJS' }
  } catch (error) {
    console.error('EmailJS error:', error)
    throw error
  }
}

export const sendEmailViaFormspree = async (data: ContactFormData) => {
  try {
    const response = await fetch(`https://formspree.io/f/${EMAIL_CONFIG.FORMSPREE_FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided',
        subject: data.subject,
        message: data.message,
        budget: data.budget || 'Not specified',
      }),
    })

    if (response.ok) {
      return { success: true, message: 'Email sent successfully via Formspree' }
    } else {
      throw new Error('Formspree submission failed')
    }
  } catch (error) {
    console.error('Formspree error:', error)
    throw error
  }
}

export const sendContactEmail = async (data: ContactFormData) => {
  let lastError: Error | null = null

  // Try EmailJS first
  if (EMAIL_CONFIG.EMAILJS_PUBLIC_KEY) {
    try {
      const result = await sendEmailViaEmailJS(data)
      console.log('[v0] Email sent via EmailJS:', result)
      return result
    } catch (error) {
      console.warn('[v0] EmailJS failed, trying Formspree...')
      lastError = error as Error
    }
  }

  // Try Formspree as fallback
  if (EMAIL_CONFIG.FORMSPREE_FORM_ID) {
    try {
      const result = await sendEmailViaFormspree(data)
      console.log('[v0] Email sent via Formspree:', result)
      return result
    } catch (error) {
      console.error('[v0] Formspree failed:', error)
      lastError = error as Error
    }
  }

  // If both failed
  if (lastError) {
    throw new Error(`Failed to send email: ${lastError.message}`)
  }

  throw new Error(
    'No email service configured. Please set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY or NEXT_PUBLIC_FORMSPREE_FORM_ID environment variables.'
  )
}

export const getWhatsAppLink = (message?: string) => {
  const encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent('Hi! I&apos;m interested in your services.')
  return `https://wa.me/${EMAIL_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodedMessage}`
}
