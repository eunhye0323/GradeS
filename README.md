# GuidedVD — Project Page

Static project page (Bulma / Nerfies-style template) for **GuidedVD: Video-Diffusion-Guided
Sparse-View 3D Gaussian Splatting**. No build step — plain HTML/CSS/JS served by GitHub Pages.

## Structure

```
.
├── index.html                 # all page content (edit the TODO markers)
├── .nojekyll                  # keep — disables Jekyll so static/ is served as-is
└── static/
    ├── css/index.css          # custom styles on top of Bulma (CDN)
    ├── js/index.js            # carousel init
    ├── js/video_comparison.js # optional baseline-vs-ours wipe slider
    ├── images/
    │   ├── teaser.jpg                 # 3/6/9-view + GT progression (Garden)
    │   ├── method.png                 # TODO: add your pipeline figure
    │   ├── favicon.ico                # TODO: replace
    │   └── comparisons/*.jpg          # GT vs Ours composites (real renders)
    ├── videos/                # drop comparison MP4s here (optional)
    └── pdfs/                  # paper / poster PDFs (optional)
```

The comparison images in `static/images/` were generated from the actual GuidedVD test
renders. The results table in `index.html` holds the measured PSNR numbers — replace with
your final paper values before publishing.

## Preview locally

```bash
python -m http.server 8000
# open http://localhost:8000/
```

## Publish on GitHub Pages

1. Create a **public** repo (e.g. `guidedvd`) and push this folder:
   ```bash
   git remote add origin https://github.com/<username>/guidedvd.git
   git branch -M main
   git push -u origin main
   ```
2. Repo **Settings → Pages → Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)** → **Save**
3. Wait ~1–10 min. Your site goes live at:
   ```
   https://<username>.github.io/guidedvd/
   ```

## Notes / gotchas

- All asset paths are **relative** (`./static/...`) so the project-page subpath works. Keep it that way.
- GitHub Pages does **not** serve Git LFS files — compress large MP4s or host them externally (YouTube, Release assets).
- Filenames are **case-sensitive** on Pages; match references exactly.
- Keep the footer attribution (template is **CC BY-SA 4.0**).

## Editing checklist (`index.html` TODOs)

- [ ] Title, venue, authors & affiliations
- [ ] Paper / arXiv / Code / Data link buttons
- [ ] Abstract
- [ ] Method figure (`static/images/method.png`) + text
- [ ] Qualitative results (carousel images)
- [ ] Quantitative table (final numbers)
- [ ] BibTeX
- [ ] favicon + social preview image
