// const URL="https://official-joke-api.appspot.com/random_joke";
// // fetch(URL)
// //     .then((res)=>{
// //         return res.json();
// //     })
// //     .then((data) => {
// //         console.log(data);
// //     })
// //when we click the button the joke should be fetched and displayed
// const container=document.querySelector('#container');
// const btn=document.querySelector('#btn');

// btn.addEventListener('click',()=>{
//     fetch(URL)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(data.setup);
//         const h1=document.createElement('h1');
//         console.log(h1);
//         h1.innerText=data.setup;
//         container.append(h1);

//         const h2=document.createElement('h2');
//         h2.innerText=data.punchline;
        
//         container.append(h2);
//     })
// })

const URL1="http://universities.hipolabs.com/search?country=";
const but1=document.querySelector('#btn1');
const container1=document.querySelector('#container1');
const country=document.querySelector('#country');
but1.addEventListener('click',()=>{
    const API=URL1+country.value;

    fetch(API)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        
        data.forEach(university => {
            console.log(university);
            const div=document.createElement('div');
            const h1=document.createElement('h1');
            h1.innerText=university.name;
            const coun=document.createElement('p');
            coun.innerText=university.country;
            const webpage=document.createElement('a');
            webpage.href=university.web_pages;
            webpage.innerText=university.web_pages;
            const state=document.createElement('p');
            state.innerText=university['state-province'];
            div.append(h1,coun,webpage,state);
            container1.append(div);

            
        });

        
        
    })
});
