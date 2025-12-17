# Abstract - Project Architecture

## 🗂️ Project Structure Diagram

```mermaid
graph TB
    subgraph "📱 Application"
        A[index.html + Favicon] --> B[main.tsx]
        B --> C[App.tsx]
        C --> D[routes.ts]
    end

    subgraph "🛣️ Routes"
        D --> E[Layout.tsx]
        E --> F[Home.tsx]
        E --> G[Recipes.tsx]
        E --> H[RecipeDetail.tsx]
        E --> I[About.tsx]
        E --> J[Contact.tsx]
        E --> K[NotFound.tsx]
    end

    subgraph "🧩 Components"
        L[Layout.tsx]
        L --> L1[Header/Navigation]
        L --> L2[MobileNav.tsx]
        L --> L3[Footer]
        
        M[Shared Components]
        M --> M1[CreativeRecipeCard.tsx - Fully Clickable]
        M --> M2[AnimatedSection.tsx]
        M --> M3[PremiumButton.tsx]
    end

    subgraph "📊 Data"
        N[recipes.ts]
        N --> N1["20 Recipes"]
        N1 --> N2[Ethiopian Cuisine - 8]
        N1 --> N3[International Cuisine - 12]
        N1 --> N4[YouTube Video Links]
        N1 --> N5[Recipe Stories]
        N1 --> N6[Local Images]
    end

    subgraph "🖼️ Assets"
        P[public/images/recipes/]
        P --> P1[21 Downloaded Images]
        P --> P2[doro-wat.jpg, injera.jpg...]
    end

    subgraph "🎨 Styles"
        O[index.css]
        O --> O1[TailwindCSS]
        O --> O2[Custom Animations]
        O --> O3[Premium Effects]
    end
```

## 📄 Pages Overview

```mermaid
flowchart LR
    subgraph "Homepage"
        H1[Hero Section]
        H2[Stats Counter]
        H3[Featured Recipes - 6]
        H4[Quick Categories - 4]
        H5[Latest Recipes - 8]
        H6[Newsletter Signup]
        H7[Testimonial]
        H8[CTA Section]
    end

    subgraph "Recipes Page"
        R1[Hero Header]
        R2[Search Bar]
        R3[Category Filter]
        R4[Difficulty Filter]
        R5[Time Filter]
        R6[Recipe Grid - 20]
    end

    subgraph "Recipe Detail"
        RD1[Hero Image]
        RD2[Recipe Info]
        RD3[Ingredient Checklist]
        RD4[Step-by-Step Mode]
        RD5[Download Button]
        RD6[Print Button]
        RD7[Share Button]
        RD8[Nutrition Info]
        RD9[Chef Tips]
        RD10[Related Recipes]
    end

    subgraph "About Page"
        A1[Hero Section]
        A2[Stats]
        A3[Mission Section]
        A4[Philosophy - 3 Pillars]
        A5[Values - 4 Cards]
        A6[Team - 3 Members]
        A7[CTA Section]
    end

    subgraph "Contact Page"
        C1[Hero Section]
        C2[Contact Form]
        C3[Contact Info]
        C4[Office Hours]
        C5[Social Links]
    end
```

## 🔘 Buttons & Interactive Elements

```mermaid
graph TD
    subgraph "Navigation Buttons"
        NB1[Home Link]
        NB2[Recipes Link]
        NB3[About Link]
        NB4[Contact Link]
        NB5[Mobile Menu Toggle]
        NB6[Mobile Nav Icons - 4]
    end

    subgraph "Recipe Card Buttons"
        RC1[View Recipe Button]
        RC2[Show/Hide Ingredients]
        RC3[Pin/Unpin Details]
        RC4[Hover Overlay]
    end

    subgraph "Recipe Detail Buttons"
        RD1[Download Recipe]
        RD2[Print Recipe]
        RD3[Share Recipe]
        RD4[Like Button]
        RD5[Save Button]
        RD6[Ingredient Checkboxes]
        RD7[Step Navigation - Prev/Next]
        RD8[Exit Step Mode]
    end

    subgraph "Filter Buttons"
        FB1[Category Filters - 6]
        FB2[Difficulty Filters - 4]
        FB3[Time Filters - 5]
        FB4[Clear All Filters]
    end

    subgraph "Form Buttons"
        FM1[Newsletter Subscribe]
        FM2[Contact Form Submit]
    end

    subgraph "CTA Buttons"
        CTA1[Explore Recipes]
        CTA2[Get in Touch]
        CTA3[View All Recipes]
    end
```

## 📊 Data Flow

```mermaid
sequenceDiagram
    participant U as User
    participant P as Page
    participant C as Component
    participant D as Data (recipes.ts)

    U->>P: Navigate to page
    P->>D: Request recipe data
    D-->>P: Return recipes array
    P->>C: Pass recipe props
    C-->>U: Render UI

    U->>C: Click filter
    C->>P: Update filter state
    P->>D: Filter recipes
    D-->>P: Filtered results
    P->>C: Re-render with filtered data
    C-->>U: Updated UI

    U->>C: Click Download
    C->>C: Generate text file
    C-->>U: Download file
```

## 📁 File Structure

```
Abstract/
├── index.html                 # Entry HTML
├── package.json               # Dependencies
├── README.md                  # Documentation
├── ARCHITECTURE.md            # This file
├── vite.config.ts             # Vite config
├── tailwind.config.ts         # Tailwind config
├── src/
│   ├── main.tsx               # React entry
│   ├── styles/
│   │   └── index.css          # Global styles
│   └── app/
│       ├── App.tsx            # Root component
│       ├── routes.ts          # Route definitions
│       ├── components/
│       │   ├── Layout.tsx     # Main layout
│       │   ├── MobileNav.tsx  # Mobile navigation
│       │   ├── CreativeRecipeCard.tsx
│       │   ├── AnimatedSection.tsx
│       │   └── PremiumButton.tsx
│       ├── pages/
│       │   ├── Home.tsx
│       │   ├── Recipes.tsx
│       │   ├── RecipeDetail.tsx
│       │   ├── About.tsx
│       │   ├── Contact.tsx
│       │   └── NotFound.tsx
│       ├── data/
│       │   └── recipes.ts     # 20 recipes
│       └── hooks/
│           └── useScrollReveal.ts
└── dist/                      # Build output
```

## 📈 Statistics

| Category | Count |
|----------|-------|
| **Pages** | 6 |
| **Components** | 8 |
| **Recipes** | 20 |
| **Ethiopian Recipes** | 8 |
| **International Recipes** | 12 |
| **YouTube Video Links** | 8 |
| **Local Images** | 21 |
| **Recipe Stories** | 8 |
| **Interactive Buttons** | 40+ |
| **Filter Options** | 15 |
| **Animations** | 10+ |
| **Featured Recipes (Home)** | 9 |

## 🎯 Features Checklist

- ✅ Homepage with hero, 9 featured recipes, categories, newsletter
- ✅ Recipe archive with advanced filters
- ✅ Single recipe page with full details
- ✅ Interactive ingredient checklist
- ✅ Step-by-step cooking mode
- ✅ Recipe download functionality
- ✅ Print recipe functionality
- ✅ YouTube video tutorials for recipes
- ✅ Recipe stories and origin tales
- ✅ Local downloaded images (21 images)
- ✅ Fully clickable recipe cards
- ✅ Custom favicon with Abstract logo
- ✅ Share recipe functionality
- ✅ Mobile bottom navigation
- ✅ Responsive design
- ✅ Premium animations
- ✅ Ethiopian contact info
- ✅ Copyright and licensing
- ✅ Ready for Cloudflare deployment

---

© 2025 Abstract. All rights reserved.
Made in Addis Ababa, Ethiopia 🇪🇹
