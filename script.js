const nav1 = document.querySelector('.stays');
const nav2 = document.querySelector('.flights');
const nav3 = document.querySelector('.cars');
const nav4 = document.querySelector('.packages');
const nav5 = document.querySelector('.things');
const contents = document.querySelector('.nav-content');

Stays();

nav1.addEventListener('click', Stays);
nav2.addEventListener('click', Flights);
nav3.addEventListener('click', Cars);
nav4.addEventListener('click', Packages);
nav5.addEventListener('click', Things);

function Stays() {
    contents.innerHTML = '';
    const el = document.createElement('input');
    el.type = 'text';
    el.className = 'input-area';
    el.placeholder = 'Going To';
    contents.appendChild(el);
    const el2 = document.createElement('input');
    el2.type = 'date';
    el2.className = 'input-area';
    contents.appendChild(el2);
    const el3 = document.createElement('input');
    el3.type = 'date';
    el3.className = 'input-area';
    contents.appendChild(el3);
    const el4 = document.createElement('input');
    el4.type = 'text';
    el4.className = 'input-area';
    el4.placeholder = 'travellers';
    contents.appendChild(el4);
    contents.appendChild(document.createElement('br'));

    const el5 = document.createElement('input');
    el5.type = 'checkbox';
    contents.appendChild(el5);
    contents.append('Add a Flight');
    const el6 = document.createElement('input');
    el6.type = 'checkbox';
    contents.appendChild(el6);
    contents.append('Add a Car');
}

function Flights() {
    contents.innerHTML = '';
    const div1 = document.createElement('div');
    div1.className = 'div1';

    const subDiv1 = document.createElement('div');
    const el1 = document.createElement('span');
    el1.className = 'sub-nav';
    el1.textContent = 'Return';
    subDiv1.appendChild(el1);
    const el2 = document.createElement('span');
    el2.className = 'sub-nav';
    el2.textContent = 'One-way';
    subDiv1.appendChild(el2);
    const el3 = document.createElement('span');
    el3.className = 'sub-nav';
    el3.textContent = 'Multi-city';
    subDiv1.appendChild(el3);
    div1.appendChild(subDiv1);
    contents.appendChild(div1);

    const subDiv2 = document.createElement('div');
    const select1 = document.createElement('select');
    const option1 = document.createElement('option');
    option1.textContent = 'Traveller';
    select1.appendChild(option1);
    subDiv2.appendChild(select1);
    div1.appendChild(subDiv2);
    const select2 = document.createElement('select');
    const option2 = document.createElement('option');
    option2.textContent = 'Economy';
    select2.appendChild(option2);
    subDiv2.appendChild(select2);
    div1.appendChild(subDiv2);

    const div2 = document.createElement('div');
    div2.className = 'div2';

    Return();

    el1.addEventListener('click', Return);
    el2.addEventListener('click', oneWay);
    el3.addEventListener('click', multiWay);

    function Return() {
        div2.innerHTML = '';
        const el4 = document.createElement('input');
        el4.type = 'text';
        el4.className = 'input-area';
        el4.placeholder = 'Leaving from';
        div2.appendChild(el4);
        const el5 = document.createElement('input');
        el5.type = 'text';
        el5.className = 'input-area';
        el5.placeholder = 'Going to';
        div2.appendChild(el5);
        const el6 = document.createElement('input');
        el6.type = 'date';
        el6.className = 'input-area';
        div2.appendChild(el6);
        const el7 = document.createElement('input');
        el7.type = 'date';
        el7.className = 'input-area';
        el7.placeholder = 'Going to';
        div2.appendChild(el7);

        contents.appendChild(div2)
    }

    function oneWay() {
        div2.innerHTML = '';
        const el4 = document.createElement('input');
        el4.type = 'text';
        el4.className = 'input-area';
        el4.placeholder = 'Leaving from';
        div2.appendChild(el4);
        const el5 = document.createElement('input');
        el5.type = 'text';
        el5.className = 'input-area';
        el5.placeholder = 'Going to';
        div2.appendChild(el5);
        const el6 = document.createElement('input');
        el6.type = 'date';
        el6.className = 'input-area';
        div2.appendChild(el6);

        contents.appendChild(div2)
    }

    function multiWay() {
        div2.innerHTML = '';
        div2.append('Flight 1');
        div2.appendChild(document.createElement('br'));
        const el4 = document.createElement('input');
        el4.type = 'text';
        el4.className = 'input-area';
        el4.placeholder = 'Leaving from';
        div2.appendChild(el4);
        const el5 = document.createElement('input');
        el5.type = 'text';
        el5.className = 'input-area';
        el5.placeholder = 'Going to';
        div2.appendChild(el5);
        const el6 = document.createElement('input');
        el6.type = 'date';
        el6.className = 'input-area';
        div2.appendChild(el6);

        contents.appendChild(div2)
        div2.appendChild(document.createElement('br'));

        div2.append('Flight 2');
        div2.appendChild(document.createElement('br'));
        const el7 = document.createElement('input');
        el7.type = 'text';
        el7.className = 'input-area';
        el7.placeholder = 'Leaving from';
        div2.appendChild(el7);
        const el8 = document.createElement('input');
        el8.type = 'text';
        el8.className = 'input-area';
        el8.placeholder = 'Going to';
        div2.appendChild(el8);
        const el9 = document.createElement('input');
        el9.type = 'date';
        el9.className = 'input-area';
        div2.appendChild(el9);

        contents.appendChild(div2)
    }
}

function Cars() {
    contents.innerHTML = '';
    const div1 = document.createElement('div');
    div1.className = 'div1';

    const subDiv1 = document.createElement('div');
    const el1 = document.createElement('span');
    el1.className = 'sub-nav';
    el1.textContent = 'Car hire';
    subDiv1.appendChild(el1);
    const el2 = document.createElement('span');
    el2.className = 'sub-nav';
    el2.textContent = 'Ariprot transport';
    subDiv1.appendChild(el2);
    
    div1.appendChild(subDiv1);
    contents.appendChild(div1);

    const div2 = document.createElement('div');

    carHire();

    el1.addEventListener('click', carHire);
    el2.addEventListener('click', airportTransport);
    
    function carHire() {
        div2.innerHTML = '';
        const el3 = document.createElement('input');
        el3.type = 'text';
        el3.className = 'input-area';
        el3.placeholder = 'Pick-up';
        div2.appendChild(el3);
        const el4 = document.createElement('input');
        el4.type = 'text';
        el4.className = 'input-area';
        el4.placeholder = 'same as pick-up';
        div2.appendChild(el4);
        const el5 = document.createElement('input');
        el5.type = 'date';
        el5.className = 'input-area';
        div2.appendChild(el5);
        const el6 = document.createElement('input');
        el6.type = 'date';
        el6.className = 'input-area';
        div2.appendChild(el6);
        const el7 = document.createElement('input');
        el7.type = 'text';
        el7.className = 'input-area';
        el7.placeholder = 'Pick-up time';
        div2.appendChild(el7);
        const el8 = document.createElement('input');
        el8.type = 'text';
        el8.className = 'input-area';
        el8.placeholder = 'Drop-off time';
        div2.appendChild(el8);

        contents.appendChild(div2);
    }
    
    function airportTransport() {
        div2.innerHTML = '';
        const el4 = document.createElement('input');
        el4.type = 'text';
        el4.className = 'input-area';
        el4.placeholder = 'Airport';
        div2.appendChild(el4);
        const el5 = document.createElement('input');
        el5.type = 'text';
        el5.className = 'input-area';
        el5.placeholder = 'Hotel name';
        div2.appendChild(el5);
        const el6 = document.createElement('input');
        el6.type = 'date';
        el6.className = 'input-area';
        div2.appendChild(el6);
        const el7 = document.createElement('input');
        el7.type = 'text';
        el7.className = 'input-area';
        el7.placeholder = 'Flight arrival time';
        div2.appendChild(el7);
        div2.appendChild(document.createElement('br'));
        const el8 = document.createElement('input');
        el8.type = 'checkbox';
        div2.appendChild(el8);
        div2.append('I only need accommodation for part of my trip');

        contents.appendChild(div2)
    }
}

function Packages() {
    contents.innerHTML = '';
    const el1 = document.createElement('input');
    el1.type = 'text';
    el1.className = 'input-area';
    el1.placeholder = 'Leaving from';
    contents.appendChild(el1);
    const el2 = document.createElement('input');
    el2.type = 'text';
    el2.className = 'input-area';
    el2.placeholder = 'Going to';
    contents.appendChild(el2);
    const el3 = document.createElement('input');
    el3.type = 'date';
    el3.className = 'input-area';
    contents.appendChild(el3);
    const el4 = document.createElement('input');
    el4.type = 'date';
    el4.className = 'input-area';
    el4.placeholder = 'Going to';
    contents.appendChild(el4);

    contents.appendChild(document.createElement('br'));

    const el5 = document.createElement('input');
    el5.type = 'checkbox';
    contents.appendChild(el5);
    contents.append('I only need accommodation for part of my trip');
}

function Things() {
    // nav5.style.color = 'rgb(0, 110, 255)';
    // nav5.style.borderBottom = '2px solid rgb(0, 110, 255)';
    contents.innerHTML = '';
    const el1 = document.createElement('input');
    el1.type = 'text';
    el1.className = 'input-area';
    el1.placeholder = 'Things to do in';
    contents.appendChild(el1);
    const el2 = document.createElement('input');
    el2.type = 'date';
    el2.className = 'input-area';
    contents.appendChild(el2);
    const el3 = document.createElement('input');
    el3.type = 'date';
    el3.className = 'input-area';
    contents.appendChild(el3);
}

let dp1 = document.querySelector("#drop1").addEventListener("click", drop1)
function drop1(){
    Stays();
}
let dp2 = document.querySelector("#drop2").addEventListener("click", drop2)
function drop2(){
    Flights()
}
let dp3 = document.querySelector("#drop3").addEventListener("click", drop3)
function drop3(){
    Cars()
}
let dp4 = document.querySelector("#drop4").addEventListener("click", drop4)
function drop4(){
    Packages()
}
let dp5 = document.querySelector("#drop5").addEventListener("click", drop5)
function drop5(){
    Things()
}