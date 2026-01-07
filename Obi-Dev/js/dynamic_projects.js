  // 1. Parse URL for query parameter
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

const projects = {
  project1: {
    name: "YourPet - Virtual Pet Sanctuary",
    service: "Web Design, Virtual Assistance, Online Web Service, Front-End Developement, UI/UX Design",
    date: "March 14th, 2022",
    client: "Personal Project",
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
  project2: {
    name: "G-Unique Online Store",
    service: "Web Design, E-Commerce Setups, Online Web Service, Front-End Developement, UI/UX Design",
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
    name: "Clockin",
    service: "Web Design, Smart System, Artificial Intelligence, Front-End Developement, UI/UX Design",
    date: "October 23rd, 2025",
    client: "Personal Project",
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
            <p>Temnix Labs is a clean, responsive business website built to showcase the brand's services with clarity and professionalism.<br><br>The website features a modern layout, smooth animations, mobile-first design, and an intuitive user flow that makes navigation simple fro visitors.<br><br>The project emphasizes brand trust, visual balance, and seamless interaction accross all devices.<br><br></p>
            
            <h4>Tools and Technologies Used:</h4>
            <p><b style="color:#FDF9CF;">• React.js</b> - Structure and semantic layout</p><br>
            <p><b style="color:#FDF9CF;">• Tailwind CSS</b> - Custom styling, animations, responsiveness</p><br>
            <p><b style="color:#FDF9CF;">• Javascript</b>  - Interactive elements and dynamic components</p><br>
            <p><b style="color:#FDF9CF;">• Supabase</b> - Database & Backend Server</p><br>
            <p><b style="color:#FDF9CF;">• Git/GitHub</b> - Version control and project management</p>`,
    image1: "/img/MOCKUP.png",
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
    document.getElementById('projectLink') = project.link;
    // document.getElementById('productOldPrice').textContent = `₦${product.oldPrice.toLocaleString()} NGN`;
  } else {
    document.getElementById('projectDetails').innerHTML = "<p>Product not found</p>";
  }
});

