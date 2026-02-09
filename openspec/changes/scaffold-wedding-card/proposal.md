# Scaffold Digital Wedding Card

## Goal Description
Create a premium, digital wedding invitation for Mahendra (or User) for a wedding in Churu, Rajasthan. The design must be heavily inspired by **Studio Ghibli** art style (lush landscapes, fluffy clouds, calming vibe) while incorporating **Rajasthani culture**. It must support **English and Hindi** languages.

## Key Features
- **Ghibli-inspired Aesthetics**: Hand-painted style backgrounds, parallax effects, soothing animations.
- **Bilingual Support**: Toggle between English and Hindi.
- **Wedding Details**: Date, Time, Venue (Churu, Rajasthan), Google Maps integration.
- **Story/Timeline**: A journey of the couple.
- **Gallery**: Photo showcase.
- **Mobile First**: Optimized for sharing via WhatsApp/Social Media.

## User Review Required
- **Art Style**: Confirmation on specific Ghibli references (e.g., *Wind Rises* meadows or *Spirited Away* night scenes? Defaulting to "Lush Meadows/Daytime" for a wedding).
- **Hindi Content**: User will need to provide final Hindi text; we will use placeholders or transliteration for now.

## Proposed Changes
### OpenSpec
#### [NEW] [openspec/changes/scaffold-wedding-card/specs/landing-page/spec.md](file:///home/mahendra/personal/marriage-card/openspec/changes/scaffold-wedding-card/specs/landing-page/spec.md)
- Defines the hero section with Ghibli background and animated title.

#### [NEW] [openspec/changes/scaffold-wedding-card/specs/multilingual/spec.md](file:///home/mahendra/personal/marriage-card/openspec/changes/scaffold-wedding-card/specs/multilingual/spec.md)
- Defines the language toggle and text resource requirement.

#### [NEW] [openspec/changes/scaffold-wedding-card/specs/wedding-details/spec.md](file:///home/mahendra/personal/marriage-card/openspec/changes/scaffold-wedding-card/specs/wedding-details/spec.md)
- Defines the structure for event details, venue, and map.

#### [NEW] [openspec/changes/scaffold-wedding-card/design.md](file:///home/mahendra/personal/marriage-card/openspec/changes/scaffold-wedding-card/design.md)
- Architectural guidelines for Ghibli styling (CSS/Canvas), Asset management, and i18n approach.

## Verification Plan
### Automated Tests
- `openspec validate scaffold-wedding-card` to ensure spec readiness.
- (Future) `npm run dev` to visually inspect the React app.

### Manual Verification
- Verify that requirements cover all user requests (Ghibli, Bilingual, Churu/Rajasthan context).
