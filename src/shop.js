let shop_items = {};
const shop_container = document.getElementById("shop_container");

const setShopItems = (items) => {
    shop_items = items;
}

const setItemsInteractive = () => {
    const items = document.querySelectorAll(".shop-item");
    console.log(items);
    items.forEach(e => {
        e.addEventListener("mouseover", () => {
            console.log(`${e}: mouseover`);
        });
    });
}

async function setItems() {
    await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setShopItems(json))

    await shop_items.forEach((element, index) => {
        const shop_item = 
            `<div class="shop-item flex jus-between ali-center dir-col">
                <div class="shop-item-desc">
                    <p class="shop-item-title">${element.title}</p>
                </div>
                <figure class="shop-item-figure flex jus-center">
                    <img class="shop-item-image" src="${element.image}">
                </figure>
                <div class="shop-item-price">
                    R$:${element.price}
                </div>
            </div>`;
        shop_container.innerHTML += shop_item;
    });

    setItemsInteractive();
}



setItems();
