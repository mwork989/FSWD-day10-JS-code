
// document.write("<div>hello this is from scrip1</div>");

// document.write("hello this is second from scrip1");

const container1 = document.getElementById('container1'); // single element object div
container1.textContent ='hello this is from script1:container1';

const container2 = document.getElementsByClassName('container2') // array of elements we can get [div]

container2.textContent ='hello this is from script1:container2';

const container3 = document.getElementsByTagName('div'); //div div 
container3.textContent ='hello this is from script1:container2';


console.log(container1,container2,container3)


function greet(){
    alert('welcome to js learning')
}

function sum(){
    const num1 = Number(window.prompt())

    const num2 = Number(window.prompt())
    alert(num1+num2)
}