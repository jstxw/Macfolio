# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start Vite development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture Overview

**Justin's Macfolio** is a macOS-inspired portfolio website with draggable windows, an interactive dock, and GSAP animations.

### Tech Stack
- **React 19** with Vite (Rolldown)
- **Tailwind CSS 4** via @tailwindcss/vite plugin
- **GSAP** for animations (with @gsap/react and Draggable plugin)
- **Zustand + Immer** for state management
- **Day.js** for date formatting

### Key Directories
- `src/components/` - UI components (Dock, Navbar, Welcome, BackgroundSelector)
- `src/windows/` - Window components (Terminal, etc.)
- `src/hoc/` - Higher Order Components (WindowWrapper for z-index/store logic)
- `src/store/` - Zustand store for window state management
- `src/constants/` - All app data (dock apps, projects, tech stack, file system structure)

### Path Aliases (vite.config.js)
```js
#components → src/components
#constants  → src/constants
#store      → src/store
#hoc        → src/hoc
#windows    → src/windows
```

## State Management

The `useWindowStore` (Zustand + Immer) manages:
- `windows` - Object with open/closed state for each window
- `nextZIndex` - Tracks z-index layering
- Actions: `openWindow()`, `closeWindow()`, `focusWindow()`

## Animation Patterns

- **GSAP useGSAP hook** for React integration
- Dock hover: intensity-based scaling using distance calculations
- Welcome text: variable font-weight animation on hover
- "Portfolio" title: clip-path reveal animation
- Page transitions: fade from black on load

## Styling

- Tailwind CSS with custom utilities in `index.css`
- Custom `@utility` directives: `flex-center`, `col-center`, `abs-center`
- Custom fonts: Georama (variable weight), Roboto Mono
- Custom breakpoint: `3xl` at 1920px
- Uses `@layer base` and `@layer components` for organized styles

## Content Configuration

All dynamic content lives in `src/constants/index.js`:
- `dockApps` - Dock application definitions
- `WINDOW_CONFIG` - Initial window states
- `WORK_LOCATION`, `ABOUT_LOCATION`, etc. - File system structure for Finder windows
