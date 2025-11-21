# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Clean Base is a minimal Hugo theme with comprehensive SEO features and 7 color themes (pink, blue, green, red, orange, purple, tokyo-night). Built for Hugo v0.95.0+. The theme is fully CSS-only with no JavaScript dependencies.

## Development Commands

### Testing the Theme
```bash
# From the exampleSite directory
cd exampleSite
hugo server -D --themesDir ../..

# Or from the theme root
hugo server -D -s exampleSite
```

### Building
```bash
# Build the example site
cd exampleSite
hugo --themesDir ../..
```

### Testing in Another Hugo Site
```bash
# In target Hugo site directory
hugo server -D
```

## Architecture

### Template Hierarchy

The theme uses Hugo's standard template lookup order:

1. **baseof.html** - Base template with comprehensive SEO meta tags
   - Handles `seo_title` vs `title` distinction
   - Implements Open Graph and Twitter Cards
   - Includes structured data via partial
   - Sets theme class on body: `theme-{color_theme}`

2. **Layout Files**:
   - `index.html` - Homepage with optional recent posts grid
   - `_default/single.html` - Individual post pages
   - `_default/list.html` - Taxonomy and section list pages

3. **Partials** (`layouts/partials/`):
   - `header.html` - Site logo/title, navigation menu, CSS-only mobile menu
   - `footer.html` - Footer content
   - `post-card.html` - Reusable post card component for blog grids
   - `service-card.html` - Reusable service card component for service grids
   - `related-posts.html` - Related posts grid based on tags/date
   - `structured-data.html` - JSON-LD schema markup for SEO
   - `breadcrumbs.html` - Navigation breadcrumbs
   - `reading-time.html` - Estimated reading time
   - `toc.html` - Table of contents

4. **Services Templates** (`layouts/services/`):
   - `single.html` - Individual service detail page with hero split layout
   - `list.html` - Services listing/grid page

### Services Architecture

The theme includes a complete services section for service-based businesses:

1. **Service Templates**:
   - `layouts/services/single.html` - Hero split layout with image, pricing, features, benefits, CTA
   - `layouts/services/list.html` - Grid view of all services using service-card partial
   - Uses dedicated `service-card.html` partial (distinct from post cards)

2. **Service Content Structure**:
   - Content lives in `content/services/` directory
   - Uses `archetypes/services.md` for scaffolding new services
   - Supports pricing, features lists, benefits, and CTAs

3. **Service-specific Config**:
   - `show_related_services` - Toggle related services display
   - `default_service_cta` - Enable/disable CTA buttons globally

### SEO System

The theme implements a sophisticated SEO fallback system:

1. **Title Management**:
   - `seo_title` (frontmatter) → Used in `<title>` tag and social meta
   - `title` (frontmatter) → Page heading, falls back for SEO if `seo_title` empty
   - Site title always appended on non-home pages

2. **Description Fallback Chain**:
   - `description` (frontmatter) → Meta description
   - `summary` (frontmatter) → Used if no description
   - Auto-generated summary → Hugo's built-in `.Summary`
   - Truncated to `seo_summary_length` (default 160)

3. **Summary for Cards**:
   - `summary` (frontmatter) → Post card excerpt
   - Falls back to `.Summary` or content truncation
   - Truncated to `card_summary_length` (default 150)

### Color Theme System

Implemented via CSS custom properties in `static/css/style.css`:

- Body gets `theme-{color}` class from `baseof.html:88`
- Theme-specific CSS sets CSS custom properties (variables)
- Light themes (pink, blue, green, red, orange, purple) override `--accent-color` and `--accent-hover`
- Dark theme (tokyo-night) additionally overrides all color variables including `--text-primary`, `--bg-primary`, etc.
- All interactive elements reference these variables
- Add new themes by creating `body.theme-newname` rules

### No JavaScript Required

The theme is fully functional using only CSS. Interactive features are implemented using CSS techniques:
- Mobile navigation uses CSS `:checked` pseudo-class with hidden checkbox
- No JavaScript files are included (static/js/main.js is a placeholder)

## Configuration

### Critical Config Parameters

```yaml
params:
  color_theme: "tokyo-night"       # Theme color (pink|blue|green|red|orange|purple|tokyo-night)
  seo_summary_length: 160          # Meta description truncation
  card_summary_length: 150         # Post card excerpt length
  default_og_image: "/path"        # Fallback social sharing image
  show_recent_posts: true          # Homepage recent posts section
  recent_posts_count: 6            # Number of recent posts
  show_related_posts: true         # Related posts on single pages
  show_related_services: true      # Related services on service pages
  default_service_cta: true        # Show CTA buttons on service pages
```

### Permalink Structure

Two common patterns supported:
```yaml
# Posts under /posts/ prefix
permalinks:
  posts: "/posts/:slug/"

# Root level posts
permalinks:
  posts: "/:slug/"
```

## Content Frontmatter

### Blog Posts (`archetypes/default.md`)

```yaml
title: "Display Title"           # Required: Page heading
seo_title: "SEO Title"           # Optional: Different <title> tag
slug: "custom-url"               # Optional: URL override
description: "Meta description"  # Optional: SEO description
summary: "Card excerpt"          # Optional: Post card text
tags: []                         # Used for related posts
author: ""                       # Author name
featured_image: ""               # Post image (also OG image)
toc: false                       # Enable table of contents
show_related: true               # Override related posts setting
noindex: false                   # Prevent search indexing
```

### Services (`archetypes/services.md`)

```yaml
title: "Service Name"            # Required: Service title
description: ""                  # Short description for cards and SEO
price_range: ""                  # e.g., "$99-$299" or "Starting at $149"
featured_image: ""               # Image for cards and detail page
features: []                     # List key features (shown on card - first 3)
benefits: []                     # List benefits (shown on detail page)
cta_text: "Get a Quote"          # Call-to-action button text
cta_link: "/contact/"            # Where the CTA button links to
```

## File Structure

```
clean-base/
├── archetypes/          # Content templates with full frontmatter
│   ├── default.md       # Blog post archetype
│   └── services.md      # Service archetype
├── layouts/
│   ├── _default/        # Single, list, baseof templates
│   ├── partials/        # Reusable components (cards, header, footer, etc.)
│   ├── services/        # Service-specific templates
│   └── index.html       # Homepage template
├── static/
│   ├── css/style.css    # Single CSS file (~1550 lines) with all styling
│   ├── js/              # Empty (no JavaScript used)
│   └── images/          # Theme assets
├── exampleSite/         # Demo site for testing
│   ├── config.yaml      # Example configuration
│   └── content/         # Example content (posts + services)
└── theme.toml           # Theme metadata
```

## Working with Partials

When modifying partials, understand their context:

- **post-card.html**: Receives individual page context (`.`) from range loop, displays blog posts in grids
- **service-card.html**: Receives individual page context (`.`) from range loop, displays services with features
- **header.html**: Always receives page context, accesses `.Site.*` for menu, uses CSS-only mobile menu
- **structured-data.html**: Generates JSON-LD, differentiates home vs article pages
- **related-posts.html**: Uses Hugo's `.Site.RegularPages.Related` based on config

Note: Service cards show the first 3 features from the `features` array frontmatter parameter.

## Mobile Responsiveness

Breakpoints in `style.css`:
- `@media (max-width: 768px)` - Tablet/mobile navigation changes
- `@media (max-width: 480px)` - Small mobile adjustments

Header behavior:
- Desktop: Horizontal navigation
- Mobile: CSS-only hamburger menu using `:checked` pseudo-class with hidden checkbox
- Logo resizes responsively, text logo reflows

Note: All interactive behavior is achieved through CSS only (no JavaScript).

## Extending the Theme

### Adding a New Color Theme

1. Add CSS rule in `static/css/style.css`:

For light themes:
```css
body.theme-newname {
    --accent-color: #hexcode;
    --accent-hover: #hexcode;
}
```

For dark themes (override all color variables):
```css
body.theme-newname {
    --accent-color: #hexcode;
    --accent-hover: #hexcode;
    --text-primary: #hexcode;
    --text-secondary: #hexcode;
    --text-light: #hexcode;
    --text-meta: #hexcode;
    --bg-primary: #hexcode;
    --bg-card: #hexcode;
    --bg-white: #hexcode;
    --bg-footer: #hexcode;
    --border-light: #hexcode;
}
```

2. Set in config: `params.color_theme: "newname"`

### Adding New Partials

Reference from templates: `{{ partial "name.html" . }}`
Pass correct context as second parameter (`.` for current page)

### Customizing SEO

All SEO logic lives in `layouts/_default/baseof.html` (lines 7-76)
Structured data logic in `layouts/partials/structured-data.html`
