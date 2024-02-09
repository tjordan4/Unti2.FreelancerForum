const intialFreelancers = [ {
    name: "Alice",
    occupation: "Writer",
    price: 30
},
{
    name: "Bob",
    occupation: "Teacher",
    price: 50
}]

const freelancers = [ { 
    name: "Dr. Slice", 
    price: 25, 
    occupation: "Gardener" 
},
{ 
    name: "Dr. Pressure", 
    price: 51, 
    occupation: "Programmer" 
},
{ 
    name: "Prof. Possibility", 
    price: 43, 
    occupation: "Teacher" 
},
{ 
    name: "Prof. Prism", 
    price: 81, 
    occupation: "Teacher" 
},
{ 
    name: "Dr. Impulse", 
    price: 43, 
    occupation: "Teacher" 
},
{ 
    name: "Prof. Spark", 
    price: 76, 
    occupation: "Programmer" 
},
{ 
    name: "Dr. Wire", 
    price: 47, 
    occupation: "Teacher" 
},
{ 
    name: "Prof. Goose", 
    price: 72, 
    occupation: "Driver" 
},
]

var count = 0;
var average = 0;

function updateAverage(nextValue){
    let oldTotal = average * count;
    count++;
    let newTotal = oldTotal + nextValue;
    average = newTotal / count;
}

function addRow(name, job, price){
    let table = document.getElementById('table');
    let row = table.insertRow(-1);
    
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = job;
    row.insertCell(2).innerText= `$${price}`;
    
    updateAverage(price)
}


function initialSetup(){
    intialFreelancers.forEach((element) => {
        addRow(element.name, element.occupation, element.price)
    });
    document.getElementById('average').innerText = average;
}

initialSetup();
const addFreelancerInterval = setInterval(addFreelancer, 2000)

function* nextPerson(){
    for (var element of freelancers) {
        yield element;
    }
    return ;
}

var generator = nextPerson();

function addFreelancer(){
    
    let next = generator.next();
    if (!next.done) {
        let person = next.value;
        addRow(person.name, person.occupation, person.price);
        document.getElementById('average').innerText = average;
    }
}
