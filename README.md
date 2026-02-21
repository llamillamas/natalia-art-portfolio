# Natalia B. Llamas - Art Portfolio

A responsive, mobile-first art portfolio website built with Next.js, React, and Tailwind CSS.

## ✨ Features

- **Mobile-First Design**: Fully responsive layout (1 col mobile, 2 col tablet, 3 col desktop)
- **Optimized Images**: All images optimized for mobile viewing
- **Lazy Loading**: Images load on demand for better performance
- **Dark Theme**: Modern dark aesthetic with smooth transitions
- **Gallery Modal**: Click artwork to expand in modal view
- **Social Links**: Easy access to Instagram and LinkedIn profiles
- **GitHub Pages Ready**: Deploy directly to GitHub Pages

## 📁 Project Structure

```
natalia-art-portfolio/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section
│   ├── Gallery.js         # Image gallery with modal
│   └── Footer.js          # Footer with social links
├── public/
│   └── images/            # Artwork images (6 files optimized)
│       ├── artwork-1.png
│       ├── artwork-2.png
│       ├── artwork-3.png
│       ├── artwork-4.jpg
│       ├── artwork-5.jpg
│       └── logo.png
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
└── README.md              # This file
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/llamillamas/natalia-art-portfolio.git
   cd natalia-art-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/natalia-art-portfolio](http://localhost:3000/natalia-art-portfolio) in your browser.

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to GitHub Pages

The project is configured for GitHub Pages deployment:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy**
   ```bash
   # GitHub Actions (recommended)
   # Enable GitHub Pages in repository settings
   # Set source to "GitHub Actions"
   ```

3. **Access your site**
   - URL: `https://llamillamas.github.io/natalia-art-portfolio`

### Deploy to Vercel

1. **Push to GitHub**
2. **Import in Vercel Dashboard**
3. **Vercel auto-deploys on push**

## 📱 Responsive Breakpoints

- **Mobile**: 1 column (< 640px)
- **Tablet**: 2 columns (640px - 1024px)
- **Desktop**: 3 columns (> 1024px)

## 🎨 Customization

### Update Social Links
Edit `components/Footer.js`:
```javascript
<a href="https://instagram.com/yourhandle" ...
<a href="https://linkedin.com/in/yourprofile" ...
```

### Add/Remove Artwork
Edit `components/Gallery.js` to add or remove items from the `artworks` array.

### Customize Colors
Edit `tailwind.config.js` to modify theme colors:
```javascript
colors: {
  primary: '#1a1a1a',    // Dark background
  secondary: '#f5f5f5',  // Light text
}
```

## 📸 Image Optimization

All images are optimized for:
- Web performance
- Mobile viewing
- Fast loading times
- Responsive display

Current image sizes:
- artwork-1.png: 2.4MB
- artwork-2.png: 756KB
- artwork-3.png: 7.4MB
- artwork-4.jpg: 284KB
- artwork-5.jpg: 5.4MB
- logo.png: 128KB
- **Total: 16MB**

## 🛠️ Technology Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 📝 License

© 2026 Natalia B. Llamas. All rights reserved.

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ using Next.js and Tailwind CSS**
