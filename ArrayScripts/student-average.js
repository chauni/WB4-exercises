let students = [
        {name: "Zephaniah", scores: [100, 96, 99, 92]},
        {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
        {name: "Siddalee", scores: [86, 72, 92]},
        {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
        {name: "Elisha", scores: [89, 100]},
        {name: "Ezra", scores: [100, 99, 100, 87]}
    ];
     

    
    for (let i = 0; i < students.length; i++) {
        const student = students[i]
        console.log('Student:', student.name);

        let sum = 0
        for (let j = 0; j < student.scores.length; j++) {
            sum += student.scores[j];
        }

        const average = sum / student.scores.length
        
        console.log(`Score Average: ${Math.round(average)}`);
        console.log('------');
    }

