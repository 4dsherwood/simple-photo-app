# Development Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
# Output in ./out/

# Lint code
npm run lint
```

---

## 🔧 Common Tasks

### Testing Locally

```bash
# Start dev server (with hot reload)
npm run dev

# Test production build locally
npm run build
npx serve out
```

### Deployment

**Automatic:** Push to `main` branch triggers GitHub Actions

**Manual check:**
- Go to: https://github.com/4dsherwood/simple-photo-app/actions
- View deployment status

**Live site:**
- https://4dsherwood.github.io/simple-photo-app

### Adding Photos

1. Add images to `public/photos/`
2. Update `app/components/PhotoGallery.tsx`:

```tsx
const photos = [
  { id: 1, title: 'My Photo', url: '/simple-photo-app/photos/photo.jpg' },
];
```

3. Remember the `/simple-photo-app` basePath prefix!

### Updating the Photo Inventory (`photos_data.md`)

Use these AI prompts to catalog new photos:

1. "Find pictures in `public/photos/` directory"
2. For each new photo: "Describe that photo"
3. "Suggest a better filename for that photo"
4. Update the table: "Add a row with the new filename, short description, original filename, size (KB), and dimensions"
5. "Add a detailed description to the list below the table"

Photo sizing guidelines:
- Resize to ~1600px on longest edge
- JPEG quality 80-85%
- Target 150-400 KB per image
- Use lowercase, hyphenated filenames (e.g. `sunset-beach.jpg`)

Description guidelines:
- Short description (table): 5-8 words, enough to identify the photo at a glance
- Long description (list below table): 2-3 sentences, 30-50 words, covering what's in the frame, key details, and context

---

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Build fails
```bash
# Check for TypeScript errors
npm run lint

# Check Next.js config
cat next.config.js
```

### GitHub Pages shows 404
1. Check GitHub Actions succeeded
2. Verify Pages source is "GitHub Actions" (Settings → Pages)
3. Wait 2-3 minutes for CDN propagation

### Images don't load
- Check basePath: `/simple-photo-app/photos/photo.jpg` (not `/photos/photo.jpg`)
- Verify file exists in `public/photos/`

---

## 📦 Dependencies

### Core
- `next` - Framework
- `react` - UI library
- `react-dom` - React DOM bindings

### Dev Tools
- `typescript` - Type checking
- `tailwindcss` - Styling
- `eslint` - Linting

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update all (careful!)
npm update

# Update specific package
npm install next@latest
```

---

## 🎨 Styling

### Tailwind Classes
- Global styles: `app/globals.css`
- Component styles: Use utility classes
- Custom config: `tailwind.config.js`

### Adding Custom Colors

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'brand-blue': '#1E40AF',
    },
  },
}
```

---

## 🧪 Testing Strategy

Currently: Manual testing in browser

**Future additions:**
- Unit tests (Jest + React Testing Library)
- E2E tests (Playwright)
- Visual regression (Chromatic)

---

## 📝 Git Workflow

```bash
# Feature development
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# Create PR on GitHub
# Merge when ready
# Delete branch after merge
```

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

*Keep this updated as your workflow evolves!*