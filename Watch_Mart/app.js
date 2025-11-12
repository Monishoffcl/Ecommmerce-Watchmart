const wrapper = document.querySelector(".sliderwrapper")
const menuitems=document.querySelectorAll(".menuitem")
const products=[{id:1,title:"RICHARD MILLE",price:5000,colours:[{code:"black",img:"./img/Richard-Mille.jpg",},{code:"darkblue",img:"./img/air dblue.jpg",}],},{
    id:2,title:"ROLEX",price:4500,colours:[{code:"black",img:"./img/black-moissanite-diamond-cartier-watch-for-men-2226984021-zzsge4yr.avif",},{code:"darkblue",img:"./img/jor blue.jpg",}],
},{id:3,title:"CARTIER",price:3000,colours:[{code:"black",img:"./img/Diamond_Rolex_Datejust_iced_out_ruby_bezel_in_Dubai_UAE_1024x1024.webp",},{code:"darkblue",img:"./img/blaz blue.jpg",}],},{
    id:4,title:"TITAN",price:1000,colours:[{code:"black",img:"./img/Pre-owned-rolex.jpg",},{code:"darkblue",img:"./img/car blue.jpg",}],
},{id:5,title:"BOVET",price:6000,colours:[{code:"black",img:"./img/rolex-brand-luxe-digital.jpg",},{code:"darkblue",img:"./img/hip blue.jpg",}],}]

let choosenproduct=products[0];
const currentproductimg=document.querySelector(".productimg");
const currentproducttitle=document.querySelector(".producttitle");
const currentproductprice=document.querySelector(".productprice");

menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
        choosenproduct=products[index];
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "$"+choosenproduct.price;
        currentproductimg.src=choosenproduct.colours[0].img;
    });
});
const productbutton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const paymentOverlay=document.querySelector(".payment-overlay");
const close=document.querySelector(".close");
productbutton.addEventListener("click",()=>{
    payment.style.display="flex";
    paymentOverlay.style.display="block";
});
close.addEventListener("click",()=>{
    payment.style.display="none";
    paymentOverlay.style.display="none";
});
paymentOverlay.addEventListener("click",()=>{
    payment.style.display="none";
    paymentOverlay.style.display="none";
});
