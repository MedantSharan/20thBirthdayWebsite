const navExperience = document.getElementById("exp");
const navEducation = document.getElementById("edu");
const navSkills = document.getElementById("ski");

const experienceContainer = document.getElementById("experience");
const educationContainer = document.getElementById("education");
const skillsContainer = document.getElementById("skills");

const sendMessage = document.getElementById("send");

sendMessage.addEventListener("click", () => {
  prompt("What is your message?");
  alert("Anjali will try and get back to you.");
  console.log("Thankyou! We will get back to you soon 🤠");
});

navExperience.addEventListener("click", () => {
  navExperience.classList.add("active");
  navSkills.classList.remove("active");
  navEducation.classList.remove("active");

  experienceContainer.hidden = false;
  educationContainer.hidden = true;
  skillsContainer.hidden = true;
});

navEducation.addEventListener("click", () => {
  navExperience.classList.remove("active");
  navSkills.classList.remove("active");
  navEducation.classList.add("active");

  experienceContainer.hidden = true;
  educationContainer.hidden = false;
  skillsContainer.hidden = true;
});

navSkills.addEventListener("click", () => {
  navExperience.classList.remove("active");
  navSkills.classList.add("active");
  navEducation.classList.remove("active");

  experienceContainer.hidden = true;
  educationContainer.hidden = true;
  skillsContainer.hidden = false;
});

const toggle = document.getElementById("darkToggle");
const toggleBtn = document.getElementById("toggleBtn");


toggle.addEventListener("click", () => {
  if (toggle.classList.contains("toggleOff")) {
    toggle.classList.remove("toggleOff");
    toggle.classList.add("toggleOn");
    toggleBtn.classList.remove("off");
    toggleBtn.classList.add("on");
     document.body.classList.remove('lightMode');
     document.body.classList.add('darkMode');
    /*document.querySelectorAll('.darkModeText')*/
  } else {
    toggle.classList.add("toggleOff");
    toggle.classList.remove("toggleOn");
    toggleBtn.classList.add("off");
    toggleBtn.classList.remove("on");
    document.body.classList.add('lightMode');
     document.body.classList.remove('darkMode')
  }
});
