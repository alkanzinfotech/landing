// Main JavaScript - Mobile Responsive with Enhanced UX
class MobileNavigation {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.nav = document.querySelector('nav ul');
    this.dropdowns = document.querySelectorAll('.dropdown');
    this.init();
  }

  init() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
        this.closeMenu();
      }
    });

    // Handle dropdowns on mobile
    this.dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      link.addEventListener('click', (e) => {
        if (window.innerWidth < 901) {
          e.preventDefault();
          this.toggleDropdown(dropdown);
        }
      });
    });

    // Handle window resize
    window.addEventListener('resize', () => this.handleResize());
  }

  toggleMenu() {
    this.nav.classList.toggle('show');
    this.hamburger.classList.toggle('active');
    document.body.style.overflow = this.nav.classList.contains('show') ? 'hidden' : '';
  }

  closeMenu() {
    this.nav.classList.remove('show');
    this.hamburger.classList.remove('active');
    document.body.style.overflow = '';
    this.dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
  }

  toggleDropdown(dropdown) {
    dropdown.classList.toggle('active');
  }

  handleResize() {
    if (window.innerWidth >= 901) {
      this.closeMenu();
    }
  }
}

class ScrollProgress {
  constructor() {
    this.bar = document.createElement('div');
    this.bar.className = 'scroll-progress';
    document.body.appendChild(this.bar);

    this.onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      this.bar.style.width = pct + '%';
    };

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll);
    this.onScroll();
  }
}

class HeaderScroll {
  constructor() {
    this.header = document.querySelector('header');
    if (!this.header) return;
    this.onScroll = () => {
      this.header.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }
}

class Counters {
  constructor() {
    this.els = Array.from(document.querySelectorAll('[data-count]'));
    if (!this.els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    this.els.forEach((el) => observer.observe(el));
  }

  animate(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };

    requestAnimationFrame(step);
  }
}

class BackToTop {
  constructor() {
    this.button = document.createElement('button');
    this.button.className = 'to-top';
    this.button.setAttribute('aria-label', 'Back to top');
    this.button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(this.button);

    this.button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    this.footer = document.querySelector('footer');

    window.addEventListener('scroll', () => {
      this.button.classList.toggle('show', window.scrollY > 500);

      if (this.footer) {
        const overlap = window.innerHeight - this.footer.getBoundingClientRect().top;
        this.button.style.bottom = overlap > 0 ? `${22 + overlap}px` : '22px';
      }
    }, { passive: true });
  }
}

class HeroCarousel {
  constructor() {
    this.carousel = document.querySelector('.hero-carousel');
    if (!this.carousel) return;

    this.track = this.carousel.querySelector('.slides');
    this.slides = Array.from(this.carousel.querySelectorAll('.slide'));
    this.dots = Array.from(this.carousel.querySelectorAll('.dot'));
    this.prevBtn = this.carousel.querySelector('.ctrl.prev');
    this.nextBtn = this.carousel.querySelector('.ctrl.next');
    this.liveRegion = this.carousel.querySelector('.sr-only');

    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.autoSlideInterval = null;
    this.autoSlideDelay = 5000;

    this.init();
  }

  init() {
    // Event listeners
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.nextSlide();
      }
    });

    // Touch/swipe support
    this.addTouchSupport();

    // Auto slide
    this.startAutoSlide();

    // Pause on hover
    this.carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
    this.carousel.addEventListener('mouseleave', () => this.startAutoSlide());

    // Initial update
    this.updateCarousel();
  }

  updateCarousel() {
    // Move track
    this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;

    // Update dots
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });

    // Update live region for screen readers
    if (this.liveRegion) {
      this.liveRegion.textContent = `Showing slide ${this.currentIndex + 1} of ${this.totalSlides}`;
    }

    // Update slide attributes
    this.slides.forEach((slide, index) => {
      slide.setAttribute('aria-hidden', index !== this.currentIndex);
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateCarousel();
    this.restartAutoSlide();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
    this.restartAutoSlide();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.restartAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), this.autoSlideDelay);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  restartAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  addTouchSupport() {
    let startX = 0;
    let currentX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      this.stopAutoSlide();
    };

    const handleTouchMove = (e) => {
      currentX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const diff = startX - currentX;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }

      this.startAutoSlide();
    };

    this.carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    this.carousel.addEventListener('touchmove', handleTouchMove, { passive: true });
    this.carousel.addEventListener('touchend', handleTouchEnd);
  }
}

class BeforeAfterSlider {
  constructor() {
    this.container = document.querySelector('.overlap-compare');
    if (!this.container) return;

    this.wrapper = this.container.querySelector('.ba-wrapper');
    this.after = this.container.querySelector('.ba-after');
    this.handle = this.container.querySelector('.ba-handle');
    this.range = this.container.querySelector('.ba-range');

    this.isDragging = false;
    this.autoplayRAF = null;
    this.autoplayCancelled = false;
    this.hasAutoplayed = false;

    this.init();
  }

  init() {
    // Set initial position
    this.setPosition(50);

    // Range input
    this.range.addEventListener('input', (e) => {
      this.cancelAutoplay();
      this.setPosition(parseFloat(e.target.value));
    });

    // Mouse events
    this.wrapper.addEventListener('mousedown', (e) => { this.cancelAutoplay(); this.startDrag(e); });
    document.addEventListener('mousemove', (e) => this.drag(e));
    document.addEventListener('mouseup', () => this.stopDrag());

    // Touch events
    this.wrapper.addEventListener('touchstart', (e) => { this.cancelAutoplay(); this.startDrag(e); }, { passive: true });
    document.addEventListener('touchmove', (e) => this.drag(e), { passive: true });
    document.addEventListener('touchend', () => this.stopDrag());

    // Keyboard support for range input
    this.range.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        this.cancelAutoplay();
        const step = e.key === 'ArrowLeft' ? -5 : 5;
        const newValue = Math.max(0, Math.min(100, parseFloat(this.range.value) + step));
        this.range.value = newValue;
        this.setPosition(newValue);
      }
    });

    this.observeAutoplay();
  }

  observeAutoplay() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasAutoplayed) {
          this.hasAutoplayed = true;
          this.playSweep();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    observer.observe(this.wrapper);
  }

  tweenPosition(from, to, duration) {
    return new Promise((resolve) => {
      const start = performance.now();

      const step = (now) => {
        if (this.autoplayCancelled) { resolve(); return; }
        const t = Math.min((now - start) / duration, 1);
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        this.setPosition(from + (to - from) * eased);
        if (t < 1) {
          this.autoplayRAF = requestAnimationFrame(step);
        } else {
          resolve();
        }
      };

      this.autoplayRAF = requestAnimationFrame(step);
    });
  }

  wait(ms) {
    return new Promise((resolve) => {
      const id = setTimeout(resolve, ms);
      this._waitTimeouts = this._waitTimeouts || [];
      this._waitTimeouts.push(id);
    });
  }

  async playSweep() {
    await this.tweenPosition(50, 8, 700);
    if (this.autoplayCancelled) return;
    await this.wait(300);
    if (this.autoplayCancelled) return;
    await this.tweenPosition(8, 92, 1150);
    if (this.autoplayCancelled) return;
    await this.wait(250);
    if (this.autoplayCancelled) return;
    await this.tweenPosition(92, 50, 750);
  }

  cancelAutoplay() {
    if (this.autoplayCancelled) return;
    this.autoplayCancelled = true;
    if (this.autoplayRAF) cancelAnimationFrame(this.autoplayRAF);
    if (this._waitTimeouts) this._waitTimeouts.forEach(clearTimeout);
  }

  setPosition(percentage) {
    const clamped = Math.max(0, Math.min(100, percentage));
    const rightClip = (100 - clamped) + '%';
    
    this.after.style.width = clamped + '%';
    this.after.style.clipPath = `inset(0 ${rightClip} 0 0)`;
    this.handle.style.left = clamped + '%';
    this.range.value = clamped;
  }

  startDrag(e) {
    this.isDragging = true;
    this.wrapper.style.cursor = 'grabbing';
    this.updatePosition(e);
  }

  drag(e) {
    if (!this.isDragging) return;
    this.updatePosition(e);
  }

  stopDrag() {
    this.isDragging = false;
    this.wrapper.style.cursor = 'col-resize';
  }

  updatePosition(e) {
    const rect = this.wrapper.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    this.setPosition(percentage);
  }
}

class ScrollAnimations {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      this.observer.observe(el);
    });
  }
}

class FormHandler {
  constructor() {
    this.forms = document.querySelectorAll('form');
    this.emailInitialized = false;
    this.init();
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
      
      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearError(input));
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Clear previous error
    this.clearError(field);

    // Required validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (field.type === 'tel' && value) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }

    if (!isValid) {
      this.showError(field, errorMessage);
    }

    return isValid;
  }

  showError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.style.cssText = `
        color: #e53e3e;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      `;
      field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
  }

  clearError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    
    // Validate all fields
    const fields = form.querySelectorAll('input, textarea');
    let isValid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      this.showFormMessage(form, 'Please fix the errors above', 'error');
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      await this.sendEmail(form);
      
      this.showFormMessage(form, 'Thank you! Your message has been sent successfully.', 'success');
      form.reset();
    } catch (error) {
      this.showFormMessage(form, 'Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  sendEmail(form) {
    const serviceId = form.dataset.emailjsService;
    const templateId = form.dataset.emailjsTemplate;
    const publicKey = form.dataset.emailjsPublic;

    if (!serviceId || !templateId || !publicKey) {
      return Promise.reject(new Error('Email service is not configured.'));
    }

    if (!window.emailjs) {
      return Promise.reject(new Error('EmailJS SDK failed to load.'));
    }

    if (!this.emailInitialized) {
      window.emailjs.init({ publicKey });
      this.emailInitialized = true;
    }

    return window.emailjs.sendForm(serviceId, templateId, form, publicKey);
  }

  showFormMessage(form, message, type) {
    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create new message
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    messageElement.style.cssText = `
      padding: 1rem;
      border-radius: var(--radius-sm);
      margin: 1rem 0;
      font-weight: 500;
      text-align: center;
      ${type === 'success' ? `
        background: #f0fff4;
        color: #38a169;
        border: 1px solid #9ae6b4;
      ` : `
        background: #fed7d7;
        color: #e53e3e;
        border: 1px solid #fc8181;
      `}
    `;

    form.insertBefore(messageElement, form.querySelector('button[type="submit"]'));
  }
}

class ActiveNavHighlighter {
  constructor() {
    this.init();
  }

  init() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('nav a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MobileNavigation();
  new ScrollProgress();
  new HeaderScroll();
  new Counters();
  new BackToTop();
  new HeroCarousel();
  new BeforeAfterSlider();
  new ScrollAnimations();
  new FormHandler();
  new ActiveNavHighlighter();

  // Add loading state to images
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
      
      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
      }
    });
  });

  // Performance optimization: Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});

// Handle page transitions
window.addEventListener('beforeunload', () => {
  document.body.classList.add('loading');
});

// Service Worker for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
