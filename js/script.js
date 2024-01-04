/* Переключение темы */

let lightThemeButton = document.querySelector(".theme-button-light");
let darkThemeButton = document.querySelector(".theme-button-dark");

lightThemeButton.onclick = function () {
    lightThemeButton.classList.add("active");
    darkThemeButton.classList.remove("active");
    document.body.classList.remove("dark");
}

darkThemeButton.onclick = function () {
    darkThemeButton.classList.add("active");
    lightThemeButton.classList.remove("active");
    document.body.classList.add("dark");
}

// --- галерея ---
let activePhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list a");

for (let preview of previews) {
    preview.onclick = function (evt) {
        evt.preventDefault();

        let currentActive = document.querySelector(".preview-list .active-item");
        currentActive.classList.remove("active-item");
        preview.classList.add("active-item");

        activePhoto.src = preview.href;
    };
}
