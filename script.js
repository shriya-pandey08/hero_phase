document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero-section');
  
  // Trigger fade-in effect for elements
  setTimeout(() => {
      heroSection.classList.add('active');
  }, 300);

  // Mouse movement effect for image hover
  const imageWrappers = document.querySelectorAll('.image-wrapper');
  
  imageWrappers.forEach((imageWrapper) => {
      let animationFrameId;
      const img = imageWrapper.querySelector('.hero-image');
      const rect = img.getBoundingClientRect();

      const handleMouseMove = (e) => {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Image follows mouse with subtle movement
          const moveX = (x / rect.width - 0.5) * 15; // Adjust the scale factor
          const moveY = (y / rect.height - 0.5) * 15; // Adjust the scale factor

          img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`; // Follow mouse within image
      };

      const handleMouseLeave = () => {
          img.style.transform = 'scale(1.1)'; // Reset transform
      };

      imageWrapper.addEventListener('mousemove', (e) => {
          // Use requestAnimationFrame for smoother animations
          if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
          }
          animationFrameId = requestAnimationFrame(() => handleMouseMove(e));
      });

      imageWrapper.addEventListener('mouseleave', handleMouseLeave);
  });
});
