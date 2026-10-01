(function () {
  "use strict";

  const gallery = "assets/img/gallery/";
  const photo = (file, alt, caption) => ({ src: `${gallery}${file}`, alt, caption });
  const decks = {
    piano: [
      photo("IMG_3519.JPG", "Instructor guiding a student at the piano", "Focused practice builds technique and musical confidence."),
      photo("IMG_3522.JPG", "Student working at a digital piano during a lesson", "Listening and playing together develops ensemble awareness."),
      photo("IMG_3549.JPG", "Teacher supporting a young piano student", "Teachers connect musical ideas to practical playing.")
    ],
    guitar: [
      photo("IMG_3542.JPG", "Instructor demonstrating guitar during a lesson", "Technique and musical ideas come together through guided practice."),
      photo("IMG_3547.JPG", "Student practicing acoustic guitar with an instructor", "Chord changes and rhythm work come together through songs."),
      photo("IMG_3552.JPG", "Student playing electric guitar during a lesson", "Ensemble practice helps turn individual skills into shared music.")
    ],
    voice: [
      photo("gallery-image-5.JPG", "Student taking part in a vocal lesson", "Vocal study develops breath, listening, pitch, and expression."),
      photo("gallery-image-12.JPG", "Students preparing for a music performance", "Performance practice helps students present their work with confidence."),
      photo("gallery-image-6.JPG", "Music instructor working with students", "Guided exercises support healthy, purposeful practice.")
    ],
    studio: [
      photo("gallery-image-2.JPG", "Recording equipment in the school studio", "Studio work can include tracking, editing, mixing, and mastering."),
      photo("gallery-image-8.JPG", "Audio mixing console during a production session", "Careful listening and balance shape a polished mix."),
      photo("gallery-image-11.JPG", "Music workshop taking place at the school", "Creative projects bring musicians and technical teams together.")
    ],
    school: [
      photo("music-solutions-class.JPG", "Students learning together at Music Solutions School", "Lessons combine practical playing with musical understanding."),
      photo("gallery-image-1.JPG", "Student working on piano technique", "Students can explore instruments, theory, and performance."),
      photo("gallery-image-9.JPG", "Student ensemble rehearsing together", "Making music together is part of the learning experience.")
    ],
    faculty: [
      { src: "assets/img/team/Instructor-1.jpg", alt: "Music Solutions School founder and principal director", caption: "Meet the school's leadership and music faculty." },
      { src: "assets/img/team/Instructor-2.jpg", alt: "Piano and theory instructor at Music Solutions School", caption: "Faculty support students across practical and theoretical study." },
      { src: "assets/img/team/Instructor-3.jpg", alt: "Music instructor at Music Solutions School", caption: "Ask the team about suitable lesson pathways."
      }
    ]
  };

  const pages = {
    "404.html": ["school", "Find your way back to the music", "A few scenes from lessons and performances at Music Solutions School."],
    "about.html": ["school", "A school built around making music", "See the spaces and shared practice behind the school's teaching approach."],
    "ceo-study.html": ["studio", "Music, practice, and sound", "Explore the learning and production settings connected to music research."],
    "contact.html": ["school", "A closer look at the school", "Explore the learning environment before you get in touch with the team."],
    "course-details.html": ["piano", "Skills in practice", "Course learning connects technique, repertoire, and performance."],
    "courses.html": ["school", "Learning across instruments", "Students explore music through guided lessons, practice, and ensemble work."],
    "enquires.html": ["school", "Start with a conversation", "Tell the school what you would like to learn or create."],
    "faq.html": ["school", "Questions about getting started", "See how lessons, practice, and performance fit into music learning."],
    "gallery.html": ["school", "More moments from the school", "A rotating selection of lessons, rehearsals, and creative work."],
    "guitar-lessons-accra.html": ["guitar", "Guitar learning in action", "From chord practice to playing with others, guitar study grows through doing."],
    "music-school-accra.html": ["school", "Inside Music Solutions School", "A look at the people and practical learning that shape music study."],
    "piano-lessons-accra.html": ["piano", "Piano lessons in practice", "Students develop reading, technique, listening, and performance skills."],
    "privacy.html": ["school", "Music learning at the school", "Scenes from lessons and creative work visitors can ask the school about."],
    "recording-studio-accra.html": ["studio", "Inside the production process", "Explore the tools and collaboration involved in recording and production."],
    "service-details.html": ["studio", "Sound and service in practice", "Each project begins with understanding its purpose and requirements."],
    "services.html": ["studio", "More than the final recording", "See the spaces and teamwork behind production and creative services."],
    "team.html": ["faculty", "Meet the people behind the lessons", "Get to know the faculty who guide students through music study."],
    "terms.html": ["school", "A look inside Music Solutions School", "Explore the learning environment while reviewing the school's service information."]
  };

  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const pageName = window.location.pathname.split("/").pop().toLowerCase();
  const page = pages[pageName];
  const host = document.querySelector("[data-page-showcase]");
  if (!page || !host) return;

  const pageSlides = decks[page[0]];
  const section = make("section", "section page-showcase");
  section.setAttribute("aria-label", "Music Solutions School photo showcase");
  const container = make("div", "container");
  const layout = make("div", "page-showcase-layout");
  const introduction = make("div", "page-showcase-copy");
  introduction.append(
    make("span", "section-tag", "Inside the school"),
    make("h2", "", page[1]),
    make("p", "", page[2])
  );

  const viewer = make("div", "page-showcase-viewer");
  const figure = make("figure", "page-showcase-figure");
  const image = make("img", "page-showcase-image");
  image.src = pageSlides[0].src;
  image.alt = pageSlides[0].alt;
  image.width = 1200;
  image.height = 750;
  image.loading = "lazy";
  const caption = make("figcaption", "page-showcase-caption", pageSlides[0].caption);
  figure.append(image, caption);

  const controls = make("div", "page-showcase-controls");
  const previous = make("button", "page-showcase-control");
  previous.type = "button";
  previous.setAttribute("aria-label", "Show previous photo");
  previous.innerHTML = '<i class="bi bi-arrow-left" aria-hidden="true"></i>';
  const count = make("span", "page-showcase-count", `1 / ${pageSlides.length}`);
  count.setAttribute("aria-live", "polite");
  const next = make("button", "page-showcase-control");
  next.type = "button";
  next.setAttribute("aria-label", "Show next photo");
  next.innerHTML = '<i class="bi bi-arrow-right" aria-hidden="true"></i>';
  const rotation = make("button", "page-showcase-control");
  rotation.type = "button";
  rotation.setAttribute("aria-label", "Pause photo rotation");
  rotation.title = "Pause photo rotation";
  rotation.innerHTML = '<i class="bi bi-pause-fill" aria-hidden="true"></i>';
  controls.append(previous, count, rotation, next);
  viewer.append(figure, controls);
  layout.append(introduction, viewer);
  container.append(layout);
  section.append(container);
  host.replaceWith(section);

  let currentIndex = 0;
  let rotationTimer;
  let isPaused = false;
  const showSlide = (nextIndex) => {
    currentIndex = (nextIndex + pageSlides.length) % pageSlides.length;
    const nextSlide = pageSlides[currentIndex];
    image.classList.add("is-changing");
    image.addEventListener("transitionend", () => image.classList.remove("is-changing"), { once: true });
    image.src = nextSlide.src;
    image.alt = nextSlide.alt;
    caption.textContent = nextSlide.caption;
    count.textContent = `${currentIndex + 1} / ${pageSlides.length}`;
  };
  const stopRotation = () => window.clearInterval(rotationTimer);
  const startRotation = () => {
    stopRotation();
    if (!isPaused && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rotationTimer = window.setInterval(() => showSlide(currentIndex + 1), 6000);
    }
  };
  const toggleRotation = () => {
    isPaused = !isPaused;
    rotation.setAttribute("aria-label", isPaused ? "Resume photo rotation" : "Pause photo rotation");
    rotation.title = isPaused ? "Resume photo rotation" : "Pause photo rotation";
    rotation.innerHTML = isPaused
      ? '<i class="bi bi-play-fill" aria-hidden="true"></i>'
      : '<i class="bi bi-pause-fill" aria-hidden="true"></i>';
    if (isPaused) stopRotation();
    else startRotation();
  };

  previous.addEventListener("click", () => showSlide(currentIndex - 1));
  next.addEventListener("click", () => showSlide(currentIndex + 1));
  rotation.addEventListener("click", toggleRotation);
  viewer.addEventListener("mouseenter", stopRotation);
  viewer.addEventListener("mouseleave", startRotation);
  viewer.addEventListener("focusin", stopRotation);
  viewer.addEventListener("focusout", (event) => {
    if (!viewer.contains(event.relatedTarget)) startRotation();
  });
  startRotation();
})();