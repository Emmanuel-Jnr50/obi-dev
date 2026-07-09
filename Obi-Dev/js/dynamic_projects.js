  // 1. Parse URL for query parameter
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

const projects = {
  temnixlabs: {
    name: "TEMNIX Labs",
    service: "Web Design, Software Enginnering, Online Web Service, Front-End Developement, UI/UX Design",
    mainimg: "/img/TEMNIX - TRIAL.png",
    servicetwo: "Web Design, Front-End Developement, UI/UX Design",
    date: "August, 2025",
    client: "Temnix - Software Agency",
    info: `<h4>Description:</h4>
            <p><b style="color: #FDF9CF;">Temnix Labs</b> is a clean, responsive <b style="color: #FDF9CF;">business website</b> built to showcase the brand's services with <b style="color: #FDF9CF;">clarity and professionalism</b>.<br><br>The website features a modern layout, smooth animations, mobile-first design, and an <b style="color: #FDF9CF;">intuitive user flow</b> that makes navigation simple for visitors.<br><br>The project emphasizes brand trust, visual balance, and <b style="color: #FDF9CF;">seamless interaction</b> across all devices.<br><br></p>
            
            <h4 style="margin-top: 40px;">Tools and Technologies Used:</h4>
            <div class="skill-set">
              <span class="base">
                <img src="/icons/html-5-svgrepo-com.svg" alt="">
                <p>HTML</p>
              </span>
              <span class="base">
                  <img src="/icons/css-3-svgrepo-com.svg" alt="">
                  <p>CSS3</p>
              </span>
              <span class="base">
                  <img src="/icons/js-svgrepo-com.svg" alt="">
                  <p>Javascript</p>
              </span>
              <span class="base">
                  <img src="/icons/tailwind-svgrepo-com.svg" alt="">
                  <p>Tailwind CSS</p>
              </span>
              <span class="base">
                  <img src="/icons/figma-svgrepo-com.svg" alt="">
                  <p>Figma</p>
              </span>
              <span class="base">
                <img src="/img/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png" alt="">
                <p>GSAP</p>
              </span>
            </div>`,
    livelink: "https://www.temnix.com",
    imgsection: `
                <div class="image">
                    <img src="/img/TEMNIX - TRIAL.png" alt="">
                </div>
            `,
    screenshotone: "/img/TEMNIX - HOME.png",
    screenshottwo: "/img/TEMNIX - ABOUT.png",
    screenshotthree: "/img/TEMNIX - SERVICES.png",
    screenshotfour: "/img/TEMNIX - PROJECTS.png",
    screenshotfive: "/img/TEMNIX - CONTACT.png",
    relatedimg: "/img/mockup portfolio-2.png",
    relatedname: `<h3>GoHub Prayer App</h3>
                  <a href="/project-details.html?id=project3" >UI/UX Design</a>`,
    relatedimgtwo: "/img/buytree mock.png",
    relatednametwo: `<h3>BuyTree - Online Store</h3>
                  <a href="/project-details.html?id=project2" >Web Application</a>`
  },
  buytree: {
    name: "BuyTree",
    service: "Web Design, E-Commerce Setups, SaaS Development, Front-End Developement, UI/UX Design",
    mainimg: "/img/buy-tree-landing-full.png",
    servicetwo: "E-Commerce Setups, SaaS Development, Front-End Developement, UI/UX Design",
    date: "April 01, 2026",
    client: "Temnix Labs & BuyTree NG",
    info: `<h4>Description:</h4>
            <p >A<b style="color: #FDF9CF;"> Nigeria-first</b> commerce platform built to empower sellers with <b style="color: #FDF9CF;">simple storefront creation</b>, smarter product management, and a smoother <b style="color: #FDF9CF;">online selling</b> experience.<br><br>

            <b style="color: #FDF9CF;">BuyTree</b> is a digital commerce concept created to support <b style="color: #FDF9CF;">small businesses</b> and <b style="color: #FDF9CF;">independent vendors</b> by giving them a simple way to launch and manage their own online stores. Inspired by modern e-commerce platforms, the experience was reimagined for the local market with a stronger focus on <b style="color: #FDF9CF;">accessibility, product presentation, and ease of use</b>.<br><br>

            The platform explores features that go beyond basic storefronts, including smarter tools for organizing products, managing sales flow, and <b style="color: #FDF9CF;">helping sellers grow their online presence</b> more effectively.</p>
            
            <h4 style="margin-top: 60px;">Tools and Technologies Used:</h4>
                <div class="skill-set">
                  <span class="base">
                    <img src="/icons/html-5-svgrepo-com.svg" alt="">
                    <p>HTML</p>
                  </span>
                  <span class="base">
                    <img src="/icons/react-svgrepo-com.svg" alt="">
                    <p>React js</p>
                  </span>
                  <span class="base">
                      <img src="/icons/css-3-svgrepo-com.svg" alt="">
                      <p>CSS3</p>
                  </span>
                  <span class="base">
                      <img src="/icons/js-svgrepo-com.svg" alt="">
                      <p>Javascript</p>
                  </span>
                  <span class="base">
                      <img src="/icons/tailwind-svgrepo-com.svg" alt="">
                      <p>Tailwind CSS</p>
                  </span>
                  <span class="base">
                      <img src="/icons/figma-svgrepo-com.svg" alt="">
                      <p>Figma</p>
                  </span>
                </div>
            `,
    imgsection: `<div class="image"><img src="/img/buy-tree-landing-full.png" alt="" id="projectImgOne"></div>`,
    screenshotone: "/img/Hero Section.png",
    screenshottwo: "/img/What We Offer Section.png",
    screenshotthree: "/img/How It Works Section.png",
    screenshotfour: "/img/temnix-contact-graphic.png",
    screenshotfive: "/img/temnix-footer-graphic.png",
    // relatedimg: "/img/mockup portfolio-2.png",
    // relatedname: `<h3>GoHub Prayer App</h3>
    //               <a href="/project-details.html?id=project3" >UI/UX Design</a>`,
    // relatedimgtwo: "/img/buytree mock.png",
    // relatednametwo: `<h3>BuyTree - Online Store</h3>
    //               <a href="/project-details.html?id=project2" >Web Application</a>`,
    livelink: "https://github.com/Emmanuel-Jnr50/buytree_ui/1"
  },
  fidelityapp: {
    name: "Fidelity Bank App",
    service: "App Design, Redesign Casestudy, User Experience Research, Front-End Developement, UI/UX Design",
    servicetwo: "Mobile App Design, User Experience Research, UI/UX Design",
    date: "January 2025",
    mainimg: "/img/Fidelity UI Redesign.png",
    client: "Fidelity Bank PLC",
    info: `<h4 style="padding-top: 0px; font-size: 16px; font-weight: 600;">Description:</h4>
            <p style="padding-bottom: 20px;">A modern <b style="color: #FDF9CF;">mobile banking redesign</b> focused on clarity, accessibility, and a smoother user experience. <br><br>
                This concept redesign reimagines the <b style="color: #FDF9CF;">Fidelity Bank</b> mobile app with a cleaner <b style="color: #FDF9CF;">visual system</b>, improved <b style="color: #FDF9CF;">information hierarchy</b>, and a more <b style="color: #FDF9CF;">intuitive interface</b> for everyday banking tasks. <br><br> The goal was to simplify how users interact with key financial features while creating a more polished and user-friendly digital experience. <br><br>
                By refining layout structure, <b style="color: #FDF9CF;">typography</b>, spacing, and <b style="color: #FDF9CF;">visual balance</b>, the redesign aims to make account management, navigation, and financial insights easier to understand <b style="color: #FDF9CF;">at a glance</b>.

                </p>

            
            `
            ,
    imgsection: `<div class="image" style="position: relative; top: 0px;"><img src="/img/casestudy-workaround.png" alt="" id="projectImgOne"></div>`,
    relatedimg: "/img/mockup portfolio-2.png",
    relatedname: `<h3>GoHub Prayer App</h3>
                  <a href="/project-details.html?id=project3" >UI/UX Design</a>`,
    relatedimgtwo: "/img/buytree mock.png",
    relatednametwo: `<h3>BuyTree - Online Store</h3>
                  <a href="/project-details.html?id=project2" >Web Application</a>`
  }, 
  govote: {
    name: "GO-Vote",
    service: "Web Application Design, Front-End Developement, UI/UX Design, Mobile Application",
    mainimg: "/img/GOVOTE - MOCK.png",
    servicetwo: "Web Application Development, Digital Voting System Development, Front-End Developement, UI/UX Design",
    date: "June, 2026",
    client: "Godfrey Okoye University, Enugu",
    info: `<h4>Description:</h4>
            <p>GoVote is  a <b style="color: #F9FDCF;">campus event engagement platform</b> is a mobile-first web application designed to <b style="color: #F9FDCF;">modernize</b> how schools and organizations manage competitions, audience participation, and event engagement. Built with a <b style="color: #F9FDCF;">focus on transparency, accessibility, and user experience,</b> the platform enables organizers to <b style="color: #F9FDCF;">host digital contests</b> where participants can showcase themselves, receive audience support, and compete fairly through a combination of <b style="color: #F9FDCF;">audience voting</b> and judges' scores. It also provides organizers with an <b style="color: #F9FDCF;">intuitive dashboard</b> to manage contestants, monitor engagement, track attendance, and oversee event activities <b style="color: #F9FDCF;">from a single platform.</b><br><br></p>
            
            <h4>Problem:</h4>
            <p>Traditional campus events often rely on <b style="color: #F9FDCF;">paper ballots</b>, <b style="color: #F9FDCF;">manual attendance sheets</b>, and <b style="color: #F9FDCF;">time-consuming result compilation</b>, making the process inefficient, difficult to verify, and less engaging for participants. These methods can lead to <b style="color: #F9FDCF;">counting errors, delays, limited audience involvement, and poor transparency</b> .</p>
            
            <h4>Solution:</h4>
            <p>The platform <b style="color: #F9FDCF;">digitizes</b> the entire event experience by <b style="color: #F9FDCF;">enabling secure audience voting</b>, electronic attendance tracking, and <b style="color: #F9FDCF;">fair results</b> through a balanced combination of judges' scores and audience participation. Contestants can easily <b style="color: #F9FDCF;">share their profiles to gather support</b> from anywhere, creating a <b style="color: #F9FDCF;">faster, more engaging, and transparent event experience</b> for both organizers and participants.</p>
            
            <h4 style="margin-top: 60px;">Tools and Technologies Used:</h4>
                <div class="skill-set">
                  <span class="base">
                    <img src="/icons/html-5-svgrepo-com.svg" alt="">
                    <p>HTML</p>
                  </span>
                  <span class="base">
                    <img src="/icons/react-svgrepo-com.svg" alt="">
                    <p>React js</p>
                  </span>
                  <span class="base">
                      <img src="/icons/css-3-svgrepo-com.svg" alt="">
                      <p>CSS3</p>
                  </span>
                  <span class="base">
                      <img src="/icons/js-svgrepo-com.svg" alt="">
                      <p>Javascript</p>
                  </span>
                  <span class="base">
                      <img src="/icons/tailwind-svgrepo-com.svg" alt="">
                      <p>Tailwind CSS</p>
                  </span>
                  <span class="base">
                      <img src="/icons/figma-svgrepo-com.svg" alt="">
                      <p>Figma</p>
                  </span>
                  <span class="base">
                      <img src="/icons/mongo-svgrepo-com.svg" alt="">
                      <p>MongoDB</p>
                  </span>
                </div>
            `,
    imgsection: `<div class="image"><img src="/img/GOVOTE - MOCK.png" alt="" id="projectImgOne"></div>`,
    screenshotone: "/img/GOVOTE - BW.png",
    screenshottwo: "/img/What We Offer Section.png",
    screenshotthree: "/img/How It Works Section.png",
    screenshotfour: "/img/temnix-contact-graphic.png",
    screenshotfive: "/img/temnix-footer-graphic.png",
    // relatedimg: "/img/mockup portfolio-2.png",
    // relatedname: `<h3>GoHub Prayer App</h3>
    //               <a href="/project-details.html?id=project3" >UI/UX Design</a>`,
    // relatedimgtwo: "/img/buytree mock.png",
    // relatednametwo: `<h3>BuyTree - Online Store</h3>
    //               <a href="/project-details.html?id=project2" >Web Application</a>`,
    livelink: "www.govote.kesug.com"
  },
  nest: {
    name: "Nest",
    service: "Mobile App Development, SaaS Development, Full-Stack Developement, UI/UX Design",
    mainimg: "/img/clippy-mock.png",
    servicetwo: "E-Commerce Setups, SaaS Development, Front-End Developement, UI/UX Design",
    date: "May 25th, 2026",
    client: "Personal Project",
    info: `<h4>Description:</h4>
            <p >A<b style="color: #FDF9CF;"> Nigeria-first</b> commerce platform built to empower sellers with <b style="color: #FDF9CF;">simple storefront creation</b>, smarter product management, and a smoother <b style="color: #FDF9CF;">online selling</b> experience.<br><br>

            <b style="color: #FDF9CF;">BuyTree</b> is a digital commerce concept created to support <b style="color: #FDF9CF;">small businesses</b> and <b style="color: #FDF9CF;">independent vendors</b> by giving them a simple way to launch and manage their own online stores. Inspired by modern e-commerce platforms, the experience was reimagined for the local market with a stronger focus on <b style="color: #FDF9CF;">accessibility, product presentation, and ease of use</b>.<br><br>

            The platform explores features that go beyond basic storefronts, including smarter tools for organizing products, managing sales flow, and <b style="color: #FDF9CF;">helping sellers grow their online presence</b> more effectively.</p>
            
            <h4 style="margin-top: 60px;">Tools and Technologies Used:</h4>
                <div class="skill-set">
                  <span class="base">
                    <img src="/icons/react-svgrepo-com.svg" alt="">
                    <p>React Native</p>
                  </span>
                  <span class="base">
                      <img src="/icons/css-3-svgrepo-com.svg" alt="">
                      <p>CSS3</p>
                  </span>
                  <span class="base">
                      <img src="/icons/js-svgrepo-com.svg" alt="">
                      <p>Javascript</p>
                  </span>
                  <span class="base">
                      <img src="/icons/tailwind-svgrepo-com.svg" alt="">
                      <p>Tailwind CSS</p>
                  </span>
                  <span class="base">
                      <img src="/icons/figma-svgrepo-com.svg" alt="">
                      <p>Figma</p>
                  </span>
                </div>
            `,
    imgsection: `<div class="image"><img src="/img/clippy-mock.png" alt="" id="projectImgOne"></div>`,
    screenshotone: "/img/Hero Section.png",
    screenshottwo: "/img/What We Offer Section.png",
    screenshotthree: "/img/How It Works Section.png",
    screenshotfour: "/img/temnix-contact-graphic.png",
    screenshotfive: "/img/temnix-footer-graphic.png",
    livelink: "https://github.com/Emmanuel-Jnr50/buytree_ui/1"
  },
  facit: {
    name: "FACIT - Faculty Website",
    service: "Web Development & Design, Full-Stack Developement, UI/UX Design",
    mainimg: "/img/FACIT - MOCK.png",
    servicetwo: "E-Commerce Setups, SaaS Development, Front-End Developement, UI/UX Design",
    date: "July 2nd, 2026",
    client: "Faculty Of Computing & Information Technology - Godfrey Okoye University",
    info: `<h4>Description:</h4>
            <p >A<b style="color: #FDF9CF;"> Nigeria-first</b> commerce platform built to empower sellers with <b style="color: #FDF9CF;">simple storefront creation</b>, smarter product management, and a smoother <b style="color: #FDF9CF;">online selling</b> experience.<br><br>

            <b style="color: #FDF9CF;">BuyTree</b> is a digital commerce concept created to support <b style="color: #FDF9CF;">small businesses</b> and <b style="color: #FDF9CF;">independent vendors</b> by giving them a simple way to launch and manage their own online stores. Inspired by modern e-commerce platforms, the experience was reimagined for the local market with a stronger focus on <b style="color: #FDF9CF;">accessibility, product presentation, and ease of use</b>.<br><br>

            The platform explores features that go beyond basic storefronts, including smarter tools for organizing products, managing sales flow, and <b style="color: #FDF9CF;">helping sellers grow their online presence</b> more effectively.</p>
            
            <h4 style="margin-top: 60px;">Tools and Technologies Used:</h4>
                <div class="skill-set">
                  <span class="base">
                    <img src="/icons/html-5-svgrepo-com.svg" alt="">
                    <p>HTML</p>
                  </span>
                  <span class="base">
                    <img src="/icons/react-svgrepo-com.svg" alt="">
                    <p>React js</p>
                  </span>
                  <span class="base">
                      <img src="/icons/css-3-svgrepo-com.svg" alt="">
                      <p>CSS3</p>
                  </span>
                  <span class="base">
                      <img src="/icons/js-svgrepo-com.svg" alt="">
                      <p>Javascript</p>
                  </span>
                  <span class="base">
                      <img src="/icons/tailwind-svgrepo-com.svg" alt="">
                      <p>Tailwind CSS</p>
                  </span>
                  <span class="base">
                      <img src="/icons/figma-svgrepo-com.svg" alt="">
                      <p>Figma</p>
                  </span>
                </div>
            `,
    imgsection: `<div class="image"><img src="/img/FACIT - MOCK.png" alt="" id="projectImgOne"></div>`,
    screenshotone: "/img/FACIT - HOME.png",
    screenshottwo: "/img/FACIT - ABOUT.png",
    screenshotthree: "/img/How It Works Section.png",
    screenshotfour: "/img/temnix-contact-graphic.png",
    screenshotfive: "/img/temnix-footer-graphic.png",
    livelink: "https://www.gofacit.com"
  },
  gunique: {
    name: "G-Unique",
    service: "Web Development & Design,Ecommerce Setup, Full-Stack Developement, UI/UX Design",
    mainimg: "/img/clippy-mock.png",
    servicetwo: "E-Commerce Setups, SaaS Development, Front-End Developement, UI/UX Design",
    date: "September, 2024",
    client: "G-Unique Fashion Store",
    info: `<h4>Description:</h4>
            <p >A<b style="color: #FDF9CF;"> Nigeria-first</b> commerce platform built to empower sellers with <b style="color: #FDF9CF;">simple storefront creation</b>, smarter product management, and a smoother <b style="color: #FDF9CF;">online selling</b> experience.<br><br>

            <b style="color: #FDF9CF;">BuyTree</b> is a digital commerce concept created to support <b style="color: #FDF9CF;">small businesses</b> and <b style="color: #FDF9CF;">independent vendors</b> by giving them a simple way to launch and manage their own online stores. Inspired by modern e-commerce platforms, the experience was reimagined for the local market with a stronger focus on <b style="color: #FDF9CF;">accessibility, product presentation, and ease of use</b>.<br><br>

            The platform explores features that go beyond basic storefronts, including smarter tools for organizing products, managing sales flow, and <b style="color: #FDF9CF;">helping sellers grow their online presence</b> more effectively.</p>
            
            <h4 style="margin-top: 60px;">Tools and Technologies Used:</h4>
                <div class="skill-set">
                  <span class="base">
                    <img src="/icons/html-5-svgrepo-com.svg" alt="">
                    <p>HTML</p>
                  </span>
                  <span class="base">
                    <img src="/icons/react-svgrepo-com.svg" alt="">
                    <p>React js</p>
                  </span>
                  <span class="base">
                      <img src="/icons/css-3-svgrepo-com.svg" alt="">
                      <p>CSS3</p>
                  </span>
                  <span class="base">
                      <img src="/icons/js-svgrepo-com.svg" alt="">
                      <p>Javascript</p>
                  </span>
                  <span class="base">
                      <img src="/icons/tailwind-svgrepo-com.svg" alt="">
                      <p>Tailwind CSS</p>
                  </span>
                  <span class="base">
                      <img src="/icons/figma-svgrepo-com.svg" alt="">
                      <p>Figma</p>
                  </span>
                </div>
            `,
    imgsection: `<div class="image"><img src="/img/guniq-landing.png" alt="" id="projectImgOne"></div>`,
    screenshotone: "/img/Hero Section.png",
    screenshottwo: "/img/What We Offer Section.png",
    screenshotthree: "/img/How It Works Section.png",
    screenshotfour: "/img/temnix-contact-graphic.png",
    screenshotfive: "/img/temnix-footer-graphic.png",
    livelink: "https://www.gunique.com"
  },
};

// projectName, projectService, projectDate, projectClient, projectDesciption, projectTypography

document.addEventListener("DOMContentLoaded", function () {
  const project = projects[projectId];

  if (project) {
    document.getElementById('projectName').textContent = project.name;
    document.getElementById('projectDate').textContent = project.date;
    document.getElementById('mainProjectImg').src = project.mainimg;
    document.getElementById('projectService').textContent = project.service;
    document.getElementById('projectServiceTwo').textContent = project.servicetwo;
    document.getElementById('projectDescription').innerHTML = project.info;
    document.getElementById('projectClient').textContent = project.client;
    document.getElementById('projectLink').href = project.livelink;
    document.getElementById('projectImgSection').innerHTML = project.imgsection;
    document.getElementById('screenshotOne').src = project.screenshotone;
    document.getElementById('screenshotTwo').src = project.screenshottwo;
    document.getElementById('screenshotThree').src = project.screenshotthree;
    document.getElementById('screenshotFour').src = project.screenshotfour;
    document.getElementById('screenshotFive').src = project.screenshotfive;
    document.getElementById('relatedName').innerHTML = project.relatedname;
    document.getElementById('relatedImage').src = project.relatedimg;
    document.getElementById('relatedNameTwo').innerHTML = project.relatednametwo;
    document.getElementById('relatedImageTwo').src = project.relatedimgtwo;
    
    // document.getElementById('productOldPrice').textContent = `₦${product.oldPrice.toLocaleString()} NGN`;
  } else {
    document.getElementById('projectDetails').innerHTML = `<p style="text-align: center; font-size: 30px; font-weight: bold; padding: 0 30px;">Product not found</p>`;
  }
});


// // SCROLL STACK EFFECT

// const cards = document.querySelectorAll(".image");

// window.addEventListener("scroll", () => {

//     cards.forEach((card, index) => {

//         const rect = card.getBoundingClientRect();

//         // how close card is to top
//         const offset = rect.top;

//         // scale amount
//         let scale = 1;

//         if(offset < 100){
//             scale = 1 - Math.abs(offset) * 0.0005;
//         }

//         // limit scaling
//         scale = Math.max(scale, 0.9);

//         card.style.transform = `scale(${scale})`;

//     });

// });