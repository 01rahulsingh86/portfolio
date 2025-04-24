#!/bin/bash

# Build the site for GitHub Pages
npx vite build --config vite.config.pages.ts

# Create or update the .nojekyll file (needed for GitHub Pages)
touch dist-pages/.nojekyll

# Create a basic README for the GitHub Pages site
cat > dist-pages/README.md << 'EOL'
# Rahul Singh - Portfolio

This is the compiled version of my personal portfolio website.
The source code is available in the main branch of this repository.

## Development
The site was built with React, TypeScript, Tailwind CSS, and Vite.
EOL

echo "Build completed successfully! The site is ready in the dist-pages folder."
echo "To deploy to GitHub Pages:"
echo "1. Copy all files from dist-pages to the gh-pages branch"
echo "2. Push the gh-pages branch to GitHub"
echo "3. Configure GitHub repository settings to serve from the gh-pages branch"