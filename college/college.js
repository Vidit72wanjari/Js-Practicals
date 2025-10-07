
const students = [
  {
    name: "Anushka Gondane",
    img: "WhatsApp Image 2025-07-24 at 09.49.45.jpeg",
    about: "Java Developer | DSA Enthusiast | AI Projects"
  },
  {
    name: "Shruti Yewale",
    img: "WhatsApp Image 2025-07-24 at 09.50.05.jpeg",
    about: "Web Designer | Creative Soul | UI/UX lover"
  },
  {
    name: "Ishika Paunikar",
    img: "23070521186_Shruti Yewale.jpg",
    about: "ML Learner | Python Developer | Tech Blogger"
  },
  {
    name: "Shrunal Mehar",
    img: "WhatsApp Image 2025-09-12 at 14.40.37.jpeg",
    about: "Cloud Computing | Backend Developer"
  }
];

const container = document.getElementById('studentGrid');

students.forEach(student => {
  const card = document.createElement('div');
  card.className = 'student-card';
  card.innerHTML = `
    <img src="${student.img}" alt="${student.name}">
    <h4>${student.name}</h4>
    <p>${student.about}</p>
  `;
  container.appendChild(card);
});


let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(s => s.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); 
}
