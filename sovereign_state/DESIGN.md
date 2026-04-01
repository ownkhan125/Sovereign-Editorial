# Design System Document: The Sovereign Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Statesman"**
This design system moves away from the cluttered, aggressive aesthetics of traditional political campaigning toward a "High-End Editorial" experience. It treats digital space like a premium broadsheet or a gallery exhibition—authoritative, calm, and deeply intentional. 

The system rejects the "template" look by favoring **intentional asymmetry** and **tonal layering**. We break the rigid grid by allowing imagery and typography to overlap, creating a sense of depth and movement. Large, sweeping whitespace is not "empty"—it is a functional tool used to emphasize the weight of the message and the trustworthiness of the institution.

## 2. Colors & Surface Philosophy
The palette is rooted in deep naval tones and a "State Red" that feels earned, not shouted. 

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section should sit directly against a `surface` background to create a soft, natural break.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper or frosted glass. Use the `surface-container` tiers to define importance:
*   **Background (`#fbf9f9`):** The base canvas.
*   **Surface Container Lowest (`#ffffff`):** Reserved for high-priority floating cards or focal points.
*   **Surface Container High (`#e9e8e7`):** Used for inset secondary content or "the background of the background."

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" appearance:
*   **Glassmorphism:** Use semi-transparent versions of `surface-container-lowest` with a `backdrop-blur` (12px–20px) for navigation bars or floating action panels.
*   **Signature Textures:** Apply a subtle linear gradient to main CTAs or Hero backgrounds (e.g., `primary` transitioning to `primary_container`). This provides a visual "soul" and professional polish that flat fills lack.

## 3. Typography
The typographic voice is a dialogue between tradition (`Newsreader`) and modern efficiency (`Public Sans`).

*   **Display & Headlines (Newsreader):** Our "Stately Serif." Use `display-lg` for mission statements. The high stroke contrast conveys authority. Use tight letter-spacing (-0.02em) for large headers to feel modern.
*   **Titles & Labels (Public Sans):** Our "Functional Sans." Used for navigation, UI labels, and sub-headers. It provides a clean, neutral counter-balance to the serif.
*   **Body (Public Sans):** Optimized for long-form policy reading. Ensure `body-lg` is used for primary statements to maintain an "Editorial" feel.

## 4. Elevation & Depth
Hierarchy is achieved through **Tonal Layering** rather than structural lines.

*   **The Layering Principle:** Stack `surface-container-lowest` cards on `surface-container-low` backgrounds. This creates a soft, natural lift without the "heaviness" of shadows.
*   **Ambient Shadows:** When a float is required (e.g., a primary action menu), use extra-diffused shadows. 
    *   *Shadow Color:* Tinted with `on_surface` (at 4–8% opacity).
    *   *Blur:* 30px to 60px. Avoid "drop shadows"; seek "ambient glows."
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` at **15% opacity**. Never use 100% opaque borders.

## 5. Components

### Buttons
*   **Primary:** Uses a subtle gradient of `primary` to `primary_container`. **Roundedness:** `sm` (0.125rem) for a sharp, architectural look.
*   **Secondary:** `surface_container_lowest` with a "Ghost Border."
*   **Hover State:** A subtle 2px vertical lift and a shift in gradient intensity.

### Cards & Lists
*   **Rule:** Forbid divider lines. Use `vertical whitespace` (from the Spacing Scale, typically `8` or `10`) to separate items.
*   **Layout:** Use asymmetrical padding (e.g., `padding-left: 2.75rem`, `padding-right: 1.4rem`) to create a bespoke, non-symmetrical editorial feel.

### Input Fields
*   **Style:** Minimalist. Only a bottom-weighted `outline_variant` (20% opacity). On focus, the line transforms into the `secondary` (Red) color with a smooth 300ms transition.
*   **Labels:** Always use `label-md` in `on_surface_variant` for a refined, professional look.

### The "Policy Card" (Special Component)
A large-format card using `surface_container_low`. It should feature an overlapping `Newsreader` headline that breaks the top boundary of the card by `2.75rem`, creating an intentional "Editorial" layered effect.

## 6. Motion & Animation Style Guide
Animation must feel "weighty" and purposeful—avoiding bouncy or "app-like" transitions.

*   **Page Transitions:** Use a "Staggered Fade-In." Elements should slide up by `0.7rem` while fading in, with a `0.1s` delay between the headline, the body text, and the CTA.
*   **Hover Effects:** When hovering over interactive containers, use a color-bleed effect. The background color should shift from `surface` to `surface_container_high` using a `cubic-bezier(0.4, 0, 0.2, 1)` easing over `400ms`.
*   **Image Reveals:** Large hero images should use a "Scale-and-Fade" reveal. Start at `1.05` scale and ease into `1.0` scale over `1200ms` as the user scrolls.

## 7. Do's and Don'ts

*   **DO:** Use generous whitespace (Scale `16` and `20`) to separate major thematic sections.
*   **DO:** Mix font weights. Pair a `headline-lg` (Newsreader) with a `label-md` (Public Sans) all-caps subheader.
*   **DON'T:** Use a 1px divider to separate news articles. Use a background shift to `surface_container_low`.
*   **DON'T:** Use standard "Blue" for links. Use `secondary` (Red) for inline links to provide a sophisticated "Redline" editorial feel.
*   **DON'T:** Use fully rounded (pill) buttons. This system relies on the architectural "sharpness" of the `sm` or `md` corner scale to maintain an authoritative tone.

---
*End of Document*