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
    if (link.href.startsWith('#')) return;
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

// Initialize page transitions as early as possible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageTransitions);
} else {
  initPageTransitions();
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
