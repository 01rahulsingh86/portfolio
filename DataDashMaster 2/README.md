# Rahul Singh - Personal Portfolio

A professional personal website showcasing Rahul Singh's extensive experience as a QA Engineering Leader with modern design and interactive elements.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode support
- Interactive UI elements and animations using Framer Motion
- Comprehensive sections for showcasing experience, skills, projects, and contact information

## Tech Stack

- React with TypeScript
- Tailwind CSS for styling (with shadcn UI components)
- Framer Motion for animations
- Vite for build tooling

## Deployment Instructions

### Option 1: Using GitHub Actions (Recommended)

This repository includes a GitHub Actions workflow that will automatically build and deploy the site to GitHub Pages whenever you push to the main branch.

1. Push this code to your GitHub repository (https://github.com/01rahulsingh86/portfolio.git)
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the sidebar
4. Under "Source", select "gh-pages" branch
5. Click "Save"
6. Your site will be available at https://01rahulsingh86.github.io/portfolio/

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. Clone this repository
2. Run `./build-pages.sh` to build the site
3. The built site will be in the `dist-pages` folder
4. Upload the contents of `dist-pages` to your web hosting service

## Local Development

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser at http://localhost:5000

## Customization

- Update content in the pages directory (client/src/pages)
- Modify styles in client/src/index.css
- Add new components in client/src/components