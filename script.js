
const TMDB = "https://image.tmdb.org/t/p/";

const titles = [
  // MOVIES
  {
    id: "m1", title: "Interstellar", type: "movie",
    categories: ["movies", "trending", "scifi"],
    year: "2014", rating: "8.7", genre: "Sci-Fi • Adventure",
    description: "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg"
  },
  {
    id: "m2", title: "Inception", type: "movie",
    categories: ["movies", "trending", "scifi"],
    year: "2010", rating: "8.8", genre: "Sci-Fi • Thriller",
    description: "A skilled thief enters people's dreams to steal secrets, but his most ambitious mission changes everything.",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
  },
  {
    id: "m3", title: "Dune: Part Two", type: "movie",
    categories: ["movies", "trending", "scifi"],
    year: "2024", rating: "8.5", genre: "Sci-Fi • Adventure",
    description: "Paul Atreides joins Chani and the Fremen on an epic journey of destiny, danger and revenge.",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
  },
  {
    id: "m4", title: "The Batman", type: "movie",
    categories: ["movies", "action"],
    year: "2022", rating: "7.8", genre: "Action • Crime",
    description: "Gotham's masked detective follows a trail of clues that reveals corruption at the heart of his city.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
  },
  {
    id: "m5", title: "Spider-Man: No Way Home", type: "movie",
    categories: ["movies", "action", "trending"],
    year: "2021", rating: "8.0", genre: "Action • Fantasy",
    description: "Peter Parker's world turns upside down when a spell brings unexpected visitors from across the multiverse.",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg"
  },
  {
    id: "m6", title: "Avatar: The Way of Water", type: "movie",
    categories: ["movies", "scifi"],
    year: "2022", rating: "7.5", genre: "Fantasy • Adventure",
    description: "Jake Sully and his family seek refuge with Pandora's ocean people when a familiar threat returns.",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg"
  },

  // TV SHOWS
  {
    id: "s1", title: "Stranger Things", type: "show",
    categories: ["shows", "trending"],
    year: "2016", rating: "8.6", genre: "Sci-Fi • Mystery",
    description: "A group of friends in a small town uncover supernatural mysteries, secret experiments and another dimension.",
    poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
  },
  {
    id: "s2", title: "Wednesday", type: "show",
    categories: ["shows", "trending"],
    year: "2022", rating: "8.0", genre: "Mystery • Comedy",
    description: "Wednesday Addams investigates strange mysteries at Nevermore Academy while navigating her unusual school life.",
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg"
  },
  {
    id: "s3", title: "Squid Game", type: "show",
    categories: ["shows", "trending"],
    year: "2021", rating: "7.7", genre: "Thriller • Drama",
    description: "People facing financial hardship enter a mysterious competition where childhood games have unexpected stakes.",
    poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg"
  },
  {
    id: "s4", title: "The Witcher", type: "show",
    categories: ["shows", "fantasy"],
    year: "2019", rating: "7.9", genre: "Fantasy • Adventure",
    description: "A solitary monster hunter discovers that destiny keeps drawing him toward a dangerous political world.",
    poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg"
  },

  // K-DRAMAS
  {
    id: "k1", title: "Crash Landing on You", type: "kdrama",
    categories: ["kdramas", "romance", "trending"],
    year: "2019", rating: "8.7", genre: "Romance • Comedy",
    description: "A South Korean heiress accidentally lands in North Korea and meets an army officer who changes her life.",
    poster: "https://image.tmdb.org/t/p/w500/2b8jT0Y9o5W1L1XjV8Vq5nM9KqK.jpg"
  },
  {
    id: "k2", title: "Queen of Tears", type: "kdrama",
    categories: ["kdramas", "romance", "trending"],
    year: "2024", rating: "8.2", genre: "Romance • Drama",
    description: "A married couple faces a crisis that tests their relationship and forces them to rediscover what matters.",
    poster: "https://image.tmdb.org/t/p/w500/g6e7f3qLkM9dV6GJjG9KxZQ0r1B.jpg"
  },
  {
    id: "k3", title: "Business Proposal", type: "kdrama",
    categories: ["kdramas", "romance"],
    year: "2022", rating: "8.1", genre: "Romance • Comedy",
    description: "A blind date arranged to fool a CEO becomes complicated when the person across the table turns out to be her boss.",
    poster: "https://image.tmdb.org/t/p/w500/eJ1gW6KQxV2M3QZ7p8dK9yT4a5B.jpg"
  },
  {
    id: "k4", title: "True Beauty", type: "kdrama",
    categories: ["kdramas", "romance"],
    year: "2020", rating: "8.0", genre: "Romance • Coming of Age",
    description: "A teenager uses makeup to reinvent herself while learning about friendship, confidence and first love.",
    poster: "https://image.tmdb.org/t/p/w500/6h6W6G0nY8QX6b5M7N8x4j1C9pA.jpg"
  },
  {
    id: "k5", title: "Lovely Runner", type: "kdrama",
    categories: ["kdramas", "romance", "trending"],
    year: "2024", rating: "8.6", genre: "Romance • Fantasy",
    description: "A devoted fan gets an extraordinary chance to travel back in time and change the future of someone she loves.",
    poster: "https://image.tmdb.org/t/p/w500/8j5R5W5v5Q6z7F8n9D0L1K2M3P4.jpg"
  },
  {
    id: "k6", title: "All of Us Are Dead", type: "kdrama",
    categories: ["kdramas", "action"],
    year: "2022", rating: "7.5", genre: "Horror • Thriller",
    description: "Students trapped inside their school must work together when a dangerous outbreak spreads through town.",
    poster: "https://image.tmdb.org/t/p/w500/ze4lhw0oLBHYmlM2KuZjBg0Sq6H.jpg"
  },

  // C-DRAMAS
  {
    id: "c1", title: "Hidden Love", type: "cdrama",
    categories: ["cdramas", "romance", "trending"],
    year: "2023", rating: "8.8", genre: "Romance • Coming of Age",
    description: "A young woman quietly admires her brother's friend, and their connection grows as she enters adulthood.",
    poster: "https://image.tmdb.org/t/p/w500/9x7Z6K2Y4M3J8L5Q1N0V6B7C8D9.jpg"
  },
  {
    id: "c2", title: "When I Fly Towards You", type: "cdrama",
    categories: ["cdramas", "romance"],
    year: "2023", rating: "8.7", genre: "Romance • Youth",
    description: "An energetic student and a reserved classmate find friendship, growth and romance during their school years.",
    poster: "https://image.tmdb.org/t/p/w500/8K3m5Q7v2N1B9L6C4D0F5G8H2J1.jpg"
  },
  {
    id: "c3", title: "Love Between Fairy and Devil", type: "cdrama",
    categories: ["cdramas", "fantasy", "romance"],
    year: "2022", rating: "8.4", genre: "Fantasy • Romance",
    description: "An unlikely bond forms between a gentle fairy and a powerful demon with a complicated destiny.",
    poster: "https://image.tmdb.org/t/p/w500/7J4K8M2N6P1Q5R9S3T0V4W7X8Y2.jpg"
  },
  {
    id: "c4", title: "The Untamed", type: "cdrama",
    categories: ["cdramas", "fantasy"],
    year: "2019", rating: "8.8", genre: "Fantasy • Mystery",
    description: "Two cultivators uncover buried secrets and investigate mysterious events in a world of ancient clans.",
    poster: "https://image.tmdb.org/t/p/w500/5M3N8K1J7H4G9F2D6S0A3B8C1V5.jpg"
  },
  {
    id: "c5", title: "Love O2O", type: "cdrama",
    categories: ["cdramas", "romance"],
    year: "2016", rating: "7.7", genre: "Romance • Gaming",
    description: "A university student discovers that an online gaming romance can lead to an unexpected real-world connection.",
    poster: "https://image.tmdb.org/t/p/w500/4F6G8H2J1K3L5M7N9P0Q2R4S6T8.jpg"
  },

  // ANIME
  {
    id: "a1", title: "Demon Slayer", type: "anime",
    categories: ["anime", "action", "trending"],
    year: "2019", rating: "8.6", genre: "Anime • Action",
    description: "A young swordsman joins the Demon Slayer Corps in search of a cure for his sister.",
    poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg"
  },
  {
    id: "a2", title: "Attack on Titan", type: "anime",
    categories: ["anime", "action", "trending"],
    year: "2013", rating: "9.1", genre: "Anime • Dark Fantasy",
    description: "Humanity fights for survival behind enormous walls while uncovering the terrifying truth about its enemies.",
    poster: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg"
  },
  {
    id: "a3", title: "Jujutsu Kaisen", type: "anime",
    categories: ["anime", "action"],
    year: "2020", rating: "8.5", genre: "Anime • Supernatural",
    description: "A high school student enters the world of cursed spirits after an extraordinary encounter.",
    poster: "https://image.tmdb.org/t/p/w500/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg"
  },
  {
    id: "a4", title: "Your Name", type: "anime",
    categories: ["anime", "romance"],
    year: "2016", rating: "8.4", genre: "Anime • Romance",
    description: "Two teenagers mysteriously begin swapping lives and search for a connection that defies time and distance.",
    poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
  },
  {
    id: "a5", title: "Spirited Away", type: "anime",
    categories: ["anime", "fantasy"],
    year: "2001", rating: "8.6", genre: "Anime • Fantasy",
    description: "A young girl enters a strange spirit world and must find courage to rescue her parents and return home.",
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
  },
  {
    id: "a6", title: "One Piece", type: "anime",
    categories: ["anime", "action", "trending"],
    year: "1999", rating: "8.7", genre: "Anime • Adventure",
    description: "Monkey D. Luffy and his crew set sail in search of the legendary treasure known as One Piece.",
    poster: "https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg"
  }
];

const heroIds = ["m3", "s1", "k1", "c1", "a2"];
let heroIndex = 0;
let heroTimer;
let currentModalTitle = null;
let searchQuery = "";

const catalog = document.getElementById("catalog");
const hero = document.getElementById("home");
const heroTitle = document.getElementById("heroTitle");
const heroMeta = document.getElementById("heroMeta");
const heroDescription = document.getElementById("heroDescription");
const heroDots = document.getElementById("heroDots");
const heroNumber = document.getElementById("heroNumber");
const searchInput = document.getElementById("searchInput");
const searchStatus = document.getElementById("searchStatus");
const savedRow = document.getElementById("savedRow");
const emptyList = document.getElementById("emptyList");
const modal = document.getElementById("infoModal");
const toast = document.getElementById("toast");

const categoryRows = [
  { id: "trending", title: "Trending Now", match: t => t.categories.includes("trending") },
  { id: "movies", title: "Popular Movies", match: t => t.type === "movie" },
  { id: "shows", title: "Binge-Worthy TV Shows", match: t => t.type === "show" },
  { id: "kdramas", title: "K-Dramas You'll Love", match: t => t.type === "kdrama" },
  { id: "cdramas", title: "C-Dramas to Fall For", match: t => t.type === "cdrama" },
  { id: "anime", title: "Anime Universe", match: t => t.type === "anime" },
  { id: "action", title: "Action & Adventure", match: t => t.categories.includes("action") },
  { id: "romance", title: "Romance & Feel-Good Stories", match: t => t.categories.includes("romance") },
  { id: "scifi", title: "Into Another World", match: t => t.categories.includes("scifi") }
];

function imageUrl(title, size = "w500") {
  if (!title.poster) return "";
  return title.poster.replace("/w500/", `/${size}/`);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem("movieflex-list") || "[]");
  } catch {
    return [];
  }
}

function saveSaved(ids) {
  try {
    localStorage.setItem("movieflex-list", JSON.stringify(ids));
  } catch {
    showToast("Your browser could not save the list.");
  }
}

function getSaved() {
  const ids = loadSaved();
  return titles.filter(t => ids.includes(t.id));
}

function toggleSaved(id) {
  const ids = loadSaved();
  const exists = ids.includes(id);
  const updated = exists ? ids.filter(x => x !== id) : [...ids, id];
  saveSaved(updated);
  renderSaved();
  renderCatalog();
  showToast(exists ? "Removed from My List" : "Added to My List ❤️");
}

function createCard(title) {
  const card = document.createElement("article");
  card.className = "movie-card";

  const poster = document.createElement("img");
  poster.className = "movie-poster";
  poster.alt = title.title;
  poster.loading = "lazy";
  poster.src = imageUrl(title);
  poster.onerror = () => {
    poster.onerror = null;
    poster.removeAttribute("src");
    poster.alt = title.title + " — poster unavailable";
    poster.style.background =
      "linear-gradient(145deg, #7d1720, #171717 72%)";
  };

  const info = document.createElement("div");
  info.className = "card-info";

  const name = document.createElement("p");
  name.className = "card-title";
  name.textContent = title.title;

  const meta = document.createElement("p");
  meta.className = "card-meta";
  meta.textContent = `★ ${title.rating}  •  ${title.year}`;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const more = document.createElement("button");
  more.className = "round-btn";
  more.textContent = "▶";
  more.title = "View title details";
  more.setAttribute("aria-label", `View ${title.title}`);
  more.addEventListener("click", e => {
    e.stopPropagation();
    openModal(title);
  });

  const add = document.createElement("button");
  add.className = "round-btn";
  const isSaved = loadSaved().includes(title.id);
  add.textContent = isSaved ? "✓" : "+";
  add.classList.toggle("saved", isSaved);
  add.title = isSaved ? "Remove from My List" : "Add to My List";
  add.setAttribute("aria-label", add.title);
  add.addEventListener("click", e => {
    e.stopPropagation();
    toggleSaved(title.id);
  });

  actions.append(more, add);
  info.append(name, meta, actions);
  card.append(poster, info);

  card.addEventListener("click", () => openModal(title));
  return card;
}

function createShelf(row, list) {
  const shelf = document.createElement("section");
  shelf.className = "shelf";
  shelf.id = row.id;

  const heading = document.createElement("div");
  heading.className = "shelf-heading";

  const h2 = document.createElement("h2");
  h2.textContent = row.title;

  const arrow = document.createElement("span");
  arrow.className = "heading-arrow";
  arrow.textContent = "›";
  h2.append(arrow);

  const subtitle = document.createElement("span");
  subtitle.className = "shelf-subtitle";
  subtitle.textContent = `${list.length} titles`;

  heading.append(h2, subtitle);

  const wrap = document.createElement("div");
  wrap.className = "row-wrap";

  const left = document.createElement("button");
  left.className = "row-arrow left";
  left.textContent = "‹";
  left.setAttribute("aria-label", "Scroll posters left");

  const right = document.createElement("button");
  right.className = "row-arrow right";
  right.textContent = "›";
  right.setAttribute("aria-label", "Scroll posters right");

  const movieRow = document.createElement("div");
  movieRow.className = "movie-row";

  list.forEach(t => movieRow.append(createCard(t)));

  left.addEventListener("click", () => {
    movieRow.scrollBy({ left: -movieRow.clientWidth * 0.8, behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    movieRow.scrollBy({ left: movieRow.clientWidth * 0.8, behavior: "smooth" });
  });

  wrap.append(left, movieRow, right);
  shelf.append(heading, wrap);
  return shelf;
}

function renderCatalog() {
  catalog.replaceChildren();

  const query = searchQuery.trim().toLowerCase();
  let count = 0;

  categoryRows.forEach(row => {
    let list = titles.filter(row.match);

    if (query) {
      list = list.filter(t =>
        [t.title, t.genre, t.year, t.type, t.description, ...t.categories]
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
    }

    if (list.length) {
      catalog.append(createShelf(row, list));
      count += list.length;
    }
  });

  searchStatus.textContent = query
    ? `${count} matching titles shown for "${searchQuery}".`
    : "";

  if (query && count === 0) {
    searchStatus.textContent =
      `No titles found for "${searchQuery}". Try another name or category.`;
  }
}

function renderSaved() {
  savedRow.replaceChildren();
  const saved = getSaved();
  saved.forEach(t => savedRow.append(createCard(t)));
  emptyList.style.display = saved.length ? "none" : "block";
}

function setHero(index) {
  heroIndex = (index + heroIds.length) % heroIds.length;
  const title = titles.find(t => t.id === heroIds[heroIndex]);
  if (!title) return;

  const backdrop = title.backdrop || title.poster;
  hero.style.backgroundImage = backdrop
    ? `url("${backdrop}")`
    : "linear-gradient(120deg, #421016, #111)";

  heroTitle.textContent = title.title;
  heroMeta.textContent = `${title.year}  •  ★ ${title.rating}  •  ${title.genre}`;
  heroDescription.textContent = title.description;
  heroNumber.textContent =
    `${String(heroIndex + 1).padStart(2, "0")} / ${String(heroIds.length).padStart(2, "0")}`;

  heroDots.replaceChildren();

  heroIds.forEach((id, i) => {
    const dot = document.createElement("button");
    dot.className = "hero-dot" + (i === heroIndex ? " active" : "");
    dot.setAttribute("aria-label", `Show featured title ${i + 1}`);
    dot.addEventListener("click", () => {
      setHero(i);
      startHeroTimer();
    });
    heroDots.append(dot);
  });
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => setHero(heroIndex + 1), 6000);
}

function openModal(title) {
  currentModalTitle = title;
  document.getElementById("modalTitle").textContent = title.title;
  document.getElementById("modalCategory").textContent =
    title.type.toUpperCase() + "  •  MOVIEFLEX";
  document.getElementById("modalMeta").textContent =
    `${title.year}  •  ★ ${title.rating}  •  ${title.genre}`;
  document.getElementById("modalDescription").textContent = title.description;

  const img = document.getElementById("modalImage");
  img.alt = title.title;
  img.src = imageUrl(title, "w780");
  img.onerror = () => {
    img.onerror = null;
    img.removeAttribute("src");
    img.style.height = "180px";
  };

  const saved = loadSaved().includes(title.id);
  document.getElementById("modalSave").textContent =
    saved ? "✓ In My List" : "＋ My List";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", e => {
  searchQuery = e.target.value;
  renderCatalog();
});

document.getElementById("heroPrev").addEventListener("click", () => {
  setHero(heroIndex - 1);
  startHeroTimer();
});

document.getElementById("heroNext").addEventListener("click", () => {
  setHero(heroIndex + 1);
  startHeroTimer();
});

document.getElementById("playHero").addEventListener("click", () => {
  const title = titles.find(t => t.id === heroIds[heroIndex]);
  showToast(`Demo preview: ${title.title}. No video is attached yet.`);
});

document.getElementById("moreHero").addEventListener("click", () => {
  const title = titles.find(t => t.id === heroIds[heroIndex]);
  openModal(title);
});

document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);

document.getElementById("modalPlay").addEventListener("click", () => {
  if (currentModalTitle) {
    showToast(`Demo preview: ${currentModalTitle.title}. No video is attached yet.`);
  }
});

document.getElementById("modalSave").addEventListener("click", () => {
  if (!currentModalTitle) return;
  toggleSaved(currentModalTitle.id);
  document.getElementById("modalSave").textContent =
    loadSaved().includes(currentModalTitle.id) ? "✓ In My List" : "＋ My List";
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 40);
});

renderCatalog();
renderSaved();
setHero(0);
startHeroTimer();
