# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

This is the **Papalote Technologies** marketing website, rebuilt as a modern React application. It's a single-page site showcasing the company's data analytics, AI, and technology consulting services based in Seattle, WA.

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for development and builds
- **Chakra UI v3** for component library and styling
- **i18next** for internationalization (English/Spanish)
- **react-icons** for icons (Lucide icons via `react-icons/lu`)

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # TypeScript check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── App.tsx              # Main app layout (single-page structure)
├── main.tsx             # Entry point with Provider
├── theme/index.ts       # Custom Chakra system (createSystem)
├── i18n/
│   ├── index.ts         # i18next configuration
│   └── locales/
│       ├── en.json      # English translations
│       └── es.json      # Spanish translations
└── components/
    ├── ui/              # Chakra UI v3 snippets (provider, drawer, menu, etc.)
    ├── layout/
    │   └── Navbar.tsx   # Navigation with language toggle
    ├── common/
    │   └── LanguageToggle.tsx
    └── sections/
        ├── Hero.tsx         # Full-screen video hero
        ├── Experience.tsx   # Partner logos section
        ├── Services.tsx     # 6 service cards grid
        ├── LocationVideo.tsx # Seattle location showcase
        ├── CTA.tsx          # Call-to-action
        └── Contact.tsx      # Footer with contact info

public/assets/
├── icons/       # Favicon
├── images/      # Logos and backgrounds
└── videos/      # Hero background videos (mp4, webm)
```

## Architecture Patterns

### Internationalization
- All user-facing text uses `useTranslation()` hook from react-i18next
- Translation keys are nested (e.g., `services.analytics.title`)
- Language detection: localStorage → browser → fallback to English
- Add new translations to both `en.json` and `es.json`

### Styling (Chakra UI v3)
- Use Chakra UI components exclusively
- Custom system in `src/theme/index.ts` using `createSystem()`
- Fonts: Montserrat (headings), Source Sans Pro (body)
- Responsive props use Chakra's breakpoint syntax: `{{ base: 'sm', md: 'lg' }}`
- Use `gap` instead of `spacing` on Stack components
- Use `colorPalette` instead of `colorScheme` on buttons

### Chakra UI v3 Component Patterns
- Compound components: `Card.Root`, `Card.Body`, `Menu.Root`, `Menu.Item`, etc.
- Drawer/Menu use Portal for positioning: `<Portal><Menu.Positioner>...</Menu.Positioner></Portal>`
- Icons are children, not props: `<Button><LuMenu /></Button>` instead of `icon={<Icon />}`
- UI snippets in `src/components/ui/` provide pre-configured components

### Component Pattern
- Section components are in `src/components/sections/`
- Each section has its own ID for smooth scroll navigation
- Components use Chakra's `Container maxW="6xl"` for consistent width

## Key Features

- **Bilingual**: English/Spanish with browser language detection
- **Responsive**: Mobile-first design with image fallback for video
- **Single Page**: Smooth scroll navigation between sections
- **Video Hero**: WebM with MP4 fallback, static image on mobile
- **Carousel Ready**: Chakra UI v3 includes native Carousel component

## Notes

- This is a React rebuild of the original Webflow site (in parent directory)
- No routing library needed (single-page site)
- Contact form is display-only (no backend integration yet)
- Chakra UI MCP server is configured for this project
