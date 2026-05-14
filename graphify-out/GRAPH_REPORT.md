# Graph Report - /Applications/projects/Peronsal Website/Justin_Macfolio  (2026-05-14)

## Corpus Check
- Large corpus: 141 files · ~7,343,333 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 94 nodes · 121 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.82)
- Token cost: 58,711 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Window Wrapper & Shared Data|Window Wrapper & Shared Data]]
- [[_COMMUNITY_Dock, Navbar & Layout Constants|Dock, Navbar & Layout Constants]]
- [[_COMMUNITY_Window Contents & Drag Patterns|Window Contents & Drag Patterns]]
- [[_COMMUNITY_Window State & Animations|Window State & Animations]]
- [[_COMMUNITY_Root Composition & Background|Root Composition & Background]]
- [[_COMMUNITY_Welcome Hero Animations|Welcome Hero Animations]]
- [[_COMMUNITY_Wallpaper Picker|Wallpaper Picker]]
- [[_COMMUNITY_Finder File System|Finder File System]]
- [[_COMMUNITY_ESLint Flat Config|ESLint Flat Config]]

## God Nodes (most connected - your core abstractions)
1. `App Root Component` - 13 edges
2. `WindowWrapper HOC` - 11 edges
3. `Dock Component` - 6 edges
4. `AboutMe Window` - 6 edges
5. `WindowControls Component` - 5 edges
6. `Projects Window` - 5 edges
7. `Photography Window` - 5 edges
8. `Terminal (Tech Stack) Window` - 4 edges
9. `useWindowStore` - 3 edges
10. `Welcome Component` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Vite Entry HTML` --references--> `App Root Component`  [EXTRACTED]
  index.html → src/App.jsx
- `Vite Path Aliases` --rationale_for--> `App Root Component`  [INFERRED]
  vite.config.js → src/App.jsx
- `BackgroundSelector Component` --conceptually_related_to--> `App Root Component`  [INFERRED]
  src/components/BackgroundSelector.jsx → src/App.jsx
- `WindowWrapper HOC` --calls--> `closeWindow action`  [EXTRACTED]
  src/hoc/WindowWrapper.jsx → src/store/Store.jsx
- `WindowWrapper HOC` --references--> `useWindowStore (Zustand+Immer)`  [EXTRACTED]
  src/hoc/WindowWrapper.jsx → src/store/Store.jsx

## Hyperedges (group relationships)
- **Window System (HOC + Store + Controls)** — window_wrapper_hoc, store_use_window_store, window_controls_component, constants_window_config [EXTRACTED 1.00]
- **Dock Launch Flow** — dock_component, constants_dock_apps, store_use_window_store, window_wrapper_hoc [EXTRACTED 1.00]
- **GSAP Mouse-Distance Intensity Motif** — dock_component, welcome_component, dock_magnification_pattern, variable_font_hover_pattern [INFERRED 0.85]

## Communities (11 total, 3 thin omitted)

### Community 0 - "Window Wrapper & Shared Data"
Cohesion: 0.11
Nodes (6): gallery, techStack, ContactWindow, PhotographyWindow, ProjectsWindow, TerminalWindow

### Community 1 - "Dock, Navbar & Layout Constants"
Cohesion: 0.12
Nodes (16): Dock(), ABOUT_LOCATION, blogPosts, dockApps, locations, navIcons, navLinks, photosLinks (+8 more)

### Community 2 - "Window Contents & Drag Patterns"
Cohesion: 0.19
Nodes (15): AboutMe Window, gallery photo array, techStack definition, Contact Window, Draggable Window Pattern, Minimize/Restore GSAP Animation, PhotoViewer Modal, Photography Window (+7 more)

### Community 3 - "Window State & Animations"
Cohesion: 0.18
Nodes (11): dockApps definition, WINDOW_CONFIG initial state, Dock Component, Dock Magnification (Gaussian intensity), DrawnPortfolio clip-path reveal, closeWindow action, openWindow action, restoreWindow action (referenced) (+3 more)

### Community 4 - "Root Composition & Background"
Cohesion: 0.22
Nodes (9): App Root Component, BackgroundSelector Component, Background Transition State Pattern, navLinks, GA4 Analytics Injection, Vite Entry HTML, macOS Desktop Metaphor, Navbar Component (+1 more)

### Community 5 - "Welcome Hero Animations"
Cohesion: 0.33
Nodes (3): FONT_WEIGHTS, renderText(), Welcome()

## Knowledge Gaps
- **35 isolated node(s):** `navIcons`, `blogPosts`, `socials`, `photosLinks`, `WORK_LOCATION` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `App Root Component` connect `Root Composition & Background` to `Window Contents & Drag Patterns`, `Window State & Animations`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `WindowWrapper HOC` connect `Window Contents & Drag Patterns` to `Window State & Animations`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `Dock Component` connect `Window State & Animations` to `Root Composition & Background`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `App Root Component` (e.g. with `macOS Desktop Metaphor` and `Vite Path Aliases`) actually correct?**
  _`App Root Component` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `navIcons`, `blogPosts`, `socials` to the rest of the system?**
  _35 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Window Wrapper & Shared Data` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Dock, Navbar & Layout Constants` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._