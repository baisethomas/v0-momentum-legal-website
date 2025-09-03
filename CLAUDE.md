# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 legal services website for Momentum Legal, specializing in NIL (Name, Image, Likeness) representation for college athletes. Built with v0.app and deployed on Vercel.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **Animations**: Framer Motion with custom motion variants
- **Typography**: Playfair Display (headings) and Source Sans 3 (body)
- **Analytics**: Vercel Analytics

### Key Components
- **Motion System**: Centralized animation variants in `lib/motion.ts` including fadeUp, stagger, tiltHover, pageWipe, and others
- **UI Library**: Comprehensive shadcn/ui component library in `components/ui/`
- **Utility Functions**: `lib/utils.ts` contains the standard `cn()` function for className merging

### Styling Conventions
- Uses CSS variables for theming defined in Tailwind config
- Motion variants follow consistent easing curves: `[0.2, 0.8, 0.2, 1]`
- Component styling follows shadcn/ui patterns with variant-based designs

### v0.app Integration
- This repository syncs automatically with v0.app deployments
- Primary development should occur through v0.app interface
- Manual changes should follow existing component patterns and motion system