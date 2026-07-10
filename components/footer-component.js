// components/footer-component.js
class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-top">
            <div>
              <a href="index.html" class="logo">
                <span class="logo-mark">AK</span>
                AlKanz InfoTech
              </a>
              <p class="foot-desc">Professional conference room and security deployments — camera bars, displays, speakers, microphones, control systems & CCTV, designed and installed end-to-end.</p>
              <div class="foot-badges">
                <span class="badge">Certified Technicians</span>
                <span class="badge">Pan-India</span>
              </div>
              <div class="social-row">
                <a class="social-icon" href="#" aria-label="LinkedIn">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
                </a>
                <a class="social-icon" href="#" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2M7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75A1.25 1.25 0 0 1 17.25 5.5M12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7M12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9Z"/></svg>
                </a>
                <a class="social-icon" href="#" aria-label="YouTube">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15L15.19 12L10 9V15M21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Company</h4>
              <div class="foot-links">
                <a href="about.html">About Us</a>
                <a href="brands.html">Brands</a>
                <a href="solutions.html">Solutions</a>
                <a href="contact.html">Contact</a>
              </div>
            </div>
            <div>
              <h4>Solutions</h4>
              <div class="foot-links">
                <a href="solutions.html">Meeting Rooms</a>
                <a href="solutions.html">Auditoriums</a>
                <a href="solutions.html">Training Rooms</a>
                <a href="solutions.html">CCTV & Access</a>
              </div>
            </div>
            <div>
              <h4>Get in Touch</h4>
              <div class="foot-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.75 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/></svg>
                <span>+91 63768 98835</span>
              </div>
              <div class="foot-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z"/></svg>
                <span>alkanzinfotech@gmail.com</span>
              </div>
              <div class="foot-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9A2.5 2.5 0 0 1 12 11.5Z"/></svg>
                <span>Unit 2, 4th Floor, A Wing, Time Square Building, Marol, Andheri (E), Mumbai 400059</span>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <span>© ${year} AlKanz Infotech · AVSI. All rights reserved.</span>
            <span>Built with care for meeting rooms that just work.</span>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
