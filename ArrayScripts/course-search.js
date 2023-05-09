const courses = [
    {
      CourseId: 'PROG100',
      Title: 'Introduction to HTML/CSS/Git',
      Location: 'Classroom 7',
      StartDate: '09/08/22',
      Fee: '100.00'
    },
    {
      CourseId: 'PROG200',
      Title: 'Introduction to JavaScript',
      Location: 'Classroom 9',
      StartDate: '11/22/22',
      Fee: '350.00'
    },
    {
      CourseId: 'PROG300',
      Title: 'Introduction to Java',
      Location: 'Classroom 1',
      StartDate: '01/09/23',
      Fee: '50.00'
    },
    {
      CourseId: 'PROG400',
      Title: 'Introduction to SQL and Databases',
      Location: 'Classroom 7',
      StartDate: '03/16/23',
      Fee: '50.00'
    },
    {
      CourseId: 'PROJ500',
      Title: 'Introduction to Angular',
      Location: 'Classroom 1',
      StartDate: '04/25/23',
      Fee: '50.00'
    }
  ];

console.log('The start date for PROG200 is:')
for (let i = 0; i < courses.length; i++) {
    if (courses[i].CourseId == 'PROG200') {
        console.log(courses[i].StartDate);
        console.log('------');
    }
}

console.log('The title of PROJ500 is:') 
for (let j = 0; j < courses.length; j++) {
    if (courses[j].CourseId == 'PROJ500') {
        console.log(courses[j].Title);
        console.log('------');
    }
}

console.log('The courses that cost $50 or less are:')

let matching = [];
for (let k = 0; k < courses.length; k++) {
    if (courses[k].Fee == '50.00') {
        matching.push(courses[k].Title);
        console.log(courses[k].Title);
    }
}

console.log('------');

console.log('The classes that meet in Classroom 1 are:')
for (let m = 0; m < courses.length; m++) {
    if (courses[m].Location == 'Classroom 1') {
        console.log(courses[m].CourseId);
    }
}