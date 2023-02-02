var links = [
    { name: "Home", link: "index.html" },
    { name: "Locations", link: "locations.html" },
    { name: "Drinks", link: "drinks.html" },
    { name: "Foods", link: "food.html" },
    { name: "Desserts", link: "desserts.html" },
    { name: "Specials", link: "specials.html" }
];
let nav = document.createElement("div");
nav.id = "nav";
document.getElementById("main-container").appendChild(nav);

let image = document.createElement("img");
image.src = "images/logo-small.png";
image.alt = "logo";
nav.appendChild(image);

for (let i = 0; i < links.length; i++)
{
    let span = document.createElement("span");
    span.innerHTML = links[i].name;

    let a = document.createElement("a");
    a.href = links[i].link;
    a.appendChild(span);
    nav.appendChild(a);
}
