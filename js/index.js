const homePage = document.getElementById("Home-Page");
const aboutMe = document.getElementById("About-Me");
const contactMe = document.getElementById("Contact-Me");
const github = document.getElementById("Github-Link");

const box = document.getElementById("main-content");
function loadPage(webpage) {
  document.scrollingElement.scroll(0, 1);
  fetch(`./pages/${webpage}.html`)
    .then((response) => response.text())
    .then((html) => {
      box.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

function openWebPage(url) {
  window.open(url, "_blank");
}

function toggleAbout() {
  homePage.classList.remove("selected-link");
  aboutMe.classList.add("selected-link");
  loadPage(`about`);
}

function toggleHome() {
  aboutMe.classList.remove("selected-link");
  homePage.classList.add("selected-link");
  loadPage(`intro`);
}

contactMe.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
});

aboutMe.addEventListener("click", toggleAbout);
homePage.addEventListener("click", toggleHome);

toggleHome();





// GO TO TOP

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
