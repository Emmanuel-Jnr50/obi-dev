document.addEventListener("DOMContentLoaded", function () {

    // Smooth scroll to hash on page load
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Preloader
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => { preloader.remove(); }, 1000);
    });

    // Hero slider
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
    function nextSlide() { index = (index + 1) % slideCount; showSlide(index); }
    function prevSlide() { index = (index - 1 + slideCount) % slideCount; showSlide(index); }
    function startAutoSlide() { autoSlideInterval = setInterval(nextSlide, 5000); }
    function stopAutoSlide() { clearInterval(autoSlideInterval); }

    nextBtn.addEventListener('click', () => { stopAutoSlide(); nextSlide(); startAutoSlide(); });
    prevBtn.addEventListener('click', () => { stopAutoSlide(); prevSlide(); startAutoSlide(); });

    slides.addEventListener('mousedown', (e) => { isDragging = true; startX = e.pageX; stopAutoSlide(); slides.style.transition = "none"; });
    slides.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = startX - e.pageX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
        else showSlide(index);
        startAutoSlide();
    });
    slides.addEventListener('mouseleave', () => { if (isDragging) { isDragging = false; showSlide(index); startAutoSlide(); } });
    slides.addEventListener('touchstart', (e) => { isDragging = true; startX = e.touches[0].pageX; stopAutoSlide(); slides.style.transition = "none"; });
    slides.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = startX - e.changedTouches[0].pageX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
        else showSlide(index);
        startAutoSlide();
    });

    startAutoSlide();

    // Reel animation
    function createDigit(finalDigit, delay, reverse = false, spinDuration = 2) {
        const digit = document.createElement("div");
        digit.classList.add("digit");
        let numbers = "";
        for (let i = 0; i < 10; i++) { numbers += `<div>${reverse ? 9 - i : i}</div>`; }
        digit.innerHTML = numbers;
        digit.style.animation = `spin ${spinDuration}s ease-out ${delay}s forwards`;
        setTimeout(() => {
            digit.innerHTML = `<div>${finalDigit}</div>`;
            digit.style.transform = "translateY(0)";
            digit.style.animation = "none";
        }, (delay + spinDuration) * 1000);
        return digit;
    }

    function animateReel(reel, target) {
        const digits = target.toString().padStart(2, '0').split("");
        reel.innerHTML = "";
        digits.forEach((d, i) => {
            const delay = i * 0.3;
            const spinDuration = 2 + (i * 0.5);
            const digit = createDigit(d, delay, i % 2 !== 0, spinDuration);
            reel.appendChild(digit);
        });
        const percent = document.createElement("span");
        percent.className = "percent-sign";
        percent.textContent = "%";
        percent.style.color = "#fdf9cf";
        reel.appendChild(percent);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateReel(entry.target, entry.target.getAttribute("data-target"));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".reel").forEach(reel => observer.observe(reel));


  // Services carousel
    const track = document.querySelector('.services .service-cards');
    const serviceCards = document.querySelectorAll('.services .service-cards .card');
    const total = serviceCards.length;
    let current = 0;
    let autoTimer;

    console.log('track:', track);
    console.log('serviceCards:', serviceCards);
    console.log('total cards found:', total);
    console.log('next-btn:', document.getElementById('next-btn'));
    console.log('prev-btn:', document.getElementById('prev-btn'));
    console.log('carousel-wrapper:', document.querySelector('.carousel-wrapper'));

    function goTo(i) {
        current = (i + total) % total;
        const wrapper = document.querySelector('.carousel-wrapper');
        const cardWidth = wrapper.offsetWidth;
        console.log('goTo called — index:', current, '| cardWidth:', cardWidth, '| translateX:', -(current * cardWidth));
        track.style.transform = `translateX(-${current * cardWidth}px)`;
    }

    function nextCard() { goTo(current + 1); }
    function prevCard() { goTo(current - 1); }
    function startAuto() { autoTimer = setInterval(nextCard, 4000); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }

    document.getElementById('next-btn').addEventListener('click', () => { nextCard(); resetAuto(); });
    document.getElementById('prev-btn').addEventListener('click', () => { prevCard(); resetAuto(); });

    window.addEventListener('resize', () => goTo(current));

    startAuto();

});

// scrollToTop stays outside — it's called from an onclick attribute in HTML
function scrollToTop(event) {
    event.preventDefault();
    const start = window.scrollY;
    const duration = 1000;
    const startTime = performance.now();
    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start * (1 - easeOutCubic(progress)));
        if (elapsed < duration) requestAnimationFrame(animateScroll);
    }
    requestAnimationFrame(animateScroll);
}

const reviewTrack = document.querySelector('.client .testimonial');
const reviews = document.querySelectorAll('.client .testimonial .review');
const reviewTotal = reviews.length;
let reviewCurrent = 0;
let reviewTimer;
let reviewStartX = 0;
let reviewIsDragging = false;

function reviewGoTo(i) {
    reviewCurrent = (i + reviewTotal) % reviewTotal;
    const wrapper = document.querySelector('.testimonial-wrapper');
    const width = wrapper.offsetWidth;
    reviewTrack.style.transform = `translateX(-${reviewCurrent * width}px)`;
}

function nextReview() { reviewGoTo(reviewCurrent + 1); }
function prevReview() { reviewGoTo(reviewCurrent - 1); }
function startReviewAuto() { reviewTimer = setInterval(nextReview, 4000); }
function stopReviewAuto() { clearInterval(reviewTimer); }
function resetReviewAuto() { stopReviewAuto(); startReviewAuto(); }

// Mouse drag
reviewTrack.addEventListener('mousedown', (e) => {
    reviewIsDragging = true;
    reviewStartX = e.pageX;
    stopReviewAuto();
    reviewTrack.style.transition = 'none';
});

reviewTrack.addEventListener('mouseup', (e) => {
    if (!reviewIsDragging) return;
    reviewIsDragging = false;
    const diff = reviewStartX - e.pageX;
    reviewTrack.style.transition = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';
    if (diff > 50) nextReview();
    else if (diff < -50) prevReview();
    else reviewGoTo(reviewCurrent); // snap back if drag too small
    resetReviewAuto();
});

reviewTrack.addEventListener('mouseleave', () => {
    if (reviewIsDragging) {
        reviewIsDragging = false;
        reviewTrack.style.transition = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';
        reviewGoTo(reviewCurrent);
        resetReviewAuto();
    }
});

// Touch drag (mobile)
reviewTrack.addEventListener('touchstart', (e) => {
    reviewIsDragging = true;
    reviewStartX = e.touches[0].pageX;
    stopReviewAuto();
    reviewTrack.style.transition = 'none';
});

reviewTrack.addEventListener('touchend', (e) => {
    if (!reviewIsDragging) return;
    reviewIsDragging = false;
    const diff = reviewStartX - e.changedTouches[0].pageX;
    reviewTrack.style.transition = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';
    if (diff > 50) nextReview();
    else if (diff < -50) prevReview();
    else reviewGoTo(reviewCurrent);
    resetReviewAuto();
});

startReviewAuto();