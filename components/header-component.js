// header-component.js
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="topbar">
        <div class="container">
          <div class="topbar-links">
            <a href="tel:+916376898835">📞 +91 63768 98835</a>
            <a href="mailto:alkanzinfotech@gmail.com">✉️ alkanzinfotech@gmail.com</a>
          </div>
          <div class="topbar-links">
            <span>Mon–Sat, 10:00–19:00 · Pan-India Service</span>
          </div>
        </div>
      </div>
      <header>
        <div class="container nav">
          <a href="index.html" class="logo">
            <span class="logo-mark">AK</span>
            AlKanz InfoTech
          </a>
          <button class="hamburger" aria-label="Menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div class="nav-inner">
            <nav>
              <ul>
                <li><a href="index.html">Home</a></li>

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
            <a href="contact.html" class="btn sm nav-cta">Get a Quote</a>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
