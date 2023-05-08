"use strict";

const myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Los Angeles",
    state: "CA",
    zip: "900013"
}


function printContact(info) {
    console.log(info.name); 
    console.log(info.address);
    console.log(info.city, info.state, info.zip);
}


printContact(myInfo);