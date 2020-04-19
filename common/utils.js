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


