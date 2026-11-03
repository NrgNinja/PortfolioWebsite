# Renato Adolfo Diaz
Portfolio website built in React

This was a website built to showcase my familiarity with frontend development, technical skills and web design skills.

### Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Git/GitHub
* React
* Node JS

### Development and deployment

Run `npm start` for local development and `npm run build` for a production build.
Upload the **contents** of `build/` to Hostinger's `public_html` directory.
No server runtime or new hosting setup is needed.

### Design maintenance

- Theme colors, typography, shared buttons, spacing, and reduced-motion behavior live in `src/index.css`.
- Section layouts live beside their React components. Use flexible grids and content-driven heights rather than fixed screen heights.
- The floating navigation includes iPhone safe-area spacing and an opaque fallback for browsers without backdrop blur.
- Keep form field names aligned with the existing EmailJS template. A failed send retains the visitor's message.
- Content and the September 2024 resume are intentionally retained for a later update.

### Animation maintenance

- The hero title types once per page load; edit its text in `Header.jsx`. Its reserved width prevents layout shifts, and assistive technology reads the complete title.
- `components/motion/useSectionReveals.js` observes headings and individual cards, fading them in again when revisited. Adjust its selector list when adding sections.
- Motion timing is in `components/motion/motion.css`. Reduced-motion preferences disable reveals and typing, including changes made while the page is open. Keyboard focus keeps interactive content visible.

### Image and sharing assets

The original `landscape.png` and `vault.png` stay in `src/assets/`; components import their smaller WebP copies. About uses 640px/1200px responsive variants. Do not overwrite the originals when updating web copies.

Run `python3 scripts/prepare-images.py` with Pillow to regenerate optimized images and the 1200×630 social card. The script uses macOS Arial by default; set `PORTFOLIO_FONT_REGULAR` and `PORTFOLIO_FONT_BOLD` to font paths on another system.

Sharing text and absolute production URLs live in `public/index.html`; the image is `public/social-preview.png`. Upload the complete build to Hostinger before testing the public URL in a sharing debugger. Platforms may cache earlier previews. These tags assume `https://renatodiaz.com/` is the preferred live URL; update them if the canonical domain changes.
