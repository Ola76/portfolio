//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 5000;
let timeAutoNext = 7000;

function redirectTochat() {
    window.location.href = "https://github.com/Ola76/telegram-news-bot";
}
function redirectTosql() {
    window.location.href = "https://github.com/Ola76/DatawranglingSQL";
}
function redirectTotab() {
    window.location.href = "https://public.tableau.com/app/profile/oburoh.oritsebamigho/viz/ChartST/Dashboard1";
}
function redirectTotweet() {
    window.location.href = "https://github.com/Ola76/sentiment_stream";
}
function redirectTotweetapp() {
    window.location.href = "https://sentimentstream.streamlit.app/";
}
function redirectTostop() {
    window.location.href = "https://github.com/Ola76/spotify_casestudy";
}
function redirectTosales() {
    window.location.href = "https://superstoreappusa.streamlit.app/";
}
function redirectTosalesapp() {
    window.location.href = "https://github.com/Ola76/superstore/tree/main";
}
function redirectTohotel() {
    window.location.href = "https://www.kaggle.com/code/playfulminds/hotel-booking-f1-86";
}
function redirectTopy() {
    window.location.href = "https://github.com/Ola76/git_cli";
}
nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}