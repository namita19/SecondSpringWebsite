// Blog Template System - Shared Components
// This file contains all the reusable blog post components

// BLOG STYLE GUIDE:
// - All headers/subtitles inside blog posts should use h2 unless specified otherwise
// - Main blog title uses h1
// - Section headers within content use h2
// - Subsection headers use h3 (if needed)

// Function to create the blog sidebar
function createBlogSidebar() {
    return `
        <aside class="blog-sidebar">
            <section class="search-section">
                <h3>Search Articles</h3>
                <div class="search-box">
                    <div class="search-input-container">
                        <input type="text" id="search-input" placeholder="Search by topic, category, or keyword...">
                        <button type="button" id="search-btn" class="search-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="search-suggestions" class="search-suggestions"></div>
                </div>
                <div id="search-results" class="search-results"></div>
            </section>

            <!-- Topics & Categories -->
            <section class="topics">
                <h3>Browse by Topic</h3>
                <hr class="topic-divider">
                <ul id="topics-list">
                    <li><a href="#" data-topic="Move – Movement & Strength">Move – Movement & Strength <span class="post-count">(0)</span></a></li>
                    <li><a href="#" data-topic="Rest – Sleep & Recovery">Rest – Sleep & Recovery <span class="post-count">(0)</span></a></li>
                    <li><a href="#" data-topic="Nourish – Food & Nutrition">Nourish – Food & Nutrition <span class="post-count">(0)</span></a></li>
                    <li><a href="#" data-topic="Flow – Lifestyle Harmony">Flow – Lifestyle Harmony <span class="post-count">(0)</span></a></li>
                    <li><a href="#" data-topic="Thrive – Healthcare & Support">Thrive – Healthcare & Support <span class="post-count">(0)</span></a></li>
                </ul>
            </section>

            <!-- Categories -->
            <section class="categories">
                <h3>Browse by Category</h3>
                <hr class="topic-divider">
                <ul id="categories-list">
                    <!-- Categories will be dynamically loaded -->
                </ul>
            </section>

            <!-- Recent Posts -->
            <section class="recent-posts">
                <h3>Recent Articles</h3>
                <hr class="topic-divider">
                <ul id="recent-posts-list">
                    <!-- Recent posts will be dynamically loaded -->
                </ul>
            </section>
        </aside>
    `;
}

// Function to create the related articles section
function createRelatedArticles() {
    return `
        <!-- Related Posts Section -->
        <section class="related-posts" id="related-posts">
            <div class="container">
                <div class="related-posts-header">
                    <h3>Related Articles</h3>
                    <p class="related-posts-subtitle">Discover more insights to support your Second Spring journey</p>
                </div>
                
                <div class="related-posts-grid" id="related-posts-grid">
                    <!-- Related posts will be dynamically loaded here -->
                </div>
            </div>
        </section>
    `;
}

// Function to create the main blog layout structure
function createBlogLayout(content) {
    return `
        <main class="blog-layout">
            ${createBlogSidebar()}
            
            <!-- Blog Article -->
            <article class="blog-article" id="blog-content">
                ${content}
            </article>
        </main>
        
        ${createRelatedArticles()}
    `;
}

// Function to initialize blog template functionality
function initializeBlogTemplate() {
    // Initialize sidebar functionality
    initializeSidebar();
    
    // Load related posts
    loadRelatedPosts();
    
    // Initialize search functionality
    initializeSearch();
}

// Function to load related posts (will be customized per blog post)
function loadRelatedPosts() {
    // This will be overridden by individual blog posts
    console.log('Loading related posts...');
}

// Function to initialize sidebar functionality
function initializeSidebar() {
    // Load topic counts
    loadTopicCounts();
    
    // Load categories
    loadCategories();
    
    // Load recent posts
    loadRecentPosts();
    
    // Setup topic click handlers
    setupTopicHandlers();
}

// Function to load topic counts
function loadTopicCounts() {
    const topicLinks = document.querySelectorAll('#topics-list a');
    topicLinks.forEach(link => {
        const topic = link.getAttribute('data-topic');
        const count = getBlogPostsByTopic(topic).length;
        const countSpan = link.querySelector('.post-count');
        if (countSpan) {
            countSpan.textContent = `(${count})`;
        }
    });
}

// Function to load categories
function loadCategories() {
    const categoriesList = document.getElementById('categories-list');
    if (!categoriesList) return;
    
    const categories = [
        'Hormone-Safe Workouts', 'Sleep Hygiene', 'Hormone-Friendly Nutrition',
        'Stress & Energy Balance', 'What to Ask Your Doctor'
    ];
    
    categoriesList.innerHTML = categories.map(category => {
        const count = getBlogPostsByCategory(category).length;
        return `<li><a href="blog.html?category=${encodeURIComponent(category)}">${category} <span class="post-count">(${count})</span></a></li>`;
    }).join('');
}

// Function to load recent posts
function loadRecentPosts() {
    const recentPostsList = document.getElementById('recent-posts-list');
    if (!recentPostsList) return;
    
    const recentPosts = blogPosts.slice(0, 5);
    recentPostsList.innerHTML = recentPosts.map(post => {
        return `<li><a href="blog-post.html?id=${post.id}">${post.title}</a></li>`;
    }).join('');
}

// Function to setup topic click handlers
function setupTopicHandlers() {
    const topicLinks = document.querySelectorAll('#topics-list a');
    topicLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const topic = link.getAttribute('data-topic');
            window.location.href = `blog.html?topic=${encodeURIComponent(topic)}`;
        });
    });
}

// Function to initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchBtn || !searchResults) return;
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            searchResults.innerHTML = '';
            return;
        }
        
        const results = blogPosts.filter(post => 
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.topic.toLowerCase().includes(query) ||
            (post.category && post.category.toLowerCase().includes(query))
        );
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No articles found matching your search.</p>';
        } else {
            searchResults.innerHTML = results.map(post => `
                <div class="search-result-item">
                    <h4><a href="blog-post.html?id=${post.id}">${post.title}</a></h4>
                    <p>${post.excerpt.substring(0, 100)}...</p>
                    <span class="search-result-topic">${post.topic}</span>
                </div>
            `).join('');
        }
    }
}
