let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
    let sum = 0;
    let i;
    for (i = 0; i < scores.length; i++) {
        sum += scores[i];
    } 

    const average = sum / scores.length;
    return average
}

console.log(Math.round(getAverage(myScores)));
console.log(Math.round(getAverage(yourScores)));

// for (let i = 0; i < scores.length; i++) {
//     if ()
// }

// function getMedian(scores) {
    
// }