// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    addRemoveStickyNavbar(), scrollProgressBar(), addRemoveStickyNavbarMobile()
};

// ===== Scroll-to-Top Arrow ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 290) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(250);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(250);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addRemoveStickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

$('.section4').parallax({ imageSrc: './images/section4-background.jpg' });

$('header').parallax({ imageSrc: './images/header-background.jpg' });

function addRemoveStickyNavbarMobile() {
    var hamburger = document.getElementById("hamburger-outer");
    if (window.pageYOffset > (document.querySelector(".hamburger-container").offsetTop - 5)) {
        hamburger.classList.add("sticky2");
    } else {
        hamburger.classList.remove("sticky2");
    }
}

function openOfertaMobile() {
    var oferta = document.querySelector("#overlay-oferta2");
    if (oferta.style.opacity === "1") {
        oferta.style.height = "0";
        oferta.style.opacity = "0";
        document.getElementById("kreska2").style.width = "0";
    } else {
        oferta.style.opacity = "1";
        oferta.style.height = "auto";
        document.getElementById("kreska2").style.width = "73px";
    }
}

function scrollProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

$(".dropdown-toggle").on("mouseenter", function () {
    // make sure it is not shown:
    if (!$(this).parent().hasClass("show")) {
        $(this).click();
    }
});

$(".nav-item, .dropdown").on("mouseleave", function () {
    // make sure it is shown:
    if ($(this).hasClass("show")) {
        $(this).children('.dropdown-toggle').first().click();
    }
});

/* Open when someone clicks on the span element */
function openNavMobile() {
    document.getElementById("myNav").style.width = "100%";
    var elems = document.getElementsByClassName('icon-bar');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    document.body.classList.add("lock-scroll");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNavMobile() {
    document.getElementById("myNav").style.width = "0%";
    var oferta = document.querySelector("#overlay-oferta2");
    var elems = document.getElementsByClassName('icon-bar');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'block';
    }
    /*this line closes "oferta" menu when the mobile menu closes*/
    /*it prevents leaving Oferta menu open when reenter mobile menu*/
    oferta.style.height = "0";
    oferta.style.opacity = "0";
    document.getElementById("kreska2").style.width = "0";
    document.body.classList.remove("lock-scroll");
}

$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
});