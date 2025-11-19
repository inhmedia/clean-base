# Clean Base Hugo Theme

A clean, minimal Hugo theme with comprehensive SEO features and 6 beautiful color themes. Built with modern web standards and inspired by elegant design principles.

## Features

- **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards, canonical URLs
- **Flexible Content** - Separate titles for display and SEO, custom summaries, slug control
- **7 Beautiful Color Themes** (Pink, Blue, Green, Red, Orange, Purple, Tokyo Night)
- **Responsive Design** - Mobile-first, clean typography
- **Post Cards** - Beautiful blog post previews with smart summaries
- **Permalink Control** - Use `/posts/` or root-level URLs
- **Tag Support** - Full taxonomy support with beautiful tag displays
- **Author Support** - Author information and structured data
- **Featured Images** - With automatic Open Graph integration
- **Google Fonts** - Inter font for clean, modern typography

## Installation

1. Clone or download this theme to your Hugo site's `themes/` directory:
   ```bash
   git clone https://github.com/inhmedia/clean-base.git themes/clean-base
   ```

2. Copy the example configuration:
   ```bash
   cp themes/clean-base/exampleSite/config.yaml config.yaml
   ```

3. Update your site's configuration to use the theme:
   ```yaml
   theme: clean-base
   ```

## SEO Features

### Advanced Title Management
- **`title`** - Used for page headings and as fallback for SEO title
- **`seo_title`** - Optional separate title for `<title>` tag and social sharing
- Automatic fallback system ensures titles are always present

### Meta Descriptions
- **`description`** - Custom meta description for SEO
- **Auto-generation** - Falls back to summary or content excerpt
- **Configurable length** - Set `seo_summary_length` in config

### Smart Summaries
- **`summary`** - Custom summary for post cards and social sharing
- **Auto-excerpts** - Hugo's built-in summary or content truncation
- **Configurable length** - Set `card_summary_length` for post cards

### URL Control
- **`slug`** - Custom URL slugs in frontmatter
- **Flexible permalinks** - Use `/posts/` prefix or root-level URLs
- **Canonical URLs** - Automatic canonical tag generation

### Social Media Integration
- **Open Graph** - Complete Facebook/LinkedIn sharing support
- **Twitter Cards** - Rich Twitter card generation
- **Structured data** - Article metadata for search engines

## Configuration

### Basic Configuration

```yaml
# config.yaml
baseURL: "https://yourdomain.com"
languageCode: "en-us"
title: "Your Site Title"
theme: "clean-base"

# URL Structure - Choose one:
permalinks:
  # Option 1: Use /posts/ prefix
  posts: "/posts/:slug/"
  # Option 2: Root level URLs
  # posts: "/:slug/"

params:
  # Color theme
  color_theme: "pink"  # pink, blue, green, red, orange, purple, tokyo-night
  
  # SEO Settings
  description: "Your site's default meta description"
  seo_summary_length: 160    # Meta description length
  card_summary_length: 150   # Post card excerpt length
  default_og_image: "/images/og-default.jpg"
  
  # Content settings
  show_recent_posts: true
  recent_posts_count: 6
  show_related_posts: true
  
  # Footer
  footer_text: "Built with Hugo and Clean Base theme"
  logo: "/images/logo.png"  # Optional

# Navigation menu
menu:
  main:
    - name: "Home"
      url: "/"
      weight: 1
    - name: "Blog"
      url: "/posts/"
      weight: 2
    - name: "About"
      url: "/about/"
      weight: 3
```

### Post Front Matter

The theme supports comprehensive frontmatter for SEO and content control:

```yaml
---
title: "Page Heading"                    # Required: Used for page heading
seo_title: "SEO Optimized Title"         # Optional: Different title for <title> tag
date: 2023-12-01
draft: false
slug: "custom-url-slug"                  # Optional: Custom URL slug
description: "Custom meta description"    # Optional: SEO meta description
summary: "Brief summary for cards"       # Optional: Custom summary for post cards
tags: ["hugo", "themes", "seo"]
author: "Your Name"
featured_image: "/images/post-image.jpg"
noindex: false                           # Optional: Prevent search indexing
---
```

### Color Themes

The theme includes 7 beautiful color options:

- <span style="display: inline-block; width: 16px; height: 16px; background-color: #d4a49a; border-radius: 3px; margin-right: 8px; vertical-align: middle;"></span>**Pink** (`pink`) - *Default* - Soft dusty pink
- <span style="display: inline-block; width: 16px; height: 16px; background-color: #276FBF; border-radius: 3px; margin-right: 8px; vertical-align: middle;"></span>**Blue** (`blue`) - Professional blue
- <span style="display: inline-block; width: 16px; height: 16px; background-color: #568259; border-radius: 3px; margin-right: 8px; vertical-align: middle;"></span>**Green** (`green`) - Natural green
- <span style="display: inline-block; width: 16px; height: 16px; background-color: #9A031E; border-radius: 3px; margin-right: 8px; vertical-align: middle;"></span>**Red** (`red`) - Bold red
- <span style="display: inline-block; width: 16px; height: 16px; background-color: #E36414; border-radius: 3px; margin-right: 8px; vertical-align: middle;"></span>**Orange** (`orange`) - Vibrant orange
- <span style="display: inline-block; width: 16px; height: 16px; background-color: #351431; border-radius: 3px; margin-right: 8px; vertical-align: middle;"></span>**Purple** (`purple`) - Deep purple
- <span style="display: inline-block; width: 16px; height: 16px; background-color: #7aa2f7; border-radius: 3px; margin-right: 8px; vertical-align: middle;"></span>**Tokyo Night** (`tokyo-night`) - Cool blue inspired by Tokyo Night theme

## Content Structure

```
content/
├── _index.md          # Homepage content
├── about.md           # About page
└── posts/             # Blog posts (or any name you prefer)
    ├── _index.md      # Blog listing page
    ├── my-first-post.md
    └── another-post.md
```

## URL Structure Options

### Option 1: Posts Folder (Recommended)
```yaml
permalinks:
  posts: "/posts/:slug/"
```
URLs: `yoursite.com/posts/your-post-title/`

### Option 2: Root Level
```yaml
permalinks:
  posts: "/:slug/"
```
URLs: `yoursite.com/your-post-title/`

## SEO Best Practices

### Title Optimization
```yaml
title: "Complete Guide to Hugo Themes"
seo_title: "Hugo Themes Guide 2024 - Build Fast Static Sites"
```

### Description Optimization
```yaml
description: "Learn how to choose and customize Hugo themes for lightning-fast static websites. Complete 2024 guide with examples."
```

### Summary for Social Sharing
```yaml
summary: "A comprehensive guide covering everything you need to know about Hugo themes, from selection to customization."
```

### Featured Images
```yaml
featured_image: "/images/hugo-themes-guide.jpg"
```

## Customization

### Creating Custom Color Themes

Add new themes in `static/css/style.css`:

```css
body.theme-custom {
    --accent-color: #your-color;
    --accent-hover: #your-hover-color;
}
```

### Typography

Change fonts in `layouts/_default/baseof.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Highlighting Text

Use the highlight class for accent-colored text:

```html
<span class="highlight">highlighted text</span>
```

## Development

1. Fork the repository
2. Make your changes
3. Test with a Hugo site
4. Submit a pull request

## License

This theme is released under the MIT License. See [LICENSE](LICENSE) for details.

## Credits

- Built with [Hugo](https://gohugo.io/)
- Typography powered by [Inter](https://fonts.google.com/specimen/Inter)
- Inspired by modern, clean web design principles 