
const latestWorksBtn = document.getElementById('scrollToProjectsBtn');
const aboutMeBtn=document.getElementById('about-me-btn');
const aboutSection = document.querySelector(".about-section");
const xIcon = document.querySelector('.x-icon');
const sun=document.getElementById('sun');

aboutMeBtn.addEventListener("click", () => {
  aboutSection.style.transform = "translate(-50%, -45%) scale(1)";
  aboutSection.style.pointerEvents = "auto";
});

xIcon.addEventListener("click", () => {
  aboutSection.style.transform = "translate(-50%, -45%) scale(0)";
  aboutSection.style.pointerEvents = "none";
});

  document.getElementById("scrollToProjectsBtn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });

latestWorksBtn.addEventListener('click', (e) => {
  document.body.classList.remove('no-scroll');
 
});

sun.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});