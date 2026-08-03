// دکمه شروع

const startBtn = document.getElementById("startBtn");

const home = document.getElementById("home");

const lock = document.getElementById("lock");


startBtn.addEventListener("click",()=>{


home.classList.add("hidden");


lock.classList.remove("hidden");



});




// ورود با رمز


const enterBtn = document.getElementById("enterBtn");

const password = document.getElementById("password");

const wrong = document.getElementById("wrong");

const love = document.getElementById("love");



enterBtn.addEventListener("click",()=>{


if(password.value === "Raha"){



lock.classList.add("hidden");


love.classList.remove("hidden");



createHearts();



const music = document.getElementById("music");


// آماده سازی آهنگ

music.volume = 0.7;



}


else{


wrong.innerHTML =

"این هدیه فقط برای یک نفر ساخته شده... ❤️";


password.style.animation="shake .3s";


}



});







// ساخت قلب های متحرک


function createHearts(){


const box = document.querySelector(".hearts");



for(let i=0;i<40;i++){



let heart=document.createElement("span");


heart.innerHTML="❤️";


heart.style.position="absolute";


heart.style.left=Math.random()*100+"%";


heart.style.bottom="-20px";


heart.style.fontSize=(10+Math.random()*30)+"px";


heart.style.animation=

`heartMove ${5+Math.random()*5}s linear infinite`;



heart.style.animationDelay=

Math.random()*5+"s";



box.appendChild(heart);



}



}







// افکت تایپ متن

const text=

"بعضی آدم‌ها را نمی‌شود توضیح داد... فقط باید دوستشان داشت ❤️";



let index=0;



function typing(){


let element=document.querySelector(".story");



if(!element) return;



element.innerHTML=text.substring(0,index);



index++;



if(index<=text.length){


setTimeout(typing,80);


}



}




// شروع افکت وقتی صفحه باز شد

document.addEventListener("click",()=>{


if(!love.classList.contains("hidden")){


typing();


}



});
// ساخت ذرات طلایی

function createSparkles(){


const area=document.getElementById("sparkles");



for(let i=0;i<80;i++){


let s=document.createElement("span");


s.className="spark";


s.style.left=Math.random()*100+"%";


s.style.animationDuration=

(5+Math.random()*8)+"s";


s.style.animationDelay=

Math.random()*5+"s";


area.appendChild(s);


}


}


createSparkles();

// کنترل موزیک اختصاصی


const playBtn=document.getElementById("playMusic");

const music=document.getElementById("music");

const record=document.querySelector(".record");

const status=document.getElementById("musicStatus");

const wave=document.querySelector(".wave");



playBtn.addEventListener("click",()=>{


if(music.paused){


music.play();


record.classList.add("playing");

wave.classList.add("active");


playBtn.innerHTML="⏸ توقف آهنگ";


status.innerHTML="در حال پخش... ❤️";


}

else{


music.pause();


record.classList.remove("playing");

wave.classList.remove("active");


playBtn.innerHTML="▶ پخش آهنگ";


status.innerHTML="متوقف شد";


}


});

// اسلایدشو عاشقانه


let slides=document.querySelectorAll(".slide");

let currentSlide=0;



function nextSlide(){


slides[currentSlide].classList.remove("active");



currentSlide++;



if(currentSlide>=slides.length){

currentSlide=0;

}



slides[currentSlide].classList.add("active");



}



setInterval(nextSlide,6000);

// متن تایپی پایان


const finalText=

"تو زیباترین اتفاق زندگی منی ❤️";


let letter=0;


function typeFinal(){


const target=document.getElementById("typingText");


if(!target) return;



if(letter < finalText.length){


target.innerHTML += finalText.charAt(letter);


letter++;


setTimeout(typeFinal,120);


}



}





// ساخت گلبرگ و قلب


function createPetals(){


const area=document.getElementById("petals");



const symbols=[

"❤️",

"🌹",

"✨"

];



for(let i=0;i<60;i++){


let p=document.createElement("span");


p.className="petal";


p.innerHTML=

symbols[Math.floor(Math.random()*symbols.length)];



p.style.left=Math.random()*100+"%";


p.style.animationDuration=

(5+Math.random()*8)+"s";



p.style.animationDelay=

Math.random()*5+"s";



area.appendChild(p);



}


}




// وقتی وارد صفحه عشق شد

enterBtn.addEventListener("click",()=>{


if(password.value==="Raha"){


setTimeout(()=>{


typeFinal();

createPetals();


},2000);


}


});





// بازگشت

document.getElementById("restart").addEventListener("click",()=>{


love.classList.add("hidden");


home.classList.remove("hidden");


letter=0;


});


