  // 1. Parse URL for query parameter
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

const projects = {
  project1: {
    name: "TEMNIX Labs",
    service: "Web Design, Software Enginnering, Online Web Service, Front-End Developement, UI/UX Design",
    date: "August 14th, 2025",
    client: "Temnix - Software Agency",
    info: `<h4>Description:</h4>
            <p>Temnix Labs is a clean, responsive business website built to showcase the brand's services with clarity and professionalism.<br><br>The website features a modern layout, smooth animations, mobile-first design, and an intuitive user flow that makes navigation simple for visitors.<br><br>The project emphasizes brand trust, visual balance, and seamless interaction across all devices.<br><br></p>
            
            <h4>Tools and Technologies Used:</h4>
            <p><b style="color:#FDF9CF;">• HTML5</b> - Structure and semantic layout</p><br>
            <p><b style="color:#FDF9CF;">• CSS3</b> - Custom styling, animations, responsiveness</p><br>
            <p><b style="color:#FDF9CF;">• Javascript (GSAP & Vanilla JS)</b>  - Interactive elements and dynamic components</p><br>
            <p><b style="color:#FDF9CF;">• Figma</b> - UI/UX Design blueprint</p><br>
            <p><b style="color:#FDF9CF;">• Git/GitHub</b>  - Version control and project management</p>`,
    image1: "/img/temnix-home-graphic.png",
    image2: "img/temnix-about-graphic.png",
    image3: "img/temnix-projects-graphic.png",
    image4: "img/temnix-servic-graphic.png",
    image5: "img/temnix-contact-graphic.png",
    typography: `<h4>Typography & Colors:</h4>
                <p>We used the elegant font of name "Poppins" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <span style="display: flex; gap: 4px">
                  <i style="background-color: #8c8c8c; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: #101010; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: white; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i>
                </span>
                </span>
                </p>`,
    link: "https://www.temnix.com",
  },
  project2: {
    name: "BuyTree",
    service: "Web Design, E-Commerce Setups, SaaS Development, Front-End Developement, UI/UX Design",
    date: "June 22nd, 2024",
    client: "G-Unique Fashion Stores",
    info: `<h4>Description:</h4>
            <p >YourPet is an interactive <b style="color: #FDF9CF;">virtual pet sanctuary</b> designed to let users adopt, care for, and bond with digital pets. <br><br> The platform features a <b style="color: #FDF9CF;">clean UI</b>, smooth animations, <b style="color: #FDF9CF;">daily task systems</b>, and customizable pet interactions. <br><br>Built with a focus on user experience and emotional engagement, YourPet combines playful design with structured functionality to create a relaxing and gamified environment</p>`,
    image1: "img/temnix-home-graphic.png",
    image2: "img/temnix-about-graphic.png",
    image3: "img/temnix-projects-graphic.png",
    image4: "img/temnix-servic-graphic.png",
    image5: "img/temnix-contact-graphic.png",
    typography: `<h4>Typography & Colors:</h4>
                <p>We used the elegant font of name "Poppins" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <i style="background-color: #F4BB3C;></i><i style="background-color: #F4FB3C;"></i>
                <i></i></p>`
  },
  project3: {
    name: "Fidelity Bank App",
    service: "App Design, Redesign Casestudy, User Experience Research, Front-End Developement, UI/UX Design",
    date: "January 2025",
    client: "Fidelity Bank PLC",
    info: `<h4>Description:</h4>
            <p >YourPet is an interactive <b style="color: #FDF9CF;">virtual pet sanctuary</b> designed to let users adopt, care for, and bond with digital pets. <br><br> The platform features a <b style="color: #FDF9CF;">clean UI</b>, smooth animations, <b style="color: #FDF9CF;">daily task systems</b>, and customizable pet interactions. <br><br>Built with a focus on user experience and emotional engagement, YourPet combines playful design with structured functionality to create a relaxing and gamified environment</p>`,
    image1: "img/temnix-home-graphic.png",
    image2: "img/temnix-about-graphic.png",
    image3: "img/temnix-projects-graphic.png",
    image4: "img/temnix-servic-graphic.png",
    image5: "img/temnix-contact-graphic.png",
    typography: `<h4>Typography & Colors:</h4>
                <p>We used the elegant font of name "Poppins" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <i style="background-color: #F4BB3C;></i><i style="background-color: #F4FB3C;"></i>
                <i></i></p>`
  }, 
  project4: {
    name: "TEMNIX Labs",
    service: "Web Design, Software Enginnering, Online Web Service, Front-End Developement, UI/UX Design",
    date: "August 14th, 2025",
    client: "Temnix - Software Agency",
    info: `<h4>Description:</h4>
            <p>Temnix Labs is a clean, responsive business website built to showcase the brand's services with clarity and professionalism.<br><br>The website features a modern layout, smooth animations, mobile-first design, and an intuitive user flow that makes navigation simple for visitors.<br><br>The project emphasizes brand trust, visual balance, and seamless interaction across all devices.<br><br></p>
            
            <h4>Tools and Technologies Used:</h4>
            <p><b style="color:#FDF9CF;">• HTML5</b> - Structure and semantic layout</p><br>
            <p><b style="color:#FDF9CF;">• CSS3</b> - Custom styling, animations, responsiveness</p><br>
            <p><b style="color:#FDF9CF;">• Javascript (GSAP & Vanilla JS)</b>  - Interactive elements and dynamic components</p><br>
            <p><b style="color:#FDF9CF;">• Figma</b> - UI/UX Design blueprint</p><br>
            <p><b style="color:#FDF9CF;">• Git/GitHub</b>  - Version control and project management</p>`,
    image1: "/img/temnix-home-graphic.png",
    image2: "img/temnix-about-graphic.png",
    image3: "img/temnix-projects-graphic.png",
    image4: "img/temnix-servic-graphic.png",
    image5: "img/temnix-contact-graphic.png",
    typography: `<h4>Typography & Colors:</h4>
                <p>We used the elegant font of name "Poppins" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <span style="display: flex; gap: 4px">
                  <i style="background-color: #8c8c8c; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: #101010; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: white; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i>
                </span>
                </span>
                </p>`,
    link: "https://www.temnix.com"
  },
  project5: {
    name: "Clippy",
    service: "Web Design, Software Enginnering, Online Web Service, UI/UX Design",
    date: "Dec 22th, 2025",
    client: "Portfolio Project",
    info: `<h4>Description:</h4>
            <p>Clippy is a web-based <b style="color: #FDF9CF;">content organization tool</b> designed to help users <b style="color: #FDF9CF;">collect, organize , and revisit</b> digital content effortlessly. It solves a common modern problem: saving useful links, ideas, and resources accross the internet, then losing them in bookmarks, chats, or notes.<br><br>
            Clippy provides users with <b style="color: #FDF9CF;">centralized, distraction-free</b> to store and <b style="color: #FDF9CF;">manage content</b> they care about - from articles and design inspiration to videos, notes, and project references.<br><br></p>
            
            <h4>Tools and Technologies Used:</h4>
            <p><b style="color:#FDF9CF;">• HTML5</b> - Structure and semantic layout</p><br>
            <p><b style="color:#FDF9CF;">• CSS3</b> - Custom styling, animations, responsiveness</p><br>
            <p><b style="color:#FDF9CF;">• Javascript (GSAP & Vanilla JS)</b>  - Interactive elements and dynamic components</p><br>
            <p><b style="color:#FDF9CF;">• Google Stitch</b> - UI/UX Design blueprint</p><br>
            <p><b style="color:#FDF9CF;">• Git/GitHub</b>  - Version control and project management</p>`,
    image1: "/img/MOCKUP.png",
    image2: "img/temnix-about-graphic.png",
    image3: "img/temnix-projects-graphic.png",
    image4: "img/temnix-servic-graphic.png",
    image5: "img/temnix-contact-graphic.png",
    typography: `<h4>Typography & Colors:</h4>
                <p>We used the corporate font of name "Inter" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <span style="display: flex; gap: 4px">
                  <i style="background-color: #3030e8; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: #ffffff; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: #fff017ff; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i>
                </span>
                </span>
                </p>`,
    link: "https://github.com/Emmanuel-Jnr50/clippy_ui"
  },
  project6: {
    name: "YogaPin",
    service: "Web Design, UI/UX Design, Online Web Service, Front-End Developement, UI/UX Design",
    date: "August 14th, 2025",
    client: "Temnix - Software Agency",
    info: `<h4>Description:</h4>
            <p>Temnix Labs is a clean, responsive business website built to showcase the brand's services with clarity and professionalism.<br><br>The website features a modern layout, smooth animations, mobile-first design, and an intuitive user flow that makes navigation simple fro visitors.<br><br>The project emphasizes brand trust, visual balance, and seamless interaction accross all devices.<br><br></p>
            
            <h4>Tools and Technologies Used:</h4>
            <p><b style="color:#FDF9CF;">• HTML5</b> - Structure and semantic layout</p><br>
            <p><b style="color:#FDF9CF;">• CSS3</b> - Custom styling, animations, responsiveness</p><br>
            <p><b style="color:#FDF9CF;">• Javascript (GSAP & Vanilla JS)</b>  - Interactive elements and dynamic components</p><br>
            <p><b style="color:#FDF9CF;">• Figma</b> - UI/UX Design blueprint</p><br>
            <p><b style="color:#FDF9CF;">• Git/GitHub</b>  - Version control and project management</p>`,
    image1: "/img/temnix-home-graphic.png",
    image2: "img/temnix-about-graphic.png",
    image3: "img/temnix-projects-graphic.png",
    image4: "img/temnix-servic-graphic.png",
    image5: "img/temnix-contact-graphic.png",
    typography: `<h4>Typography & Colors:</h4>
                <p>We used the elegant font of name "Poppins" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <span style="display: flex; gap: 4px">
                  <i style="background-color: #8c8c8c; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: #101010; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: white; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i>
                </span>
                </span>
                </p>`,
    link: "https://www.temnix.com"
  },
  project7: {
    name: "Fidelity Bank App (Redesign)",
    service: "Web Design, Software Enginnering, Online Web Service, Front-End Developement, UI/UX Design",
    date: "August 14th, 2025",
    client: "Temnix - Software Agency",
    info: `<h4>Description:</h4>
            <p>Temnix Labs is a clean, responsive business website built to showcase the brand's services with clarity and professionalism.<br><br>The website features a modern layout, smooth animations, mobile-first design, and an intuitive user flow that makes navigation simple fro visitors.<br><br>The project emphasizes brand trust, visual balance, and seamless interaction accross all devices.<br><br></p>
            
            <h4>Tools and Technologies Used:</h4>
            <p><b style="color:#FDF9CF;">• HTML5</b> - Structure and semantic layout</p><br>
            <p><b style="color:#FDF9CF;">• CSS3</b> - Custom styling, animations, responsiveness</p><br>
            <p><b style="color:#FDF9CF;">• Javascript (GSAP & Vanilla JS)</b>  - Interactive elements and dynamic components</p><br>
            <p><b style="color:#FDF9CF;">• Figma</b> - UI/UX Design blueprint</p><br>
            <p><b style="color:#FDF9CF;">• Git/GitHub</b>  - Version control and project management</p>`,
    image1: "/img/temnix-home-graphic.png",
    image2: "img/temnix-about-graphic.png",
    image3: "img/temnix-projects-graphic.png",
    image4: "img/temnix-servic-graphic.png",
    image5: "img/temnix-contact-graphic.png",
    typography: `<h4>Typography & Colors:</h4>
                <p>We used the elegant font of name "Poppins" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <span style="display: flex; gap: 4px">
                  <i style="background-color: #8c8c8c; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: #101010; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: white; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i>
                </span>
                </span>
                </p>`,
    link: "https://www.temnix.com"
  },
  project8: {
    name: "Crypto Hound",
    service: "Web Design, Software Enginnering, Online Web Service, Front-End Developement, UI/UX Design",
    date: "August 14th, 2025",
    client: "Temnix - Software Agency",
    info: `<h4>Description:</h4>
            <p>Temnix Labs is a clean, responsive business website built to showcase the brand's services with clarity and professionalism.<br><br>The website features a modern layout, smooth animations, mobile-first design, and an intuitive user flow that makes navigation simple fro visitors.<br><br>The project emphasizes brand trust, visual balance, and seamless interaction accross all devices.<br><br></p>
            
            <h4>Tools and Technologies Used:</h4>
            <p><b style="color:#FDF9CF;">• HTML5</b> - Structure and semantic layout</p><br>
            <p><b style="color:#FDF9CF;">• CSS3</b> - Custom styling, animations, responsiveness</p><br>
            <p><b style="color:#FDF9CF;">• Javascript (GSAP & Vanilla JS)</b>  - Interactive elements and dynamic components</p><br>
            <p><b style="color:#FDF9CF;">• Figma</b> - UI/UX Design blueprint</p><br>
            <p><b style="color:#FDF9CF;">• Git/GitHub</b>  - Version control and project management</p>`,
    image1: "/img/temnix-home-graphic.png",
    image2: "img/temnix-about-graphic.png",
    image3: "img/temnix-projects-graphic.png",
    image4: "img/temnix-servic-graphic.png",
    image5: "img/temnix-contact-graphic.png",
    typography: `<h4>Typography & Colors:</h4>
                <p>We used the elegant font of name "Poppins" to create a bold yet playful design, also displaying our message clearly.<br><br>
                <span style="display: flex; gap: 4px">
                  <i style="background-color: #8c8c8c; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: #101010; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i><i style="background-color: white; padding: 30px; border: 1.5px solid #f9fdcf91; border-radius: 4px;"></i>
                </span>
                </span>
                </p>`,
    link: "https://www.temnix.com"
  },
};

// projectName, projectService, projectDate, projectClient, projectDesciption, projectTypography

document.addEventListener("DOMContentLoaded", function () {
  const project = projects[projectId];

  if (project) {
    document.getElementById('projectImgOne').src = project.image1;
    document.getElementById('projectImgTwo').src = project.image2;
    document.getElementById('projectImgThree').src = project.image3;
    document.getElementById('projectImgFour').src = project.image4;
    document.getElementById('projectImgFive').src = project.image5;
    document.getElementById('projectName').textContent = project.name;
    document.getElementById('projectDate').textContent = project.date;
    document.getElementById('projectService').textContent = project.service;
    document.getElementById('projectDescription').innerHTML = project.info;
    document.getElementById('projectClient').textContent = project.client;
    document.getElementById('projectTypography').innerHTML = project.typography;
    document.getElementById('projectLink').href = project.link;
    
    // document.getElementById('productOldPrice').textContent = `₦${product.oldPrice.toLocaleString()} NGN`;
  } else {
    document.getElementById('projectDetails').innerHTML = `<p style="text-align: center; font-size: 30px; font-weight: bold; padding: 0 30px;">Product not found</p>`;
  }
});

