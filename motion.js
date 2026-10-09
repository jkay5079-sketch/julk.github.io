/* =========================================================
   JULK — LAYER 10
   SCROLL & INTERACTION CONTROLLER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     SCROLL REVEALS
     ------------------------------------------------------- */

  const revealElements = document.querySelectorAll(
    ".julk-reveal"
  );

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });

  }


  /* -------------------------------------------------------
     NAVIGATION — ACTIVE SECTION
     ------------------------------------------------------- */

  const sections = document.querySelectorAll(
    "section[id]"
  );

  const navLinks = document.querySelectorAll(
    ".julk-nav-link[href^='#']"
  );

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {

            link.classList.remove("is-active");

            if (
              link.getAttribute("href") === `#${id}`
            ) {
              link.classList.add("is-active");
            }

          });

        });

      },
      {
        threshold: 0.35
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

  }


  /* -------------------------------------------------------
     SMOOTH INTERNAL NAVIGATION
     ------------------------------------------------------- */

  document.querySelectorAll(
    'a[href^="#"]'
  ).forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetID = link.getAttribute("href");

      if (
        !targetID ||
        targetID === "#"
      ) {
        return;
      }

      const target = document.querySelector(targetID);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.pushState(
        null,
        "",
        targetID
      );

    });

  });


  /* -------------------------------------------------------
     PROJECT HOVER
     ------------------------------------------------------- */

  document.querySelectorAll(
    ".julk-project"
  ).forEach((project) => {

    project.addEventListener(
      "mouseenter",
      () => {
        project.classList.add("is-hovered");
      }
    );

    project.addEventListener(
      "mouseleave",
      () => {
        project.classList.remove("is-hovered");
      }
    );

  });


  /* -------------------------------------------------------
     CONTACT CTA
     ------------------------------------------------------- */

  document.querySelectorAll(
    ".julk-contact-link"
  ).forEach((link) => {

    link.addEventListener("mouseenter", () => {

      const arrow =
        link.querySelector(
          ".julk-contact-arrow"
        );

      if (arrow) {
        arrow.textContent = "→";
      }

    });

  });


  /* -------------------------------------------------------
     KEYBOARD ACCESSIBILITY
     ------------------------------------------------------- */

  document.querySelectorAll(
    ".julk-project, .julk-experiment"
  ).forEach((item) => {

    item.addEventListener("keydown", (event) => {

      if (
        event.key !== "Enter" &&
        event.key !== " "
      ) {
        return;
      }

      event.preventDefault();

      item.click();

    });

  });

});/* =========================================================
   JULK — LAYER 10
   SCROLL & INTERACTION CONTROLLER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     SCROLL REVEALS
     ------------------------------------------------------- */

  const revealElements = document.querySelectorAll(
    ".julk-reveal"
  );

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });

  }


  /* -------------------------------------------------------
     NAVIGATION — ACTIVE SECTION
     ------------------------------------------------------- */

  const sections = document.querySelectorAll(
    "section[id]"
  );

  const navLinks = document.querySelectorAll(
    ".julk-nav-link[href^='#']"
  );

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {

            link.classList.remove("is-active");

            if (
              link.getAttribute("href") === `#${id}`
            ) {
              link.classList.add("is-active");
            }

          });

        });

      },
      {
        threshold: 0.35
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

  }


  /* -------------------------------------------------------
     SMOOTH INTERNAL NAVIGATION
     ------------------------------------------------------- */

  document.querySelectorAll(
    'a[href^="#"]'
  ).forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetID = link.getAttribute("href");

      if (
        !targetID ||
        targetID === "#"
      ) {
        return;
      }

      const target = document.querySelector(targetID);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.pushState(
        null,
        "",
        targetID
      );

    });

  });


  /* -------------------------------------------------------
     PROJECT HOVER
     ------------------------------------------------------- */

  document.querySelectorAll(
    ".julk-project"
  ).forEach((project) => {

    project.addEventListener(
      "mouseenter",
      () => {
        project.classList.add("is-hovered");
      }
    );

    project.addEventListener(
      "mouseleave",
      () => {
        project.classList.remove("is-hovered");
      }
    );

  });


  /* -------------------------------------------------------
     CONTACT CTA
     ------------------------------------------------------- */

  document.querySelectorAll(
    ".julk-contact-link"
  ).forEach((link) => {

    link.addEventListener("mouseenter", () => {

      const arrow =
        link.querySelector(
          ".julk-contact-arrow"
        );

      if (arrow) {
        arrow.textContent = "→";
      }

    });

  });


  /* -------------------------------------------------------
     KEYBOARD ACCESSIBILITY
     ------------------------------------------------------- */

  document.querySelectorAll(
    ".julk-project, .julk-experiment"
  ).forEach((item) => {

    item.addEventListener("keydown", (event) => {

      if (
        event.key !== "Enter" &&
        event.key !== " "
      ) {
        return;
      }

      event.preventDefault();

      item.click();

    });

  });

});