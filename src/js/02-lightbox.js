import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryEls = createGalleryEls(galleryItems);

function createGalleryEls(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li>
            <a href="${original}" class= "gallery__item">
            <img 
            class= "gallery__image"
            src= "${preview}"
            data-source= "${original}"
            alt= "${description}"
            />
            </a>
            </li>`;
        })
        .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryEls);
gallery.addEventListener("click", onGalleryClick);

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;

    document.addEventListener("keydown", ({ key }) => {
        if (key === "Escape") {
            instance.close();
        }
    });
}
