// const head=document.querySelector('#head');
// head.style.color='red';
// const city=document.querySelectorAll('li')[2];
// console.log(city);
// city.style.border='2px solid black';
// city.style.width='100px';
// city.style.backgroundColor='teal';
// let x=city.previousElementSibling;
// x.style.color='blue';
// let y=city.nextElementSibling;
// y.style.color='blue';
// let z=city.previousElementSibling.previousElementSibling;
// z.style.backgroundColor='yellow';
// let w=city.nextElementSibling.nextElementSibling;
// w.style.backgroundColor='yellow';
// const parent=city.parentElement;
// parent.style.border='3px solid green';
// const ul=document.querySelectorAll('ul')[0];
// console.log(ul.children);
// ul.children[4].style.color='purple';
// ul.children[3].style.color='red';

const div=document.createElement('div');
console.log(div);
const body=document.querySelector('body');
body.append(div);
const h1=document.createElement('h1');
h1.innerText='city';
h1.setAttribute('id','head');
div.append(h1);

const ul=document.createElement('ul');
const child1=document.createElement('li');
child1.innerText='delhi';
ul.append(child1);
div.append(ul);

const child2=document.createElement('li');
child2.innerText='kolkata';
ul.append(child2);
div.append(ul);

const child3=document.createElement('li');
child3.innerText='mumbai';
ul.append(child3);
div.append(ul);

const child4=document.createElement('li');
child4.innerText='pune';
ul.append(child4);
div.append(ul);

const child5=document.createElement('li');
child5.innerText='bangalore';
ul.append(child5);
div.append(ul);

const head=document.getElementById('head');
const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    console.log('button clicked');
    head.style.color='green';
});
head.addEventListener('copy',()=>{
    console.log('head copied');
    console.log(e.target);
    e.target.innerText='copied';

});
// const el = document.querySelector('#myDiv');
// el.classList.add('highlight');
