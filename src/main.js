import './styles/main.css'

// Portfolio homepage - pure HTML/CSS implementation
// JavaScript will be added progressively as needed

// =============================================
// Page Transitions
// =============================================
function initPageTransitions() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Always show the page (fade in or instant based on preference)
  // Use requestAnimationFrame to ensure styles are applied before transition
  requestAnimationFrame(() => {
    document.body.classList.add('page-ready');
  });
  
  // Skip transition handling if user prefers reduced motion
  if (prefersReducedMotion) return;

  // Handle all internal link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    
    // Skip if not a link, external link, or special link
    if (!link) return;
    if (link.target === '_blank') return;
    if (link.href.startsWith('mailto:')) return;
    if (link.href.startsWith('tel:')) return;
    if (link.href.includes('#')) return;
    if (link.hasAttribute('download')) return;
    
    // Check if it's an internal link (same origin)
    const url = new URL(link.href, window.location.origin);
    if (url.origin !== window.location.origin) return;
    
    // Prevent default navigation
    e.preventDefault();
    
    // Remove page-ready and add fade out class
    document.body.classList.remove('page-ready');
    document.body.classList.add('page-transition-out');
    
    // Navigate after transition completes
    setTimeout(() => {
      window.location.href = link.href;
    }, 300);
  });
}

// Handle back/forward navigation (bfcache)
// When navigating back, the page may be restored from cache with transition classes still applied
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    // Page was restored from bfcache (back/forward navigation)
    document.body.classList.remove('page-transition-out');
    document.body.classList.add('page-ready');
  }
});

// Initialize page transitions as early as possible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageTransitions);
} else {
  initPageTransitions();
}

// =============================================
// Case Study Section Index
// =============================================
function initCaseStudyIndex() {
  const index = document.querySelector('[data-case-study-index]');
  const panelContainer = document.querySelector('[data-case-study-panels]');

  if (!index || !panelContainer) return;

  const triggers = Array.from(index.querySelectorAll('[data-case-study-trigger]'));
  const panels = Array.from(panelContainer.querySelectorAll('[data-case-study-panel]'));

  if (!triggers.length || !panels.length) return;

  const panelsByKey = new Map(
    panels.map((panel) => [panel.dataset.caseStudyPanel, panel])
  );

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.add('case-study-index-ready');

  function resolvePanelKey(hash = window.location.hash) {
    const key = hash.replace(/^#/, '');
    if (panelsByKey.has(key)) {
      return key;
    }

    return triggers[0].dataset.caseStudyTrigger;
  }

  function setActivePanel(panelKey, options = {}) {
    const { updateHash = false, focusPanel = false } = options;
    const nextKey = panelsByKey.has(panelKey) ? panelKey : triggers[0].dataset.caseStudyTrigger;
    const activePanel = panelsByKey.get(nextKey);

    triggers.forEach((trigger) => {
      const isActive = trigger.dataset.caseStudyTrigger === nextKey;
      trigger.classList.toggle('is-active', isActive);

      if (isActive) {
        trigger.setAttribute('aria-current', 'location');
      } else {
        trigger.removeAttribute('aria-current');
      }
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.caseStudyPanel === nextKey;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });

    if (updateHash && activePanel) {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#${activePanel.id}`);
      } else {
        window.location.hash = activePanel.id;
      }
    }

    if (focusPanel && activePanel) {
      activePanel.focus({ preventScroll: prefersReducedMotion ? false : true });
    }
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const panelKey = trigger.dataset.caseStudyTrigger;
      const activeKey = resolvePanelKey();

      if (!panelKey || panelKey === activeKey) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      setActivePanel(panelKey, { updateHash: true });
    });

    trigger.addEventListener('keydown', (event) => {
      if (event.key !== ' ') return;

      event.preventDefault();
      trigger.click();
    });
  });

  window.addEventListener('hashchange', () => {
    setActivePanel(resolvePanelKey(), { updateHash: false });
  });

  setActivePanel(resolvePanelKey(), { updateHash: false });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCaseStudyIndex);
} else {
  initCaseStudyIndex();
}

// =============================================
// Footer scroll behavior for case study pages
// =============================================
// The footer is fixed on the side while scrolling, but becomes a normal footer at the end of the page
function initCaseStudyFooter() {
  const footer = document.querySelector('.case-study-page .footer');
  if (!footer) return;

  // Only apply this behavior on tablet/desktop (768px+)
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  
  function handleScroll() {
    if (!mediaQuery.matches) {
      // On mobile, always show as normal footer
      footer.classList.remove('footer--fixed');
      return;
    }

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate how close we are to the bottom (within footer height + some buffer)
    const footerHeight = footer.offsetHeight;
    const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
    
    // When near the bottom, switch to static footer
    if (distanceFromBottom <= footerHeight + 20) {
      footer.classList.add('footer--at-bottom');
    } else {
      footer.classList.remove('footer--at-bottom');
    }
  }

  // Initial check
  handleScroll();
  
  // Listen for scroll and resize events
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  mediaQuery.addEventListener('change', handleScroll);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCaseStudyFooter);
} else {
  initCaseStudyFooter();
}

// =============================================
// Header Scroll Behavior (homepage)
// =============================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  const headerBrand = header?.querySelector('.header__brand');
  const isHomepage = document.body.classList.contains('homepage');

  if (!header) return;

  function setBrandHidden(isHidden) {
    header.classList.toggle('header--brand-hidden', isHidden);

    if (!headerBrand) return;

    if (isHidden) {
      headerBrand.setAttribute('aria-hidden', 'true');
      headerBrand.setAttribute('tabindex', '-1');
      return;
    }

    headerBrand.removeAttribute('aria-hidden');
    headerBrand.removeAttribute('tabindex');
  }

  if (!isHomepage) {
    setBrandHidden(false);
    return;
  }

  const heroTitle = document.querySelector('.hero__title');

  function handleScroll() {
    header.classList.toggle('header--scrolled', window.scrollY > 0);

    if (!heroTitle) {
      setBrandHidden(false);
      return;
    }

    const headerBottom = header.getBoundingClientRect().bottom;
    const titleRect = heroTitle.getBoundingClientRect();
    const isHeroTitleVisible = titleRect.bottom > headerBottom && titleRect.top < window.innerHeight;

    setBrandHidden(isHeroTitleVisible);
  }

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderScroll);
} else {
  initHeaderScroll();
}

// =============================================
// Homepage Navigation Active State on Scroll
// =============================================
function initHomepageNavigation() {
  const projectsSection = document.getElementById('projects');
  const homeButton = document.querySelector('.nav-button[href="index.html"]');
  const projectsButton = document.querySelector('.nav-button[href="#projects"]');
  
  // Only run on homepage where these elements exist
  if (!projectsSection || !homeButton || !projectsButton) return;

  function updateActiveNav() {
    const projectsSectionTop = projectsSection.getBoundingClientRect().top;
    const threshold = window.innerHeight * 0.5; // Switch when projects section is halfway up the viewport

    if (projectsSectionTop <= threshold) {
      // User is in the projects section
      homeButton.classList.remove('nav-button--active');
      homeButton.removeAttribute('aria-current');
      projectsButton.classList.add('nav-button--active');
      projectsButton.setAttribute('aria-current', 'page');
    } else {
      // User is in the hero section
      homeButton.classList.add('nav-button--active');
      homeButton.setAttribute('aria-current', 'page');
      projectsButton.classList.remove('nav-button--active');
      projectsButton.removeAttribute('aria-current');
    }
  }

  // Initial check
  updateActiveNav();

  // Listen for scroll events
  window.addEventListener('scroll', updateActiveNav, { passive: true });
}

// Initialize homepage navigation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomepageNavigation);
} else {
  initHomepageNavigation();
}

// =============================================
// Feedback Modal
// =============================================
function initFeedbackModal() {
  const dialog = document.querySelector('[data-feedback-modal]');
  const triggers = Array.from(document.querySelectorAll('[data-feedback-open]'));
  const form = dialog?.querySelector('[data-feedback-form]');
  const pageUrlInput = form?.querySelector('[data-feedback-page-url]');
  const statusMessage = form?.querySelector('[data-feedback-status]');
  const submitButton = form?.querySelector('.feedback-form__submit');
  const closeButtons = dialog ? Array.from(dialog.querySelectorAll('[data-feedback-close]')) : [];
  const panels = dialog ? Array.from(dialog.querySelectorAll('[data-feedback-panel]')) : [];
  const nudge = document.querySelector('[data-feedback-nudge]');

  if (!dialog || !form || !triggers.length) return;

  const contextInput = form.querySelector('input[name="context"]');
  const closeButton = dialog.querySelector('.feedback-modal__close');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const defaultSubmitLabel = submitButton?.textContent || 'Share feedback';
  let lastTrigger = null;

  function setStatus(message, tone = 'neutral') {
    if (!statusMessage) return;

    statusMessage.textContent = message;
    statusMessage.hidden = !message;
    statusMessage.dataset.state = tone;
  }

  function showPanel(name) {
    panels.forEach((panel) => {
      const isActive = panel.dataset.feedbackPanel === name;
      panel.hidden = !isActive;
    });
  }

  function resetFormState() {
    form.reset();
    form.removeAttribute('aria-busy');
    setStatus('');

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = defaultSubmitLabel;
    }

    showPanel('form');
  }

  function openModal(trigger) {
    lastTrigger = trigger;

    if (contextInput) {
      contextInput.value = trigger.dataset.feedbackSource || contextInput.defaultValue;
    }

    if (pageUrlInput) {
      pageUrlInput.value = window.location.href;
    }

    resetFormState();
    dialog.showModal();
    document.body.classList.add('feedback-open');

    requestAnimationFrame(() => {
      closeButton?.focus();
    });
  }

  function closeModal() {
    if (!dialog.open) return;

    dialog.close();
    document.body.classList.remove('feedback-open');
    lastTrigger?.focus();
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(trigger));
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeModal();
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      closeModal();
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    if (pageUrlInput) {
      formData.set('page_url', window.location.href);
    }

    const context = formData.get('context') || document.title;
    formData.set('_subject', `Portfolio feedback: ${context}`);

    form.setAttribute('aria-busy', 'true');
    setStatus('Sending your feedback...');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        let errorMessage = 'Something went wrong. Please try again.';

        try {
          const result = await response.json();
          const errors = Array.isArray(result?.errors) ? result.errors : [];

          if (errors.length) {
            errorMessage = errors
              .map((entry) => entry.message)
              .filter(Boolean)
              .join(' ');
          }
        } catch {
          // Keep the fallback message when the response is not JSON.
        }

        throw new Error(errorMessage);
      }

      setStatus('');
      showPanel('confirmation');
    } catch (error) {
      const message = error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again.';

      setStatus(message, 'error');
    } finally {
      form.removeAttribute('aria-busy');

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultSubmitLabel;
      }
    }
  });

  if (nudge && !prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        nudge.classList.add('is-visible');
        observer.disconnect();
      });
    }, { threshold: 0.55 });

    observer.observe(nudge);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFeedbackModal);
} else {
  initFeedbackModal();
}
