# HackFest '26 Design System

## 1. Core Visual Identity
**Theme Name:** Deep Space Violet (Cyberpunk/Futuristic)

This design system combines a deep, rich violet background with neon accents (Cyan, Pink, Purple) and glassmorphism to create a high-performance, futuristic aesthetic.

### Color Palette

**Dark Theme (Default)**
- **Background**: `#120d26` (Deep Space Violet)
- **Secondary BG**: `#1a1530` (Slightly lighter violet)
- **Surface**: `rgba(255, 255, 255, 0.05)` (Glass effect base)
- **Text**: `#e0e0e0` (Light Grey)
- **Text Secondary**: `#b0b0b0`
- **Border**: `rgba(255, 255, 255, 0.1)`

**Neon Accents**
- **Purple**: `#bc13fe` (Primary Accent)
- **Cyan**: `#00f3ff` (Secondary Accent / Highlights)
- **Pink**: `#ff007f` (Tertiary Accent / Nodes)

**Gradients**
- **Brand Gradient**
- **Hover Gradient**

### Typography 

- **Brand Font**: `Adriana` (Used for "HACKFEST" logo)
- **Headline Font**: `Horizon` (Used for H1, H2, H3 headers) and bold text
- **Body Font**: `Open Sans` (Fallback: `Agrandir`, sans-serif)

**Hierarchy & Styling**
- **H1/H2**: Large, Uppercase, Gradient Text Fill.
- **H3**: Neon Cyan, Uppercase, spaced letter-spacing.
- **Body**: Clean, legible, high contrast against dark background.

---

## 2. UI Components

### Glassmorphism
Used for cards, sidebar, and containers to allow the animated background to shine through.

- **Class**: `.glass-card`
- **Background**: `rgba(255, 255, 255, 0.05)`
- **Backdrop Blur**: `12px`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Shadow**: `0 8px 32px 0 rgba(0, 0, 0, 0.3)`
- **Radius**: `12px` (md)

### Buttons & Interactions
- **Primary Action**: Gradient borders or inner glow on hover.
- **Links**: Neon Pink color; bold on hover.
- **Table Rows**: Highlight with `var(--color-surface)` on hover.

---

## 3. Layout & Structure

### Background Animation
- **Concept**: "Neural Nexus" - A particle network mesh.
- **Implementation**: HTML5 `<canvas id="plexus-bg">` fixed at `z-index: -10`.
- **CSS Fallback**: `radial-gradient(circle at center, #1a1530 0%, #120d26 100%)`.
- **Visibility**: HTML background is set to `transparent` in `general.css` to reveal the canvas.

### Layout Structure
- **Header**: Sticky glass bar with logo (Adriana font) and nav links, floating in the top with a glass effect.
- **Sidebar**: Toggleable table of contents.
- **Main Content**: Centered, max-width container.
