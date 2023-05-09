function getNames() {
    let familyNames = ["Sally", "Ashley", "Mary", "Betty"]

    return familyNames
}

function displayNames(familyNames) {
    let numNames = familyNames.length;
    for (let i = 0; i < numNames; i++) {
        console.log(familyNames[i]);
    }
}

let ourFamily = getNames();
displayNames(ourFamily);

console.log('------');

//simpler way w/o a function

const familyNames = ["Sally", "Ashley", "Mary", "Betty"]

let numNames = familyNames.length;
    for (let i = 0; i < numNames; i++) {
        console.log(familyNames[i]);
    }