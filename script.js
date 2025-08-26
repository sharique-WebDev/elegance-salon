// const navbar = document.querySelector('.navbar');
// document.querySelector('.hero').style.minHeight =
//     `calc(100vh - ${navbar.offsetHeight}px)`;

// document.body.style.paddingTop = document.querySelector('.navbar').offsetHeight + 'px';

function navColor(element) {
  // Reset all nav-link colors
  document.querySelectorAll(".nav-link").forEach(link => {
    link.style.color = "";
    link.style.borderBottom = "";
  });

  // Highlight the clicked one
  element.style.color = "#EA1068";
  element.style.borderBottom = "1.5px solid #EA1068"
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText.replace(/,/g, '');
            const increment = Math.ceil(target / 150);

            if (current < target) {
                counter.innerText = (current + increment).toLocaleString();
                setTimeout(updateCount, 20);

            } else {
                counter.innerText = target.toLocaleString();
            }
        }

        updateCount();
    })
})

AOS.init();

let gotoEl = document.querySelector(".arrow-icon")

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        gotoEl.style.opacity = "1"
        gotoEl.style.visibility = "visible"
    } else {
        gotoEl.style.opacity = "0"
        gotoEl.style.visibility = "hidden"
    }
})


