
let project_container = document.getElementById('project_container');

const fadeOutOnScroll = (element) => {
    if (!element) {
        return;
    }
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    var opacity = 1;
    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
}

const scrollHandler = () => {
    fadeOutOnScroll(project_container);
}

window.addEventListener('scroll', scrollHandler);

