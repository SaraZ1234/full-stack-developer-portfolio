# Premium Full-Stack Developer Portfolio

A stunning, modern portfolio website built with Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, and Shadcn/UI. Features a dark-blue glassmorphism design with smooth animations, perfect for showcasing full-stack JavaScript projects and landing freelance clients.

## 🚀 Features

✨ **Premium Design**
- Dark-blue glassmorphism theme with gradient accents
- Smooth animations powered by Framer Motion
- Fully responsive mobile-first design
- Agency-level UI/UX

📱 **Key Sections**
- Hero section with compelling headline and CTA
- Services showcase with 6+ service offerings
- Featured projects with case studies and metrics
- Client testimonials with ratings
- Flexible pricing plans
- Comprehensive FAQ section
- Contact form with email integration
- Footer with social links

🔧 **Technical Features**
- Server-side rendering with App Router
- TypeScript for type safety
- JSON-based data management (easy to update)
- Dynamic project detail pages
- SEO optimized with meta tags
- Accessibility compliance (WCAG AA)
- Performance optimized (90+ Lighthouse score target)
- Image optimization with Next.js Image component

📧 **Contact Integration**
- EmailJS support (client-side, no backend needed)
- Formspree fallback (alternative service)
- WhatsApp direct messaging link
- Email contact form with validation

## 📋 Setup Instructions

### 1. Install Dependencies
```bash
pnpm install
```

All required packages are already specified in package.json:
- Next.js 16 with TypeScript
- React 19 with Framer Motion
- Tailwind CSS with shadcn/ui
- EmailJS for email sending
- Lucide React for icons

### 2. Configure Email Service

#### Option A: EmailJS Setup (Recommended)
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Get your Service ID, Template ID, and Public Key
4. Create a `.env.local` file:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

#### Option B: Formspree Setup (Alternative)
1. Go to [formspree.io](https://formspree.io)
2. Create a new form and get your Form ID
3. Add to `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

### 3. Customize Content

#### Update Portfolio Information

**Hero Section** (`components/Hero.tsx`):
- Modify headline and description
- Update social media links
- Change stats (projects, clients, years)

**Services** (`lib/data/services.ts`):
- Add/remove/edit service offerings
- Update pricing and timelines
- Customize features and deliverables

**Projects** (`lib/data/projects.ts`):
- Replace with your actual projects
- Update project images in `public/projects/`
- Add links to GitHub and live demos
- Include case studies and metrics

**Testimonials** (`lib/data/testimonials.ts`):
- Replace with real client testimonials
- Update client images in `public/testimonials/`
- Modify ratings and metrics

**Pricing** (`lib/data/pricing.ts`):
- Adjust pricing tiers
- Add/remove plan options
- Update feature lists

**FAQ** (`lib/data/faqs.ts`):
- Customize Q&A for your business
- Add more categories if needed
- Update answers with your specific info

#### Update Meta Information

**Layout** (`app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Full-Stack Developer',
  description: 'Your custom description',
  // ... update other metadata
}
```

### 4. Replace Images

**Project Images** (`public/projects/`):
- `ecommerce.png` - Replace with your project screenshot
- `saas.png` - Replace with your project screenshot
- `mobile.png` - Replace with your project screenshot
- `marketing.png` - Replace with your project screenshot

**Testimonial Images** (`public/testimonials/`):
- Replace all client images with real photos

**OG Image** (`public/og-image.png`):
- Create and add your Open Graph image (1200x630px)

### 5. Update Navigation & Links

**Social Links** (components throughout):
- Update GitHub URL
- Update LinkedIn URL
- Update Twitter/X URL
- Update email address

**Navigation** (`components/Navigation.tsx`):
- Customize nav items if needed
- Update links to your social profiles

### 6. Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📦 Project Structure

```
/app
  /projects/[id]        # Dynamic project detail pages
  layout.tsx            # Root layout with metadata
  page.tsx              # Homepage
  globals.css           # Global styles & theme

/components
  Navigation.tsx        # Top navigation bar
  Hero.tsx              # Hero section
  Services.tsx          # Services showcase
  Projects.tsx          # Projects grid
  Testimonials.tsx      # Client testimonials
  Pricing.tsx           # Pricing plans
  FAQ.tsx               # FAQ accordion
  Contact.tsx           # Contact form
  Footer.tsx            # Footer with links

/lib
  email.ts              # Email service utilities
  /data
    projects.ts         # Projects data
    services.ts         # Services data
    testimonials.ts     # Testimonials data
    pricing.ts          # Pricing data
    faqs.ts             # FAQ data
  utils.ts              # Utility functions

/public
  /projects             # Project screenshots
  /testimonials         # Testimonial images
  og-image.png          # OG image for social sharing
```

## 🎨 Customization Guide

### Theme Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  /* Primary blue color */
  --primary: #3b82f6;
  /* Accent light blue */
  --accent: #60a5fa;
  /* Background dark navy */
  --background: #0a0e27;
  /* Text light gray */
  --foreground: #e5e9f2;
}
```

### Fonts

Update `app/layout.tsx` to change typography:

```typescript
import { Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'] })
```

### Animations

Framer Motion animations can be customized in each component's `motion` definitions.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy!

```bash
# Or deploy from CLI
vercel
```

### Environment Variables for Vercel

Add these to your Vercel project settings:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_FORMSPREE_FORM_ID`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

## ⚡ Performance Tips

1. **Image Optimization**: Use WebP format for images
2. **Code Splitting**: Components are already optimized with dynamic imports
3. **SEO**: Meta tags are configured in layout.tsx
4. **Caching**: Static content is cached by default with ISR
5. **Analytics**: Add Vercel Analytics for insights

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly

## 📊 SEO Best Practices

✅ Implemented:
- Meta title and description
- Open Graph tags
- Structured data (JSON-LD ready)
- Mobile responsive
- Fast loading times
- Semantic HTML

📋 To-Do:
- Add Google Analytics
- Create sitemap.xml
- Add robots.txt
- Submit to Google Search Console

## 🐛 Troubleshooting

**Email not sending?**
- Verify EmailJS credentials in `.env.local`
- Check browser console for errors
- Test with Formspree as fallback

**Images not loading?**
- Ensure images are in `/public` directory
- Check image paths in data files
- Verify image formats (PNG, JPG, WebP)

**Animations not smooth?**
- Check browser performance
- Reduce animation complexity if needed
- Consider disabling animations for slower devices

## 📞 Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Formspree Docs](https://formspree.io/docs)

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🎉 You're All Set!

Your premium portfolio is ready to impress clients and land new projects. Good luck! 🚀
