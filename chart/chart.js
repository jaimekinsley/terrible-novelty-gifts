// RESULTS CODE
// get table body from DOM
// const tableResults = document.getElementById('results');

// // get find by id function
// import findById from '../common/find-by-id.js';

// // get products array
// import productArray from '../data/products.js';

// get Array from local storage
const votesResults = JSON.parse(localStorage.getItem('VOTESARRAY'));

// for (let i = 0; i < votesResults.length; i++){

//     const productLineItem = votesResults[i];
    
//     // const tr = document.createElement('tr');
    
//     // const productTd = document.createElement('td');
//     const product = findById(productArray, productLineItem.id);

//     productTd.textContent = product.name;

//     // const seenTd = document.createElement('td');
//     seenTd.textContent = productLineItem.timesSeen;

//     // const pickedTd = document.createElement('td');
//     pickedTd.textContent = productLineItem.timesPicked;
    
//     // tr.appendChild(productTd);
//     // tr.appendChild(seenTd);
//     // tr.appendChild(pickedTd);

//     // tableResults.appendChild(tr);

// }




// EXAMPLE CODE

// const myVotes = [
//     { id: 'coffee', votes: 3 },
//     { id: 'banana', votes: 5 },
//     { id: 'desk', votes: 7 },
//     { id: 'chair', votes: 8 },

// ];

const timesPicked = [];
const names = [];

votesResults.forEach(item => {
    timesPicked.push(item.timesPicked);
    names.push(item.id);
});

const ctx = document.getElementById('results-chart').getContext('2d');



new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: timesPicked,
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'lightgreen', 'darkgreen', 'darkgrey', 'darkorange', 'darkred', 'darkorchid', 'darksalmon', 'darkslateblue', 'darkviolet', 'deeppink', 'deepskyblue', 'gold', 'mediumturquoise']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
