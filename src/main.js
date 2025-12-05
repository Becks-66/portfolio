import './styles/main.css'

// Portfolio homepage - pure HTML/CSS implementation
// JavaScript will be added progressively as needed

// Footer scroll behavior for case study pages
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
