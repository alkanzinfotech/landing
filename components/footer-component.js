// components/footer-component.js
class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Footer Styles */
        footer{
          border-top:1px solid #E1E8F2;
          background:#FFFFFF;
          padding: 70px 0;
        }
        .footer-grid{
          display:grid;
          grid-template-columns:2fr 1fr 1fr;
          gap:24px;
          max-width: var(--container);
          margin: 0 auto;
          padding: 0 20px;
        }
        footer a{
          color: var(--secondary);
          text-decoration:none;
          transition: color .2s ease;
        }
        footer a:hover{
          color: var(--secondary-700);
        }
        footer h3, footer h4 {
          margin: 0 0 16px 0;
          color: var(--text);
        }
        footer h3.logo {
          font-weight:900;
          letter-spacing:.5px;
          background:linear-gradient(90deg, var(--primary), #12a39c);
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          font-size:26px;
          line-height:1;
          margin-bottom: 12px;
        }
        footer p {
          margin: 8px 0;
          line-height: 1.5;
        }
        footer .muted {
          color: var(--muted);
          font-size: 14px;
        }
        footer strong {
          color: var(--text);
        }
        
        /* Badge styles for footer */
        .badge{
          display: inline-block;
          padding:6px 10px;
          border-radius:999px;
          background:#F2F6FB;
          color:var(--secondary);
          border:1px solid #E4E8EF;
          font-size:12px;
          margin-right: 8px;
          margin-bottom: 8px;
        }

        /* Footer Responsive */
        @media (max-width: 900px){
          .footer-grid{
            grid-template-columns:1fr;
            gap: 32px;
          }
          footer {
            padding: 50px 0;
          }
        }

        @media (max-width: 600px){
          footer {
            padding: 40px 0;
          }
          .footer-grid {
            gap: 24px;
          }
        }
      </style>

      <footer class="section">
        <div class="container footer-grid">
          <div>
            <h3 class="logo">AlKanz InfoTech</h3>
            <p class="muted">Professional conference room and security deployments—camera bars, displays, speakers, microphones, control & CCTV.</p>
            <div style="margin-top:16px;">
              <span class="badge">Certified Technicians</span>
              <span class="badge">Pan-India</span>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p><a href="about.html">About</a></p>
            <p><a href="brands.html">Brands</a></p>
            <p><a href="solutions.html">Solutions</a></p>
            <p><a href="contact.html">Contact</a></p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><strong>Phone:</strong> +91 63768 98835</p>
            <p><strong>Email:</strong> alkanzinfotech@gmail.com</p>
            <p><strong>Address:</strong> UNT NO - 2, 4TH FLOOR, A WING, TIME SQUARE BUILDING, MAROL, NILKANTH PARK, ANDHERI (E), MUMBAI, 400059</p>
            <small class="muted">© 2025 AlKanz Infotech • AVSI. All rights reserved.</small>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);