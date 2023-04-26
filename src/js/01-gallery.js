import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryEls = createGalleryEls(galleryItems);

function createGalleryEls(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class= "gallery__item">
            <a href="${original}" class= "gallery__link">
            <img class= "gallery__image"
            src= "${preview}"
            data-source= "${original}"
            alt= "${description}"
            />
            </a>
            </div>`;
        })
        .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryEls);
gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;

    const instance = basicLightbox.create(
        `<img src= "${event.target.dataset.source}">`
    );
    instance.show();

    const onShow = basicLightbox.visible();
    if (onShow) {
        document.addEventListener("keydown", ({ key }) => {
            if (key === "Escape") {
                instance.close();
            }
        });
    }
}
