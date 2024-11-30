let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }

      currentSlide++;
      if (currentSlide > slides.length) { currentSlide = 1 } 
      
      slides[currentSlide - 1].style.display = "block";  
      setTimeout(showSlides, 3000); 
    }

    showSlides();