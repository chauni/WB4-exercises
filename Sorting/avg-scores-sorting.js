let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let exampleScores = [ 80, 83, 86, 87, 92, 100]

function getAverage(scores) {
    let sum = 0;
    let i;
    for (i = 0; i < scores.length; i++) {
        sum += scores[i];
    } 

    const average = sum / scores.length;
    return average
}


function getMedian(scores) {
    scores.sort(function(a,b){
        return a - b
    });

    if (scores.length % 2 == 0) {
        //is even
        const left = scores.length / 2 - 1;
        const right = scores.length / 2

        const average = (scores[left] + scores[right]) / 2 // could also call on previous getAverage function to simplify the process

        return average
    } else {
        const middleIndex = Math.floor(scores.length / 2)
        

        return scores[middleIndex]
    }
}

function getMin(scores) {
    scores.sort(function(a,b){
        return a - b
    });

    return scores[0]
}

function getMax(scores) {
    scores.sort(function(a,b){
        return a - b
    });

    return scores[scores.length - 1];
}

console.log('median of myScores', getMedian(myScores))
console.log('median of yourScores', getMedian(yourScores))
console.log('median of exampleScores', getMedian(exampleScores))
console.log('------');
console.log('min score', getMin(myScores))
console.log('max score', getMax(myScores))


/*
// first sort from least to greatest
// if array.length is even ** an even number divided by two doesnt have a denominator so it will == 0** {
    // somehow get indexes(indices) of middle two numbers
    average the middle two numbers
    return average
} else {
    //somehow get middle index
    return value at the middle index
}
// calculate middle index using array length divided by 2
// return number at the middle index
*/