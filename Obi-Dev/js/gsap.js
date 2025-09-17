gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-section .header span", {
  scrollTrigger: {
    trigger: ".about-section",     // element to watch
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -150,       // move from below
  opacity: 0,   // start invisible
  duration: 2.5,
  ease: "power3.out",
});
gsap.from(".about-section .header .lil-info", {
  scrollTrigger: {
    trigger: ".about-section .header .lil-info",     // element to watch
    start: "top 40%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 3.0,
  ease: "power3.out",
});

gsap.from(".more-info .info>h2", {
  scrollTrigger: {
    trigger: ".more-info .info>h2",     // element to watch
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".info .btn", {
  scrollTrigger: {
    trigger: ".more-info .info>h2",     // element to watch
    start: "top 30%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: 50,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".resume .header>span , .resume .header h2", {
  scrollTrigger: {
    trigger: ".resume .header span , .resume .header h2",     // element to watch
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -150,       // move from below
  opacity: 0,   // start invisible
  duration: 2.5,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".stack .header>span , .stack .header h2", {
  scrollTrigger: {
    trigger: ".stack .header span , .stack .header h2",     // element to watch
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -150,       // move from below
  opacity: 0,   // start invisible
  duration: 2.5,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".skill", {
  scrollTrigger: {
    trigger: ".summary",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
  stagger: 0.3 // delay between each
});


gsap.from(".lets-connect .connect-btn", {
  scrollTrigger: {
    trigger: ".lets-connect",     // element to watch
    start: "top 70%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: 50,       // move from below
  opacity: 0,   // start invisible
  duration: 2.5,
  ease: "power3.out",
});


gsap.from(".hero .left h2", {
  scrollTrigger: {
    trigger: ".hero",     // element to watc
    start: "top 90%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 3.0,
  ease: "power3.out",
});


gsap.from(".services .header>span , .services .header .navigate h2", {
  scrollTrigger: {
    trigger: ".services",     // element to watc
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".services .connect-btn", {
  scrollTrigger: {
    trigger: ".services .connect-btn",     // element to watch
    start: "top 70%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: 50,       // move from below
  opacity: 0,   // start invisible
  duration: 2.5,
  ease: "power3.out",
});

gsap.from(".services .service-cards .card", {
  scrollTrigger: {
    trigger: ".services .service-cards",     // element to watch
    start: "top 85%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: 80,       // move from below
  opacity: 0.2,   // start invisible
  duration: 3,
  ease: "power3.out",
  stagger: 0.2
});


gsap.from(".pricing .head>span , .pricing .header h2", {
  scrollTrigger: {
    trigger: ".pricing",     // element to watc
    start: "top 90%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".pricing .price-cards", {
  scrollTrigger: {
    trigger: ".pricing .price-cards",     // element to watc
    start: "top 80%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: 100,       // move from below
  opacity: 0,   // start invisible
  duration: 2.5,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".companies .header", {
  scrollTrigger: {
    trigger: ".companies",     // element to watc
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -150,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".portfolio .header>span , .portfolio .header h2", {
  scrollTrigger: {
    trigger: ".portfolio .header>span , .portfolio .header h2",     // element to watc
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".client .header>span , .client .header h2", {
  scrollTrigger: {
    trigger: ".client .header>span , .client .header h2",     // element to watc
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".blog .header .head>span , .blog .header .head h2", {
  scrollTrigger: {
    trigger: ".blog .header>span , .blog .header h2",     // element to watc
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});



gsap.from(".blog-posts .post.one .cont, .blog-posts .post.two .cont, .blog-posts .post.three .cont", {
  scrollTrigger: {
    trigger: ".blog-posts .post.one .cont, .blog-posts .post.two .cont, .blog-posts .post.three .cont",     // element to watc
    start: "top 70%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: 100,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".contact .head h2", {
  scrollTrigger: {
    trigger: ".contact .head",     // element to watc
    start: "top 80%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  scale: 0.2,       // move from below
  opacity: 0,   // start invisible
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".project-section .header>span , .project-section .header h2", {
  scrollTrigger: {
    trigger: ".project-section .header",     // element to watc
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 3.0,
  ease: "power3.out",
  stagger: 0.5
});

gsap.from(".project-section .head, .project-section .projects", {
  scrollTrigger: {
    trigger: ".project-section .head , .project-section .projects",     // element to watc
    start: "top 60%",      // when element hits 80% of viewport
    toggleActions: "play none none none" 
    // play | pause | reverse | reset
  },
  y: -100,       // move from below
  opacity: 0,   // start invisible
  duration: 4.0,
  ease: "power3.out",
  stagger: 0.5
});


document.addEventListener('DOMContentLoaded', () => {
      const nav = document.getElementById('site-nav');
      const spacer = document.getElementById('nav-spacer');

      let isFixed = false;

      function makeFixedAndReveal() {
        // Set spacer so layout keeps the original space occupied
        spacer.style.height = nav.offsetHeight + 'px';

        // add fixed class (removes it from document flow)
        nav.classList.add('fixed');

        // ensure it's fully hidden before animating in
        // use yPercent for reliable percent-based movement
        gsap.set(nav, { yPercent: -100, opacity: 0, overwrite: true });

        // animate into view (slide + fade)
        gsap.to(nav, {
          yPercent: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
        });
      }

      function resetToNormalInstant() {
        // stop any running tweens
        gsap.killTweensOf(nav);

        // remove fixed class so it goes back into flow immediately
        nav.classList.remove('fixed');

        // clear any inline styles GSAP set (transform/opacity)
        // clear only what we altered so other inline styles are preserved
        nav.style.transform = '';
        nav.style.opacity = '';

        // remove spacer so no empty space remains
        spacer.style.height = '0px';
      }

      window.addEventListener('scroll', () => {
        const y = window.scrollY;

        // scroll down past 30px -> animate into fixed position (only do once)
        if (y > 30 && !isFixed) {
          makeFixedAndReveal();
          isFixed = true;
        }

        // scroll up to top -> instantly return to normal (no animation)
        if (y <= 30 && isFixed) {
          resetToNormalInstant();
          isFixed = false;
        }
      });
    });




