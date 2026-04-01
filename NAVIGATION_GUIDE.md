# 🗺️ Navigation & Routing Guide

## Navigation Flow

```
HOME (/)
├── Hero Section
├── Policy Cards → Issues (/issues)
├── News Teaser → News (/news)
├── Donation Button → Donate CTA
└── Footer Links → All Pages

ISSUES (/issues) - Policy/Content Listing
├── List of policy articles
├── Each article links to detail page
└── Links to: Home, Shop, Volunteer, News, About

ISSUE DETAIL (/issues/[id]) - Individual Article
├── Full article content
├── Related articles section
└── Links to: Back to Issues, Home

SHOP (/shop) - Product Listing
├── Product grid (4 columns responsive)
├── Each product links to detail page
├── Add to cart buttons
└── Links to: Home, Issues, Volunteer, News, About

PRODUCT DETAIL (/shop/[id]) - Individual Product
├── Product image & details
├── Add to cart & wishlist
├── Related products section
└── Links to: Back to Shop, Home

NEWS (/news) - News Articles Listing
├── Featured news articles
├── Each article links to detail page
├── Archive view
└── Links to: Home, Issues, Shop, Volunteer, About

ARTICLE DETAIL (/news/[id]) - Individual Article
├── Full article with featured image
├── Share buttons
├── Related articles
└── Links to: Back to News, Home

VOLUNTEER (/volunteer) - Opportunities
├── Mission statement
├── Opportunity cards
├── Sign up buttons
└── Links to: Home, Issues, Shop, News, About

ABOUT (/about) - About Page
├── Organization info
├── Core values
├── Leadership team
└── Links to: Home, Issues, Shop, News, Volunteer
```

## 🧭 Header Navigation

Located in `Navigation.jsx` - appears on all pages:

```
[Logo: The Sovereign Editorial]
  ├─ Issues
  ├─ Shop
  ├─ Volunteer
  ├─ News
  └─ About
[Join Us Button]
[Donate Now Button]
```

## 🔗 Footer Navigation

Located in `Footer.jsx` - appears on all pages:

```
BRAND INFO
├─ Logo & description
│
NAVIGATE
├─ Issues
├─ News
├─ The Campaign
├─ Volunteer
└─ Careers

INFORMATION
├─ Privacy Policy
├─ Terms of Service
├─ Press Kit
├─ Contact Us
└─ FAQ

BRIEFING (Newsletter)
└─ Email signup

SOCIAL
├─ Website
├─ Share
└─ Verified
```

## 📱 Responsive Behavior

### Mobile (< 640px)
- Navigation: Hamburger menu ready (code structure in place)
- Grid layout: Single column
- Product cards: Full width
- Text: Optimized font sizes

### Tablet (640px - 1024px)
- Navigation: Visible desktop nav
- Grid layout: 2-3 columns
- Product cards: 2 columns
- Full feature display

### Desktop (1024px+)
- Navigation: Full horizontal nav
- Grid layout: 3-4 columns
- Product cards: 4 columns
- Enhanced hover effects

## 🔐 Dynamic Routes

### Issues Detail
- **Route**: `/issues/[id]`
- **Example**: `/issues/1`, `/issues/2`
- **Component**: `app/issues/[id]/page.jsx`
- **Params**: `params.id` contains the ID

### Product Detail
- **Route**: `/shop/[id]`
- **Example**: `/shop/1`, `/shop/2`
- **Component**: `app/shop/[id]/page.jsx`
- **Params**: `params.id` contains the product ID

### Article Detail
- **Route**: `/news/[id]`
- **Example**: `/news/1`, `/news/2`
- **Component**: `app/news/[id]/page.jsx`
- **Params**: `params.id` contains the article ID

## 🎯 Button & Link Destinations

### Primary CTA Buttons
- "Join the Movement" → Scroll to newsletter / Join form
- "Donate Now" → Scroll to donation section
- "Read the Platform" → `/issues`
- "View Full Platform" → `/issues`
- "Add to Cart" → Shopping cart (ready for implementation)
- "Sign Up to Volunteer" → Volunteer form

### Secondary Navigation
- "Join Us" → Volunteer page
- "Donate Now" → Donation section
- All header nav links → Respective pages

## ✨ Interactive Elements

### Hover Effects Applied To
- Navigation links - color change
- Buttons - lift animation
- Product cards - scale & shadow
- Article cards - shadow & bg color change
- Images - zoom effect
- Icons - scale on hover

### Active States
- Current page nav link shows underline
- Active category shown in shop/issues headers

## 📊 Data Flow

Each page receives:
1. **Navigation Component** - Shows current route
2. **Footer Component** - Consistent branding
3. **Page Content** - Dynamic or static
4. **Children Props** - For nested routes

Example:
```jsx
<>
  <Navigation />     // Shows active route
  <main>
    {/* Page specific content */}
  </main>
  <Footer />        // Links to all pages
</>
```

## 🚀 Ready for Enhancement

The routing structure supports adding:
- ✅ Search functionality
- ✅ Filtering (by category, date, price)
- ✅ Pagination
- ✅ Related content
- ✅ Comments/reviews
- ✅ User accounts
- ✅ Wishlist/favorites
- ✅ Shopping cart persistence

---

**All routes are fully connected and ready to use!**
