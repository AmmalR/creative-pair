# React Website (Vite + Tailwind)

A production-ready, multi-page React starter with routing, reusable components, blog, and a contact form.

## Quick Start

```bash
# 1) Extract the zip
cd react-website

# 2) Install dependencies
npm install

# 3) Run dev server
npm run dev

# 4) Build for production
npm run build && npm run preview
```

## Structure

```
react-website/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── ContactForm.jsx
    │   ├── FeatureCard.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   └── Section.jsx
    ├── context/
    │   └── ThemeContext.jsx
    ├── data/
    │   └── posts.js
    └── pages/
        ├── About.jsx
        ├── Blog.jsx
        ├── BlogPost.jsx
        ├── Contact.jsx
        ├── Home.jsx
        ├── NotFound.jsx
        ├── Products.jsx
        └── Services.jsx
```

## Notes
- Tailwind is set up; use the utility classes in `src/index.css` and extend via `tailwind.config.js`.
- Replace placeholder content and images with your own.
- Contact form is client-side only; wire it to your backend or a service like Formspree.
