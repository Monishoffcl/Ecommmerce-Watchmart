const wrapper = document.querySelector(".sliderwrapper")
const menuitems=document.querySelectorAll(".menuitem")
const products=[{id:1,title:"RICHARD MILLE",price:5000,colours:[{code:"black",img:"./img/Richard-Mille.jpg",},{code:"darkblue",img:"./img/air dblue.jpg",}],},{
    id:2,title:"ROLEX",price:4500,colours:[{code:"black",img:"./img/black-moissanite-diamond-cartier-watch-for-men-2226984021-zzsge4yr.avif",},{code:"darkblue",img:"./img/jor blue.jpg",}],
},{id:3,title:"CARTIER",price:3000,colours:[{code:"black",img:"./img/Diamond_Rolex_Datejust_iced_out_ruby_bezel_in_Dubai_UAE_1024x1024.webp",},{code:"darkblue",img:"./img/blaz blue.jpg",}],},{
    id:4,title:"TITAN",price:1000,colours:[{code:"black",img:"./img/Pre-owned-rolex.jpg",},{code:"darkblue",img:"./img/car blue.jpg",}],
},{id:5,title:"BOVET",price:6000,colours:[{code:"black",img:"./img/rolex-brand-luxe-digital.jpg",},{code:"darkblue",img:"./img/hip blue.jpg",}],}]

let choosenproduct=products[0]
const currentproductimg=document.querySelector(".productimg");
const currentproducttitle=document.querySelector(".producttitle");
const currentproductprice=document.querySelector(".productprice");
const currentproductcolours=document.querySelectorAll(".colour");
const currentproductsizes=document.querySelectorAll(".size");

menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
        //CHANGE THE CHOOSEN PRODUCT
        choosenproduct=products[index]
        //change text of currentproduct
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "$"+choosenproduct.price;
        currentproductimg.src=choosenproduct.colours[0].img;
        //asign new colour
        currentproductcolours.forEach((colour,index)=>{
            colour.style.backgroundcolour=choosenproduct.colours[index].code;
        });
        //currentproducttitle.textContent = choosenproduct.title;
    });
});
currentproductcolours.forEach((colour,index)=>{
    colour.addEventListener("click",()=>{
        currentproductimg.src=choosenproduct.colours[index].img
    });
});
currentproductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentproductsizes.forEach(size=>{
            size.style.backgroundcolor= "white";
            size.style.color="black";

        });
    size.style.backgroundcolor= "black";
    size.style.color="white";
    
    });
});
const productbutton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");
productbutton.addEventListener("click",()=>{
    payment.style.display="flex";
});
close.addEventListener("click",()=>{
    payment.style.display="none";
});
