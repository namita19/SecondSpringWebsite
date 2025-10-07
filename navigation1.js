/* =========================
   Second Spring — Navigation, Footer, Sidebar, FloDesk (safe)
   ========================= */

   (function () {
    /* -------- Markup -------- */
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
  
    const SIDEBAR_HTML = `
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
  
    const CTA_HTML = `
      <section class="cta-join">
        <h2>Join the Movement</h2>
        <p>Start your journey toward balance and renewal with Second Spring.</p>
        <a href="login.html" class="btn-green">Start Your Journey</a>
        <div class="back-to-blog">
          <a href="blog.html">← Back to Blog</a>
        </div>
      </section>
    `;
  
    /* -------- Helpers -------- */
    function mount(targetIds, html) {
      for (const id of targetIds) {
        const el = document.getElementById(id);
        if (el) {
          el.innerHTML = html;
          return el;
        }
      }
      return null;
    }
  
    /* -------- Init Header/Footer -------- */
    function initHeaderFooter() {
      mount(["main-header", "navigation-placeholder"], HEADER_HTML);
      mount(["main-footer", "footer-placeholder"], FOOTER_HTML);
  
      // mobile toggle (safe if exists)
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
        });
      }
    }
  
    /* -------- Blog Sidebar -------- */
    function initSidebar() {
      const sidebar = document.getElementById("blog-sidebar");
      if (sidebar && sidebar.children.length === 0) sidebar.innerHTML = SIDEBAR_HTML;
    }
  
    /* -------- CTA -------- */
    function initCTA() {
      const cta = document.getElementById("cta-placeholder");
      if (cta && cta.children.length === 0) cta.innerHTML = CTA_HTML;
    }
  
    /* -------- FloDesk (no inline scripts; won’t block header/footer) -------- */
    function initFloDesk() {
      const fdHost = document.getElementById("fd-placeholder");
      if (!fdHost) return;
  
      const formId = "67e1ed35ef9d1ced7c8c3e7d";
      fdHost.innerHTML = `
        <section class="newsletter-signup">
          <h2>Stay Connected</h2>
          <p>Get holistic insights, stories, and guidance on navigating your Second Spring with balance and clarity.</p>
          <div id="fd-form-${formId}" class="fd-form"></div>
        </section>
      `;
  
      const run = () => {
        try {
          if (window.fd) {
            window.fd("form", {
              formId,
              containerEl: `#fd-form-${formId}`,
            });
          }
        } catch (e) {
          console.warn("FloDesk init failed:", e);
        }
      };
  
      if (!document.getElementById("flodesk-sdk")) {
        const s = document.createElement("script");
        s.id = "flodesk-sdk";
        s.src = "https://assets.flodesk.com/universal.js";
        s.async = true;
        s.onload = run;
        s.onerror = () => console.warn("FloDesk script failed to load");
        document.body.appendChild(s);
      } else {
        run();
      }
    }
  
    /* -------- DOM Ready -------- */
    document.addEventListener("DOMContentLoaded", function () {
      initHeaderFooter(); // always first (so header/footer never “disappear”)
      initSidebar();
      initCTA();
      initFloDesk();      // runs last; errors won’t stop the rest
    });
  })();
  