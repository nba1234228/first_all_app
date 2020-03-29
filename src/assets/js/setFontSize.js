function handle() {
    window.screenWidth = document.body.clientWidth;
    const html = document.documentElement;
    const width = html.getBoundingClientRect().width;
    html.style.fontSize = `${width / 15}px`;
}

function debounce(fn) {
    var timer = null;
    return function() {
        if(timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, 200);
    };
}

var setFontSize = function() {
    handle();
    window.addEventListener('resize', debounce(handle));
};

export default setFontSize;
