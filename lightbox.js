window.lightbox = function (data) {
    if (document.getElementsByClassName("lightbox-wrapper").lenght > 0 ) return;
    var node = document.createElement("div");
    var wrapper = document.createElement("div");
    var content = document.createElement("div");
    content.classList
        .add("lightbox-content");
    content.innerHTML = data
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
    if (document.getElementsByClassName("lightbox-wrapper") == null) return;
    document.getElementsByClassName("lightbox-wrapper")[0].classList.add("enter");
    setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName("lightbox-wrapper")[0]);
		}, 200);

};
