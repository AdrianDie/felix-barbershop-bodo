/* Felix Barbershop Bodø — GSAP scroll-reveals + subtil parallax */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("reveal-ready");

  if (reduce || typeof gsap === "undefined") {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Myke scroll-reveals (transform/opacity, expo.out)
  gsap.utils.toArray("[data-reveal]").forEach(function (el) {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: el,
        start: "top 86%",
        toggleActions: "play none none none",
      },
    });
  });

  // Subtil parallax på dekor-former
  gsap.to(".decor-ring", {
    y: 120,
    ease: "none",
    scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 },
  });
  gsap.to(".decor-dot", {
    y: -90,
    ease: "none",
    scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.4 },
  });
})();
