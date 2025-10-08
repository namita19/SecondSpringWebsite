// =====================================
// Fixed Topics and Categories
// =====================================
const VALID_TOPICS = [
  "Nourish – Food & Nutrition",
  "Flow – Lifestyle Harmony",
  "Rest – Sleep & Recovery",
  "Move – Movement & Strength",
  "Thrive – Healthcare & Support",
];

const VALID_CATEGORIES = {
  "Nourish – Food & Nutrition": [
    "Hormone-Friendly Nutrition",
    "Ayurveda & TCM Food Wisdom",
    "Gut Health",
    "Functional Foods & Herbs",
    "Metabolism & Energy",
  ],
  "Flow – Lifestyle Harmony": [
    "Stress & Energy Balance",
    "Morning & Evening Rituals",
    "Emotional Regulation",
    "Work-Life Harmony",
    "Seasonal & Cycle-Based Living",
  ],
  "Rest – Sleep & Recovery": [
    "Sleep Hygiene",
    "Night Sweats & Temperature Regulation",
    "Mindful Wind-Down Practices",
    "Restorative Breathing & Meditation",
    "Sound & Music Therapy",
  ],
  "Move – Movement & Strength": [
    "Strength & Mobility",
    "Mindful Movement (Yoga, Tai Chi, Qigong)",
    "Hormone-Safe Workouts",
    "Core & Pelvic Health",
    "Somatic Movement for Emotional Release",
  ],
  "Thrive – Healthcare & Support": [
    "What to Ask Your Doctor",
    "Lab Tests & Biomarkers",
    "Hormone Therapy Options",
    "Emotional Support & Mentorship",
    "Integrative Care Approaches",
  ],
};

// =====================================
// Blog Posts Data
// =====================================
const blogPosts = [
  {
    id: 1,
    title: "Perimenopause and Exercise: What Really Works",
    topic: "Move – Movement & Strength",
    category: "Hormone-Safe Workouts",
    date: "October 3, 2025",
    image: "images/blog/Excercise_1.png",
    slug: "perimenopause-exercise-what-works",
    excerpt:
      "Perimenopause is often painted as a 'transition you just survive until menopause', but the way we move during this period can actually transform how you experience it.",
  },
  {
    id: 2,
    title:
      "Perimenopause Nutrition Tips: Eating for Energy, Balance, and Hormone Health",
    topic: "Nourish – Food & Nutrition",
    category: "Hormone-Friendly Nutrition",
    date: "October 3, 2025",
    image: "images/blog/Perimenopause Food Guidance Map.png",
    slug: "perimenopause-nutrition-tips",
    excerpt:
      "Perimenopause is a natural transition, yet it often brings symptoms that can feel anything but natural...",
  },
  {
    id: 3,
    title: "Hormone Therapy in Perimenopause: What You Need to Know",
    topic: "Thrive – Healthcare & Support",
    category: "Hormone Therapy Options",
    date: "October 3, 2025",
    image: "images/blog/Stages of Menopause Infographic.png",
    slug: "hormone-therapy-perimenopause",
    excerpt:
      "Explore the benefits, risks, and alternatives to hormone therapy for managing perimenopausal symptoms.",
  },
  {
    id: 4,
    title:
      "Sleep During Perimenopause: Finding Rest When Your Body Won't Let You",
    topic: "Rest – Sleep & Recovery",
    category: "Sleep Hygiene",
    date: "October 3, 2025",
    image: "images/blog/Sleep and Hormone Changes Flowchart.png",
    slug: "sleep-during-perimenopause",
    excerpt:
      "For many women, perimenopause brings a nightly battle with disrupted sleep. Hot flashes, night sweats, and unpredictable hormone shifts can leave you staring at the ceiling at 2 a.m.",
  },
  {
    id: 5,
    title: "Why Hot Flashes Don't Have to Rule Your Life",
    topic: "Rest – Sleep & Recovery",
    category: "Night Sweats & Temperature Regulation",
    date: "October 3, 2025",
    image: "images/blog/Hot Flash Reporting Comparison.png",
    slug: "hot-flashes-dont-rule-life",
    excerpt:
      "It begins with a rush. One moment you're fine, and the next your face is flushed, your heart is racing, and heat floods your body as if someone lit a fire under your skin.",
  },
  {
    id: 6,
    title:
      "Your Second Spring: Embracing Perimenopause with Nature's Rhythm",
    topic: "Flow – Lifestyle Harmony",
    category: "Seasonal & Cycle-Based Living",
    date: "October 3, 2025",
    image: "images/blog/Spring.png",
    slug: "second-spring-nature-rhythm",
    excerpt:
      "Our bodies are not separate from nature; they are part of it. Just as the earth moves through seasons, we too move through cycles.",
  },
  {
    id: 7,
    title:
      "The Whispers Before the Storm: Why Recognizing Perimenopause Early Changes Everything",
    topic: "Thrive – Healthcare & Support",
    category: "What to Ask Your Doctor",
    date: "October 8, 2025",
    image: "images/blog/Women_rising.png",
    slug: "whispers-before-storm",
    excerpt:
      "The signs were there all along—I just had to learn how to listen. My story started quietly. For five years, my cycles were punctual, as precise as a luxury watch.",
  },
  {
    id: 8,
    title: "Perimenopause: The Director's Cut — Mystery, Meltdowns, and Second Spring",
    topic: "Flow – Lifestyle Harmony",
    category: "Emotional Regulation",
    date: "October 8, 2025",
    image: "images/blog/Directors_cut.png",
    slug: "directors-cut",
    excerpt:
      "If your monthly cycle was the trailer—quick flashes of cravings, tears, and dramatic sighs—then perimenopause is the director's cut.",
  },
  {
    id: 9,
    title: "Second Spring Is Here: Why Peri-Menopause Deserves Better Care",
    topic: "Thrive – Healthcare & Support",
    category: "Integrative Care Approaches",
    date: "October 8, 2025",
    image: "images/blog/beginning.png",
    slug: "beginning-second-spring",
    excerpt:
      "When I first noticed my own peri-menopause symptoms—slightly late cycles, a restless night of sleep with no reason at all—I realized I was entering what many cultures beautifully call The Second Spring.",
  },
  {
    id: 10,
    title: "The Beginning of My Second Spring: How Peri-Menopause Became My Unexpected Rebirth",
    topic: "Flow – Lifestyle Harmony",
    category: "Emotional Regulation",
    date: "October 8, 2025",
    image: "images/blog/Phoenix.png",
    slug: "beginning-rebirth",
    excerpt:
      "I always thought 'second birth' sounded a little dramatic. But then again, so does waking up at 3 a.m. wide-eyed and ready to reorganize your closet—for no reason at all.",
  },
  {
    id: 11,
    title: "Perimenopause: Embracing the Gift of Your Second Spring",
    topic: "Flow – Lifestyle Harmony",
    category: "Seasonal & Cycle-Based Living",
    date: "October 8, 2025",
    image: "images/blog/Perimenopause_shifts.png",
    slug: "gift-second-spring",
    excerpt:
      "There's a season in every woman's life that is often misunderstood, but it's actually one of the most empowering times of transformation.",
  },
];

// =====================================
// Utility Functions
// =====================================
function getBlogPostsByTopic(topic) {
  if (!topic) return blogPosts;
  return blogPosts.filter(post => post.topic && post.topic.trim() === topic.trim());
}

function getTopicShortName(topic) {
  const shortNames = {
    "Nourish – Food & Nutrition": "Nourish",
    "Flow – Lifestyle Harmony": "Flow",
    "Rest – Sleep & Recovery": "Rest",
    "Move – Movement & Strength": "Move",
    "Thrive – Healthcare & Support": "Thrive",
  };
  return shortNames[topic] || topic;
}

// =====================================
// Helper Functions for Icons & Featured Text
// =====================================
function getTopicIcon(topic) {
  const icons = {
    "Nourish – Food & Nutrition": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M3 21v-5h5"></path></svg>`,
    "Flow – Lifestyle Harmony": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
    "Rest – Sleep & Recovery": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3 4-3 9-3 9 1.34 9 3z"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    "Move – Movement & Strength": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5h11v11h-11z"></path><path d="M6.5 6.5L12 12l5.5-5.5"></path><path d="M12 12l5.5 5.5"></path></svg>`,
    "Thrive – Healthcare & Support": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`
  };
  return icons[topic] || `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle></svg>`;
}

function getFeaturedText(topic) {
  const featuredTexts = {
    "Nourish – Food & Nutrition": "Discover balance through the 'Second Spring' philosophy, where renewal replaces decline, and energy flows with wisdom.",
    "Flow – Lifestyle Harmony": "Personalized daily rhythms, nutrition, and practices that restore harmony across mind, body, and hormones.",
    "Rest – Sleep & Recovery": "From symptom management to personalized insights, we merge research-backed knowledge with ancient systems to help women thrive today.",
    "Move – Movement & Strength": "Gentle activities like walking or yoga are enough on low-energy days. Strength training and cardio build resilience when energy is higher.",
    "Thrive – Healthcare & Support": "From symptom management to personalized insights, we merge research-backed knowledge with ancient systems to help women thrive today."
  };
  return featuredTexts[topic] || "Discover more insights to support your Second Spring journey.";
}

// =====================================
// Masonry Grid Rendering
// =====================================
// Load masonry posts (limited to 6 latest)
// Load masonry posts (true masonry layout, limited to 6)
// Load masonry posts (true masonry layout, limited to 6, correct links)
function loadMasonryPosts(filterTopic = null) {
  const masonryContainer = document.getElementById("masonryGrid");
  if (!masonryContainer) return;

  // Filter and limit to 6 newest posts
  let postsToShow = getBlogPostsByTopic(filterTopic)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  // Reset layout mode
  masonryContainer.classList.remove("flex-mode");

  // Render posts
  masonryContainer.innerHTML = postsToShow
    .map(
      (post) => `
      <a href="blog-${post.slug}.html" class="masonry-item" data-post-id="${post.id}">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
        <div class="masonry-content">
          <h3 class="masonry-title">${post.title}</h3>
          <p class="masonry-excerpt">${post.excerpt}</p>
          <span class="masonry-read-more">Read More →</span>
        </div>
      </a>`
    )
    .join("");

  // --- Layout logic ---
  const items = masonryContainer.querySelectorAll(".masonry-item");

  if (filterTopic && items.length <= 4) {
    // Use horizontal flex for small filtered sets
    masonryContainer.classList.add("flex-mode");
  } else {
    // Default = masonry
    masonryContainer.classList.remove("flex-mode");
  }
}




// =====================================
// All Topics Grid
// =====================================
function loadAllTopics() {
  const container = document.getElementById("allTopics");
  if (!container) return;

  container.innerHTML = VALID_TOPICS.map(topic => {
    const count = blogPosts.filter(post => post.topic === topic).length;
    const icon = getTopicIcon(topic);
    const featuredText = getFeaturedText(topic);
    const shortName = getTopicShortName(topic);

    return `
      <div class="category-box" data-topic="${topic}">
        <div class="category-icon">${icon}</div>
        <h3 class="category-title">${shortName}</h3>
        <p class="category-featured-text">${featuredText}</p>
        <div class="category-meta">
          <span class="category-count">${count} article${count !== 1 ? "s" : ""}</span>
        </div>
        <a href="blog.html?topic=${encodeURIComponent(topic)}" class="category-link">Explore</a>
      </div>
    `;
  }).join("");
}

// =====================================
// Auto Init
// =====================================
document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");
  const decodedTopic = topic ? decodeURIComponent(topic) : null;

  loadMasonryPosts(decodedTopic);
  loadAllTopics();
});
