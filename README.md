# Sparkle – Handmade Jewellery Website

A basic but creative static website for the home jewellery maker **Sparkle**.

## Pages
- **Home** – Hero, featured categories, short about
- **Products** – All items with category filters (Earrings, Necklaces, Bracelets, Rings)
- **New Arrivals** – Only products marked as new
- **Order** – Simple order request form
- **About** – Story and values

Images are currently random Unsplash placeholders. Replace the `src` URLs in the HTML/JS with your own photos later.

## Local Preview
Open `index.html` in a browser or use a local server:
```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

## Free Deployment on GitHub Pages (End-to-End)

### 1. Create a GitHub account
Go to [https://github.com](https://github.com) and sign up (free).

### 2. Create a new repository
- Click the **+** → **New repository**
- Repository name: e.g. `sparkle` or `yourusername.github.io` (for user site)
- Public
- Do **not** initialize with README (we already have one)
- Create repository

### 3. Upload the files
**Option A – GitHub website (easiest)**
1. On the new empty repo page click **uploading an existing file**
2. Drag the entire contents of the `sparkle-website` folder (index.html, products.html, css/, js/, etc.)
3. Commit the changes

**Option B – Git command line**
```bash
cd sparkle-website
git init
git add .
git commit -m "Initial Sparkle website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar under Code and automation)
3. Under **Build and deployment** → **Source**: select **Deploy from a branch**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**

### 5. Wait & open your site
After 30–90 seconds refresh the Pages settings. You will see a green banner with the URL:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

If you named the repo `YOUR-USERNAME.github.io` the site is available at:

```
https://YOUR-USERNAME.github.io/
```

### 6. Custom domain (optional, free)
In Settings → Pages you can add a custom domain later. You need to configure DNS at your domain provider.

## Updating the site later
- Edit files locally
- Push to the `main` branch again
- GitHub Pages rebuilds automatically

## Notes
- The order form is client-side only (shows a success message). For real orders you can later connect it to Formspree, Netlify Forms or a simple email service – all free tiers available.
- Replace Unsplash image URLs with your own photos (upload images to the repo or use an image host).
- The site is fully responsive and works on mobile.
