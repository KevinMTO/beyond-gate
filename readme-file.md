# Personal Engineer Website

A clean, mobile-friendly personal website for engineers with JSON-based content management and blog functionality.

## Features

- **Fully responsive design** - Works on desktop, tablet, and mobile
- **JSON-based content** - Easy to update without touching HTML/CSS
- **Blog system** - Add new posts by editing JSON
- **Project showcase** - Display your engineering work
- **SEO optimized** - Proper meta tags and semantic HTML
- **No framework dependencies** - Pure HTML, CSS, and JavaScript

## File Structure

```
website/
├── index.html          # Homepage
├── about.html          # About page  
├── projects.html       # Projects listing
├── blog.html           # Blog index
├── post.html           # Individual blog posts
├── contact.html        # Contact information
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript for content loading
├── data/
│   ├── site.json       # General site info
│   ├── about.json      # About page content
│   ├── projects.json   # Project listings
│   └── blog.json       # Blog posts
├── img/                # Images (optional)
└── README.md          # This file
```

## Quick Start

1. **Customize your information:**
   - Edit `data/site.json` with your name, title, bio, and contact info
   - Update `data/about.json` with your background, education, and experience
   - Modify `data/projects.json` to showcase your work
   - Add your blog posts to `data/blog.json`

2. **Deploy:**
   - Upload all files to your web server
   - Ensure your server can serve static files
   - No server-side processing required

## Adding Content

### Adding a New Blog Post

Edit `data/blog.json` and add a new post object:

```json
{
  "id": "unique-post-id",
  "title": "Your Post Title",
  "date": "2024-12-01",
  "excerpt": "Brief description of your post...",
  "readTime": 5,
  "tags": ["tag1", "tag2"],
  "content": "<p>Your full post content in HTML...</p>"
}
```

**Important:** 
- Use a unique `id` for each post
- Date format: `YYYY-MM-DD`
- Content should be HTML (use `<p>`, `<h2>`, `<h3>`, etc.)
- Posts are automatically sorted by date (newest first)

### Adding a New Project

Edit `data/projects.json` and add a new project:

```json
{
  "id": "project-id",
  "title": "Project Name",
  "description": "Description of what the project does...",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "image": "img/project-image.jpg",
  "link": "https://github.com/username/project",
  "featured": true,
  "year": "2024"
}
```

### Updating Personal Information

- **Basic info:** Edit `data/site.json`
- **Detailed bio:** Edit `data/about.json`
- **Contact info:** Update the `contact` section in `data/site.json`

## Customization

### Changing Colors

Edit the color palette at the top of `css/style.css`:

```css
/* Color Palette */
Primary: #2c3e50 (dark blue-gray)
Secondary: #3498db (blue)  
Accent: #e74c3c (red)
```

### Adding New Pages

1. Create new HTML file following the existing structure
2. Add navigation links to all pages
3. Create corresponding data file if needed
4. Add load function in `js/main.js`

### Responsive Breakpoints

- Desktop: 1200px and up
- Tablet: 768px - 1199px  
- Mobile: 767px and below

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with some limitations)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Minimal CSS and JavaScript
- Lazy loading of JSON content
- Optimized images (when using img/ folder)
- Minimal external dependencies

## SEO Features

- Semantic HTML structure
- Proper meta tags on all pages
- Open Graph tags ready (uncomment in HTML)
- Clean URLs for blog posts
- Fast loading times

## Local Development

To run locally:

1. Use a local web server (Python, Node.js, or any HTTP server)
2. For Python: `python -m http.server 8000`
3. For Node.js: `npx http-server`
4. Open `http://localhost:8000` in your browser

**Note:** You need a web server because of CORS restrictions when loading JSON files locally.

## Deployment

This website can be deployed to any static hosting service:

- **GitHub Pages** - Free hosting for public repositories
- **Netlify** - Easy deployment with forms and serverless functions
- **Vercel** - Fast global CDN deployment
- **AWS S3** - Scalable static website hosting
- **Traditional web hosting** - Any provider that serves static files

No server-side processing or databases required!

## Troubleshooting

**JSON files not loading:**
- Check browser console for CORS errors
- Ensure you're running a web server (not opening files directly)
- Verify JSON syntax is valid

**Styles not applying:**
- Check that CSS file path is correct
- Verify no CSS syntax errors in browser dev tools

**Blog posts not appearing:**
- Ensure post IDs are unique
- Check date format is YYYY-MM-DD
- Verify JSON syntax in blog.json

## License

MIT License - feel free to use this template for your own website!