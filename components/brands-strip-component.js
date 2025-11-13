// components/brands-strip-component.js
class BrandsStripComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="section">
        <div class="container">
          <h2>All Brands We Work With</h2>
          <p class="muted">Click any brand to open its dedicated page.</p>

          <!-- Clickable logos link to separate .html pages per brand -->
          <div class="brand-strip card pad" style="grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">
            <a class="brand-card" href="yealink.html" aria-label="Yealink">
              <img src="images/brands/Yealink Logo.png" alt="Yealink" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/poly.html" aria-label="Poly">
              <img src="images/brands/Poly Logo.png" alt="Poly" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/jabra.html" aria-label="Jabra">
              <img src="images/brands/Jabra Logo.png" alt="Jabra" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/logitech.html" aria-label="Logitech">
              <img src="images/brands/Logitech Logo.png" alt="Logitech" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/peoplelink.html" aria-label="Peoplelink">
              <img src="images/brands/Peoplelink Logo.png" alt="Peoplelink" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/samsung.html" aria-label="Samsung">
              <img src="images/brands/Samsung Logo.png" alt="Samsung" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/lg.html" aria-label="LG">
              <img src="images/brands/LG Logo.png" alt="LG" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/sony.html" aria-label="Sony">
              <img src="images/brands/Sony Logo.png" alt="Sony" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/hp.html" aria-label="HP">
              <img src="images/brands/HP Logo.png" alt="HP" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/dell.html" aria-label="Dell">
              <img src="images/brands/Dell Logo.png" alt="Dell" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/lenovo.html" aria-label="Lenovo">
              <img src="images/brands/Lenovo Logo.png" alt="Lenovo" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/jbl.html" aria-label="JBL">
              <img src="images/brands/Jbl Logo.png" alt="JBL" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/ahuja.html" aria-label="Ahuja">
              <img src="images/brands/Ahuja Logo.png" alt="Ahuja" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/shure.html" aria-label="Shure">
              <img src="images/brands/Shure Logo.png" alt="Shure" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/beetel.html" aria-label="Beetel">
              <img src="images/brands/Beetel Logo.png" alt="Beetel" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/hikvision.html" aria-label="Hikvision">
              <img src="images/brands/Hikvision Logo.png" alt="Hikvision" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/cp-plus.html" aria-label="CP Plus">
              <img src="images/brands/CP Plus Logo.png" alt="CP Plus" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
            <a class="brand-card" href="Brands/tp-link.html" aria-label="TP Link">
              <img src="images/brands/TP Link Logo.png" alt="TP Link" style="max-width:160px;max-height:64px;object-fit:contain;">
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('brands-strip-component', BrandsStripComponent);