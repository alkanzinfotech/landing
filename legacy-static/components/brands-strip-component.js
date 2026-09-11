// components/brands-strip-component.js
class BrandsStripComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const brands = [
      ['yealink.html', 'Yealink', 'Yealink Logo.png'],
      ['Brands/poly.html', 'Poly', 'Poly Logo.png'],
      ['Brands/jabra.html', 'Jabra', 'Jabra Logo.png'],
      ['Brands/logitech.html', 'Logitech', 'Logitech Logo.png'],
      ['Brands/peoplelink.html', 'Peoplelink', 'Peoplelink Logo.png'],
      ['Brands/samsung.html', 'Samsung', 'Samsung Logo.png'],
      ['Brands/lg.html', 'LG', 'LG Logo.png'],
      ['Brands/sony.html', 'Sony', 'Sony Logo.png'],
      ['Brands/hp.html', 'HP', 'HP Logo.png'],
      ['Brands/dell.html', 'Dell', 'Dell Logo.png'],
      ['Brands/lenovo.html', 'Lenovo', 'Lenovo Logo.png'],
      ['Brands/jbl.html', 'JBL', 'Jbl Logo.png'],
      ['Brands/ahuja.html', 'Ahuja', 'Ahuja Logo.png'],
      ['Brands/shure.html', 'Shure', 'Shure Logo.png'],
      ['Brands/beetel.html', 'Beetel', 'Beetel Logo.png'],
      ['Brands/hikvision.html', 'Hikvision', 'Hikvision Logo.png'],
      ['Brands/cp-plus.html', 'CP Plus', 'CP Plus Logo.png'],
      ['Brands/tp-link.html', 'TP Link', 'TP Link Logo.png'],
    ];

    const renderLogo = ([href, label, file]) =>
      `<a class="brand-chip" href="${href}" aria-label="${label}"><img src="images/brands/${file}" alt="${label}" loading="lazy"></a>`;

    const mid = Math.ceil(brands.length / 2);
    const rowA = brands.slice(0, mid);
    const rowB = brands.slice(mid);

    const trackA = rowA.map(renderLogo).join('') + rowA.map(renderLogo).join('');
    const trackB = rowB.map(renderLogo).join('') + rowB.map(renderLogo).join('');

    this.innerHTML = `
      <section class="section tight">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow">Trusted Partners</span>
            <h2>Brands We Work With</h2>
            <p>Genuine products, full warranties, and certified installation from the industry's leading manufacturers.</p>
          </div>
        </div>
        <div class="brand-marquee">
          <div class="brand-track">${trackA}</div>
        </div>
        <div class="brand-marquee reverse">
          <div class="brand-track">${trackB}</div>
        </div>
      </section>
    `;
  }
}

customElements.define('brands-strip-component', BrandsStripComponent);
