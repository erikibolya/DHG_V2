var hooks = [];
var menu_items = document.querySelectorAll(".topnav__item ");

for (let i = 0; i < menu_items.length; i++) {
    let item = menu_items[i];
    item.addEventListener('click', function (event) {
        event.preventDefault();
        let hash = item.hash.slice(1);
        let element = document.getElementById(hash);
        element.scrollIntoView({behavior: "smooth"});
    });

}
window.addEventListener('scroll', function () {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let header = document.getElementById("header");
    let headerClass = "header--scrolled";
    if (top === 0) {
        header.classList.remove(headerClass);
    } else {
        header.classList.add(headerClass);
    }
});
     