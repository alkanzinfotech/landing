// header-component.js
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Header Styles */
        header{
          position:sticky;top:0;z-index:50;background:rgba(255,255,255,.9);
          backdrop-filter:blur(10px);
          border-bottom:1px solid rgba(15,23,42,.08)
        }
        .nav{display:flex;align-items:center;justify-content:space-between;height:70px}

        /* Website name — strong green emphasis */
        .logo{
          font-weight:900;letter-spacing:.5px;
          background:linear-gradient(90deg, var(--primary), #12a39c);
          -webkit-background-clip:text;background-clip:text;color:transparent;
          font-size:26px; line-height:1
        }

        nav ul{list-style:none;display:flex;gap:20px;margin:0;padding:0}
        nav a{
          color:var(--text);text-decoration:none;
          padding:10px 14px;border-radius:10px;
          transition:background .2s ease,color .2s ease
        }
        nav a:hover{background:#F2F6FA}
        nav a.active{color:var(--primary);background:#E9F8F6}
        .hamburger{display:none;background:none;border:none;color:var(--text);font-size:26px;cursor:pointer;z-index:100}

        /* Hover dropdown basics */
        .nav ul { position: relative; display: flex; gap: 18px; list-style: none; margin: 0; padding: 0; }
        .dropdown { position: relative; }
        .dropdown > a::after { content: " ▾"; font-size: 12px; }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%; left: 0;
          min-width: 600px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
          padding: 16px;
          z-index: 1000;
        }
        .dropdown-menu a {
          display: block;
          padding: 8px 10px;
          border-radius: 8px;
          color: inherit;
          text-decoration: none;
          white-space: nowrap;
        }
        .dropdown-menu a:hover { background: #f3f4f6; }
        .dropdown:hover .dropdown-menu { display: block; }

        /* Multi-column layout for dropdown */
        .brands-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .brands-column {
          display: flex;
          flex-direction: column;
        }
        .brands-column a {
          font-size: 14px;
          padding: 6px 8px;
        }

        /* Mobile behavior */
        @media (max-width: 900px) {
          .hamburger{display:block}
          nav ul{
            position:fixed;top:70px;left:0;right:0;background:#FFFFFF;
            border-bottom:1px solid #E1E8F2;flex-direction:column;
            padding:20px;display:none;
            height:calc(100vh - 70px);
            overflow-y:auto;
            box-shadow:0 10px 30px rgba(0,0,0,0.1);
          }
          nav ul.show{display:flex}
          
          nav ul { position: static; flex-direction: column; align-items: flex-start; }
          .dropdown { width: 100%; }
          .dropdown-menu {
            position: static;
            border: 0; box-shadow: none; padding: 4px 0 0 12px;
            display: none;
            min-width: unset;
            width: 100%;
          }
          .dropdown.show .dropdown-menu { display: block; }
          .dropdown > a::after { content: ""; }
          
          /* Single column on mobile */
          .brands-columns {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <header>
        <div class="container nav">
          <div class="logo">AlKanz InfoTech</div>
          <button class="hamburger" aria-label="Menu">☰</button>
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>

              <!-- Brands dropdown with hover -->
              <li class="dropdown">
                <a href="brands.html" aria-haspopup="true" aria-expanded="false">Brands</a>
                <div class="dropdown-menu" id="brandsDropdown">
                  <div class="brands-columns">
                    <div class="brands-column">
                      <a href="brands.html">All Brands</a>
                      <a href="yealink.html">Yealink</a>
                      <a href="Brands/poly.html">Poly</a>
                      <a href="Brands/jabra.html">Jabra</a>
                      <a href="Brands/logitech.html">Logitech</a>
                      <a href="Brands/peoplelink.html">Peoplelink</a>
                      <a href="Brands/samsung.html">Samsung</a>
                    </div>
                    <div class="brands-column">
                      <a href="Brands/lg.html">LG</a>
                      <a href="Brands/sony.html">Sony</a>
                      <a href="Brands/hp.html">HP</a>
                      <a href="Brands/dell.html">Dell</a>
                      <a href="Brands/lenovo.html">Lenovo</a>
                      <a href="Brands/jbl.html">JBL</a>
                      <a href="Brands/ahuja.html">Ahuja</a>
                    </div>
                    <div class="brands-column">
                      <a href="Brands/shure.html">Shure</a>
                      <a href="Brands/beetel.html">Beetel</a>
                      <a href="Brands/hikvision.html">Hikvision</a>
                      <a href="Brands/cp-plus.html">CP Plus</a>
                      <a href="Brands/tp-link.html">TP Link</a>
                    </div>
                  </div>
                </div>
              </li>

              <li><a href="solutions.html">Solutions</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;

    // Add mobile menu functionality
    this.initializeMobileMenu();
    this.initializeDropdowns();
  }

  initializeMobileMenu() {
    const hamburger = this.querySelector('.hamburger');
    const nav = this.querySelector('nav ul');
    
    if (hamburger && nav) {
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('show');
        hamburger.setAttribute('aria-expanded', nav.classList.contains('show'));
      });

      // Close mobile menu when clicking on a link
      this.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('show');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
          nav.classList.remove('show');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  initializeDropdowns() {
    // Handle mobile dropdown toggle
    const dropdowns = this.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const dropdownLink = dropdown.querySelector('a');
      
      dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          dropdown.classList.toggle('show');
        }
      });
    });
  }
}

customElements.define('header-component', HeaderComponent);