// ========================================
// Mobile Menu Toggle
// ========================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ========================================
// Smooth Scroll for Navigation Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const navbarHeight = document.querySelector('#navbar').offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// Navbar Scroll Effect
// ========================================

const navbar = document.querySelector('#navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// ========================================
// Animated Counter for Statistics
// ========================================

function animateCounter(element, target, duration = 2000, decimals = 0) {
  let start = 0;
  const increment = target / (duration / 16);
  const isDecimal = decimals > 0;

  const updateCounter = () => {
    start += increment;

    if (start < target) {
      if (isDecimal) {
        element.textContent = start.toFixed(decimals);
      } else {
        element.textContent = Math.floor(start).toLocaleString('es-AR');
      }
      requestAnimationFrame(updateCounter);
    } else {
      if (isDecimal) {
        element.textContent = target.toFixed(decimals);
      } else {
        element.textContent = target.toLocaleString('es-AR');
      }
    }
  };

  updateCounter();
}

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Trigger counter animation for stat numbers
      if (entry.target.classList.contains('stat-item') ||
          entry.target.classList.contains('metric-card') ||
          entry.target.classList.contains('coverage-stat')) {
        const counterElement = entry.target.querySelector('[data-count]');

        if (counterElement && !counterElement.classList.contains('counted')) {
          counterElement.classList.add('counted');
          const target = parseFloat(counterElement.getAttribute('data-count'));
          const decimals = target % 1 !== 0 ? 1 : 0;
          animateCounter(counterElement, target, 2000, decimals);
        }
      }

      // Unobserve after animation to prevent re-triggering
      animationObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[data-animation]').forEach(element => {
  animationObserver.observe(element);
});

// Observe stat items
document.querySelectorAll('.stat-item, .metric-card, .coverage-stat').forEach(element => {
  animationObserver.observe(element);
});

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(element => {
  animationObserver.observe(element);
});

// Observe value cards
document.querySelectorAll('.value-card').forEach(element => {
  animationObserver.observe(element);
});

// Observe founder cards
document.querySelectorAll('.founder-card').forEach(element => {
  animationObserver.observe(element);
});

// ========================================
// Back to Top Button
// ========================================

const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========================================
// Form Validation and Submission
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone validation regex (Argentina format)
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

  // Validation functions
  const validators = {
    nombre: (value) => {
      if (!value || value.trim().length < 2) {
        return 'Por favor, ingrese un nombre válido';
      }
      return '';
    },

    email: (value) => {
      if (!value || !emailRegex.test(value)) {
        return 'Por favor, ingrese un email válido';
      }
      return '';
    },

    telefono: (value) => {
      if (!value || !phoneRegex.test(value)) {
        return 'Por favor, ingrese un teléfono válido';
      }
      return '';
    },

    institucion: (value) => {
      if (!value || value.trim().length < 2) {
        return 'Por favor, ingrese el nombre de su institución';
      }
      return '';
    },

    cargo: (value) => {
      if (!value) {
        return 'Por favor, seleccione su cargo';
      }
      return '';
    },

    estudiantes: (value) => {
      if (!value) {
        return 'Por favor, seleccione la cantidad de estudiantes';
      }
      return '';
    },

    terminos: (checked) => {
      if (!checked) {
        return 'Debe aceptar los términos y condiciones';
      }
      return '';
    }
  };

  // Show error message
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');

    input.classList.add('error');
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  // Clear error message
  function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');

    input.classList.remove('error');
    if (errorElement) {
      errorElement.textContent = '';
    }
  }

  // Validate single field
  function validateField(input) {
    const fieldName = input.name;
    const validator = validators[fieldName];

    if (!validator) return true;

    const value = input.type === 'checkbox' ? input.checked : input.value;
    const errorMessage = validator(value);

    if (errorMessage) {
      showError(input, errorMessage);
      return false;
    } else {
      clearError(input);
      return true;
    }
  }

  // Add real-time validation on blur
  contactForm.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });

    // Clear error on input
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        clearError(input);
      }
    });
  });

  // Form submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    const formData = new FormData(contactForm);

    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (!isValid) {
      // Scroll to first error
      const firstError = contactForm.querySelector('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Disable submit button to prevent double submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Collect form data
      const data = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        institucion: formData.get('institucion'),
        cargo: formData.get('cargo'),
        estudiantes: formData.get('estudiantes'),
        mensaje: formData.get('mensaje') || '',
        timestamp: new Date().toISOString()
      };

      // Log to console (in production, send to backend)
      console.log('Form submitted:', data);

      // Show success message
      const successMessage = contactForm.querySelector('.form-success');
      if (successMessage) {
        successMessage.style.display = 'block';

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset form
      contactForm.reset();

      // Hide success message after 10 seconds
      setTimeout(() => {
        if (successMessage) {
          successMessage.style.display = 'none';
        }
      }, 10000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intente nuevamente o contáctenos directamente.');
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}

// ========================================
// Dynamic Stats Counters on Hero Section
// ========================================

// Trigger hero stats animation on page load
window.addEventListener('load', () => {
  const heroStats = document.querySelectorAll('.hero-stats .stat-number');

  heroStats.forEach(stat => {
    if (!stat.classList.contains('counted')) {
      stat.classList.add('counted');
      const target = parseFloat(stat.getAttribute('data-count'));
      animateCounter(stat, target, 2500);
    }
  });
});

// ========================================
// Feature Cards Staggered Animation
// ========================================

const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// ========================================
// Console Welcome Message
// ========================================

console.log('%c¡Bienvenido a EduFlow CRM! 🎓', 'color: #0176D3; font-size: 24px; font-weight: bold;');
console.log('%c¿Interesado en trabajar con nosotros? Envíanos un email a carreras@eduflowcrm.com.ar', 'color: #032D60; font-size: 14px;');

// ========================================
// Performance Monitoring (Optional)
// ========================================

// Log page load performance
window.addEventListener('load', () => {
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    console.log(`%cPage loaded in ${pageLoadTime}ms`, 'color: #10B981; font-weight: bold;');
  }
});

// ========================================
// Lazy Loading for Images (if implemented)
// ========================================

if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        lazyLoadObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    lazyLoadObserver.observe(img);
  });
}

// ========================================
// Add active state to navigation on scroll
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

function highlightNavigation() {
  const scrollPosition = window.pageYOffset + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ========================================
// Prevent Form Resubmission on Page Reload
// ========================================

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

// ========================================
// Add Animation Delay for Value Cards
// ========================================

const valueCards = document.querySelectorAll('.value-card');
valueCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
});

// ========================================
// Keyboard Navigation Enhancement
// ========================================

// Add Enter key support for buttons
document.querySelectorAll('.btn, .location-tag').forEach(element => {
  element.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      element.click();
    }
  });
});

// ========================================
// Print Styles Support
// ========================================

window.addEventListener('beforeprint', () => {
  // Expand all collapsed sections before printing
  console.log('Preparing page for printing...');
});

// ========================================
// Analytics Event Tracking (Placeholder)
// ========================================

function trackEvent(category, action, label) {
  // Placeholder for analytics tracking
  // Replace with Google Analytics, Mixpanel, or other analytics service
  console.log('Analytics Event:', { category, action, label });

  // Example for Google Analytics (uncomment when implemented):
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', action, {
  //     'event_category': category,
  //     'event_label': label
  //   });
  // }
}

// Track CTA button clicks
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent.trim();
    trackEvent('CTA', 'Click', buttonText);
  });
});

// Track feature card interactions
document.querySelectorAll('.feature-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    const featureName = card.querySelector('h3')?.textContent || `Feature ${index + 1}`;
    trackEvent('Features', 'View', featureName);
  });
});

// Track form field interactions
if (contactForm) {
  contactForm.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('focus', (e) => {
      trackEvent('Form', 'Focus', e.target.name);
    });
  });
}

// Track social link clicks
document.querySelectorAll('.founder-social a, .footer-social a').forEach(link => {
  link.addEventListener('click', (e) => {
    trackEvent('Social', 'Click', e.target.closest('.founder-card, .footer')?.querySelector('h3')?.textContent || 'Footer');
  });
});

// ========================================
// Initialize Everything
// ========================================

console.log('%cEduFlow CRM Landing Page initialized successfully ✓', 'color: #10B981; font-weight: bold;');
