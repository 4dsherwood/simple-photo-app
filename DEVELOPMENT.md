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

- Go to: <https://github.com/4dsherwood/simple-photo-app/actions>
- View deployment status

**Live site:**

- <https://4dsherwood.github.io/simple-photo-app>

### Adding Photos

1. Add images to `public/photos/`
2. Update `app/components/PhotoGallery.tsx`:

```tsx
const photos = [
  { id: 1, title: 'My Photo', url: '/simple-photo-app/photos/photo.jpg' },
];
```

1. Remember the `/simple-photo-app` basePath prefix!

### Updating the Photo Inventory

Store photo inventory data in [photos_data.md](photos_data.md)

Use these AI prompts to catalog new photos:

1. "Find pictures in `public/photos/` directory"
2. For each new photo: "Describe that photo"
3. "Suggest a better filename for that photo"
4. Update the table: "Add a row with the new filename, short description, original filename, size (KB), and dimensions"
5. "Add a detailed description to the list below the table"

Step-by-step checklist I follow for each new photo:

1. Identify the new original filename in `public/photos/`.
2. Inspect the image and write:
  - Short description (5–8 words)
  - Detailed description (30–35 words)
3. Choose a new descriptive filename (lowercase, hyphenated).
4. Collect metadata (size, dimensions, creation date).
5. Update the Summary table with the new row.
6. Add the detailed description to the numbered list.
7. Add the creation date to the Creation Dates table.
8. Fix formatting so each table row is on its own line.
9. Re-scan the file for consistency and ordering.

Photo sizing guidelines:

- Resize to ~1600px on longest edge
- JPEG quality 80-85%
- Target 150-400 KB per image
- Use lowercase, hyphenated filenames (e.g. `sunset-beach.jpg`)

Description guidelines:

- Short description (table): 5-8 words, enough to identify the photo at a glance
- Long description (list below table): 2-3 sentences, 30-50 words, covering what's in the frame, key details, and context

Creation date capture (table column: "Creation Date"):

- Photos (JPEG): EXIF `creation` field via `sips -g creation <file>` — format: `YYYY:MM:DD HH:MM:SS` (no timezone)
- Videos (MOV): Apple QuickTime tag via `ffprobe -v quiet -show_entries format_tags=com.apple.quicktime.creationdate -of csv=p=0 <file>` — format: ISO 8601 with timezone
- Record the value exactly as the source provides it (formats differ between photos and videos)
- Both originate from the device camera and survive file renames
- The generic `creation_time` tag on videos is unreliable (often reflects copy date, not recording date)

Image inspection tools I use:

- Dimensions + EXIF creation date (JPEG):
  - `sips -g pixelWidth -g pixelHeight -g creation <file>`
- File size (bytes):
  - `ls -lk <file>`
- Convert bytes → KB (rounded):
  - `python - <<'PY'
from pathlib import Path
p = Path('<file>')
print(round(p.stat().st_size/1024))
PY`

---

## 📸 Batch Photo Processing Method

When processing multiple photos at once (e.g., 45+ new files):

### Step 1: Identify New Files
```bash
ls -1 public/photos/ | sort
# Compare against what's already documented in photos_data.md
```

### Step 2: Get File Sizes in Bulk
```bash
cd public/photos/
for f in IMG_*.jpeg IMG_*.mov; do 
  ls -lh "$f" 2>/dev/null | awk '{print $9, $5}'
done
```

### Step 3: Extract Creation Dates from Metadata
```bash
for f in IMG_*.jpeg IMG_*.mov; do 
  mdls -name kMDItemContentCreationDate "$f" 2>/dev/null | grep -o '[0-9-]* [0-9:]*'
done
```

### Step 4: Organize Data by File Type
- Create two sections in the summary table: photos (numbered 1-N) and movies (numbered M1-M8)
- Sort files by creation date for both sections
- Use descriptive filenames in `kebab-case`
- Add placeholder descriptions with "TBD" for dimensions where needed

### Step 5: Update photos_data.md Tables
1. **Summary table**: Add all new entries with index numbers, descriptive names, short descriptions (5-8 words), original filenames, file sizes (KB), and dimensions (or "TBD")
2. **Creation Dates table**: Add complete index with all photos and movies in chronological order by creation date
3. **Total counts**: Update photo and movie file counts at top of Creation Dates section


### Step 6: Maintain Index Consistency
- Photos numbered sequentially (1, 2, 3, ...)
- Movies numbered separately (M1, M2, M3, ...)
- Keep indices aligned across Summary and Creation Dates tables and the detailed desctiption area

### Example Process
```markdown
# Before processing
Photos: 11 documented
Movies: 1 documented

# After processing 45+ new files
Photos: 47 documented (indices 1-49)
Movies: 8 documented (indices M1-M8)

# All files sorted by creation date within their sections
```

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
