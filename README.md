# MovieFlex — README

MovieFlex is a modern, responsive frontend streaming UI concept inspired by popular video-on-demand platforms, providing an immersive entertainment catalog spanning movies, TV shows, K-dramas, C-dramas, and anime[cite: 1, 2].

---

## 🚀 Features

* **Dynamic Hero Showcase**: Features a rotating carousel of spotlight titles with smooth transitions, detailed metadata, and direct playback or info actions[cite: 1, 2].
* **Comprehensive Content Catalog**: Organized into categorized shelves including Trending Now, Popular Movies, Binge-Worthy TV Shows, K-Dramas, C-Dramas, and the Anime Universe[cite: 1, 2].
* **Instant Title Search**: Real-time filtering across titles, genres, years, types, and descriptions[cite: 1, 2].
* **Personal "My List"**: Save and remove your favorite titles locally using browser `localStorage`[cite: 1, 2].
* **Interactive Modal View**: Deep-dive into individual title details, high-resolution backdrops, ratings, and release years[cite: 1, 2].
* **Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports with smooth touch scrolling and keyboard support (`ESC` key to close modals)[cite: 1, 2, 3].

---

## 🛠️ Tech Stack

* **HTML5**: Semantic document structure and accessibility attributes[cite: 1].
* **CSS3**: Modern styling utilizing CSS Custom Properties (Variables), Flexbox, grid properties, fluid typography (`clamp`), and responsive media queries[cite: 3].
* **JavaScript (ES6+)**: Dynamic DOM manipulation, local storage integration, timer-based hero rotators, and responsive event listeners[cite: 2].
* **External Assets**: High-resolution posters and backdrops provided via TMDB image CDN and Unsplash[cite: 1, 2].

---

## 📂 Project Structure

```text
├── index.html    # Main HTML layout, navigation, hero banner, modal templates, and shelf containers
├── style.css     # Complete visual styling, theme variables, layout grid rules, and responsive breakpoints
└── script.js     # Data store, state management, search filtering, carousel logic, and local storage handlers
