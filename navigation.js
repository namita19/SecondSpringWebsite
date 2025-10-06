function createNavigation() {
    return `
      <header class="header">
        <nav class="nav container">
          <div class="nav-brand">
  <a href="index.html" class="brand-link">
    <img src="images/logos/secondspring-logo.png" alt="Second Spring Logo" class="logo">
    <span class="brand-text">Second Spring</span>
  </a>
</div>
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
  }
  
  
  
  function createFooter() {
    return `
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
              <li><a href="#contact">Join the Movement</a></li>
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
  }
  
  function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', initializeNavigation);


  

  