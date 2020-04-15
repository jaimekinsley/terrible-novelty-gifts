// Import things
import productArray from './data/products.js';
import { getThreeRandomProducts } from './common/utils.js';

// Get some elements from the DOM
let productName1 = document.getElementById('product-name1');
let productName2 = document.getElementById('product-name2');
let productName3 = document.getElementById('product-name3');

let image1 = document.getElementById('image-one');
let image2 = document.getElementById('image-two');
let image3 = document.getElementById('image-three');

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');

const form = document.getElementById('product-form');

// run the script when page loads
getRandomProducts();

// get the id that the user clicked and reset the products
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userChoice = document.querySelector('input[type=radio]:checked').value;

    getRandomProducts();

});


function getRandomProducts() {
    const randomArray = getThreeRandomProducts(productArray);
    // display the names and images

    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;

    productName1.textContent = randomArray[0].name;
    image1.src = randomArray[0].image;
    radio1.value = randomArray[0].id;

    productName2.textContent = randomArray[1].name;
    image2.src = randomArray[1].image;
    radio2.value = randomArray[1].id;

    productName3.textContent = randomArray[2].name;
    image3.src = randomArray[2].image;
    radio3.value = randomArray[2].id;

}

