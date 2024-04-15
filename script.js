window.addEventListener("scroll", function() {
    parallax(".parallax-header", 0.1);
    parallax(".parallax-section", 0.1);
    parallax(".parallax-footer", 0.1); 
  });
  
  function parallax(element, speed) {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll(element);
  
    for (let i = 0; i < parallaxElements.length; i++) {
      const position = scrolled * speed;
      parallaxElements[i].style.transform = `translateY(${position}px)`;
    }
  }
  