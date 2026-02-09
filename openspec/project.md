# Project Context

## Purpose
To create a beautiful, digital marriage invitation card that serves as a presentation of the event details and story. **No RSVP collection is required.**

## Tech Stack
- **Framework**: React + TypeScript (built with Vite)
- **Styling**: Tailwind CSS
- **Animation**: **Framer Motion** (MANDATORY for complex, high-quality animations)
- **Icons**: Lucide React or React Icons

## Project Conventions

### Code Style
- **React**: Functional components with Hooks.
- **Styling**: Utility-first with Tailwind CSS.
- **File Naming**: PascalCase for components (e.g., `WeddingHeader.tsx`), camelCase for utilities.

### Architecture Patterns
- `src/components`: Reusable UI components.
- `src/assets`: High-quality images, fonts, and media.
- `src/hooks`: Custom hooks for animation logic.

### Design & Animation Guidelines
- **Visuals**: Must be **visually stunning** and **premium**. Use glassmorphism, elegant typography, and harmonious color palettes.
- **Animations**:
    - **Scroll-triggered reveals** (e.g., text fading in, images parallaxing).
    - **Micro-interactions** (hover effects, smooth transitions).
    - **Smoothness**: Target 60fps. Avoid janky or overwhelming animations.
    - **"Wow" Factor**: The site should feel alive and immersive.

### Testing Strategy
- Manual testing across devices (Mobile, Tablet, Desktop) to ensure smooth performance.
- Cross-browser compatibility checks.

### Git Workflow
- `main` branch for production-ready code.
- Feature branches for new sections/features.
- Conventional Commits messages.

## Domain Context
- **Key Entities**: Groom, Bride, Event Details (Date, Time, Venue), Story/Timeline, Gallery.
- **Tone**: Celebratory, Elegant, Premium, Romantic, Immersive.

## Important Constraints
- **Mobile-first design** is critical.
- **Aesthetics are paramount**: If it looks basic, it fails.
- **Fast loading** (optimize images/assets without sacrificing quality).

## External Dependencies
- Google Fonts (Elegant serif/sans-serif pairings).
- Google Maps (styled to match the theme).
