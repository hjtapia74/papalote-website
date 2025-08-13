# Papalote Technologies Website

Modern React website for Papalote Technologies, migrated from Webflow to a custom React + TypeScript + Chakra UI stack.

## 🚀 Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Chakra UI v2** - Component library and design system
- **Emotion** - CSS-in-JS styling
- **React i18next** - Internationalization (English/Spanish)

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (LanguageToggle)
│   ├── layout/          # Layout components (Navbar)
│   └── sections/        # Page sections (Hero, Services, etc.)
├── i18n/                # Internationalization
│   ├── locales/         # Translation files (en.json, es.json)
│   └── index.ts         # i18n configuration
├── theme/               # Chakra UI theme configuration
├── App.tsx              # Main app component
└── main.tsx             # App entry point
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

This project is configured for **AWS Amplify** deployment:

1. **Automatic deployment:** Connect your GitHub repository to AWS Amplify
2. **Build settings:** Uses the included `amplify.yml` configuration
3. **Build output:** Static files generated in `dist/` directory

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your hosting provider
3. Configure your server to serve `index.html` for all routes

## 📝 Content Management

### Updating Images
- Replace files in `public/assets/images/`
- Update import paths in components if needed

### Adding Seattle Location Video
- Replace `public/assets/videos/seattle-placeholder.mp4` with your actual video
- Update `LocationVideo.tsx` component to use the real video file
- Recommended format: MP4 (H.264), 16:9 aspect ratio

### Customizing Theme
- Edit `src/theme/index.ts` to modify colors, fonts, and styling
- Brand colors and typography are centrally managed

### Internationalization (i18n)
The website supports English and Spanish with automatic language detection:

- **Language toggle:** Located in the top-right navigation
- **Auto-detection:** Detects browser language preference
- **Persistence:** Saves language choice to localStorage
- **Adding translations:** Edit `src/i18n/locales/en.json` and `src/i18n/locales/es.json`

#### Adding New Languages
1. Create new translation file: `src/i18n/locales/[language].json`
2. Add language to `src/i18n/index.ts` resources
3. Update `LanguageToggle.tsx` with new language option

## 🎨 Design System

### Brand Colors
- **Primary:** Blue palette (`brand.500` = #0ea5e9)
- **Gray:** Custom gray scale for text and backgrounds
- **Typography:** Montserrat (headings) + Source Sans Pro (body)

### Component Structure
- **Hero:** Full-screen video background with call-to-action
- **Experience:** Technology partner logos
- **Services:** 6-card grid showcasing service offerings
- **Location:** Video/image section for Seattle office
- **CTA:** Call-to-action section
- **Contact:** Contact information and social links

## 📧 Contact Information

- **Phone:** +1 (650) 550-0701
- **Email:** info@papalote.ai
- **Location:** Seattle, WA, USA
- **LinkedIn:** [Papalote Technologies](https://www.linkedin.com/company/papalote-technologies/)
- **Twitter:** [@hjtapia74](http://www.twitter.com/hjtapia74)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 📄 License

Private project for Papalote Technologies.
