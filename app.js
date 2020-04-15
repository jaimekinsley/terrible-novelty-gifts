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


// run the script when page loads
const randomArray = getThreeRandomProducts(productArray);

// display the names and images
productName1.textContent = randomArray[0].name;
image1.src = randomArray[0].image;

productName2.textContent = randomArray[1].name;
image2.src = randomArray[1].image;

productName3.textContent = randomArray[2].name;
image3.src = randomArray[2].image;