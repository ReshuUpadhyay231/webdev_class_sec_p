// const URL="https://dummyjson.com/products";
// fetch(URL)
// to just print the data in console
    // .then((res)=>{
    //     return res.json();
    // })
    // .then((data)=>{
    //     console.log(data);
    // })

const URL1="https://dummyjson.com/products/search?q=";
const btn=document.querySelector('#btn');
const item=document.querySelector('#item');
const container=document.querySelector('#container');
container.style.display="flex";
container.style.flexWrap="wrap";
container.style.gap="10px";

btn.addEventListener('click',()=>{
    const API=item.value.trim();
    fetch(URL1+API)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        data.products.forEach(product => {
            console.log(product);
            const div=document.createElement('div');
            div.style.border="1px solid black";
            div.style.width="300px";
            div.style.padding="10px";
            div.style.margin="10px";
            div.style.textAlign="center";
            div.style.justifyContent="center";
            const h1=document.createElement('h1');
            h1.innerText=product.title;
            const img=document.createElement('img');
            //img.src=product.images[0];
            img.setAttribute('src',product.thumbnail);
            img.style.height="150px";
            const h2=document.createElement('h2');
            h2.innerText=product.brand;
            const p=document.createElement('p');
            p.innerText="Price: " + product.price;
            const p1=document.createElement('p');
            p1.innerText="rating: " + product.rating;
            div.append(h1,img,h2,p,p1);
            container.append(div);
        });
    });
});

const URL="https://dummyjson.com/products";
fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        data.products.forEach(product => {
            console.log(product);
            const div=document.createElement('div');
            div.style.border="1px solid black";
            div.style.width="300px";
            div.style.padding="10px";
            div.style.margin="10px";
            div.style.textAlign="center";
            div.style.justifyContent="center";
            const h1=document.createElement('h1');
            h1.innerText=product.title;
            const img=document.createElement('img');
            //img.src=product.images[0];
            img.setAttribute('src',product.thumbnail);
            img.style.height="150px";
            const h2=document.createElement('h2');
            h2.innerText=product.brand;
            const p=document.createElement('p');
            p.innerText="Price: " + product.price;
            const p1=document.createElement('p');
            p1.innerText="rating: " + product.rating;
            div.append(h1,img,h2,p,p1);
            container.append(div);
        });
    
})