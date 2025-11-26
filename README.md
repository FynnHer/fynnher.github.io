# Fynn-Lasse Herrmann | Personal Portfolio & Blog

A futuristic, responsive personal portfolio and blog website built for GitHub Pages.

![Portfolio Preview](assets/images/preview-placeholder.png)

## 🚀 Features

- **Modern Design**: Futuristic dark theme with neon cyan/purple accents
- **Responsive**: Fully responsive layout for all devices
- **Smooth Animations**: ScrollMagic and GSAP powered scroll animations
- **Blog System**: Static Markdown-based blog with easy-to-add posts
- **Project Showcase**: Filterable project grid with category tags
- **Contact Page**: Social links and email contact

## 📁 Project Structure

```
fynnher.github.io/
├── index.html              # Landing page
├── about.html              # About me page
├── projects.html           # Projects showcase
├── contact.html            # Contact information
├── blog/
│   ├── index.html          # Blog listing page
│   └── posts/              # Individual blog posts
│       ├── welcome.html
│       ├── getting-started-with-python-ai.html
│       └── why-im-learning-rust.html
├── assets/
│   ├── css/
│   │   └── style.css       # Global styles
│   ├── js/
│   │   └── main.js         # Main JavaScript
│   └── images/             # Images and assets
├── scripts/
│   └── scrollmagic.js      # ScrollMagic configuration
└── README.md
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript** - Vanilla JS with modern ES6+ features
- **ScrollMagic** - Scroll-based animations
- **GSAP** - High-performance animations
- **Google Fonts** - Orbitron & Rajdhani fonts

## 🎨 Design Features

- Dark background with cyan (#00f0ff) and purple (#bf00ff) neon accents
- Grid overlay animation in hero section
- Floating particle effects
- Glitch text effect on hero title
- Smooth reveal animations on scroll
- Futuristic card designs with glow effects

## 📝 Adding a New Blog Post

1. Create a new HTML file in `/blog/posts/`
2. Copy the template structure from an existing post
3. Update the content, title, and meta description
4. Add a link to the new post in `/blog/index.html`

## 🚀 Deployment

This website is designed for GitHub Pages:

1. Push the repository to GitHub
2. Go to repository Settings → Pages
3. Select the branch to deploy (usually `main`)
4. The site will be available at `https://[username].github.io`

### Local Development

Simply open any HTML file in a browser. No build process required!

For a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 🔧 Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --accent-cyan: #00f0ff;
    --accent-purple: #bf00ff;
    --bg-primary: #0a0a0f;
    /* ... more variables */
}
```

### Content
- Update personal information in HTML files
- Replace placeholder images in `/assets/images/`
- Modify project cards in `projects.html`
- Add social links in the footer and contact page
- **Important**: Replace `contact@example.com` in `contact.html` with your actual email address

## 📄 License

© 2024 Fynn-Lasse Herrmann. All rights reserved.

## 📬 Contact

- GitHub: [@FynnHer](https://github.com/FynnHer)
- Website: [fynnher.github.io](https://fynnher.github.io)
