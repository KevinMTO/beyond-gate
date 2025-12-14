# 🚪 Beyond the Gate - Personal Website Template

**A modern, SEO-optimized personal website template for engineers and researchers.**

> **Copyright © 2025 Kevin Mato. All rights reserved.**  
> Licensed under MIT with Attribution Requirement. See [LICENSE](LICENSE) for details.

---

## ✨ Features

- **🎨 Modern Design** - Quantum Purple palette with customizable themes
- **📱 Fully Responsive** - Works on desktop, tablet, and mobile
- **🔍 SEO Optimized** - JSON-LD structured data, Open Graph, Twitter Cards
- **📝 Blog System** - Add posts via JSON, no database needed
- **🚀 Zero Dependencies** - Pure HTML, CSS, and JavaScript
- **♿ Accessible** - Semantic HTML and proper ARIA labels
- **⚡ Fast** - No frameworks, minimal code, instant loading

## 📁 File Structure

```
beyond-gate/
├── index.html          # Homepage
├── about.html          # About page  
├── projects.html       # Projects showcase
├── publications.html   # Academic publications
├── blog.html           # Blog index
├── post.html           # Individual blog posts
├── contact.html        # Contact information
├── 404.html            # Custom error page
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine directives
├── feed.xml            # RSS feed
├── LICENSE             # License file
├── README.md           # This file
├── css/
│   └── style.css       # Main stylesheet (Quantum Purple + NVIDIA + TUM palettes)
├── js/
│   └── main.js         # JavaScript for content loading
├── data/
│   ├── site.json       # General site info & SEO settings
│   ├── about.json      # About page content
│   ├── projects.json   # Project listings
│   └── blog.json       # Blog posts
└── img/
    ├── favicon.svg     # SVG favicon
    ├── favicon-32x32.png
    ├── favicon-16x16.png
    └── apple-touch-icon.png
```

## 🚀 Quick Start

### 1. Clone & Customize

```bash
git clone https://github.com/KevinMTO/beyond-gate.git
cd beyond-gate
```

### 2. Update Your Information

Edit these files with your details:

| File | What to Update |
|------|----------------|
| `data/site.json` | Name, title, bio, contact, social links |
| `data/about.json` | Education, experience, skills |
| `data/projects.json` | Your projects and work |
| `data/blog.json` | Blog posts |
| `img/` | Your profile photo and favicon |

### 3. Update SEO Settings

In each HTML file, update:
- `<title>` tag
- `<meta name="description">`
- `<link rel="canonical">`
- Open Graph and Twitter Card meta tags
- JSON-LD structured data

### 4. Deploy

Upload to any static hosting:
- **GitHub Pages** (free)
- **Netlify** (free tier available)
- **Vercel** (free tier available)
- **AWS S3 / CloudFront**

## 📝 Adding Content

### New Blog Post

Add to `data/blog.json`:

```json
{
  "id": "my-new-post",
  "title": "My New Post Title",
  "date": "2025-01-15",
  "excerpt": "Brief description...",
  "readTime": 5,
  "tags": ["quantum", "tutorial"],
  "content": "<p>Your HTML content here...</p>"
}
```

### New Project

Add to `data/projects.json`:

```json
{
  "id": "my-project",
  "title": "Project Name",
  "description": "What it does...",
  "technologies": ["Python", "CUDA", "C++"],
  "link": "https://github.com/username/project",
  "featured": true
}
```

## 🎨 Customization

### Color Palettes

The template includes three palettes in `css/style.css`:

1. **Quantum Purple** (default) - `#1a1a2e`, `#6366f1`, `#a855f7`
2. **NVIDIA Green** - `#1a1a1a`, `#76b900`
3. **TUM Blue** - `#003359`, `#0065BD`

To change the main palette, edit the CSS variables at the top of `style.css`.

### Special Project Cards

Add classes for themed project cards:
- `.nvidia-card` - NVIDIA green theme
- `.tum-card` - TUM blue theme

## 🔍 SEO Features

- ✅ JSON-LD structured data (Person, WebSite, Article, etc.)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ Canonical URLs
- ✅ XML Sitemap
- ✅ robots.txt
- ✅ RSS feed
- ✅ Semantic HTML5
- ✅ Mobile-friendly (Google ranking factor)

## 💻 Local Development

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# Then open http://localhost:8000
```

## 📋 Attribution Requirement

If you use this template, you must include attribution to Kevin Mato:

**Option 1:** In your footer:
```html
<p>Based on <a href="https://github.com/KevinMTO/beyond-gate">Beyond the Gate</a> template by Kevin Mato</p>
```

**Option 2:** In your README:
```markdown
This website is based on the [Beyond the Gate](https://github.com/KevinMTO/beyond-gate) template by Kevin Mato.
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| JSON not loading | Use a web server, not `file://` |
| CORS errors | Run local server (`python -m http.server`) |
| Styles broken | Check CSS file path in HTML |
| Posts not showing | Verify JSON syntax and unique IDs |

## 📄 License

**MIT License with Attribution Requirement**

Copyright © 2025 Kevin Mato. All rights reserved.

You are free to use, modify, and distribute this template, provided you:
1. Include the original copyright notice
2. Provide clear attribution to Kevin Mato

See [LICENSE](LICENSE) for full details.

---

**Created by [Kevin Mato](https://kevinmto.github.io/beyond-gate/)** • Quantum Computing Engineer @ NVIDIA

⭐ Star this repo if you find it useful!

