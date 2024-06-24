document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.element');
    const box = document.querySelectorAll('.box');
  
    // Function to add 'visible' class to elements
    const showElements1 = () => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
  
    // Show elements on page load
    showElements1();
  
    // Show elements on scroll
    window.addEventListener('scroll', showElements1);



    const showElements2 = () => {
        box.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
          }
        });
      };
    
      // Show elements on page load
      showElements2();
    
      // Show elements on scroll
      window.addEventListener('scroll', showElements2);
  });
  