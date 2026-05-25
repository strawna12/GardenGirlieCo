# 🌸 Garden Girlies Co. Website

Women-led garden care, container gardening, plant styling, and yard glow-ups for homes, rentals, and Airbnbs in St. Pete, FL.

## 📁 Project Structure

```
garden-girlies/
├── public/
│   ├── index.html        ← Main website homepage
│   ├── intake.html       ← New client intake form (5-step wizard)
│   └── education.html    ← Florida-Friendly Gardening guide (10 topics)
├── server.js             ← Express server
├── package.json
├── railway.toml          ← Railway deployment config
├── .gitignore
└── README.md
```

## 🚀 Deploy to GitHub + Railway

### Step 1 — Install Node.js (if you haven't already)
Download from https://nodejs.org (choose the LTS version)

### Step 2 — Set up the project locally
Open Terminal (Mac) or Command Prompt (Windows), then:

```bash
cd garden-girlies
npm install
```

Test it locally:
```bash
npm start
```
Open http://localhost:3000 in your browser — you should see your site!

Press Ctrl+C to stop the server when done.

---

### Step 3 — Push to GitHub

1. Go to https://github.com and create a free account (if you don't have one)
2. Click the **"+"** in the top right → **"New repository"**
3. Name it `garden-girlies-co`, set it to **Public** or **Private**, click **Create repository**
4. Back in your terminal, run these commands one at a time:

```bash
git init
git add .
git commit -m "🌸 Initial Garden Girlies Co. website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/garden-girlies-co.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

### Step 4 — Deploy to Railway

1. Go to https://railway.app and sign up (free) — sign in with your GitHub account
2. Click **"New Project"**
3. Choose **"Deploy from GitHub repo"**
4. Select your `garden-girlies-co` repository
5. Railway will auto-detect Node.js and deploy automatically 🎉
6. Once deployed, click **"Settings"** → **"Domains"** → **"Generate Domain"** for a free `.railway.app` URL
7. (Optional) Add a custom domain like `gardengirliesco.com` under the Domains section

---

## 🌐 Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Main website with all sections |
| Intake Form | `/intake` | 5-step new client wizard |
| Education | `/education` | Florida-Friendly Gardening guide |

---

## ✏️ Customizing Your Site

### Update contact info
Search for these placeholders in `public/index.html` and replace with your real info:
- `hello@gardengirliesco.com`
- `(727) 555-GROW`

### Replace placeholder images
Look for emoji placeholders like `🌺` inside `.hero-img-wrap`, `.about-img`, etc.
Replace with real `<img>` tags:
```html
<img src="/images/your-photo.jpg" alt="Garden Girlies team" style="width:100%;height:100%;object-fit:cover;">
```

Add your image files to a new `public/images/` folder.

### Add images to the project
```
public/
└── images/
    ├── hero-photo.jpg
    ├── team-photo.jpg
    └── garden-1.jpg
```

### Hook up the contact form
The form currently shows a success message on submit. To actually receive form submissions, use one of these free services:

**Option A — Formspree (easiest)**
1. Go to https://formspree.io and create a free account
2. Create a new form and copy your form ID
3. In `public/index.html`, find the `.contact-form` section
4. Change the form submit button to use Formspree:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
  <!-- existing form fields -->
  <button type="submit" class="form-submit">🌿 Send My Consult Request</button>
</form>
```

**Option B — Netlify Forms** (if you switch to Netlify hosting)
Add `netlify` attribute to your form tag.

---

## 🔄 Updating the Site After Changes

After editing any files, push the updates to GitHub:
```bash
git add .
git commit -m "Update contact info"
git push
```

Railway automatically re-deploys whenever you push to GitHub. Changes go live in ~2 minutes!

---

## 💡 Tips

- **Custom domain**: Buy from Namecheap or Google Domains (~$12/yr), then point it to Railway in Settings → Domains
- **Analytics**: Add Google Analytics or Plausible to track visitors
- **SEO**: The site already has meta tags — update the description in each HTML file with your real address
- **HTTPS**: Railway provides free SSL automatically ✅

---

Made with 💚 by Garden Girlies Co. — St. Pete, FL
