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

console.log('------');

console.log('The actor(s) whose name starts with "Bob":');

for (let k = 0; k < academyMembers.length; k++) {
    if (academyMembers[k].name.indexOf("Bob") == 0) {
        console.log(academyMembers[k].name)
    }
}

console.log('------');

// console.log('The actor(s) that have been in a film that starts with "A":');

// for (let i = 0; i < academyMembers.length; i++) {
//     console.log(academyMembers[i].films.indexOf("A"))
//     if (academyMembers[i].films.indexOf("A") == 0) {
//         console.log(academyMembers[i].name)
//     }
// }
