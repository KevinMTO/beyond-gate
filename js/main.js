/*
 * Beyond the Gate - Personal Website Template
 * 
 * Copyright (c) 2025 Kevin Mato. All rights reserved.
 * Licensed under MIT with Attribution Requirement.
 * https://github.com/KevinMTO/beyond-gate
 * 
 * If you use this template, you must include attribution to Kevin Mato.
 * See LICENSE file for full terms.
 * 
 * ---
 * 
 * JavaScript for loading JSON data and populating pages dynamically
 * 
 * Functions:
 * - loadSiteData(): Loads general site info (name, bio, contact)
 * - loadAboutData(): Loads about page content
 * - loadProjectsData(): Loads projects and displays them
 * - loadBlogData(): Loads blog index
 * - loadBlogPost(): Loads individual blog post
 * - loadContactData(): Loads contact information
 */

// Utility function to safely fetch JSON data
async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${url}:`, error);
        return null;
    }
}

// Load general site information (used on homepage and footer)
async function loadSiteData() {
    const data = await fetchJSON('data/site.json');
    if (!data) return;

    // Update homepage elements if they exist
    const nameEl = document.getElementById('engineer-name');
    const titleEl = document.getElementById('engineer-title');
    const bioEl = document.getElementById('engineer-bio');
    const footerNameEl = document.getElementById('footer-name');

    if (nameEl) nameEl.textContent = data.name;
    if (titleEl) titleEl.textContent = data.title;
    if (bioEl) bioEl.textContent = data.shortBio;
    if (footerNameEl) footerNameEl.textContent = data.name;

    // Update page title
    if (nameEl) {
        document.title = `${data.name} - ${data.title}`;
    }
}

// Load about page content
async function loadAboutData() {
    const data = await fetchJSON('data/about.json');
    if (!data) return;

    // Biography section
    const biographyEl = document.getElementById('biography-content');
    if (biographyEl && data.biography) {
        biographyEl.innerHTML = data.biography.map(paragraph => 
            `<p>${paragraph}</p>`
        ).join('');
    }

    // Education section
    const educationEl = document.getElementById('education-content');
    if (educationEl && data.education) {
        educationEl.innerHTML = data.education.map(item => 
            `<div class="education-item">
                <h4>${item.degree}</h4>
                <p><strong>${item.institution}</strong> • ${item.year}</p>
                ${item.details ? `<p>${item.details}</p>` : ''}
            </div>`
        ).join('');
    }

    // Experience section
    const experienceEl = document.getElementById('experience-content');
    if (experienceEl && data.experience) {
        experienceEl.innerHTML = data.experience.map(item => 
            `<div class="experience-item">
                <h4>${item.position}</h4>
                <p><strong>${item.company}</strong> • ${item.duration}</p>
                <p>${item.description}</p>
                ${item.achievements ? 
                    `<ul>${item.achievements.map(achievement => 
                        `<li>${achievement}</li>`
                    ).join('')}</ul>` : ''
                }
            </div>`
        ).join('');
    }

    // Specialties section
    const specialtiesEl = document.getElementById('specialties-content');
    if (specialtiesEl && data.specialties) {
        specialtiesEl.innerHTML = `
            <div class="specialties-grid">
                ${data.specialties.map(category => 
                    `<div class="specialty-category">
                        <h4>${category.category}</h4>
                        <ul>
                            ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>`
                ).join('')}
            </div>
        `;
    }
}

// Load and display projects
async function loadProjectsData() {
    const data = await fetchJSON('data/projects.json');
    const projectsGrid = document.getElementById('projects-grid');
    
    if (!data || !projectsGrid) return;

    if (data.projects && data.projects.length > 0) {
        projectsGrid.innerHTML = data.projects.map(project => 
            `<div class="project-card">
                ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : ''}
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.technologies ? 
                    `<div class="project-tech">
                        <strong>Technologies:</strong> ${project.technologies.join(', ')}
                    </div>` : ''
                }
                ${project.link ? 
                    `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                        View Project →
                    </a>` : ''
                }
            </div>`
        ).join('');
    } else {
        projectsGrid.innerHTML = '<div class="loading">No projects available.</div>';
    }
}

// Load blog index
async function loadBlogData() {
    const data = await fetchJSON('data/blog.json');
    const blogPosts = document.getElementById('blog-posts');
    
    if (!data || !blogPosts) return;

    if (data.posts && data.posts.length > 0) {
        // Sort posts by date (newest first)
        const sortedPosts = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        blogPosts.innerHTML = sortedPosts.map(post => 
            `<article class="blog-post-preview">
                <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
                <div class="blog-post-meta">
                    <time datetime="${post.date}">${formatDate(post.date)}</time>
                    ${post.readTime ? ` • ${post.readTime} min read` : ''}
                </div>
                <div class="blog-post-excerpt">
                    ${post.excerpt}
                </div>
                <a href="post.html?id=${post.id}" class="read-more">Read more →</a>
            </article>`
        ).join('');
    } else {
        blogPosts.innerHTML = '<div class="loading">No blog posts available.</div>';
    }
}

async function loadBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) {
        document.getElementById('blog-post').innerHTML = 
            '<div class="loading">Post not found. <a href="blog.html">Return to blog</a></div>';
        return;
    }

    const data = await fetchJSON('data/blog.json');
    if (!data || !data.posts) {
        document.getElementById('blog-post').innerHTML = 
            '<div class="loading">Unable to load blog posts.</div>';
        return;
    }

    const post = data.posts.find(p => p.id === postId);
    const blogPostEl = document.getElementById('blog-post');
    
    if (!post || !blogPostEl) {
        blogPostEl.innerHTML = 
            '<div class="loading">Post not found. <a href="blog.html">Return to blog</a></div>';
        return;
    }

    try {
        // Fetch Markdown file from "file" field in blog.json
        const mdResponse = await fetch(post.file);
        if (!mdResponse.ok) throw new Error(`Cannot fetch ${post.file}`);
        
        const markdown = await mdResponse.text();
        const htmlContent = marked.parse(markdown); // Convert to HTML

        document.title = `${post.title} - Kevin Mato`;
        document.getElementById('post-page-title').textContent = post.title;

        blogPostEl.innerHTML = `
            <header class="blog-post-header">
                <h1>${post.title}</h1>
                <div class="blog-post-meta">
                    <time datetime="${post.date}">${formatDate(post.date)}</time>
                    ${post.readTime ? ` • ${post.readTime} min read` : ''}
                    ${post.tags ? ` • ${post.tags.join(', ')}` : ''}
                </div>
            </header>
            <div class="blog-post-content">
                ${htmlContent}
            </div>
        `;

        addPostNavigation(data.posts, post.id);
    } catch (err) {
        blogPostEl.innerHTML = `<div class="loading error">Error loading post content.</div>`;
        console.error(err);
    }
}



// Add navigation links to previous/next posts
function addPostNavigation(posts, currentPostId) {
    const currentIndex = posts.findIndex(post => post.id === currentPostId);
    const navEl = document.getElementById('post-navigation');
    
    if (!navEl || currentIndex === -1) return;

    let navHTML = '';
    
    // Previous post (newer)
    if (currentIndex > 0) {
        const prevPost = posts[currentIndex - 1];
        navHTML += `<a href="post.html?id=${prevPost.id}" class="post-nav-link">← ${prevPost.title}</a>`;
    }
    
    // Next post (older)
    if (currentIndex < posts.length - 1) {
        const nextPost = posts[currentIndex + 1];
        navHTML += `<a href="post.html?id=${nextPost.id}" class="post-nav-link">${nextPost.title} →</a>`;
    }
    
    navEl.innerHTML = navHTML;
}

// Load contact information
async function loadContactData() {
    const data = await fetchJSON('data/site.json');
    if (!data || !data.contact) return;

    // Update email
    const emailEl = document.getElementById('contact-email');
    if (emailEl && data.contact.email) {
        emailEl.textContent = data.contact.email;
        emailEl.href = `mailto:${data.contact.email}`;
    }

    // Update professional links
    const linksEl = document.getElementById('professional-links');
    if (linksEl && data.contact.links) {
        linksEl.innerHTML = Object.entries(data.contact.links).map(([platform, url]) => 
            `<a href="${url}" class="social-link" target="_blank" rel="noopener noreferrer">
                ${capitalizeFirst(platform)}
            </a>`
        ).join('');
    }
}

// Utility function to format dates
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility function to capitalize first letter
function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Error handling for failed loads
function handleLoadError(elementId, errorMessage) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `<div class="loading error">${errorMessage}</div>`;
    }
}

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add any global event listeners or initialization here
    
    // Example: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading states to all elements that will be populated
    const loadingElements = [
        'engineer-name', 'engineer-title', 'engineer-bio',
        'biography-content', 'education-content', 'experience-content', 'specialties-content',
        'projects-grid', 'blog-posts', 'blog-post', 'contact-email', 'professional-links'
    ];
    
    loadingElements.forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.innerHTML.trim()) {
            el.innerHTML = '<div class="loading">Loading...</div>';
        }
    });
});

/*
 * INSTRUCTIONS FOR EXTENDING THE WEBSITE:
 * 
 * 1. ADDING NEW BLOG POSTS:
 *    - Edit data/blog.json
 *    - Add a new post object with unique id, title, date, excerpt, content
 *    - The post will automatically appear in the blog index
 * 
 * 2. ADDING NEW PROJECTS:
 *    - Edit data/projects.json
 *    - Add a new project object with title, description, optional image and link
 *    - Project will automatically appear on projects page
 * 
 * 3. UPDATING PERSONAL INFO:
 *    - Edit data/site.json for basic info, contact details
 *    - Edit data/about.json for detailed biography, education, experience
 * 
 * 4. STYLING MODIFICATIONS:
 *    - All styles are in css/style.css
 *    - Color palette is defined at the top of the CSS file
 *    - Responsive breakpoints: 768px (tablet), 480px (mobile)
 * 
 * 5. ADDING NEW PAGES:
 *    - Create new HTML file following existing structure
 *    - Add navigation links to all existing pages
 *    - Create corresponding load function in this JS file
 *    - Add data file in data/ directory if needed
 */
