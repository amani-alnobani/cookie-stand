'use strict';

// global :
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let hoursarray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let Totalarray=[];

let cityarray = [];

function City(name, min, max, avgCookies) {
    this.name = name;
    this.minOfcus = min;
    this.maxOfcus = max;
    this.avgOfcookies = avgCookies;
    this.totalCookiePerday = 0;
    this.randNumOfCus = [];
    this.custPerhoue = [];
    this.cookiesPerhour = [];

    cityarray.push(this);

}

City.prototype.CalCustPerhour = function () {
    for (let i = 0; i < hoursarray.length; i++) {
        this.custPerhoue.push(random(this.minOfcus, this.maxOfcus));
    }
}

City.prototype.CalCookiePerhour = function () {
    for (let i = 0; i < hoursarray.length; i++) {
        this.cookiesPerhour.push(Math.floor(this.custPerhoue[i] * this.avgOfcookies));

        this.totalCookiePerday += this.cookiesPerhour[i];
    }
}

let Seattel = new City('seatell', 23, 65, 6.3)
// Seattel.amani();

let Tokyo = new City('Tokyo', 3, 24, 1.2)
// Tokyo.amani();

let Dubai = new City('Dubai', 11, 38, 3.7)
// Dubai.amani();

let Paris = new City('Paris', 20, 38, 2.3)
// Paris.amani();

let Lima = new City('Lima', 2, 16, 4.6)
// Lima.amani();
// console.log (cityarray)

let parent = document.getElementById('parent');

let table = document.createElement('table');

parent.appendChild(table);


function makeHeader() {

    let headerRow = document.createElement('tr')

    table.appendChild(headerRow);

    let firstTh = document.createElement('th');

    headerRow.appendChild(firstTh);


    firstTh.textContent = 'Name';

    for (let i = 0; i < hoursarray.length; i++) {
        let hoursTh = document.createElement('th');

        headerRow.appendChild(hoursTh);
        hoursTh.textContent = hoursarray[i];

    }

    let lastTh = document.createElement('th');

    headerRow.appendChild(lastTh);
    lastTh.textContent = 'Daily Location Total';


}



// rende method

City.prototype.render = function () {

    let dataRow = document.createElement('tr');

    table.appendChild(dataRow);

    let nameTd = document.createElement('td')
    dataRow.appendChild(nameTd);

    nameTd.textContent = this.name;

    for (let i = 0; i < hoursarray.length; i++) {
        let cookieTd = document.createElement('td');
        dataRow.appendChild(cookieTd);
        cookieTd.textContent = this.cookiesPerhour[i];

    }

    let totalTd = document.createElement('td');
    
    dataRow.appendChild(totalTd);

    totalTd.textContent = this.totalCookiePerday;


}




//footer

function makeFooter() {

    let footerRow = document.createElement('tr');

    table.appendChild(footerRow);

    let firstTh = document.createElement('th');

    footerRow.appendChild(firstTh);

    firstTh.textContent = 'Totals';


    let totalOftotal = 0;

    for (let i = 0; i < hoursarray.length; i++) {
        // console.log(hoursarray[i]);

        let TotalPerH = 0;

        for (let j = 0; j < cityarray.length; j++) {
            TotalPerH += cityarray[j].cookiesPerhour[i];
            totalOftotal += cityarray[j].cookiesPerhour[i];

        }

        // console.log(TotalPerH);
        // console.log(totalOftotal);

        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh)
        footerTh.textContent = TotalPerH;

    }

    let lastTh = document.createElement('th');

    footerRow.appendChild(lastTh);

    lastTh.textContent = totalOftotal;
}
makeHeader();
makeFooter();

for (let i = 0; i < cityarray.length; i++) {
    // console.log(cityarray[i]);
    cityarray[i].CalCustPerhour();
    cityarray[i].CalCookiePerhour();
    cityarray[i].render();

}


// console.log(parent);

// create table


// append



// creating the header row:
// let headingRow = document.createElement('tr');

// // append it o the table
// table.appendChild(headingRow);

// // MAKING THE TH
// let headings = ['name'];


// for (let i = 0; i < hoursarray.length; i++) {
//     // make th element
//     let thElement = document.createElement('th');

//     // append
//     headingRow.appendChild(thElement);

//     // text conent
//     thElement.textContent = hoursarray[i]
// }

// City.prototype.render = function () {

//     for (let i = 0; i < this.randNumOfCus.length; i++) {
//         // make th element
//         let dataRow = document.createElement('td');

//         // append
//         table.appendChild(dataRow);

//         let ct1 = document.createElement('td');
//         dataRow.appendChild(ct1);

//         ct1.textContent = `${this.name}`;
//     }

// }
// for (let i = 0; i < cityarray.length; i++) {
//     cityarray[i].amani();
//     cityarray[i].render();
// }

// // let td1=document.createElement('td')
// // dataRow.appendChild(td1)
// // td1.textContent=this.
// // Places()