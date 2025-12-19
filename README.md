# Optima Smart Fix Landing Page

A premium, high-end landing page for Optima Smart Fix - a division of Optima Service Group specializing in smart home renovations.

## 🎨 Features

- **Hero Section**: Full-width background with compelling headline and CTA
- **Before/After Slider**: Interactive image comparison slider showcasing transformations
- **Smart Solutions**: 4-service grid featuring Kitchen, Bathroom, Flooring, and Curb Appeal services
- **Portfolio Gallery**: 3-column masonry grid with professional photos and pro-tips
- **Process Section**: Clear 3-step process (Design → Quote → Build)
- **Lead Generation Form**: Contact form with validation for capturing leads
- **Premium Animations**: Smooth scroll animations powered by Framer Motion
- **Mobile-First Design**: Fully responsive across all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Image Slider**: react-compare-slider
- **Images**: Unsplash (high-quality placeholders)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Recommended Hosting: Vercel (Free & Fast)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Alternative: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy

## 🎨 Color Palette

- **Primary**: Deep Navy (#0A192F)
- **Accent**: Electric Lime (#CCFF00)
- **Secondary**: Gold (#D4AF37)
- **Neutral**: White (#FFFFFF), Soft Gray (#F8F9FA)

## 📱 Mobile-First Design

The site is optimized for mobile devices first, then enhanced for tablets and desktops.

## 🔧 Customization

### Update Images

Replace Unsplash URLs in components with your own professional photos:
- `components/Hero.tsx`
- `components/BeforeAfter.tsx`
- `components/SmartSolutions.tsx`
- `components/Portfolio.tsx`

### Update Content

Edit text content in each component file to match your specific services and messaging.

### Form Integration

Connect the contact form to your backend service in `components/ContactForm.tsx`:
- Email service (SendGrid, Mailgun)
- CRM integration
- WhatsApp API

## 📄 License

© 2024 Optima Smart Fix. All rights reserved.

---

**Powered by Optima Service Group**
