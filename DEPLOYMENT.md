# GitHub Pages Deployment Setup

## Setup Instructions

### 1. Initialize Git Repository
```bash
git init
git remote add origin https://github.com/ayushgupta11/ayushgupta11.github.io.git
```

### 2. Create and Switch to Develop Branch
```bash
git checkout -b develop
```

### 3. Add and Commit Files
```bash
git add .
git commit -m "Initial portfolio setup with GitHub Actions deployment"
```

### 4. Push to GitHub
```bash
git push -u origin develop
```

### 5. Configure GitHub Pages
1. Go to your repository: https://github.com/ayushgupta11/ayushgupta11.github.io
2. Navigate to Settings → Pages
3. Source: Select "GitHub Actions"
4. This will enable the workflow to deploy automatically

### 6. Repository Settings for GitHub Pages
- The workflow will automatically build and deploy when you push to `develop` branch
- The built files will be deployed to the `gh-pages` branch (handled automatically)
- Your site will be available at: https://ayushgupta11.github.io

## Workflow Features
- ✅ Triggers on push to `develop` branch
- ✅ Uses pnpm for fast dependency installation
- ✅ Builds with Vite for optimized production bundle
- ✅ Automatically deploys to GitHub Pages
- ✅ Handles existing files (replaces them with new build)
- ✅ Proper permissions and security

## Future Updates
Simply push to the `develop` branch and the site will auto-deploy:
```bash
git add .
git commit -m "Update portfolio"
git push origin develop
```