const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"])

let bigPic = document.getElementById('middle-img');
bigPic.setAttribute('src', siteContent['main-content']['middle-img-src']);

let a = document.querySelectorAll('nav a');
a[0].textContent = siteContent['nav']['nav-item-1'];
a[1].textContent = siteContent['nav']['nav-item-2'];
a[2].textContent = siteContent['nav']['nav-item-3'];
a[3].textContent = siteContent['nav']['nav-item-4'];
a[4].textContent = siteContent['nav']['nav-item-5'];
a[5].textContent = siteContent['nav']['nav-item-6'];

a.forEach(color => color.style.color = 'green');



let navs = document.querySelector('nav');
let element1 = document.createElement('a');
element1.textContent = "Element1";
navs.appendChild(element1);
element1.style.color = 'green';

let element2 = document.createElement('a');
element2.textContent = "Element2";
navs.prepend(element2);
element2.style.color = 'green';



let dom = document.querySelector('.cta-text > h1');
dom.textContent = siteContent['cta']['h1'];
dom.innerHTML = 'DOM <br> IS <br> AWESOME';

let but = document.querySelector('.cta-text > button');
but.textContent = siteContent['cta']['button'];

let featAbout = document.querySelectorAll('.text-content h4');
featAbout[0].textContent = siteContent['main-content']['features-h4'];
featAbout[1].textContent = siteContent['main-content']['about-h4'];
featAbout[2].textContent = siteContent['main-content']['services-h4'];
featAbout[3].textContent = siteContent['main-content']['product-h4'];
featAbout[4].textContent = siteContent['main-content']['vision-h4'];

let pars = document.querySelectorAll('.text-content p');
pars[0].textContent = siteContent['main-content']['features-content'];
pars[1].textContent = siteContent['main-content']['about-content'];
pars[2].textContent = siteContent['main-content']['services-content'];
pars[3].textContent = siteContent['main-content']['product-content'];
pars[4].textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelectorAll('.contact h4');
contact[0].textContent = siteContent['contact']['contact-h4'];

let contactPs = document.querySelectorAll('.contact p');
contactPs[0].textContent = siteContent['contact']['address'];
contactPs[1].textContent = siteContent['contact']['phone'];
contactPs[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];
