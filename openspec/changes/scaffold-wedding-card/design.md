# Design: Scaffold Wedding Card

## Context
Building a digital wedding invitation for a wedding in Churu, Rajasthan. The user wants a "Studio Ghibli" aesthetic mixed with Rajasthani culture.

## Goals
- **Visuals**: High-quality, hand-painted style backgrounds (likely generated or sourced assets).
- **Animation**: Smooth, parallax effects using Framer Motion. 60fps target.
- **Bilingual**: Seamless switching between English and Hindi.

## Technical Decisions
- **Styling**: Tailwind CSS for layout, but heavy use of custom CSS / Framer Motion for the "Ghibli" feel (clouds, swaying grass).
- **Assets**: Store high-res assets in `src/assets`. Use WebP for performance.
- **I18n**: Custom `LanguageContext` using a simple JSON resource approach (no heavy i18n library needed for this scale yet, but structure it for scalability).
- **Maps**: Google Maps Embed API for the venue.

## Architecture
- `src/components/layout`: `Layout.tsx` handling the main wrapper and language toggle.
- `src/components/sections`: `Landing.tsx`, `Details.tsx`, `Story.tsx`, `Gallery.tsx`.
- `src/context`: `LanguageContext.tsx`.

## Risks
- **Performance**: High-res texturing and animations can lag on mobile.
    - *Mitigation*: Optimize images, use `will-change` sparingly, test on mobile early.
