// Import things
import productArray from './data/products.js';
import { getThreeRandomProducts } from './common/utils.js';

// initialize 
let votesArray = [];
let nextCounter = 0;

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
    
    incrementTimesPicked(votesArray, userChoice);
    incrementTimesSeen(votesArray, userChoice);
    updateVotesArray();

    nextCounter++;

    if (nextCounter >= 25){
        window.location = '../results';
    } else {
        getRandomProducts();
    }

});

// increment the votes for the item the user clicked
// start with findById function
function findById(items, id){
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

// increment the votes
function incrementTimesPicked(votes, id){
    let voteItem = findById(votes, id);
    if (!voteItem) {
        addInitialVoteItem(votes, id);
        voteItem = findById(votes, id);
    }
    voteItem.timesPicked++;
}

// increment the times seen
function incrementTimesSeen(votes, id){
    let voteItem = findById(votes, id);
    if (!voteItem) {
        addInitialVoteItem(votes, id);
        voteItem = findById(votes, id);
    }
    voteItem.timesSeen++;
}

function addInitialVoteItem(votes, id){
    const voteItem = {
        id: id,
        timesSeen: 0,
        timesPicked: 0,
    };
    votes.push(voteItem);

}

// //stringify the array in local storage 
function updateVotesArray(){
    localStorage.setItem('VOTESARRAY', JSON.stringify(votesArray));
}







// I'd like to put this in utils, but even though I exported/imported it, it still broke. Something with the DOM elements.

function getRandomProducts() {
    const randomArray = getThreeRandomProducts(productArray);
// start with unchecked radio buttons
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;

// display the names and images

    productName1.textContent = randomArray[0].name;
    image1.src = randomArray[0].image;
    radio1.value = randomArray[0].id;

    productName2.textContent = randomArray[1].name;
    image2.src = randomArray[1].image;
    radio2.value = randomArray[1].id;

    productName3.textContent = randomArray[2].name;
    image3.src = randomArray[2].image;
    radio3.value = randomArray[2].id;

// increment the times seen
    incrementTimesSeen(votesArray, randomArray[0].id);
    incrementTimesSeen(votesArray, randomArray[1].id);
    incrementTimesSeen(votesArray, randomArray[2].id);
}

