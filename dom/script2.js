const head=document.getElementById('head');
head.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.border = 'solid red 2px';
})
const para=document.querySelector('.para');
para.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    e.target.style.fontSize = '30px';
    e.target.style.backgroundColor = 'yellow';
    e.target.style.transition = 'all 0.5s ease-in-out';
});
para.addEventListener('mouseleave', (e) => {
    console.log(e.target);
    e.target.style.fontSize = '16px';
    e.target.style.backgroundColor = 'white';
});
const div=document.getElementsByTagName('div')[0];
div.addEventListener('copy', (e) => {
    console.log(e.target);
});

function fun(){
    console.log('clicked')
}

function abc(){
    console.log('button clicked')
}
