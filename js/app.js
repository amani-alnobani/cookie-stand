'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let seattle = {

    minOfCust: 23,
    maxOfcust: 65,
    avgCookie: 6.3,
    randomCust: [],
    randCookie: [],
    rand: function () {
        for (let i = 0; i < 14; i++) {
            function random(minOfCust, maxOfcust) {
                return Math.floor(Math.random() * (maxOfcust - minOfCust + 1)) + minOfCust;

            }

            this.randomCust.push(random(this.minOfCust, this.maxOfcust));
            this.randCookie.push(Math.round(this.avgCookie * this.randomCust[i]));

        }


        let parent = document.getElementById('storeCookie');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);

        divelement.appendChild(ulelement);
        h2element.textContent = 'Seattle';

        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li');
            lielement.textContent =`${this.hours[i]} ${this.randCookie[i]}`;
            ulelement.appendChild(lielement);
        }
        let litotal = document.createElement('li');
        ulelement.appendChild(litotal);
        let sum = 0;

        for (let i = 0; i < this.randCookie.length; i++) {
            sum += this.randCookie[i];
        };

        litotal.textContent = `total ${sum}`;

    }
}


seattle.rand();


let tokio = {

    minOfCust: 3,
    maxOfcust: 24,
    avgCookie: 1.2,
    randomCust: [],
    randCookie: [],
    rand: function () {
        for (let i = 0; i < 14; i++) {
            function random(minOfCust, maxOfcust) {
                return Math.floor(Math.random() * (maxOfcust - minOfCust + 1)) + minOfCust;

            }


            this.randomCust.push(random(this.minOfCust, this.maxOfcust));
            this.randCookie.push(Math.round(this.avgCookie * this.randomCust[i]));

        }


        let parent = document.getElementById('storeCookie');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);

        divelement.appendChild(ulelement);
        h2element.textContent = 'tokio';
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li');
            lielement.textContent = `${this.hours[i]} ${this.randCookie[i]}`;
            ulelement.appendChild(lielement);
        }
        let litotal = document.createElement('li');
        ulelement.appendChild(litotal);
        let sum = 0;

        for (let i = 0; i < this.randCookie.length; i++) {
            sum += this.randCookie[i];
        };
        litotal.textContent = `total ${sum}`;

    }
}
tokio.rand()

let dubai = {

    minOfCust: 11,
    maxOfcust: 38,
    avgCookie: 3.7,
    randomCust: [],
    randCookie: [],
    rand: function () {
        for (let i = 0; i < 14; i++) {
            function random(minOfCust, maxOfcust) {
                return Math.floor(Math.random() * (maxOfcust - minOfCust + 1)) + minOfCust;

            }

            this.randomCust.push(random(this.minOfCust, this.maxOfcust));
            this.randCookie.push(Math.round(this.avgCookie * this.randomCust[i]));

        }


        let parent = document.getElementById('storeCookie');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);

        divelement.appendChild(ulelement);
        h2element.textContent = 'dubai';
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li');
            lielement.textContent = `${this.hours[i]} ${this.randCookie[i]}`;
            ulelement.appendChild(lielement);
        }
        let litotal = document.createElement('li');
        ulelement.appendChild(litotal);
        let sum = 0;

        for (let i = 0; i < this.randCookie.length; i++) {
            sum += this.randCookie[i];
        };
        litotal.textContent = `total ${sum}`;

    }
}

dubai.rand()


let paris = {

    minOfCust: 20,
    maxOfcust: 38,
    avgCookie: 2.3,
    randomCust: [],
    randCookie: [],
    rand: function () {
        for (let i = 0; i < 14; i++) {
            function random(minOfCust, maxOfcust) {
                return Math.floor(Math.random() * (maxOfcust - minOfCust + 1)) + minOfCust;

            }


            this.randomCust.push(random(this.minOfCust, this.maxOfcust));
            this.randCookie.push(Math.round(this.avgCookie * this.randomCust[i]));
        }



        let parent = document.getElementById('storeCookie');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);

        divelement.appendChild(ulelement);
        h2element.textContent = 'paris';
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li');
            lielement.textContent = `${this.hours[i]} ${this.randCookie[i]}`;
            ulelement.appendChild(lielement);
        }
        let litotal = document.createElement('li');
        ulelement.appendChild(litotal);
        let sum = 0;

        for (let i = 0; i < this.randCookie.length; i++) {
            sum += this.randCookie[i];
        };
        litotal.textContent = `total ${sum}`;

    }
}
paris.rand()



let lima = {

    minOfCust: 2,
    maxOfcust: 16,
    avgCookie: 4.6,
    randomCust: [],
    randCookie: [],
    rand: function () {
        for (let i = 0; i < 14; i++) {
            function random(minOfCust, maxOfcust) {
                return Math.floor(Math.random() * (maxOfcust - minOfCust + 1)) + minOfCust;

            }

            this.randomCust.push(random(this.minOfCust, this.maxOfcust));
            this.randCookie.push(Math.round(this.avgCookie * this.randomCust[i]));

        }


        let parent = document.getElementById('storeCookie');
        let h2element = document.createElement('h2');
        let divelement = document.createElement('div');
        let ulelement = document.createElement('ul');
        parent.appendChild(h2element);
        parent.appendChild(divelement);

        divelement.appendChild(ulelement);
        h2element.textContent = 'lima';
        for (let i = 0; i < 14; i++) {

            let lielement = document.createElement('li');
            lielement.textContent = `${this.hours[i]} ${this.randCookie[i]}`;
            ulelement.appendChild(lielement);
        }
        let litotal = document.createElement('li');
        ulelement.appendChild(litotal);
        let sum = 0;

        for (let i = 0; i < this.randCookie.length; i++) {
            sum += this.randCookie[i];
        };
        litotal.textContent = `total ${sum}`;

    }
}
lima.rand()