document.addEventListener("DOMContentLoaded" , function() {
  if (window.location.hash) {
    const target = 
    document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', () => {
        window.scrollTo(0, 0); // <-- Ensure scroll reset
    
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    
        setTimeout(() => {
        preloader.remove();
        }, 1000);
    });
});


    const slides = document.querySelector('.slides-one');
    const slideCount = document.querySelectorAll('.slide-one').length;
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let index = 0;
    let startX = 0;
    let isDragging = false;
    let autoSlideInterval;

    function showSlide(i) {
      slides.style.transition = "transform 0.8s ease"; 
      slides.style.transform = `translateX(${-i * 100}%)`;
    }

    function nextSlide() {
      index = (index + 1) % slideCount;
      showSlide(index);
    }

    function prevSlide() {
      index = (index - 1 + slideCount) % slideCount;
      showSlide(index);
    }

    // Auto play
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000); // slower autoplay
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });

    // Dragging
    slides.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX;
      stopAutoSlide(); // pause autoplay while dragging
      slides.style.transition = "none"; 
    });

    slides.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.pageX;
      const diff = startX - endX;

      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      } else {
        showSlide(index); // snap back if drag too small
      }

      startAutoSlide(); // resume autoplay
    });

    slides.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        showSlide(index);
        startAutoSlide();
      }
    });

    slides.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX;
      stopAutoSlide();
      slides.style.transition = "none";
    });

    slides.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].pageX;
      const diff = startX - endX;

      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      } else {
        showSlide(index);
      }

      startAutoSlide();
    });

    // Start autoplay initially
    startAutoSlide();


function scrollToTop(event) {
  event.preventDefault(); // stop default anchor jump

  const start = window.scrollY;
  const duration = 1000; // total scroll time (ms)
  const heroStop = 0; // scroll until very top
  const startTime = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    const newY = start + (heroStop - start) * easedProgress;
    window.scrollTo(0, newY);

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

function createDigit(finalDigit, delay, reverse = false, spinDuration = 2) {
            const digit = document.createElement("div");
            digit.classList.add("digit");

            // Create numbers 0-9 stacked vertically
            let numbers = "";
            for (let i = 0; i < 10; i++) {
                numbers += `<div>${reverse ? 9 - i : i}</div>`;
            }
            digit.innerHTML = numbers;

            // Apply animation with custom duration
            digit.style.animation = `spin ${spinDuration}s ease-out ${delay}s forwards`;

            // After spin completes, set to final digit
            // The key fix: calculate based on actual animation duration + delay
            setTimeout(() => {
                digit.innerHTML = `<div>${finalDigit}</div>`;
                digit.style.transform = "translateY(0)";
                digit.style.animation = "none";
            }, (delay + spinDuration) * 1000); // Convert to milliseconds
            
            return digit;
        }

        function animateReel(reel, target) {
            const digits = target.toString().padStart(2, '0').split("");
            reel.innerHTML = "";

            digits.forEach((d, i) => {
                // Each subsequent digit starts later and spins longer
                const delay = i * 0.3;
                const spinDuration = 2 + (i * 0.5); // First digit faster, last digit slower
                const digit = createDigit(d, delay, i % 2 !== 0, spinDuration);
                reel.appendChild(digit);
            });

            // Add percentage sign at the end
            const percent = document.createElement("span");
            percent.className = "percent-sign";
            percent.textContent = "%";
            percent.style.color = "#fdf9cf";
            reel.appendChild(percent);
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const reel = entry.target;
                    const target = reel.getAttribute("data-target");
                    animateReel(reel, target);
                    observer.unobserve(reel);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll(".reel").forEach(reel => {
            observer.observe(reel);
        });


// Project Filter Animation System

// Get all filter buttons
const showBtn = document.getElementById('showbtn');
const finBtn = document.getElementById('finbtn');
const marketBtn = document.getElementById('marketbtn');
const edBtn = document.getElementById('edbtn');

// Get all filter sections
const showAllFilter = document.getElementById('showall');
const financeFilter = document.getElementById('finance');
const marketingFilter = document.getElementById('marketing');
const edTechFilter = document.getElementById('edtech');

// Store all filters in an array for easy management
const filters = [showAllFilter, financeFilter, marketingFilter, edTechFilter];
const buttons = [showBtn, finBtn, marketBtn, edBtn];

// Initialize: Show "Show All" by default
let currentFilter = showAllFilter;
currentFilter.classList.add('active');

// Function to switch filters with animation
function switchFilter(newFilter, clickedButton) {
    if (newFilter === currentFilter) return; // Don't do anything if clicking the same filter
    
    // Update active button styling
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
    
    // Animate out current filter (fade down)
    currentFilter.classList.add('fade-out');
    
    // After fade out animation completes, show new filter
    setTimeout(() => {
        currentFilter.classList.remove('active', 'fade-out');
        currentFilter = newFilter;
        currentFilter.classList.add('active', 'fade-in');
        
        // Remove fade-in class after animation completes
        setTimeout(() => {
            currentFilter.classList.remove('fade-in');
        }, 600);
    }, 600);
}

// Add click event listeners
showBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchFilter(showAllFilter, showBtn);
});

finBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchFilter(financeFilter, finBtn);
});

marketBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchFilter(marketingFilter, marketBtn);
});

edBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchFilter(edTechFilter, edBtn);
});
