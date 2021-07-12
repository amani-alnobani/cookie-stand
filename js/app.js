'use strict';

// global :
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let hoursarray =[ 'Names of places','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let Totalarray=[];

let cityarray=[];

function City(name, min, max, avg) {
            this.name = name,
            this.minOfcus = min,
            this.maxOfcus = max,
            this.avgOfcookies = avg,
            this.randNumOfCus = [],
            cityarray.push(this);

    }

City.prototype.amani=function(){
        this.randNumOfCus=random(this.minOfcus,this.maxOfcus);
//         total+=this.randNumOfCus;
}

let Seattel = new City ('seatell',23,65,6.3)
// Seattel.amani();


let Tokyo = new City ('Tokyo',23,65,6.3)
// Tokyo.amani();


let Dubai = new City ('Dubai',23,65,6.3)
// Dubai.amani();

let Paris = new City ('Paris',23,65,6.3)
// Paris.amani();

let Lima = new City ('Lima',23,65,6.3)
// Lima.amani();

console.log (cityarray)



let parent =document.getElementById('parent');
// console.log(parent);

// create table
let table=document.createElement('table');

// append
parent.appendChild(table);


// creating the header row:
let headingRow=document.createElement('tr');

// append it o the table
table.appendChild(headingRow);

// MAKING THE TH
let headings=['name'];


for (let i = 0; i < hoursarray.length; i++) {
    // make th element
    let thElement=document.createElement('th');

    // append
    headingRow.appendChild(thElement);

    // text conent
    thElement.textContent=hoursarray[i]
}

City.prototype.render=function(){

for (let i = 0; i < this.randNumOfCus.length; i++) {
    // make th element
    let dataRow= document.createElement('td');

    // append
    table.appendChild(dataRow);

    let ct1=document.createElement('td');
    dataRow.appendChild(ct1);

    ct1.textContent=`${this.name}`;
}

}
for (let i = 0; i < cityarray.length; i++) {
    cityarray[i].amani();
    cityarray[i].render();
}

// // let td1=document.createElement('td')
// // dataRow.appendChild(td1)
// // td1.textContent=this.
// // Places()