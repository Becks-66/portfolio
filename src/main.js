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
