# Sail-ICT Landing Page

A production-ready, internationalized landing page for Sail-ICT technology company built with Next.js, Tailwind CSS, and next-intl.

## Features

- 🌍 **Multi-language Support**: English (en), Albanian (sq), and Italian (it)
- 📱 **Fully Responsive**: Optimized for desktop and mobile devices
- 🚀 **Next.js 14**: Built with the latest App Router
- 🎨 **Tailwind CSS**: Modern, utility-first CSS framework
- 🔄 **Automatic Language Detection**: Based on user's location
- 📍 **SEO Optimized**: Proper internationalization for search engines

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Deployment**: Netlify ready

## Project Structure

```
sail-ict/
├── app/
│   ├── [locale]/
│   │   ├── layout.js          # Locale-specific layout
│   │   └── page.jsx           # Main landing page
│   ├── globals.css            # Global styles
│   └── layout.js              # Root layout
├── messages/
│   ├── en.json                # English translations
│   ├── sq.json                # Albanian translations
│   └── it.json                # Italian translations
├── middleware.js              # Internationalization routing
├── i18n.js                   # Internationalization config
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sail-ict
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Languages

1. Create a new translation file in `messages/` (e.g., `fr.json`)
2. Add the locale to the `locales` array in `middleware.js`
3. Update the `i18n.js` configuration if needed

### Customizing Content

All text content is stored in the JSON files under `messages/`. Edit these files to update the content in each language:

- `messages/en.json` - English content
- `messages/sq.json` - Albanian content  
- `messages/it.json` - Italian content

## Deployment

### Netlify Deployment

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your Git provider and repository
   - Set build command: `next build`
   - Set publish directory: `.next`
   - Click "Deploy site"

3. **Build Settings**
   - Build command: `next build`
   - Publish directory: `.next`
   - Node version: 18.x or higher (auto-detected)

### Environment Variables

No special environment variables are required for basic functionality.

## Internationalization

### Language Detection

The application automatically detects the user's preferred language:
- **Albania (sq)**: Albanian content
- **Italy (it)**: Italian content  
- **Other locations**: English (default)

### Manual Language Switching

Users can manually switch languages via URL:
- `/` - Auto-detected language
- `/en` - English
- `/sq` - Albanian
- `/it` - Italian

### Translation Structure

Each language file contains the same structure:
```json
{
  "Navbar": { ... },
  "Hero": { ... },
  "Services": { ... },
  "About": { ... },
  "Contact": { ... },
  "Footer": { ... }
}
```

## Customization

### Styling

All styles use Tailwind CSS classes. The design is fully responsive and follows modern design principles.

### Content Sections

The landing page includes:
- **Navigation**: Logo, menu items, and CTA button
- **Hero**: Main headline, subheading, and call-to-action
- **Services**: Four service cards with icons and descriptions
- **About**: Company mission and description
- **Contact**: Contact information and contact form
- **Footer**: Company info, quick links, and contact details

### Icons

Icons are from Lucide React. To change icons:
1. Import new icons from `lucide-react`
2. Replace the icon components in the JSX
3. Update the icon styling classes if needed

## Performance

- **Server Components**: Uses Next.js 14 server components for optimal performance
- **Optimized Images**: Placeholder images from placehold.co (replace with actual images)
- **Lazy Loading**: Components are optimized for fast loading
- **SEO**: Proper meta tags and structured content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Sail-ICT. All rights reserved.

## Support

For technical support or questions about this landing page, please contact the development team.

---

**Built with ❤️ using Next.js and Tailwind CSS**
