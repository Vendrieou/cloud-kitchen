# Cloud Kitchen

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's a modern web application built with React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Next.js 15** with Turbopack for fast development and builds
- **React 19** - Latest version of React
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Custom UI Components** - Reusable component library:
  - `Button` - Variant-based button with class-variance-authority
  - `Link` - Smart link component with Next.js integration
  - `EditText` - Form input with validation support
  - `RatingBar` - Interactive star rating component
- **Common Components** - Shared layout components:
  - `Header` - Responsive navigation with smooth scrolling
  - `HeaderMenuItem` - Navigation menu items
- **Page Sections** - Modular page architecture:
  - `HeroSection` - Daily meal showcase with subscription CTA
  - `AboutSection` - Company information with scroll-to-top
  - `ContactSection` - WhatsApp-integrated contact form
- **Optimized Fonts** - Using `next/font` with Indie Flower font family
- **WhatsApp Integration** - Direct messaging for subscriptions and contacts

## Project Structure

```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page entry point
│   ├── HomePage.tsx     # Main home page component
│   ├── HeroSection.tsx  # Hero section with daily meals & subscription
│   ├── AboutSection.tsx # About section with scroll-to-top feature
│   ├── ContactSection.tsx # Contact form with WhatsApp integration
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── common/          # Common shared components
│   │   ├── Header.tsx   # Responsive navigation header
│   │   └── HeaderMenuItem.tsx # Menu item component
│   └── ui/              # UI-specific components
│       ├── Button.tsx   # Variant-based button component
│       ├── Link.tsx     # Smart link with Next.js integration
│       ├── EditText.tsx # Form input with validation
│       └── RatingBar.tsx # Star rating component
└── styles/              # Additional style files
    ├── index.css        # Main styles entry
    └── tailwind.css     # Tailwind CSS configuration
```

## Component Usage Examples

### Button Component

```tsx
import Button from '@/components/ui/Button';

// Basic usage with variants
<Button variant="primary" size="medium">Click Me</Button>
<Button variant="secondary" size="large">Large Button</Button>
<Button variant="outline" size="small">Small Button</Button>

// Custom styling props
<Button 
  text_font_size="text-lg" 
  fill_background_color="bg-custom-color"
  layout_width="200px"
>
  Custom Button
</Button>
```

### Link Component

```tsx
import Link from '@/components/ui/Link';

// Internal link
<Link href="/about">About Us</Link>

// External link
<Link href="https://example.com" external>External Site</Link>

// With custom styling
<Link 
  href="/contact" 
  text_color="text-blue-600"
  text_font_size="text-lg"
  underline
>
  Contact
</Link>
```

### EditText Component

```tsx
import EditText from '@/components/ui/EditText';

// Basic input
<EditText 
  id="name" 
  value={name} 
  onChange={(e) => setName(e.target.value)}
  label="Your Name"
/>

// With validation
<EditText 
  id="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  label="Email"
  error={errors.email}
  helperText="We'll never share your email"
/>

// Textarea
<EditText 
  id="message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  isTextArea
  label="Message"
/>
```

### RatingBar Component

```tsx
import RatingBar from '@/components/ui/RatingBar';

// Read-only rating display
<RatingBar rating={4.5} readonly showValue />

// Interactive rating
<RatingBar 
  rating={rating}
  onRatingChange={(newRating) => setRating(newRating)}
  size="large"
  color="#f3e16c"
/>
```

### Header Component

```tsx
import Header from '@/components/common/Header';

// Usage in layout
<Header />
```

## Key Features

### WhatsApp Integration
The application includes built-in WhatsApp integration for:
- **Subscription CTA**: Direct messaging for meal subscription inquiries
- **Contact Form**: Pre-filled messages sent via WhatsApp

### Responsive Design
- Mobile-first approach with Tailwind CSS breakpoints
- Smooth scrolling navigation
- Adaptive layouts for all screen sizes

### Component Architecture
- **UI Components**: Reusable, variant-based components using `class-variance-authority`
- **Common Components**: Shared layout components
- **Section Components**: Modular page sections for easy maintenance

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm, yarn, pnpm, or bun

### Installation

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private and proprietary.
