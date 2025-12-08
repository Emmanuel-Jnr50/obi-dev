  // 1. Parse URL for query parameter
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

const projects = {
  project1: {
    name: "Box-Shaped Bags",
    service: "Lady's Bag",
    date: "March 14th, 2022",
    client: "John Doe",
    info: "<p>Some text...</p>",
    image: "images/First-Class-Quality-Mini-Square-Box-Hand-Bag-For-Ladies.jpeg",
    typography: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut magni eos ratione voluptatem sequi nesciunt."
  },
};

// projectName, projectService, projectDate, projectClient, projectDesciption, projectTypography

document.addEventListener("DOMContentLoaded", function () {
  const project = projects[projectId];

  if (project) {
    // document.getElementById('productImg').src = product.image;
    document.getElementById('projectName').textContent = product.name;
    document.getElementById('productService').textContent = product.service;
    document.getElementById('projectDescription').innerHTML = product.info;
    document.getElementById('productDate').textContent = product.date;
    document.getElementById('productClient').textContent = product.client;
    document.getElementById('productTypography').textContent = product.typography;
    // document.getElementById('productOldPrice').textContent = `₦${product.oldPrice.toLocaleString()} NGN`;
  } else {
    document.getElementById('projectDetails').innerHTML = "<p>Product not found</p>";
  }
});
