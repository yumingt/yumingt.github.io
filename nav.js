import { html, render } from "https://unpkg.com/lit-html?module";

let navPages = [
  { name: "Portfolio", link: "/index.html/" },
  { name: "About", link: "/about.html/" },
  { name: "Cheatsheet", link: "/cheatsheet.html/" },
  { name: "MP0 Writeup", link: "/writeup.html/" },
];

function makeNav(links) {
  return html`<nav>
    ${links.map((page) => {
      return html`<a href="${page.link}">${page.name}</a>`;
    })}
  </nav>`;
}

render(makeNav(navPages), document.getElementById("nav-container"));