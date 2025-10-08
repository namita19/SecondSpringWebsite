/* =========================
   Second Spring — Navigation + Footer (Simplified Stable)
   ========================= */

   (function () {
    // --- MARKUP ---
    const HEADER_HTML = `
      <header class="header">
        <nav class="nav container">
          <div class="nav-brand">
            <a href="index.html" class="brand-link">
              <img src="images/logos/secondspring-logo.png" alt="Second Spring Logo" class="logo" />
              <span class="brand-text">Second Spring</span>
            </a>
          </div>
          <button class="hamburger" aria-label="Toggle menu">
            <span class="bar"></span><span class="bar"></span><span class="bar"></span>
          </button>
          <ul class="nav-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="product.html">Product</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="login.html" class="btn">Start Your Journey</a></li>
          </ul>
        </nav>
      </header>
    `;
  
    const FOOTER_HTML = `
      <footer class="footer">
        <div class="container footer-content">
          <div class="footer-section">
            <h3>Second Spring</h3>
            <p>A wellness movement where women rediscover balance through modern science and ancient wisdom.</p>
            <form class="newsletter-form" action="https://namitamankad.myflodesk.com/monthly" method="post" target="_blank">
              <input type="text" name="first_name" placeholder="First name" required>
              <input type="email" name="email" placeholder="Email address" required>
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
          <div class="footer-section">
            <h4>Explore</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="product.html">Product</a></li>
              <li><a href="blog.html">Articles</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="login.html">Join the Movement</a></li>
              <li><a href="mailto:namita@namitamankad.com">Email Us</a></li>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
              <li><a href="terms-of-service.html">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Namita Mankad LLC. Second Spring. Bloom in Your Pause.</p>
        </div>
      </footer>
    `;
  
    // --- HELPERS ---
    function mount(selectorList, html) {
      for (const id of selectorList) {
        const el = document.getElementById(id);
        if (el && el.children.length === 0) {
          el.innerHTML = html;
          return el;
        }
      }
      return null;
    }
  
    // --- INIT HEADER/FOOTER ---
    function initHeaderFooter() {
      mount(["main-header", "navigation-placeholder"], HEADER_HTML);
      mount(["main-footer", "footer-placeholder"], FOOTER_HTML);
  
      // Hamburger toggle
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
        });
      }
    }
  
    // --- INIT SIDEBAR (optional) ---
    function initSidebar() {
      const sidebar = document.getElementById("blog-sidebar");
      if (!sidebar || sidebar.children.length > 0) return;
      sidebar.innerHTML = `
        <div class="sidebar-section">
          <h3>Explore Topics</h3>
          <ul class="sidebar-links">
            <li><a href="category-hormones.html">Hormones & Health</a></li>
            <li><a href="category-mindfulness.html">Mind & Body</a></li>
            <li><a href="category-nutrition.html">Nutrition</a></li>
            <li><a href="category-movement.html">Movement</a></li>
            <li><a href="category-leadership.html">Leadership & Growth</a></li>
          </ul>
        </div>
      `;
    }
  
    // --- INIT CTA (optional) ---
    function initCTA() {
      const el = document.getElementById("cta-placeholder");
      if (el && el.children.length === 0) {
        el.innerHTML = `
          <section class="cta-join">
            <h2>Join the Movement</h2>
            <p>Start your journey toward balance and renewal with Second Spring.</p>
            <a href="login.html" class="btn-green">Start Your Journey</a>
            <div class="back-to-blog">
              <a href="blog.html">← Back to Blog</a>
            </div>
          </section>
        `;
      }
    }
  
    // --- INIT FLODESK (lightweight version) ---
    function initFloDesk() {
      if (document.getElementById("flodesk-sdk")) return;
      const script = document.createElement("script");
      script.id = "flodesk-sdk";
      script.src = "https://assets.flodesk.com/universal.js";
      script.async = true;
      document.body.appendChild(script);
    }
  
    // --- RUN WHEN DOM READY ---
    document.addEventListener("DOMContentLoaded", () => {
      initHeaderFooter();
      initSidebar();
      initCTA();
      initFloDesk();
    });
  })();
  