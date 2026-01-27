# Project Notes - Simple Photo App

## 🎯 Project Purpose

This is a **learning project** and **stepping stone** to the Aroma App.

**Goals:**
- Practice Next.js App Router + TypeScript + Tailwind
- Develop with AI-assisted tools (Claude Code, Cursor, GitHub Copilot)
- Establish reusable patterns for Aroma App
- Learn GitHub Pages deployment workflow

**Not Goals:**
- Production-ready photo gallery
- Full-featured application
- Perfect code (this is experimentation space)

---

## 🚀 Deployment Strategy

### Original Plan
- Deploy to GoDaddy cPanel (static files via FTP)

### Current Approach
- **GitHub Pages** via GitHub Actions
- Reason: Better CI/CD practice, free, automatic deployment
- Skills transfer to Vercel/Netlify for future projects

### Configuration Notes
- `basePath: '/simple-photo-app'` required for GitHub Pages subdirectory
- `images.unoptimized: true` required for static export
- Site URL: https://4dsherwood.github.io/simple-photo-app

---

## 🏗️ Architecture Decisions

### Static-Only Design
- **No SSR** - Static export only
- **No Auth** - Not needed for this phase
- **No Database** - Static data only
- **No API Routes** - Pure client-side

**Why:** Keep it simple for learning, add complexity in Aroma App

### Full-Stack Ready
The structure supports easy migration to dynamic features:
- App Router structure → Ready for Server Components
- TypeScript setup → Ready for API routes
- Component patterns → Ready for state management

---

## 📦 Migration Path to Aroma App

When transitioning to Aroma App, add:

- **Authentication:** NextAuth.js or Clerk
- **Database:** Prisma + PostgreSQL
- **Server Logic:** API routes, Server Components
- **Deployment:** Vercel or Netlify (not GitHub Pages)

**Patterns to Reuse:**
- ✅ App Router structure
- ✅ TypeScript conventions
- ✅ Tailwind styling approach
- ✅ Component architecture
- ✅ Git-based deployment workflow

---

## 🎨 Customization Notes

### Adding Real Photos

1. Place images in `public/images/`
2. Update `app/components/PhotoGallery.tsx`:

```tsx
const myPhotos = [
  { 
    id: 1, 
    title: 'Sunset', 
    url: '/simple-photo-app/images/sunset.jpg' // Note: basePath included
  },
];
```

**Important:** Include `/simple-photo-app` base path for GitHub Pages

### Image Optimization

Currently disabled (`unoptimized: true`) because:
- Static export doesn't support Next.js Image Optimization
- Future: Use Vercel/Netlify for automatic optimization

---

## 🔧 Repository Configuration

- **License:** MIT (permissive, allows reuse)
- **Visibility:** Public (required for free GitHub Pages)
- **Branch:** main
- **Remote:** https://github.com/4dsherwood/simple-photo-app.git

---

## 💭 Naming Consideration

**Considered:** "Disco Dreams Dancing" (fun, motivating)  
**Chose:** "simple-photo-app" (professional, clear purpose)

The fun name can live in the UI/branding instead of the repo name.

---

## 🐛 Known Limitations

- No image optimization (static export constraint)
- No dark mode toggle (could add if desired)
- Placeholder images (replace with real photos)
- Basic lightbox (could enhance with libraries)

These are **intentional** for this learning phase.

---

## 📚 Learning Resources

Tools being practiced:
- Next.js App Router documentation
- TypeScript with React
- Tailwind CSS utility-first approach
- GitHub Actions for CI/CD
- AI-assisted coding workflows

---

## 🎯 Success Criteria

This project is "done" when:
- ✅ Deploys successfully to GitHub Pages
- ✅ Photo gallery works (grid + lightbox)
- ✅ Responsive across devices
- ✅ Code is clean and documented
- ✅ Patterns are ready to transfer to Aroma App

**Not required:**
- Perfect features
- All edge cases handled
- Production-grade polish

---

*Last updated: 2026-01-27*