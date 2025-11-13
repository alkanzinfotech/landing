// Main JS: mobile nav, active link, comparison slider, hero carousel
document.addEventListener('DOMContentLoaded', () => {
  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) {
      a.classList.add('active');
    }
  });

  // Mobile menu
  const burger = document.querySelector('.hamburger');
  const menu = document.querySelector('nav ul');
  if (burger && menu) burger.addEventListener('click', () => menu.classList.toggle('open'));

  // Overlap Before/After slider logic
  (function initBeforeAfter() {
    const container = document.querySelector('.overlap-compare');
    if (!container) return;

    const wrapper = container.querySelector('.ba-wrapper');
    const after = container.querySelector('.ba-after');
    const handle = container.querySelector('.ba-handle');
    const range = container.querySelector('.ba-range');

    function setPosition(pct) {
      // clamp 0..100
      const clamped = Math.max(0, Math.min(100, pct));
      const rightClip = (100 - clamped) + '%';
      after.style.width = clamped + '%';
      after.style.clipPath = `inset(0 ${rightClip} 0 0)`;
      handle.style.left = clamped + '%';
    }

    // initialize
    setPosition(parseFloat(range.value || '50'));

    // sync with range input
    range.addEventListener('input', (e) => {
      setPosition(parseFloat(e.target.value));
    });

    // pointer drag directly on the image region
    let dragging = false;

    function pointerPosToPct(clientX) {
      const rect = wrapper.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = (x / rect.width) * 100;
      return Math.max(0, Math.min(100, pct));
    }

    function startDrag(e) {
      dragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const pct = pointerPosToPct(clientX);
      range.value = pct.toFixed(2);
      setPosition(pct);
    }

    function moveDrag(e) {
      if (!dragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const pct = pointerPosToPct(clientX);
      range.value = pct.toFixed(2);
      setPosition(pct);
    }

    function endDrag() { dragging = false; }

    wrapper.addEventListener('mousedown', startDrag);
    wrapper.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', endDrag);

    wrapper.addEventListener('touchstart', startDrag, { passive: true });
    wrapper.addEventListener('touchmove', moveDrag, { passive: true });
    window.addEventListener('touchend', endDrag);
  })();

  // Contact form demo handler
  const form = document.querySelector('form.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! We will contact you shortly.');
      form.reset();
    });
  }

  // Hero carousel - FIXED VERSION WITH WORKING CONTROLS
  const carousel = document.querySelector('.hero-carousel');
  if (carousel) {
    console.log('Carousel found, initializing...');
    
    const track = carousel.querySelector('.slides');
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const prevBtn = carousel.querySelector('.ctrl.prev');
    const nextBtn = carousel.querySelector('.ctrl.next');
    const dots = Array.from(carousel.querySelectorAll('.dot'));
    const live = carousel.querySelector('.sr-only');

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideTimer = null;
    const autoSlideDelay = 5000; // 5 seconds

    console.log('Carousel elements:', {
      track,
      slides: slides.length,
      prevBtn,
      nextBtn,
      dots: dots.length
    });

    // Function to update carousel position
    function updateCarousel() {
      console.log('Updating carousel to index:', currentIndex);
      
      // Move the track
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        const isActive = index === currentIndex;
        dot.setAttribute('aria-current', isActive);
        dot.setAttribute('aria-selected', isActive);
        if (isActive) {
          dot.style.background = '#fff';
          dot.style.transform = 'scale(1.15)';
        } else {
          dot.style.background = 'rgba(255,255,255,.6)';
          dot.style.transform = 'scale(1)';
        }
      });
      
      // Update live region for screen readers
      if (live) {
        live.textContent = `Showing slide ${currentIndex + 1} of ${totalSlides}`;
      }
      
      // Update slide attributes
      slides.forEach((slide, index) => {
        slide.setAttribute('aria-hidden', index !== currentIndex);
      });
    }

    // Function to go to next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    // Function to go to previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    // Function to go to specific slide
    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    // Function to start auto sliding
    function startAutoSlide() {
      stopAutoSlide();
      autoSlideTimer = setInterval(nextSlide, autoSlideDelay);
    }

    // Function to stop auto sliding
    function stopAutoSlide() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
      }
    }

    // Event listeners for buttons - FIXED SELECTORS
    if (nextBtn) {
      console.log('Next button found, adding event listener');
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Next button clicked');
        nextSlide();
        startAutoSlide();
      });
    } else {
      console.log('Next button NOT found');
    }

    if (prevBtn) {
      console.log('Prev button found, adding event listener');
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Prev button clicked');
        prevSlide();
        startAutoSlide();
      });
    } else {
      console.log('Prev button NOT found');
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Dot clicked:', index);
        goToSlide(index);
        startAutoSlide();
      });
    });

    // Pause auto-slide on hover/focus
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    carousel.addEventListener('focusin', stopAutoSlide);
    carousel.addEventListener('focusout', startAutoSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
        startAutoSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
        startAutoSlide();
      }
    });

    // Initialize carousel
    track.style.transition = 'transform 0.6s ease';
    updateCarousel();
    startAutoSlide();

    console.log('Carousel initialized successfully');
  } else {
    console.log('Carousel element not found');
  }
});
