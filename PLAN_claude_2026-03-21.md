# Plan: Complete the Simple Photo App

## Context
The app tells the story of Melinda building an LED disco dance floor. Core functionality works and deploys to GitHub Pages. Outstanding work falls into data integrity, story quality, code architecture, and UX polish.

---

## Epic 1 — Data Integrity (do first; blocks downstream work)

### 1.1 Reconcile IMG_1593.jpeg — ESSENTIAL
`IMG_1593.jpeg` is on disk, used in both story components, but has **no P-ID** and is absent from the `photos_data.md` Summary table and `photo-index/page.tsx`. The Creation Dates table lists it as P12. The Summary table's P12 is IMG_1594.jpeg. This is the root cause of all the ID-mapping drift.

**Fix:** Add IMG_1593.jpeg as P12 in the Summary table; renumber P12–P50 → P13–P51. Also add it to `photo-index/page.tsx`.

**Files:** `photos_data.md`, `app/photo-index/page.tsx`, `app/components/PhotoGallery.tsx`, `app/components/DiscoStoryOriginal.tsx` (it's already referenced there; just needs its ID updated)

### 1.2 Fix / eliminate Creation Dates table — ESSENTIAL (Issue #1)
From P12 onward, every row has wrong ID-to-filename mapping due to the P12 insertion. M7 is missing. P48–P50 not added. User wants to eventually eliminate this table.

**Options:**
- A: Rebuild the table to match the Summary table (and add missing rows)
- B: Delete the table (the Summary + EXIF data from `sips`/`mdls` covers the same ground)

**Recommendation:** Delete the Creation Dates table. Closes Issue #1 cleanly.

**Files:** `photos_data.md`

### 1.3 Fill TBD dimensions/sizes — nice-to-have
35+ rows have TBD dimensions; P48/P49/P50/M8 have TBD sizes. Extract via `sips` and `ls`.

### 1.4 Add detailed descriptions for P19–P50 — nice-to-have
The Detailed Descriptions section ends at P20 with a gap; P19 and P21–P50 have no 30–35 word descriptions.

---

## Epic 2 — Story Quality

### 2.1 Add "transport constraint" beat — ESSENTIAL
The story is missing a key narrative beat: the floor had to be cut into two pieces for Melinda to transport and reassemble alone. Bob re-engineered it. Source text is in `shortened_story_2026-02-15.md` (verify this file exists). Insert between "Assembly Progress" and "The Payoff" sections in `PhotoGallery.tsx`. Pair with photos from P23–P29 (grid assembly sequence).

**Files:** `app/components/PhotoGallery.tsx`

### 2.2 Add 2–4 LED testing photos to payoff section — nice-to-have
Photos P30–P46 (full illumination, color gradients) are all unused. Adding a few would strengthen the visual payoff. Candidates: P38 (full grid illumination), P39 (synchronized color display).

### 2.3 Add 1–2 acrylic prep photos — nice-to-have
P3–P10 acrylic cutting sequence is represented by only P4. P6 (measuring marks) or P9 (stacked panels) would reinforce the building narrative.

### 2.4 Add "disco balls" beat — nice-to-have
Bob added LEDs to the disco balls. No photo exists (acknowledged in "Photos We Wish We Had"). Text-only section.

---

## Epic 3 — Code Architecture

### 3.1 Create shared photo data module — nice-to-have
Extract the photo/video array into `app/data/photos.ts` so story components, photo-index, and any future pages share one source. Enables dynamic "unused photos" computation.

**Files:** New `app/data/photos.ts`; refactor `app/photo-index/page.tsx`, `PhotoGallery.tsx`, `DiscoStoryOriginal.tsx`

### 3.2 Migrate story components from filenames to P/M IDs — nice-to-have
Both story components reference `IMG_xxxx.jpeg` directly. After 3.1, use ID lookups instead. Makes code self-documenting.

### 3.3 Make "Unused Photos" section dynamic — nice-to-have
Both story components hardcode an `unusedPhotos` array that drifts from reality. Compute it as `allPhotos.filter(p => !usedPhotoIds.includes(p.id))`.

---

## Epic 4 — UX Polish

### 4.1 Shared navigation bar — nice-to-have
Replace ad-hoc text links with a `Nav.tsx` component in `app/layout.tsx`.
**Files:** New `app/components/Nav.tsx`, `app/layout.tsx`

### 4.2 Lightbox modal viewer — nice-to-have
Clicking a photo-index image currently opens the raw file. Add a client-side modal with caption, close, and prev/next. Either a small library (`yet-another-react-lightbox`) or a custom component.
**Files:** `app/photo-index/page.tsx` or new `app/components/Lightbox.tsx`

### 4.3 Clarify Story 2 status — nice-to-have
Add a note explaining it's an archived earlier version. Or deprecate it.
**Files:** `app/story2/page.tsx`

---

## Epic 5 — Documentation

- Fix `DEVELOPMENT.md` "Adding Photos" code example (stale data shape) — S
- Document Story 2's intended role in `NOTES.md` — S
- Document Aroma App patterns that emerged (basePath pattern, shared data module, static deployment config) — S

---

## Sequencing

```
1.1 (IMG_1593 / renumber) → 1.2 (drop Creation Dates table) → 1.3, 1.4
       ↓
     3.1 (shared data module) → 3.2 (IDs in stories) → 3.3 (dynamic unused)
       ↓ (parallel)
     2.1 (transport beat) → 2.2, 2.3, 2.4
       ↓ (parallel)
     4.1, 4.2, 4.3
       ↓
     Epic 5 (docs, last)
```

## Minimum viable "done" (essential items only)
1. 1.1 — Add IMG_1593 as P12, renumber P12→P51
2. 1.2 — Delete stale Creation Dates table (close Issue #1)
3. 2.1 — Add transport constraint story beat

## Critical files
- `photos_data.md` — all data fixes
- `app/photo-index/page.tsx` — add IMG_1593 entry
- `app/components/PhotoGallery.tsx` — story expansion, architecture refactor
- `app/components/DiscoStoryOriginal.tsx` — architecture refactor
- `shortened_story_2026-02-15.md` — source text for transport beat (verify exists)
