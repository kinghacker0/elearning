/// Function to get the next 30-minute interval from current time
function getNextGlobal30MinMark() {
  const now = new Date();
  const next = new Date(now);
  next.setSeconds(0);
  next.setMilliseconds(0);

  const minutes = now.getMinutes();
  const nextInterval = Math.ceil(minutes / 30) * 30;

  if (nextInterval >= 60) {
    next.setHours(next.getHours() + 1);
    next.setMinutes(0);
  } else {
    next.setMinutes(nextInterval);
  }

  return next;
}

// Set initial countdown target
let countDownDate = getNextGlobal30MinMark();

// Update countdown every second
const x = setInterval(function () {
  const now = new Date().getTime();
  let distance = countDownDate - now;

  // If countdown reaches 0 or passed, reset to next 30-minute mark
  if (distance <= 0) {
    countDownDate = getNextGlobal30MinMark();
    distance = countDownDate - now;
  }

  // Time calculations
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update DOM elements
  document.querySelectorAll(".hours-container").forEach(el => {
    el.innerHTML = String(hours).padStart(2, '0');
  });
  document.querySelectorAll(".minutes-container").forEach(el => {
    el.innerHTML = String(minutes).padStart(2, '0');
  });
  document.querySelectorAll(".seconds-container").forEach(el => {
    el.innerHTML = String(seconds).padStart(2, '0');
  });

}, 1000);

window.addEventListener("load", () => {
  const dataAccordionContainer = document.querySelectorAll(
    "[data-accordion-container]"
  );

  dataAccordionContainer.forEach((accordionContainer) => {
    const theTabs = accordionContainer.querySelectorAll(".accordion-trigger");

    function theAccordionClicks(accordionClickEvent) {
      const clickedTab = accordionClickEvent.currentTarget;

      // var tabParent =
      //  accordionClickEvent.currentTarget.parentNode.parentNode.parentNode.parentNode;
      // console.log(tabParent);
      // var theTabs = tabParent.querySelectorAll('.nav-tabs button');
      for (let i = 0; i < theTabs.length; i++) {
        theTabs[i].parentNode.classList.remove("active");
      }

      clickedTab.parentNode.classList.add("active");
      accordionClickEvent.preventDefault();
    }
    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theAccordionClicks);
    }
  });
  // store tabs variable
});

// Open menu in mobile

const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".nav-main");

const toggleNav = () => {
  mainNav.classList.toggle("open");
};

// hamburger.addEventListener("click", toggleNav);

// Tiny slider

// const imgMarquee = document.querySelector(".marquee-slider");

// if (imgMarquee) {
//   var textMarqueeRef = tns({
//     container: imgMarquee,
//     gutter: 16,

//     mouseDrag: false,
//     nav: false,
//     controls: false,
//     autoplayButtonOutput: false,
//     preventActionWhenRunning: true,
//     autoplay: true,
//     autoplayTimeout: 0,
//     controlsPosition: "bottom",
//     speed: 6000,
//     autoWidth: true,
//     loop: true,

//     responsive: {
//       768: {
//         items: 4,
//       },
//     },
//   });
// }

const arrowLeft =
  '<svg width="30" height="20" fill="none" viewBox="0 0 30 20"><path fill="#CE3640" d="m9.937 19.428 2.352-2.363-5.45-5.424 22.674-.023-.003-3.334-22.613.023 5.358-5.384L9.893.572l-9.406 9.45 9.45 9.406Z"/></svg>';

const arrowRight =
  '<svg width="30" height="20" fill="none" viewBox="0 0 30 20"><path fill="#CE3640" d="m20.063.572-2.351 2.362 5.45 5.425-22.675.023.003 3.334 22.613-.023-5.359 5.383 2.363 2.352 9.406-9.45-9.45-9.406Z"/></svg>';

const leftArrow =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" transform="translate(32) rotate(90)" fill="#7043E3" fill-opacity="0.3"/><path d="M20 8L12 16L20 24" stroke="#7043E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const rightArrow =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)" fill="#7043E3"/><path d="M12 8L20 16L12 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const testimonialSlider = document.querySelector(".testimonial-slider");
const blogSlider = document.querySelector(".blog-slider");

const mobile = window.innerWidth > 767;

if (testimonialSlider) {
  var testimonialSliderRef = tns({
    container: testimonialSlider,
    gutter: 20,
    items: 1,
    mouseDrag: false,
    nav: true,
    navPosition: "bottom",
    controls: false,
    speed: 500,
    loop: mobile ? false : true,
    rewind: true,

    responsive: {
      0: {
        items: 1,
        autoplay: true,
        // loop: true,
      },
      768: {
        items: 2.3,
        startIndex: 0,
        nav: false,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 5000, 
        controls: true,
        loop: true,
             },
    },
  });
}

if (blogSlider) {
  var testimonialSliderRef = tns({
    container: blogSlider,
    gutter: 20,
    items: 1,
    mouseDrag: false,
    nav: true,
    navPosition: "bottom",
    controls: false,
    speed: 500,
    loop: true,

    responsive: {
      0: {
        items: 1,
        autoplay: true,
        // loop: true,
      },
      768: {
        items: 3,
        startIndex: 0,
        nav: false,
        controls: true,
        controlsPosition: "top",
        controlsText: [leftArrow, rightArrow],
        mouseDrag: true,
        autoplay: false,
        loop: false,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const accordionHeaderss = document.querySelectorAll(".accordion-headers");

  // Open the first accordion by default
  accordionHeaders[0]?.classList.add("active");
  accordionHeaderss[0]?.classList.add("active");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (this.classList.contains("active")) {
        // content.style.display = "none";
        content.classList.remove("dropdown-accordion");
        arrow.style.transform = "rotate(0deg)";
        this.classList.remove("active");
      } else {
        // Close other accordions before opening this one
        accordionHeaders.forEach((otherHeader) => {
          if (otherHeader !== this) {
            const otherContent = otherHeader.nextElementSibling;
            const otherArrow = otherHeader.querySelector(".arrow");
            // otherContent.style.display = "none";
            otherContent.classList.remove("dropdown-accordion");
            otherArrow.style.transform = "rotate(0deg)";
            otherHeader.classList.remove("active");
          }
        });

        // content.style.display = "block";
        content.classList.add("dropdown-accordion");
        arrow.style.transform = "rotate(180deg)";
        this.classList.add("active");
      }
    });
  });
  accordionHeaderss.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (this.classList.contains("active")) {
        content.classList.remove("dropdown-accordion");
        arrow.style.transform = "rotate(0deg)";
        this.classList.remove("active");
      } else {
        // Close other accordions before opening this one
        accordionHeaderss.forEach((otherHeader) => {
          if (otherHeader !== this) {
            const otherContent = otherHeader.nextElementSibling;
            const otherArrow = otherHeader.querySelector(".arrow");

            otherContent.classList.remove("dropdown-accordion");
            otherArrow.style.transform = "rotate(0deg)";
            otherHeader.classList.remove("active");
          }
        });

        content.classList.add("dropdown-accordion");
        arrow.style.transform = "rotate(180deg)";
        this.classList.add("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-cc-header");
 

  // Open the first accordion by default
  accordionHeaders[0]?.classList.add("active");
 

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (this.classList.contains("active")) {
        // content.style.display = "none";
        content.classList.remove("dropdown-accordion-cc");
        arrow.style.transform = "rotate(0deg)";
        this.classList.remove("active");
      } else {
        // Close other accordions before opening this one
        accordionHeaders.forEach((otherHeader) => {
          if (otherHeader !== this) {
            const otherContent = otherHeader.nextElementSibling;
            const otherArrow = otherHeader.querySelector(".arrow");
            // otherContent.style.display = "none";
            otherContent.classList.remove("dropdown-accordion-cc");
            otherArrow.style.transform = "rotate(0deg)";
            otherHeader.classList.remove("active");
          }
        });

        // content.style.display = "block";
        content.classList.add("dropdown-accordion-cc");
        arrow.style.transform = "rotate(180deg)";
        this.classList.add("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-faq-header");


  // Open the first accordion by default
  accordionHeaders[0]?.classList.add("active");


  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (this.classList.contains("active")) {
        // content.style.display = "none";
        content.classList.remove("dropdown-accordion-faq");
        arrow.style.transform = "rotate(0deg)";
        this.classList.remove("active");
      } else {
        // Close other accordions before opening this one
        accordionHeaders.forEach((otherHeader) => {
          if (otherHeader !== this) {
            const otherContent = otherHeader.nextElementSibling;
            const otherArrow = otherHeader.querySelector(".arrow");
            // otherContent.style.display = "none";
            otherContent.classList.remove("dropdown-accordion-faq");
            otherArrow.style.transform = "rotate(0deg)";
            otherHeader.classList.remove("active");
          }
        });

        // content.style.display = "block";
        content.classList.add("dropdown-accordion-faq");
        arrow.style.transform = "rotate(180deg)";
        this.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".achievement-grid");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      removeActiveClass();
      card.classList.add("active");
    });
  });
  function removeActiveClass() {
    cards.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

const cards = document.querySelector(".footer-banner");
if (!mobile) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      cards.classList.add("show-footer-banner");
    } else {
      cards.classList.remove("show-footer-banner");
    }
  });
}

const bannerSlider = document.querySelector(".banner");

if (bannerSlider) {
  var bannerSliderRef = tns({
    container: bannerSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 20,
    speed: 10000,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,

    responsive: {
      0: {
        items: 0.6,
      },

      768: {
        items: 1.3,
      },
      1024: {
        items: 1.6,
      },
      1200: {
        items: 2.3,
      },
    },
  });
}


const logoSlider = document.querySelector(".logo-slider");

if (logoSlider) {
  var logoSliderRef = tns({
    container: logoSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 20,
    speed: 4000,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,

    responsive: {
      0: {
        items: 2.5,
      },

      768: {
        items: 4,
      },

      1200: {
        items: 6,
      },
    },
  });
}

const toolSlider = document.querySelector(".tool-slider");

if (toolSlider) {
  var toolSliderRef = tns({
    container: toolSlider,
    gutter: 10,
    mouseDrag: false,
    nav: false,
    controls: false,
    autoplayButtonOutput: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,
    speed: 6000,
    loop: true,
    responsive: {
      0: {
        items: 3,
      },

      768: {
        items: 5,
      },

      1024: {
        items: 6,
      },
    },
  });
}
const toolSliderTwo = document.querySelector(".tool-slider-2");

if (toolSliderTwo) {
  var toolSliderTwoRef = tns({
    container: toolSliderTwo,
    gutter: 10,
    mouseDrag: false,
    nav: false,
    controls: false,
    autoplayButtonOutput: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,
    speed: 6000,
    loop: true,
    autoplayDirection: "backward",
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 5,
      },

      1024: {
        items: 6,
      },
    },
  });
}

const toolSliderThird = document.querySelector(".tool-slider-3");

if (toolSliderThird) {
  var toolSliderThreeRef = tns({
    container: toolSliderThird,
    gutter: 10,
    mouseDrag: false,
    nav: false,
    controls: false,
    autoplayButtonOutput: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,
    speed: 6000,
    loop: true,
    responsive: {
      0: {
        items: 3,
      },

      768: {
        items: 5,
      },

      1024: {
        items: 6,
      },
    },
  });
}

const placementSlider = document.querySelector(".placement-slider");

if (placementSlider) {
  var placementSliderRef = tns({
    container: placementSlider,
    gutter: 10,
    mouseDrag: false,
    nav: false,
    controls: false,
    autoplayButtonOutput: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,
    speed: 6000,
    loop: true,
    responsive: {
      0: {
        items: 4,
      },

      768: {
        items: 5,
      },

      1024: {
        items: 6,
      },
    },
  });
}
const placementSliderOne = document.querySelector(".placement-slider-one");

if (placementSliderOne) {
  var placementSliderOneRef = tns({
    container: placementSliderOne,
    gutter: 10,
    mouseDrag: false,
    nav: false,
    controls: false,
    autoplayButtonOutput: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,
    autoplayDirection: "backward",
    speed: 6000,
    loop: true,
    responsive: {
      0: {
        items: 4,
      },

      768: {
        items: 6,
      },

      1024: {
        items: 7,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // if (mobile) {
  const hamburger = document.querySelector(".hamburger");
  const navMain = document.querySelector(".nav-area");

  const navLinks = document.querySelectorAll(".nav-link");
  hamburger.addEventListener("click", () => {
    navMain.classList.toggle("nav-open");
    hamburger.classList.toggle("active");
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navMain.classList.remove("nav-open");
      hamburger.classList.remove("active");
    });
  });
});

// Smooth scroll on anchor click

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// (function () {
//   'use strict';

//   var section = document.querySelectorAll('.scrollspy-section');
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function (e) {
//     sections[e.id] = e.offsetTop;
//   });

//   window.onscroll = function () {
//     var scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector('.active').setAttribute('class', ' ');
//         document
//           .querySelector('a[href*=' + i + ']')
//           .setAttribute('class', 'active');
//       }
//     }
//   };
// })();

// Popup-Ad
let intervalID;

document.addEventListener("DOMContentLoaded", () => {
  let closebtn = document.querySelector(".close-btn");
  let popup = document.querySelector(".popup-ad");
  let popupSlider = document.querySelector(".popup-slider");

  const callTimeOut = (time) => {
    setTimeout(() => {
      popup.classList.remove("visible-popup");
      popupSlider.classList.remove("animate");
    }, time);
  };

  intervalID = setInterval(() => {
    popup.classList.add("visible-popup");
    popupSlider.classList.add("animate");
    callTimeOut(4000);
  }, 8000);

  closebtn?.addEventListener("click", () => {
    popup.classList.remove("visible-popup");
    popupSlider.classList.remove("animate");
  });
});
window.addEventListener("load", () => {
  const dataTabContainer = document.querySelectorAll("[data-tab-container]");

  dataTabContainer.forEach((container) => {
    const theTabs = container.querySelectorAll(".nav-tabs button");

    function theTabClicks(tabClickEvent) {
      const clickedTab = tabClickEvent.currentTarget;

      // var tabParent =
      // 	tabClickEvent.currentTarget.parentNode.parentNode.parentNode.parentNode;
      // console.log(tabParent);
      // var theTabs = tabParent.querySelectorAll('.nav-tabs button');
      for (let i = 0; i < theTabs.length; i++) {
        theTabs[i].classList.remove("active");
      }

      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();

      const contentPanes = container.querySelectorAll(".tab-pane");

      for (let i = 0; i < contentPanes.length; i++) {
        contentPanes[i].classList.remove("active");
      }

      const anchorReference = tabClickEvent.target;

      const activePaneId = anchorReference.getAttribute("data-tab");
      const activePane = container.querySelectorAll("." + activePaneId);

      Array.from(activePane).forEach((item) => {
        item.classList.add("active");
      });
    }
    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theTabClicks);
    }
  });
  // store tabs variable
});

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ["Hey Devops"];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length && document.querySelector(".typed")) {
      document.querySelector(".typed").innerHTML = text?.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 250);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000); // Adjust the delay between loops (2000ms = 2 seconds)
    }
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation((i + 1) % dataText.length); // Loop to the beginning
      });
    }
  }

  StartTextAnimation(0);
});
const swiperEl = document.querySelector('.palced-slide');

const swiperParams = {
  breakpoints: {
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
    },
  },
};

// now we need to assign all parameters to Swiper element
if(swiperEl){
Object.assign(swiperEl, swiperParams);
}

// and now initialize it
// swiperEl.initialize();

// Countdown timer

const successSlider = document.querySelector(".success-slider");

if (successSlider) {
  var logoSliderRef = tns({
    container: successSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 20,
    speed: 4000,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,

    responsive: {
      0: {
        items: 2,
      },

      768: {
        items: 1,
      },

      1200: {
        items: 1,
      },
    },
  });
}

window.addEventListener("load", () => {
  const dataTabContainer = document.querySelectorAll("[data-tab-container1]");

  dataTabContainer.forEach((container) => {
    const theTabs = container.querySelectorAll(".nav-tabs-1 button");

    function theTabClicks(tabClickEvent) {
      const clickedTab = tabClickEvent.currentTarget;

      // var tabParent =
      // 	tabClickEvent.currentTarget.parentNode.parentNode.parentNode.parentNode;
      // console.log(tabParent);
      // var theTabs = tabParent.querySelectorAll('.nav-tabs button');
      for (let i = 0; i < theTabs.length; i++) {
        theTabs[i].classList.remove("active");
      }

      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();

      const contentPanes = container.querySelectorAll(".tab-pane1");

      for (let i = 0; i < contentPanes.length; i++) {
        contentPanes[i].classList.remove("active");
      }

      const anchorReference = tabClickEvent.target;

      const activePaneId = anchorReference.getAttribute("data-tab1");
      const activePane = container.querySelectorAll("." + activePaneId);

      Array.from(activePane).forEach((item) => {
        item.classList.add("active");
      });
    }
    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theTabClicks);
    }
  });
  // store tabs variable
});

window.addEventListener("load", () => {
  const dataTabContainer = document.querySelectorAll("[data-tab-container2]");

  dataTabContainer.forEach((container) => {
    const theTabs = container.querySelectorAll(".nav-tabs-2 button");

    function theTabClicks(tabClickEvent) {
      const clickedTab = tabClickEvent.currentTarget;

      // var tabParent =
      // 	tabClickEvent.currentTarget.parentNode.parentNode.parentNode.parentNode;
      // console.log(tabParent);
      // var theTabs = tabParent.querySelectorAll('.nav-tabs button');
      for (let i = 0; i < theTabs.length; i++) {
        theTabs[i].classList.remove("active");
      }

      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();

      const contentPanes = container.querySelectorAll(".tab-pane2");

      for (let i = 0; i < contentPanes.length; i++) {
        contentPanes[i].classList.remove("active");
      }

      const anchorReference = tabClickEvent.target;

      const activePaneId = anchorReference.getAttribute("data-tab2");
      const activePane = container.querySelectorAll("." + activePaneId);

      Array.from(activePane).forEach((item) => {
        item.classList.add("active");
      });
    }
    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theTabClicks);
    }
  });
  // store tabs variable
});
function hideTicker() {
  document.querySelector(".tickerContainer").classList.add("hidden");
  // Save the state in local storage
  localStorage.setItem("tickerHidden", "true"); // Store as a string
}


