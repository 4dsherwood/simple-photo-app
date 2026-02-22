# Key Prompts for AI-Assisted Development

This document captures the most useful prompts used to build this project. Use these as templates for similar projects.

---

## Project Setup

### GitHub Pages Deployment

```
lets deploy to github.io
```

```
publish it!
```

### Repository Configuration

```
my collaborator Michael Wolf said he cannot push to the repo
confirm permissions
```

---

## Content & Story Development

### Photo Inventory

```
we just added some photos to the public photo dir
please describe the new photos.
and update the tables in @photos_data
```

```
great
add that image to the photo table
```

### Story-Driven Design

```
review the images in the photo table and
the short story and suggest a strategy for incorporating our images so that the website tells the story with words and images
```

```
start the implementation for this plan: 
Strategy: Photo-Driven Narrative Flow
```

---

## Code & Content Edits

### Selective Commits

```
commit ONLY the staged changes with Michael Wolf as a co-author.
do not stage any other files.
ask if you have questions
```

### Content Refinement

```
remove this text: Not a sticker. from the short story, and the website
```

---

## Development Workflow

### Running Locally

```
run the app locally
```

### Updating Website with Photos & Story

```
lets update the local version of the app
make an updated version of the website/app
using the new photos and following the 2/15 story
no need use every photo
Choose the photos that are helpful to tell the story
let me know if there is a photo you wish we had

add a new section to website that shows a thumbnail of ALL the photos not used so far in support of the story
```

**Implementation Notes:**
- Story flows: Vision → Background → Planning → Building → Assembly → Wiring → Testing → Conclusion
- Select photos that visually reinforce key narrative beats
- Create unused gallery section with thumbnails of all photos not in main narrative
- For recommended photo selections by story section, see [photos_data.md](photos_data.md) and update as needed when story changes

---

- **Be specific** about what you want changed or created
- **Reference files** using @ mentions when available
- **Set constraints** (e.g., "ONLY staged changes", "do not stage other files")
- **Ask for strategy first**, then implementation
- **Provide context** when collaborating with others (co-authors, permissions)

---

add .gitmessage
Co-authored-by: GitHub Copilot <copilot@github.com>


*Add your own key prompts below as you discover what works best for your workflow.*
