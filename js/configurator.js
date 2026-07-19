// js/configurator.js — Room Configurator wizard
(function () {
  const STEPS = [
    {
      key: 'roomSize',
      title: 'What <b>room size</b> are you setting up?',
      type: 'image',
      options: [
        { value: 'huddle', label: 'Huddle Room', sub: '(2–4 pax)', img: 'images/solutions/huddle room.webp' },
        { value: 'small', label: 'Small Meeting Room', sub: '(4–6 pax)', img: 'images/solutions/small meetingroom.webp' },
        { value: 'medium', label: 'Boardroom', sub: '(6–12 pax)', img: 'images/Solutions/Meeting Room.webp' },
        { value: 'large', label: 'Auditorium', sub: '(12+ pax)', img: 'images/solutions/Auditoriums.jpg' },
      ],
    },
    {
      key: 'platform',
      title: 'What is your primary <b>video conferencing platform</b>?',
      type: 'icon',
      options: [
        { value: 'teams', label: 'Microsoft Teams', icon: 'video' },
        { value: 'zoom', label: 'Zoom Rooms', icon: 'video' },
        { value: 'meet', label: 'Google Meet', icon: 'video' },
        { value: 'byod', label: 'BYOD / Any', icon: 'laptop' },
      ],
    },
    {
      key: 'camera',
      title: 'Choose your <b>camera bar</b> brand',
      type: 'logo',
      options: [
        { value: 'yealink', label: 'Yealink', img: 'images/brands/Yealink Logo.png' },
        { value: 'poly', label: 'Poly', img: 'images/brands/Poly Logo.png' },
        { value: 'jabra', label: 'Jabra', img: 'images/brands/Jabra Logo.png' },
        { value: 'logitech', label: 'Logitech', img: 'images/brands/Logitech Logo.png' },
        { value: 'peoplelink', label: 'Peoplelink', img: 'images/brands/Peoplelink Logo.png' },
      ],
    },
    {
      key: 'display',
      title: 'Choose your <b>display</b> provider',
      type: 'logo',
      options: [
        { value: 'samsung', label: 'Samsung', img: 'images/brands/Samsung Logo.png' },
        { value: 'lg', label: 'LG', img: 'images/brands/LG Logo.png' },
        { value: 'sony', label: 'Sony', img: 'images/brands/Sony Logo.png' },
      ],
    },
    {
      key: 'audio',
      title: 'Choose your <b>audio</b> provider',
      type: 'logo',
      options: [
        { value: 'shure', label: 'Shure', img: 'images/brands/Shure Logo.png' },
        { value: 'ahuja', label: 'Ahuja', img: 'images/brands/Ahuja Logo.png' },
        { value: 'jbl', label: 'JBL', img: 'images/brands/Jbl Logo.png' },
      ],
    },
    {
      key: 'security',
      title: 'Would you like to add <b>CCTV & access control</b>?',
      type: 'logo',
      options: [
        { value: 'hikvision', label: 'Hikvision', img: 'images/brands/Hikvision Logo.png' },
        { value: 'cpplus', label: 'CP Plus', img: 'images/brands/CP Plus Logo.png' },
        { value: 'none', label: 'Not Needed', icon: 'close' },
      ],
    },
    { key: 'contact', title: 'Almost there — tell us where to send your quote', type: 'form' },
  ];

  const ICONS = {
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3z"/></svg>',
    laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="11" rx="1"/><path d="M2 19h20"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  };

  const LABELS = {
    roomSize: 'Room Size',
    platform: 'VC Platform',
    camera: 'Camera Bar',
    display: 'Display',
    audio: 'Audio',
    security: 'Security Add-on',
  };

  class RoomConfigurator {
    constructor(root) {
      this.root = root;
      this.stepIndex = 0;
      this.answers = {};
      this.started = false;
      this.render();
    }

    get totalSteps() { return STEPS.length; }

    start() {
      this.started = true;
      this.stepIndex = 0;
      this.render();
    }

    restart() {
      this.started = false;
      this.stepIndex = 0;
      this.answers = {};
      this.render();
    }

    selectOption(step, value) {
      this.answers[step.key] = value;
      this.updateNextState();
      this.renderOptionsOnly(step);
    }

    canAdvance() {
      const step = STEPS[this.stepIndex];
      if (!step) return false;
      if (step.type === 'form') return true;
      return !!this.answers[step.key];
    }

    updateNextState() {
      const nextBtn = this.root.querySelector('.config-next');
      if (nextBtn) nextBtn.disabled = !this.canAdvance();
    }

    next() {
      if (!this.canAdvance()) return;
      const step = STEPS[this.stepIndex];
      if (step.type === 'form') {
        this.submit();
        return;
      }
      if (this.stepIndex < STEPS.length - 1) {
        this.stepIndex++;
        this.render();
      }
    }

    back() {
      if (this.stepIndex > 0) {
        this.stepIndex--;
        this.render();
      } else {
        this.started = false;
        this.render();
      }
    }

    async submit() {
      const form = this.root.querySelector('#configContactForm');
      const nameEl = form.querySelector('[name="name"]');
      const phoneEl = form.querySelector('[name="phone"]');
      const emailEl = form.querySelector('[name="email"]');
      const companyEl = form.querySelector('[name="city"]');

      if (!nameEl.value.trim() || !phoneEl.value.trim() || !emailEl.value.trim()) {
        this.showFormMessage('Please fill in your name, phone, and email.', 'error');
        return;
      }

      this.answers.contact = {
        name: nameEl.value.trim(),
        phone: phoneEl.value.trim(),
        email: emailEl.value.trim(),
        company: companyEl.value.trim(),
      };

      const submitBtn = this.root.querySelector('.config-next');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        if (window.emailjs) {
          if (!this._emailInit) {
            window.emailjs.init({ publicKey: 'w2RNvrnXNfAwhUOPU' });
            this._emailInit = true;
          }
          const messageBody = this.buildSummaryText();
          const hiddenMessage = form.querySelector('[name="message"]');
          if (hiddenMessage) hiddenMessage.value = messageBody;
          await window.emailjs.sendForm('service_teli5hn', 'template_6b6a54x', form, 'w2RNvrnXNfAwhUOPU');
        }
        this.showResult();
      } catch (err) {
        this.showFormMessage('Sorry, something went wrong sending your details. Please try again or call us directly.', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }

    buildSummaryText() {
      const lines = ['Room Configurator submission:'];
      STEPS.forEach((step) => {
        if (step.type === 'form') return;
        const val = this.answers[step.key];
        const opt = step.options.find((o) => o.value === val);
        lines.push(`${LABELS[step.key]}: ${opt ? opt.label : '—'}`);
      });
      return lines.join('\n');
    }

    showFormMessage(message, type) {
      const form = this.root.querySelector('#configContactForm');
      let el = form.querySelector('.form-message');
      if (!el) {
        el = document.createElement('div');
        el.className = 'form-message';
        form.insertBefore(el, form.querySelector('button[type="submit"]'));
      }
      el.textContent = message;
      el.style.cssText = `padding:1rem;border-radius:var(--radius-sm);margin-bottom:1rem;font-weight:500;text-align:center;${
        type === 'success'
          ? 'background:#f0fff4;color:#38a169;border:1px solid #9ae6b4;'
          : 'background:#fed7d7;color:#e53e3e;border:1px solid #fc8181;'
      }`;
    }

    iconTileFor(step) {
      const val = this.answers[step.key];
      const opt = step.options.find((o) => o.value === val);
      if (!opt) return '';
      if (opt.img) return `<div class="icon-tile"><img src="${opt.img}" alt="${opt.label}"></div>`;
      return `<div class="icon-tile">${ICONS[opt.icon] || ''}</div>`;
    }

    showResult() {
      this.root.innerHTML = `
        <div class="config-shell fade-in visible">
          <div class="icon-tile" style="margin:0 auto 1.25rem;width:64px;height:64px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="32" height="32"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <span class="eyebrow">Configuration Received</span>
          <h2>Here's your room, built your way</h2>
          <p class="muted" style="max-width:520px;margin:0 auto 1rem">Our team will reach out to ${this.escape(this.answers.contact.name.split(' ')[0])} within 24 hours with a tailored quote based on the selections below.</p>

          <div class="grid config-summary-grid">
            ${STEPS.filter((s) => s.type !== 'form').map((step) => {
              const opt = step.options.find((o) => o.value === this.answers[step.key]);
              return `
                <div class="card config-summary-item">
                  ${this.iconTileFor(step)}
                  <div>
                    <small>${LABELS[step.key]}</small>
                    <strong>${opt ? this.escape(opt.label) : '—'}</strong>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="config-nav">
            <a class="btn" href="contact.html">Talk to Our Team</a>
            <button class="btn outline no-arrow config-restart" type="button">Start Over</button>
          </div>
        </div>
      `;
      this.root.querySelector('.config-restart').addEventListener('click', () => this.restart());
    }

    escape(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    renderOptionsOnly(step) {
      const grid = this.root.querySelector('.option-grid');
      if (!grid) return;
      Array.from(grid.children).forEach((card) => {
        const isSelected = card.dataset.value === this.answers[step.key];
        card.classList.toggle('selected', isSelected);
      });
    }

    renderIntro() {
      this.root.innerHTML = `
        <div class="config-shell fade-in visible">
          <span class="eyebrow">Room Configurator</span>
          <h1 style="margin-bottom:0.75rem">Build Your Room, Step by Step</h1>
          <p class="muted" style="max-width:520px;margin:0 auto 2rem">Answer a few quick questions about your space, platform, and brand preferences — we'll turn it into a tailored AV configuration and quote.</p>
          <button class="btn config-start" type="button">Let's Start</button>
        </div>
      `;
      this.root.querySelector('.config-start').addEventListener('click', () => this.start());
    }

    renderStep() {
      const step = STEPS[this.stepIndex];
      const progressPct = ((this.stepIndex + 1) / this.totalSteps) * 100;

      let bodyHtml = '';
      if (step.type === 'form') {
        bodyHtml = `
          <form class="contact-form config-form" id="configContactForm" novalidate>
            <input type="hidden" name="message" value="">
            <label>Name<br><input type="text" name="name" required></label>
            <label>Phone<br><input type="tel" name="phone" required></label>
            <label>Email<br><input type="email" name="email" required></label>
            <label>Company / City<br><input type="text" name="city"></label>
          </form>
        `;
      } else {
        bodyHtml = `
          <div class="option-grid">
            ${step.options.map((opt) => {
              const selected = this.answers[step.key] === opt.value ? ' selected' : '';
              const isLogo = step.type === 'logo';
              const media = opt.img
                ? `<div class="option-img-wrap"><img src="${opt.img}" alt="${opt.label}"></div>`
                : `<div class="option-img-wrap"><div class="icon-tile" style="margin:0">${ICONS[opt.icon] || ''}</div></div>`;
              return `
                <div class="option-card${isLogo ? ' logo-card' : ''}${selected}" data-value="${opt.value}" role="button" tabindex="0">
                  <span class="option-tick">✓</span>
                  ${media}
                  <span class="option-label">${opt.label}</span>
                  ${opt.sub ? `<span class="option-sub">${opt.sub}</span>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      this.root.innerHTML = `
        <div class="config-shell config-step">
          <div class="config-progress">
            <span class="current">${String(this.stepIndex + 1).padStart(2, '0')}</span>
            <span class="track"><span style="width:${progressPct}%"></span></span>
            <span>${String(this.totalSteps).padStart(2, '0')}</span>
          </div>
          <h2>${step.title}</h2>
          ${bodyHtml}
          <div class="config-nav">
            <button class="btn outline no-arrow config-back" type="button">Back</button>
            <button class="btn config-next no-arrow" type="button" ${this.canAdvance() ? '' : 'disabled'}>${step.type === 'form' ? 'View My Configuration' : 'Next'}</button>
          </div>
        </div>
      `;

      if (step.type !== 'form') {
        this.root.querySelectorAll('.option-card').forEach((card) => {
          const handler = () => this.selectOption(step, card.dataset.value);
          card.addEventListener('click', handler);
          card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
          });
        });
      }

      this.root.querySelector('.config-back').addEventListener('click', () => this.back());
      this.root.querySelector('.config-next').addEventListener('click', () => this.next());
    }

    render() {
      if (!this.started) {
        this.renderIntro();
      } else {
        this.renderStep();
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('configurator-root');
    if (root) new RoomConfigurator(root);
  });
})();
