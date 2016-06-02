window.lightbox = function (src) {
    if (document.getElementsByClassName("lightbox-wrapper").lenght > 0 ) return;
    var node = document.createElement("div");
    var wrapper = document.createElement("div");
    var content = document.createElement("div");
    content.classList
        .add("lightbox-content");
    window.src = src;
    if (src.substring(0, 7) == "http://" || src.substring(0, 8) == "https://")
        content.innerHTML = "<img src=\""+src+"\">";
    else
        content.innerHTML = "<img src=\"/assets/images/"+src+"\">";
    node.classList
        .add("lightbox");
    node.appendChild(content);
    wrapper.classList
        .add("lightbox-wrapper");
    wrapper.classList
        .add("enter");
    wrapper.appendChild(node);
    node.onclick = removeLightbox;
    document.body.appendChild(wrapper);
    setTimeout(function () {
        wrapper.classList.toggle("enter");
    }, 0);
    return;
};

window.removeLightbox = function () {
    document.getElementsByClassName("lightbox-wrapper")[0].classList.add("enter");
    setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName("lightbox-wrapper")[0]);
		}, 200);

};
