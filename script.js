const btn=document.querySelector(".btn");
const about=document.querySelector(".about");
const services=document.querySelector(".services");
const tours=document.querySelector(".tours");
const home=document.querySelector(".home");

const Homes=document.querySelector(".Homes");
const Abouts=document.querySelector(".Abouts");
const Servicess=document.querySelector(".Servicess");
const Tourss=document.querySelector(".Tourss");

home.addEventListener("click",function(){
Homes.scrollIntoView({behavior:"smooth"});
})

btn.addEventListener("click",function(){
  Tourss.scrollIntoView({behavior:"smooth"});  
})

about.addEventListener("click",function(){
    Abouts.scrollIntoView({behavior:"smooth"});  
   
})

services.addEventListener("click",function(){
    Servicess.scrollIntoView({behavior:"smooth"});  
   
})


tours.addEventListener("click",function(){
 Tourss.scrollIntoView({behavior:"smooth"});
})


const places=[
    {
        id:1,
        name:"Mysore Palace",
      img:"https://holidaybays.com/wp-content/uploads/2015/09/mysore-palace-night-places-to-visit-in-karnataka.jpg"
    },
    {
        id:2,
        name:'Hampi',
        img:"https://www.kstdc.co/wp-content/uploads/2019/10/b3d.jpg"
    },
    {
        id:3,
        name:"Murudeshwar",
        img:"https://blogs.revv.co.in/blogs/wp-content/uploads/2020/11/Murudeshwar.jpg"
    },
    {
        id:4,
        name:"Golden Temple",
        img:"https://cdn.tripways.com/2020/11/07094043/golden-temple-3.jpg"
    },
    {
        id:5,
        name:"India Gate",
        img:"https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg"
    },
    {
        id:6,
        name:"Kerala",
        img:"https://www.keralatourism.org/images/downloadHRI/backwater/big/5.jpg"
    },
    {
        id:7,
        name:"Paris",
        img:"https://media.cntraveler.com/photos/598339c9b7a86962e8e27c5d/master/pass/Paris_GettyImages-601763009.jpg"
    },
    {
        id:8,
        name:"Taj Mahal",
        img:"https://www.bontravelindia.com/wp-content/uploads/2021/10/Taj-Mahal-Heritage-Tourism-India-scaled.jpg"
    },

    {
        id:9,
        name:"Singhad Fort",
        img:"images/singhad fort.jpg"
    },
    {
        id:10,
        name:"Talakadu",
        img:"https://www.triponary.com/wp-content/uploads/2017/03/1280px-The_Chennakeshava_temple_at_Somanathapura.jpg"
    }
];

const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const img=document.querySelector(".item-img");
const id=document.querySelector(".id");

let currentItem=0;

window.addEventListener('DOMContentLoaded',function(){
    showPlaces(currentItem);
})

function showPlaces(place){
    const item=places[place];
    id.textContent=item.name;
    img.src=item.img;
   
}

prev.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
        currentItem=places.length-1;
    }
    showPlaces(currentItem);
});

next.addEventListener("click",function(){
    currentItem++;
    if(currentItem>places.length-1){
        currentItem=0;
    }
    showPlaces(currentItem);
})