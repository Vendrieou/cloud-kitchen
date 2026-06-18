# Cloud Kitchen

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's a modern web application built with React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Next.js 15** with Turbopack for fast development and builds
- **React 19** - Latest version of React
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Custom Components** - Modular component architecture with UI and common components
- **Optimized Fonts** - Using `next/font` with Geist font family

## Project Structure

```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   ├── HomePage.tsx     # Home page component
│   ├── HeroSection.tsx  # Hero section component
│   ├── AboutSection.tsx # About section component
│   ├── ContactSection.tsx # Contact section component
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── common/          # Common shared components
│   └── ui/              # UI-specific components
└── styles/              # Additional style files
```

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
