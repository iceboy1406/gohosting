// Sidebar
const toggleButon = document.querySelector('.toggle-button');
const navItem = document.querySelector('.nav-item');
const navIcon = document.querySelector('#nav-icon1')
toggleButon.addEventListener('click', () => {
  navItem.classList.toggle('buka');
  navIcon.classList.toggle('open')
});
// Nav Active
const nav_link = document.querySelectorAll('a');
const section = {
  home: document.querySelector('#home'),
  service: document.querySelector('#service'),
  about: document.querySelector('#about'),
  testimonial: document.querySelector('#testimonial'),
  price: document.querySelector('#price'),
  blog: document.querySelector('#blog')
};
window.addEventListener('scroll', () => {
  for (let s in section) {
    if (document.documentElement.scrollTop > section[s].offsetTop - 90 && document.documentElement.scrollTop < section[s].offsetTop + section[s].clientHeight) {
      for (let n of nav_link) {
        const target = n.textContent.toLowerCase();
        n.classList.remove('active');
        if (target == s) {
          n.classList.add('active');
        }
      }
    }
  }
});
// sticky navbar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 70) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
})

// Scroll nav-link
const navLink = document.querySelectorAll('a');
for (l of navLink) {
  l.addEventListener('click', function (e) {
    const tujuan = this.getAttribute('href');
    const elemenTujuan = document.querySelector(tujuan);
    window.scrollTo(0, elemenTujuan.offsetTop - 70);
    e.preventDefault();
  })
}
// Countdown
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Oct 25, 2020 00:00:00').getTime(),
  x = setInterval(function () {

    let
    now = new Date().getTime(),
    distance = countDown - now;

    document.getElementById('hari').innerText = Math.floor(distance / (day)),
    document.getElementById('jam').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('menit').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('detik').innerText = Math.floor((distance % (minute)) / second);

  }, second)

  // Service hovered effect
const serviceItem = document.querySelectorAll('.service-item');
for (const s of serviceItem) {
  s.addEventListener('mouseover', () => {
    serviceItem[0].classList.remove('hovered');
  })
 s.addEventListener('mouseleave', () => {
   serviceItem[0].classList.add('hovered');
 })
}

// Testimonial Button Slider
const geserKanan = document.querySelector('.kekanan')
const geserKiri = document.querySelector('.kekiri')
const testimonialList = document.querySelector('.testimonial-list')

let geser = 0;
geserKanan.addEventListener('click', () => {
  if (geser >= 1375) {
    geser += 0
  } else {
    geser += 275;
  }
  testimonialList.scrollTo(geser,0)
})
geserKiri.addEventListener('click', () => {
  if (geser <= 0) {
    geser -=0;
  } else {
    geser -= 275;
  }
  testimonialList.scrollTo(geser, 0)
})


// Blog
const keKanan = document.querySelector('.blog .kekanan')
const keKiri = document.querySelector('.blog .kekiri')
const blogList = document.querySelector('.blog-list')

let geserBlog = 0;
keKanan.addEventListener('click', () => {
  if (geserBlog >= 550) {
    geserBlog += 0
  } else {
    geserBlog += 275;
  }
  blogList.scrollTo(geserBlog, 0)
})
keKiri.addEventListener('click', () => {
  if (geserBlog <= 0) {
    geserBlog -= 0;
  } else {
    geserBlog -= 275;
  }
  blogList.scrollTo(geserBlog, 0)
})
