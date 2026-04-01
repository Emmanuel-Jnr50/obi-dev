  // 1. Parse URL for query parameter
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

const projects = {
  project1: {
    name: "TEMNIX Labs",
    service: "Web Design, Software Enginnering, Online Web Service, Front-End Developement, UI/UX Design",
    servicetwo: "Web Design, Front-End Developement, UI/UX Design",
    date: "August 14th, 2025",
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
            </div>
            
            
            <h4 style="margin-top: 40px;">Typography & Colors:</h4>
                <p>We used the elegant font of name "Poppins" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <span style="display: flex; gap: 10px">
                  <i style="background-color: #8c8c8c; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: #101010; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: white; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i>
                </span>
                </span>
                </p>`,
    imgsection: `<div class="image"><img src="/img/temnix-home-graphic.png" alt="" id="projectImgOne"></div>
                <div class="image"><img src="img/temnix-about-graphic.png" alt="" id="projectImgTwo"></div>
                <div class="image"><img src="img/temnix-projects-graphic.png" alt="" id="projectImgThree"></div>
                <div class="image"><img src="img/temnix-servic-graphic.png" alt="" id="projectImgFour"></div>
                <div class="image"><img src="img/temnix-contact-graphic.png" alt="" id="projectImgFive"></div>`,
    relatedimg: "/img/mockup portfolio-2.png",
    relatedname: `<h3>GoHub Prayer App</h3>
                  <a href="/project-details.html?id=project3" ></p>UI/UX Design</p></a>`,
    relatedimgtwo: "/img/buytree mock.png",
    relatednametwo: `<h3>BuyTree - Online Store</h3>
                  <a href="/project-details.html?id=project2" ></p>Web Application</p></a>`
  },
  project2: {
    name: "BuyTree",
    service: "Web Design, E-Commerce Setups, SaaS Development, Front-End Developement, UI/UX Design",
    servicetwo: "E-Commerce Setups, SaaS Development, Front-End Developement, UI/UX Design",
    date: "June 22nd, 2024",
    client: "Temnix Labs & BuyTree NG",
    info: `<h4>Description:</h4>
            <p >A<b style="color: #FDF9CF;"> Nigeria-first</b> commerce platform built to empower sellers with <b style="color: #FDF9CF;">simple storefront creation</b>, smarter product management, and a smoother <b style="color: #FDF9CF;">online selling</b> experience.<br><br>

            <b style="color: #FDF9CF;">BuyTree</b> is a digital commerce concept created to support <b style="color: #FDF9CF;">small businesses</b> and <b style="color: #FDF9CF;">independent vendors</b> by giving them a simple way to launch and manage their own online stores. Inspired by modern e-commerce platforms, the experience was reimagined for the local market with a stronger focus on <b style="color: #FDF9CF;">accessibility, product presentation, and ease of use</b>.<br><br>

            The platform explores features that go beyond basic storefronts, including smarter tools for organizing products, managing sales flow, and <b style="color: #FDF9CF;">helping sellers grow their online presence</b> more effectively.</p>
            
            <h4 style="margin-top: 40px;">Tools and Technologies Used:</h4>
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
    imgsection: `<div class="image"><img src="/img/casestudy-workaround.png" alt="" id="projectImgOne"></div>
                <div class="image two"><img src="/img/before-fidelity.png" alt="" id="projectImgTwo"></div>
                <div class="image two"><img src="/img/after-fidelity.png" alt="" id="projectImgThree"></div>
                <div class="image"><img src="/img/multiple-mockup.png" alt="" id="projectImgFour"></div>
                <div class="image gif"><img src="/img/Dashboard.gif" alt="" id="projectImgFive"></div>`,
    relatedimg: "/img/mockup portfolio-2.png",
    relatedname: `<h3>GoHub Prayer App</h3>
                  <a href="/project-details.html?id=project3" ></p>UI/UX Design</p></a>`,
    relatedimgtwo: "/img/buytree mock.png",
    relatednametwo: `<h3>BuyTree - Online Store</h3>
                  <a href="/project-details.html?id=project2" ></p>Web Application</p></a>`,
    livelink: "https://buy-tree.vercel.app/"
  },
  project3: {
    name: "Fidelity Bank App",
    service: "App Design, Redesign Casestudy, User Experience Research, Front-End Developement, UI/UX Design",
    servicetwo: "Mobile App Design, User Experience Research, UI/UX Design",
    date: "January 2025",
    client: "Fidelity Bank PLC",
    info: `<h4 style="padding-top: 10px;">Description:</h4>
            <p style="padding-bottom: 20px;">A modern <b style="color: #FDF9CF;">mobile banking redesign</b> focused on clarity, accessibility, and a smoother user experience. <br><br>
                This concept redesign reimagines the <b style="color: #FDF9CF;">Fidelity Bank</b> mobile app with a cleaner <b style="color: #FDF9CF;">visual system</b>, improved <b style="color: #FDF9CF;">information hierarchy</b>, and a more <b style="color: #FDF9CF;">intuitive interface</b> for everyday banking tasks. <br><br> The goal was to simplify how users interact with key financial features while creating a more polished and user-friendly digital experience. <br><br>
                By refining layout structure, <b style="color: #FDF9CF;">typography</b>, spacing, and <b style="color: #FDF9CF;">visual balance</b>, the redesign aims to make account management, navigation, and financial insights easier to understand <b style="color: #FDF9CF;">at a glance</b>.

                </p>
            
            `
            ,
    imgsection: `<div class="image"><img src="/img/casestudy-workaround.png" alt="" id="projectImgOne"></div>
                <div class="image two"><img src="/img/before-fidelity.png" alt="" id="projectImgTwo"></div>
                <div class="image two"><img src="/img/after-fidelity.png" alt="" id="projectImgThree"></div>
                <div class="image"><img src="/img/multiple-mockup.png" alt="" id="projectImgFour"></div>
                <div class="image gif"><img src="/img/Dashboard.gif" alt="" id="projectImgFive"></div>`,
    relatedimg: "/img/mockup portfolio-2.png",
    relatedname: `<h3>GoHub Prayer App</h3>
                  <a href="/project-details.html?id=project3" ></p>UI/UX Design</p></a>`,
    relatedimgtwo: "/img/buytree mock.png",
    relatednametwo: `<h3>BuyTree - Online Store</h3>
                  <a href="/project-details.html?id=project2" ></p>Web Application</p></a>`
  }, 
};

// projectName, projectService, projectDate, projectClient, projectDesciption, projectTypography

document.addEventListener("DOMContentLoaded", function () {
  const project = projects[projectId];

  if (project) {
    document.getElementById('projectName').textContent = project.name;
    document.getElementById('projectDate').textContent = project.date;
    document.getElementById('projectService').textContent = project.service;
    document.getElementById('projectServiceTwo').textContent = project.servicetwo;
    document.getElementById('projectDescription').innerHTML = project.info;
    document.getElementById('projectClient').textContent = project.client;
    document.getElementById('projectLink').href = project.livelink;
    document.getElementById('projectImgSection').innerHTML = project.imgsection;
    document.getElementById('relatedName').innerHTML = project.relatedname;
    document.getElementById('relatedImage').src = project.relatedimg;
    document.getElementById('relatedNameTwo').innerHTML = project.relatednametwo;
    document.getElementById('relatedImageTwo').src = project.relatedimgtwo;
    
    // document.getElementById('productOldPrice').textContent = `₦${product.oldPrice.toLocaleString()} NGN`;
  } else {
    document.getElementById('projectDetails').innerHTML = `<p style="text-align: center; font-size: 30px; font-weight: bold; padding: 0 30px;">Product not found</p>`;
  }
});

