const vehicles = [
    {
      color: 'Silver',
      type: 'Minivan',
      registrationState: 'CA',
      licenseNo: 'ABC-101',
      registrationExpires: new Date('3-10-2022'),
      capacity: 7
    },
    {
      color: 'Red',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'A1D-2NC',
      registrationExpires: new Date('8-31-2023'),
      capacity: 3
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'A22-X00',
      registrationExpires: new Date('9-31-2023'),
      capacity: 6
    },
    {
      color: 'Red',
      type: 'Car',
      registrationState: 'CA',
      licenseNo: 'ABC-222',
      registrationExpires: new Date('12-10-2024'),
      capacity: 5
    },
    {
      color: 'Black',
      type: 'SUV',
      registrationState: 'CA',
      licenseNo: 'EEE-222',
      registrationExpires: new Date('12-10-2021'),
      capacity: 7
    },
    {
      color: 'Red',
      type: 'SUV',
      registrationState: 'TX',
      licenseNo: 'ZZ2-101',
      registrationExpires: new Date('12-30-2022'),
      capacity: 5
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'CAC-7YT',
      registrationExpires: new Date('1-31-2024'),
      capacity: 5
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'CA',
      licenseNo: '123-ABC',
      registrationExpires: new Date('3-31-2024'),
      capacity: 5
    }
  ];


for (i = 0; i < vehicles.length; i++) {
    if (vehicles[i].color == "Red") {
        console.log(vehicles[i].licenseNo, vehicles[i].type, 'is red')
    }
}

console.log('---');

const today = new Date()
for (i = 0; i < vehicles.length; i++) {
    if (vehicles[i].registrationExpires < today) {
        console.log(vehicles[i].licenseNo, 'registration is expired')
    }
}

console.log('---');

console.log('Cars that hold at least 6 people:')
for (i = 0; i < vehicles.length; i++) {
    if (vehicles[i].capacity >= 6) {
        console.log(vehicles[i].type, vehicles[i].licenseNo)
    }
}

console.log('---');

for (i = 0; i < vehicles.length; i++) {
    if (vehicles[i].licenseNo.includes('222')) {
        console.log(vehicles[i].licenseNo, 'has a license plate that contains "222"')
    }
}

/* ^ alt. way 

for (i = 0; i < vehicles.length; i++) {
    const v = vehicles[i];
    const substr = v.licenseNo.slice(-3);
    if (substr == '222')) {
        console.log(v.licenseNo, 'has a license plate that contains "222"')
    }
}

OR

for (i = 0; i < vehicles.length; i++) {
    if (v.licenseNo.endsWith('222')) {
        console.log(v.licenseNo, 'has a license plate that contains "222"')
    }
}


*/