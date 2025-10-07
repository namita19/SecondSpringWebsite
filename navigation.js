/* =========================
   Second Spring — Navigation, Footer, Sidebar, FloDesk (Final Stable)
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
            
            <!-- Newsletter Signup Form -->
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
  
    // --- HELPERS ---
    function mount(idList, html) {
      for (const id of idList) {
        const el = document.getElementById(id);
        if (el && el.children.length === 0) {
          el.innerHTML = html;
          return el;
        }
      }
      return null;
    }
  
    // --- HEADER/FOOTER ---
    function initHeaderFooter() {
      mount(["main-header", "navigation-placeholder"], HEADER_HTML);
      mount(["main-footer", "footer-placeholder"], FOOTER_HTML);

      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
        });
      }

      // Footer form is now a simple HTML form, no initialization needed
    }
  
    // --- CTA ---
    function initCTA() {
      const el = document.getElementById("cta-placeholder");
      if (el && el.children.length === 0) el.innerHTML = CTA_HTML;
    }
  
    // --- SIDEBAR ---
    function initSidebar() {
      const sidebar = document.getElementById("blog-sidebar");
      if (sidebar && sidebar.children.length === 0) sidebar.innerHTML = SIDEBAR_HTML;
    }
  
    // --- FLODESK (Final Stable Version) ---
    function initFloDesk() {
      const formId = "67e1ed35ef9d1ced7c8c3e7d";

      // Handle main newsletter signup placeholder
      const el = document.getElementById("fd-placeholder");
      if (el) {
        el.innerHTML = `
          <section class="newsletter-signup">
            <h2>Stay Connected</h2>
            <p>Get holistic insights, stories, and guidance on navigating your Second Spring with balance and clarity.</p>
            <div id="fd-form-${formId}" class="fd-form"></div>
            <a href="#" class="btn btn-join-movement">Join the Movement</a>
          </section>
        `;
      }

      // If FloDesk script isn't loaded yet, load it
      if (!document.getElementById("flodesk-sdk")) {
        const script = document.createElement("script");
        script.id = "flodesk-sdk";
        script.src = "https://assets.flodesk.com/universal.js";
        script.async = true;
        script.onload = () => {
          // initialize main form AFTER script is ready
          if (window.fd) {
            if (document.getElementById(`fd-form-${formId}`)) {
              window.fd("form", {
                formId,
                containerEl: `#fd-form-${formId}`,
              });
            }
          }
        };
        document.body.appendChild(script);
      } else if (window.fd) {
        // if already loaded, init immediately
        if (document.getElementById(`fd-form-${formId}`)) {
          window.fd("form", {
            formId,
            containerEl: `#fd-form-${formId}`,
          });
        }
      }
    }

    // --- FOOTER FLODESK ---
    function initFooterFloDesk() {
      const formId = "67e1ed35ef9d1ced7c8c3e7d";
      const footerFormEl = document.getElementById(`fd-form-footer-${formId}`);
      
      if (footerFormEl) {
        // Try multiple times to initialize the form
        let attempts = 0;
        const maxAttempts = 10;
        
        function tryInit() {
          attempts++;
          if (window.fd) {
            console.log("Initializing footer FloDesk form (attempt " + attempts + ")");
            window.fd("form", {
              formId,
              containerEl: `#fd-form-footer-${formId}`,
            });
          } else if (attempts < maxAttempts) {
            console.log("FloDesk not ready, retrying in 500ms (attempt " + attempts + ")");
            setTimeout(tryInit, 500);
          } else {
            console.log("FloDesk failed to load after " + maxAttempts + " attempts");
          }
        }
        
        tryInit();
      }
    }
  
    // --- DOM READY ---
    document.addEventListener("DOMContentLoaded", () => {
      initHeaderFooter();
      initSidebar();
      initCTA();
      initFloDesk(); // safe, doesn’t block anything
    });
  })();
  