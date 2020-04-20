// get table body from DOM
const tableResults = document.getElementById('results');

// get find by id function
import findById from '../common/find-by-id.js';

// get products array
import productArray from '../data/products.js';

// get Array from local storage
const votesResults = JSON.parse(localStorage.getItem('VOTESARRAY'));

for (let i = 0; i < votesResults.length; i++){

    const productLineItem = votesResults[i];
    
    const tr = document.createElement('tr');
    
    const productTd = document.createElement('td');
    const product = findById(productArray, productLineItem.id);

    productTd.textContent = product.name;

    const seenTd = document.createElement('td');
    seenTd.textContent = productLineItem.timesSeen;

    const pickedTd = document.createElement('td');
    pickedTd.textContent = productLineItem.timesPicked;
    
    tr.appendChild(productTd);
    tr.appendChild(seenTd);
    tr.appendChild(pickedTd);

    tableResults.appendChild(tr);

}


