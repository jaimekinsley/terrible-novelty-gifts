// STEP 2: select three random photos from the available product images and display them side-by-side-by-side in the browser window.

// create a function that selects one random product
export function selectRandomProduct(productArray){
    const randomIndex = Math.floor(Math.random() * productArray.length);
    return productArray[randomIndex];
}

// create a function that selects three random products that are different
export function getThreeRandomProducts(productArray){
    let productOne = selectRandomProduct(productArray);
    let productTwo = selectRandomProduct(productArray);
    let productThree = selectRandomProduct(productArray);

    while (productOne === productTwo || productOne === productThree || productTwo === productThree){
        productOne = selectRandomProduct(productArray);
        productTwo = selectRandomProduct(productArray);
        productThree = selectRandomProduct(productArray);
    }
    return [productOne, productTwo, productThree];
}


export function getRandomProducts() {
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