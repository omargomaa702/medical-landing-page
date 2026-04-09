let Links = document.querySelectorAll("header .container nav ul li a");
Links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.classList.add('active');
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("active");
  });
});


let menuBars = document.querySelector("header .container .accounts .menu-bars");
menuBars.addEventListener("click", () => {
  let navUl = document.querySelector("header .container nav ul");
  navUl.style.visibility === "hidden" ? navUl.style.visibility = "visible" : navUl.style.visibility = "hidden";
});



