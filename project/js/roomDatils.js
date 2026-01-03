const sections = ["classicRoom", "deluxeRoom-SeaView", "premiumRoom", "deluxeSuite", "royalDoubleRoom", "crownSuite"];

function showByHash() {
    let target = window.location.hash.replace("#", "");

    if (!sections.includes(target)) {
        target = "classicRoom";
    }

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.display = (id === target) ? "block" : "none";
    });
}


document.addEventListener("DOMContentLoaded", showByHash);


window.addEventListener("hashchange", showByHash);