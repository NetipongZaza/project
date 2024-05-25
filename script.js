window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var body = document.body;

    if (scrollPosition > 50) {
        body.style.backgroundColor = '#e0e0e0';
    } else {
        body.style.backgroundColor = '#f4f4f4';
    }
});
