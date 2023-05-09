const academyMembers = [
    {
      memID: 101,
      name: 'Bob Brown',
      films: ['Bob I', 'Bob II', 'Bob III', 'Bob IV']
    },
    {
      memID: 142,
      name: 'Sallie Smith',
      films: ['A Good Day', 'A Better Day']
    },
    {
      memID: 187,
      name: 'Fred Flanders',
      films: ['Who is Fred?', 'Where is Fred?', 'What is Fred?', 'Why Fred?']
    },
    {
      memID: 203,
      name: 'Bobbie Boots',
      films: ['Walking Boots', 'Hiking Boots', 'Cowboy Boots']
    }
  ];


console.log('The A.M with ID 187:');

for (let i = 0; i < academyMembers.length; i++) {
    if (academyMembers[i].memID == 187) {
        console.log(academyMembers[i].name)
    }
}

console.log('------');

console.log('The actor(s) that has been in atleast three films:');

for (let j = 0; j < academyMembers.length; j++) {
    if (academyMembers[j].films.length >= 3) {
        console.log(academyMembers[j].name)
    }
}

/* ^ alt. way with a function

// this function is responsible for filtering through the array

function atLeastThreeFilms(actors) { 
    let matching = [];
    for (let j = 0; j < actors.length; j++) {
    if (actors[j].films.length >= 3) {
        matching.push(actors[i]) <-- pushes into an array; will only contain the actors that meet the if statement conditions (been in at least 3 films)
    }
}
return matching //... subset of actors
}
const result = atLeastThreeFilms(academyMembers); <-- you can then loop this

for let (i = 0; i < result.length; i++) {
    console.log(result[i].name);
}
*/


console.log('------');

console.log('The actor(s) whose name starts with "Bob":');

for (let k = 0; k < academyMembers.length; k++) {
    if (academyMembers[k].name.indexOf("Bob") != -1) {
        console.log(academyMembers[k].name)
    }
}

/* ^ alt way.


for (let k = 0; k < academyMembers.length; k++) {
    if (academyMembers[k].name.startsWith("Bob") {
        console.log(academyMembers[k].name)
    }
}

*/

console.log('------');

console.log('The actor(s) that have been in a film that starts with "A":');

for (let i = 0; i < academyMembers.length; i++) {
    const actor = academyMembers[i]
    let hasTwoFilmsWithA = false
    for (let j = 0; j < actor.films.length; j++)
    if (actor.films[j].startsWith("A")) {
        hasTwoFilmsWithA = true;
    }

    if (hasTwoFilmsWithA) {
        console.log(actor.name)
    }
}
