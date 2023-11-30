const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();

year.textContent = currentYear;

/* Make mobile navigation work*/

const btnNav = document.querySelector(".btn-mobile-navigation");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("navigation-open");
});

/* Smooth scrolling animation */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);

      section.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-navigation-link")) {
      header.classList.toggle("navigation-open");
    }
  });
});

/* Sticky navigation */
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky-navigation");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky-navigation");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
