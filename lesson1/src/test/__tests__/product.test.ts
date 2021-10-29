import {Product} from "../../module/product/Product";

let arraySize = 1000;
let products = new Array(0);

beforeEach(() => {
    prepareProducts(arraySize);
    expect(products).toHaveLength(arraySize);
})

test("get 50 product element retrieve time", () => {
    console.time("timeLabel");
    products.forEach(function (product, i) {
        if (i == 50) {
            console.timeEnd("timeLabel");
        }
    });
})

function prepareProducts (arraySize) {
    const productNames = ["apple", "orange", "tomato"];
    for (let i = 0; i < arraySize; i++) {
        let product = new Product(getRandomElement(productNames), getRandomInt(10));
        products.push(product);
    }
    return products;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomElement(productNames) {
    return productNames[Math.floor(Math.random() * productNames.length)];
}
