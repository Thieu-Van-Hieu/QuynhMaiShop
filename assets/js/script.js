function formatCurrency(value) {
    return value
        .toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        })
        .replace(" ₫", "đ");
}

function getNumberOnly(value) {
    return Number(value.replace(/[^0-9-]+/g, ""));
}

function updatePrice() {
    document.querySelectorAll(".home-product-item").forEach((product) => {
        const productPrice = getNumberOnly(
            product.querySelector(".home-product-item__price-old").textContent
        );
        const percentDiscount = getNumberOnly(
            product.querySelector(".home-product-item__sale-off-percent")
                .textContent
        );
        const price = (productPrice * (100 - percentDiscount)) / 100;
        product.querySelector(".home-product-item__price-current").textContent =
            formatCurrency(price);
    });
}

updatePrice();

function showOn(element) {
    element.style.display = "block";
}

function showOff(element) {
    element.style.display = "none";
}

document.querySelectorAll(".btn--register").forEach((element) =>
    element.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "flex";
        showOn(document.querySelector("#register-form"));
        showOff(document.querySelector("#login-form"));
    })
);

document.querySelectorAll(".btn--login").forEach((element) =>
    element.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "flex";
        showOn(document.querySelector("#login-form"));
        showOff(document.querySelector("#register-form"));
    })
);

document
    .querySelectorAll(".btn--back")
    .forEach((element) =>
        element.addEventListener("click", () =>
            showOff(document.querySelector(".modal"))
        )
    );

document
    .querySelector(".modal__overlay")
    .addEventListener("click", () => showOff(document.querySelector(".modal")));

function likeProduct(element) {
    element.classList.toggle("home-product-item__like--liked");
}

document.querySelectorAll(".home-product-item__like").forEach((element) =>
    element.addEventListener("click", (event) => {
        event.preventDefault();
        likeProduct(element);
    })
);