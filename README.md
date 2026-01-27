<<<<<<< HEAD
# Ashishkumar.github.io
My Data Science Portfolio
=======

# Ashish Kumar Portfolio

A modern, responsive portfolio for an AI & Data Science Engineer.

## How to run in VSCode

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed.
2. **Open Folder**: Open this project folder in VSCode.
3. **Install Dependencies**: Open the VSCode terminal and run:
   ```bash
   npm install
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```
5. **View Site**: Click the link in the terminal (usually `http://localhost:5173`) to view your portfolio.

## How to Deploy to GitHub

1. **Create Repository**: Go to GitHub and create a new repository (e.g., `portfolio`).
2. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. **Enable GitHub Pages**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - Use the "Static HTML" or "Vite" template provided by GitHub to automate deployment.

Alternatively, you can build manually and push the `dist` folder to a `gh-pages` branch.
>>>>>>> 4219c46 (My data science portfolio)
