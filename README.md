# Abstract - Premium Culinary Experience

🌐 **Live Demo**: [https://abstract-82t.pages.dev/](https://abstract-82t.pages.dev/)

A modern, responsive recipe website featuring Ethiopian and international cuisine with beautiful animations, YouTube video tutorials, and premium design.

---

## 🗂️ Project Architecture

```mermaid
graph TB
    subgraph "📱 Application Entry"
        A[index.html + Favicon] --> B[main.tsx]
        B --> C[App.tsx]
        C --> D[routes.ts]
    end

    subgraph "🛣️ Routes - 8 Pages"
        D --> E[Layout.tsx]
        E --> F[Home.tsx]
        E --> G[Recipes.tsx]
        E --> H[RecipeDetail.tsx]
        E --> I[About.tsx]
        E --> J[Contact.tsx]
        E --> K[SavedRecipes.tsx]
        E --> L[LikedRecipes.tsx]
        E --> M[NotFound.tsx]
    end

    subgraph "🧩 Components"
        N[Layout.tsx]
        N --> N1[Header + Navigation]
        N --> N2[MobileNav - Bottom Bar]
        N --> N3[Footer + Quick Links]
        
        O[Shared Components]
        O --> O1[CreativeRecipeCard - Fully Clickable]
        O --> O2[AnimatedSection]
        O --> O3[PremiumButton]
        O --> O4[ScrollToTop]
    end

    subgraph "📊 Data Layer"
        P[recipes.ts]
        P --> P1["20 Recipes Total"]
        P1 --> P2[8 Ethiopian Recipes]
        P1 --> P3[12 International Recipes]
        P1 --> P4[YouTube Video Links]
        P1 --> P5[Recipe Stories]
        P1 --> P6[Nutrition Info]
    end

    subgraph "🖼️ Assets"
        Q[public/images/recipes/]
        Q --> Q1[21 Local Images]
    end

    subgraph "💾 Local Storage"
        R[Browser Storage]
        R --> R1[savedRecipes - Array]
        R --> R2[likedRecipes - Array]
    end
```

---

## 📄 Pages Flow Diagram

```mermaid
flowchart LR
    subgraph "Homepage"
        H1[Hero + Stats]
        H2[9 Featured Recipes]
        H3[Quick Categories]
        H4[Latest Recipes]
        H5[Newsletter Signup]
        H6[Testimonials]
        H7[CTA Section]
    end

    subgraph "Recipes Archive"
        R1[Search Bar]
        R2[Category Filter]
        R3[Difficulty Filter]
        R4[Time Filter]
        R5[20 Recipe Cards]
    end

    subgraph "Recipe Detail"
        RD1[Video Tutorial Link]
        RD2[Hero Image]
        RD3[Recipe Story]
        RD4[Video Embed]
        RD5[Ingredient Checklist]
        RD6[Step-by-Step Mode]
        RD7[Download/Print/Share]
        RD8[Nutrition Info]
        RD9[Chef Tips]
        RD10[Related Recipes]
    end

    subgraph "User Collections"
        UC1[Saved Recipes Page]
        UC2[Liked Recipes Page]
        UC3[LocalStorage Persistence]
    end
```

---

## 🔘 Interactive Elements

```mermaid
graph TD
    subgraph "Navigation - 12 Links"
        NB1[Home]
        NB2[Recipes]
        NB3[About]
        NB4[Contact]
        NB5[Saved Recipes]
        NB6[Liked Recipes]
        NB7[Mobile Bottom Nav - 4 icons]
    end

    subgraph "Recipe Card - 4 Actions"
        RC1[Click Anywhere → Detail Page]
        RC2[Hover → Show Details]
        RC3[Pin Details Toggle]
        RC4[View Recipe Button]
    end

    subgraph "Recipe Detail - 10 Actions"
        RD1[❤️ Like → Save to Liked]
        RD2[🔖 Save → Save to Saved]
        RD3[📤 Share Recipe]
        RD4[⬇️ Download as Text]
        RD5[🖨️ Print Recipe]
        RD6[▶️ Watch YouTube Video]
        RD7[☑️ Check Ingredients]
        RD8[Step-by-Step Mode]
        RD9[Previous/Next Step]
        RD10[Exit Step Mode]
    end

    subgraph "Filters - 15 Options"
        FB1[6 Categories]
        FB2[4 Difficulty Levels]
        FB3[5 Time Ranges]
        FB4[Clear All Button]
    end
```

---

## 🚀 Features

### Core Features
- ✅ **20 Recipes** - 8 Ethiopian + 12 International
- ✅ **YouTube Video Tutorials** - Watch cooking videos
- ✅ **Recipe Stories** - Origin and cultural background
- ✅ **Interactive Ingredient Checklist** - Mark items as you cook
- ✅ **Step-by-Step Mode** - Focus on one instruction
- ✅ **Download & Print** - Save recipes offline

### User Collections
- ✅ **Save Recipes** - Bookmark for later (persisted in browser)
- ✅ **Like Recipes** - Mark favorites (persisted in browser)
- ✅ **Dedicated Pages** - View all saved/liked recipes

### Navigation
- ✅ **Desktop Header** - Full navigation with hamburger menu
- ✅ **Mobile Bottom Nav** - Quick access to Home, Recipes, Saved, Liked
- ✅ **Footer Links** - All pages accessible

### Design
- ✅ **Fully Responsive** - Mobile, Tablet, Desktop
- ✅ **Premium Animations** - Scroll reveals, hover effects
- ✅ **Custom Favicon** - Abstract "A" logo
- ✅ **Ethiopian Branding** - Addis Ababa contact info

---

## 📱 Pages (8 Total)

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, 9 featured recipes, categories, newsletter |
| **Recipes** | `/recipes` | Full archive with filters |
| **Recipe Detail** | `/recipe/:id` | Complete recipe with video, story, ingredients |
| **About** | `/about` | Team, philosophy, values |
| **Contact** | `/contact` | Form and contact info |
| **Saved** | `/saved` | User's bookmarked recipes |
| **Liked** | `/liked` | User's favorite recipes |
| **404** | `*` | Not found page |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **TailwindCSS 4** | Styling |
| **Vite** | Build Tool |
| **React Router 7** | Navigation |
| **Lucide React** | Icons |
| **LocalStorage** | Data Persistence |

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/black12-ag/Abstract.git
cd Abstract

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

**Live Site**: [https://abstract-82t.pages.dev/](https://abstract-82t.pages.dev/)

### Deploy to Cloudflare Pages
1. Connect GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy!

Also compatible with: **Vercel**, **Netlify**

---

## 📊 Statistics

| Category | Count |
|----------|-------|
| Pages | 8 |
| Recipes | 20 |
| Ethiopian Recipes | 8 |
| International Recipes | 12 |
| YouTube Videos | 8 |
| Local Images | 21 |
| Recipe Stories | 8 |
| Interactive Buttons | 50+ |
| Filter Options | 15 |

---

## 📍 Contact

**Abstract - Culinary Excellence**

- 📧 Email: info@abstract.et
- 📱 Phone: +251 91 123 4567
- 📍 Location: Bole Road, Addis Ababa, Ethiopia

---

## 📄 License

MIT License - © 2025 Abstract. All rights reserved.

---

Made with ❤️ in Addis Ababa, Ethiopia 🇪🇹