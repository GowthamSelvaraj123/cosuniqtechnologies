/* Cosuniq — interactions */

(function () {
  "use strict";

  // Mobile nav
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      const open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // Portfolio filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const filter = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      items.forEach(function (item) {
        const cat = item.getAttribute("data-category");
        item.classList.toggle("hidden", !(filter === "all" || cat === filter));
      });
    });
  });

  // Contact form
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('[name="message"]');
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill in name, email, and message.");
        return;
      }
      if (success) {
        success.classList.add("show");
        success.textContent =
          "Thanks " + name.value.trim().split(" ")[0] + "! We'll get back to you soon.";
      }
      form.reset();
    });
  }

  // Year
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(year);
  });

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      document.querySelectorAll(".faq-item").forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  // Scroll progress
  const progress = document.getElementById("scroll-progress");
  if (progress) {
    window.addEventListener(
      "scroll",
      function () {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        progress.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
      },
      { passive: true }
    );
  }

  // Fullscreen hero slider (Stellar Souls style)
  const heroSlides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
  const heroPrev = document.getElementById("hero-prev");
  const heroNext = document.getElementById("hero-next");
  const heroCurrent = document.getElementById("hero-current");
  const heroTotal = document.getElementById("hero-total");
  const heroProgress = document.getElementById("hero-progress");
  let heroIndex = 0;
  let heroTimer = null;
  const HERO_MS = 6000;

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function goHero(i) {
    if (!heroSlides.length) return;
    heroIndex = (i + heroSlides.length) % heroSlides.length;
    heroSlides.forEach(function (slide, idx) {
      slide.classList.toggle("is-active", idx === heroIndex);
    });
    if (heroCurrent) heroCurrent.textContent = pad(heroIndex + 1);
    if (heroTotal) heroTotal.textContent = pad(heroSlides.length);
    restartHeroProgress();
  }

  function restartHeroProgress() {
    if (!heroProgress) return;
    heroProgress.classList.remove("is-animating");
    heroProgress.style.width = "0%";
    // force reflow
    void heroProgress.offsetWidth;
    heroProgress.classList.add("is-animating");
    heroProgress.style.width = "100%";
  }

  function startHeroAuto() {
    stopHeroAuto();
    heroTimer = setInterval(function () {
      goHero(heroIndex + 1);
    }, HERO_MS);
  }

  function stopHeroAuto() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = null;
  }

  if (heroSlides.length) {
    if (heroTotal) heroTotal.textContent = pad(heroSlides.length);
    goHero(0);
    startHeroAuto();

    if (heroPrev) {
      heroPrev.addEventListener("click", function () {
        goHero(heroIndex - 1);
        startHeroAuto();
      });
    }
    if (heroNext) {
      heroNext.addEventListener("click", function () {
        goHero(heroIndex + 1);
        startHeroAuto();
      });
    }

    const heroRoot = document.getElementById("hero-slider");
    if (heroRoot) {
      // Pause autoplay on hover
      heroRoot.addEventListener("mouseenter", stopHeroAuto);
      heroRoot.addEventListener("mouseleave", startHeroAuto);

      // Mouse parallax interaction on active image
      heroRoot.addEventListener("mousemove", function (e) {
        const active = heroRoot.querySelector(".hero-slide.is-active .hero-slide__media");
        if (!active) return;
        const rect = heroRoot.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        active.style.transform = "translate(" + x * 18 + "px, " + y * 12 + "px)";
      });
      heroRoot.addEventListener("mouseleave", function () {
        const active = heroRoot.querySelector(".hero-slide.is-active .hero-slide__media");
        if (active) active.style.transform = "translate(0, 0)";
      });

      // Drag / swipe to change slides
      let startX = 0;
      let dragging = false;

      heroRoot.addEventListener("pointerdown", function (e) {
        if (e.target.closest("a, button")) return;
        dragging = true;
        startX = e.clientX;
        heroRoot.classList.add("is-dragging");
        stopHeroAuto();
      });

      heroRoot.addEventListener("pointerup", function (e) {
        if (!dragging) return;
        dragging = false;
        heroRoot.classList.remove("is-dragging");
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 60) {
          goHero(dx < 0 ? heroIndex + 1 : heroIndex - 1);
        }
        startHeroAuto();
      });

      heroRoot.addEventListener("pointercancel", function () {
        dragging = false;
        heroRoot.classList.remove("is-dragging");
        startHeroAuto();
      });
    }
  }

  // Fixed header: transparent on banner, solid after scroll to section A
  const fixedHeader = document.querySelector(".site-header--fixed");
  if (fixedHeader) {
    const onScrollHeader = function () {
      const threshold = window.innerHeight * 0.65;
      fixedHeader.classList.toggle("is-scrolled", window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScrollHeader, { passive: true });
    onScrollHeader();
  }

  // Work slider arrows
  const workSlider = document.getElementById("work-slider");
  const prev = document.getElementById("slide-prev");
  const next = document.getElementById("slide-next");

  function slideBy(el, dir) {
    if (!el) return;
    const amount = Math.min(380, el.clientWidth * 0.85) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  if (workSlider && prev && next) {
    prev.addEventListener("click", function () {
      slideBy(workSlider, -1);
    });
    next.addEventListener("click", function () {
      slideBy(workSlider, 1);
    });
  }

  // Quote slider arrows
  const quotes = Array.prototype.slice.call(document.querySelectorAll(".quote-card"));
  const qPrev = document.getElementById("quote-prev");
  const qNext = document.getElementById("quote-next");
  let qIndex = 0;

  function showQuote(i) {
    if (!quotes.length) return;
    qIndex = (i + quotes.length) % quotes.length;
    quotes.forEach(function (q, idx) {
      q.classList.toggle("is-active", idx === qIndex);
    });
  }

  if (qPrev && qNext && quotes.length) {
    qPrev.addEventListener("click", function () {
      showQuote(qIndex - 1);
    });
    qNext.addEventListener("click", function () {
      showQuote(qIndex + 1);
    });
  }

  // Custom cursor (desktop)
  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursor-dot");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (cursor && cursorDot && canHover) {
    document.body.classList.add("has-cursor");
    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 0;

    document.addEventListener(
      "mousemove",
      function (e) {
        x = e.clientX;
        y = e.clientY;
        cursorDot.style.left = x + "px";
        cursorDot.style.top = y + "px";
      },
      { passive: true }
    );

    (function loop() {
      dx += (x - dx) * 0.18;
      dy += (y - dy) * 0.18;
      cursor.style.left = dx + "px";
      cursor.style.top = dy + "px";
      requestAnimationFrame(loop);
    })();

    document.querySelectorAll("a, button, summary, .filter-btn, .slider-btn").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursor.classList.add("is-hover");
      });
      el.addEventListener("mouseleave", function () {
        cursor.classList.remove("is-hover");
      });
    });
  }
})();
