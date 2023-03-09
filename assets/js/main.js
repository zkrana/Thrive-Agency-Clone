const addClass = document.getElementById('willBeHide');
const closeBtn = document.getElementById('closedBtn');

closeBtn.addEventListener("click", () =>{
    addClass.style.display="none";
    console.log('test');
})


const readMore = document.getElementById('read_more');
const showExtra = document.getElementById('show_value');
const  readLess = document.getElementById('read_less');
readMore.addEventListener("click", ()=>{
    showExtra.classList.toggle("showExtraContent");
    readMore.style.display="none";
})
readLess.addEventListener("click", ()=>{
    showExtra.classList.remove("showExtraContent");
    readMore.style.display="block";
})


const readMore1 = document.getElementById('read_more1');
const showExtra1 = document.getElementById('show_value1');
const  readLess1 = document.getElementById('read_less1');
readMore1.addEventListener("click", ()=>{
    showExtra1.classList.toggle("showExtraContent");
    readMore1.style.display="none";
})
readLess1.addEventListener("click", ()=>{
    showExtra1.classList.remove("showExtraContent");
    readMore1.style.display="block";
})


const readMore2 = document.getElementById('read_more2');
const showExtra2 = document.getElementById('show_value2');
const  readLess2 = document.getElementById('read_less2');
readMore2.addEventListener("click", ()=>{
    showExtra2.classList.toggle("showExtraContent");
    readMore2.style.display="none";
})
readLess2.addEventListener("click", ()=>{
    showExtra2.classList.remove("showExtraContent");
    readMore2.style.display="block";
})


const readMore3 = document.getElementById('read_more3');
const showExtra3 = document.getElementById('show_value3');
const  readLess3 = document.getElementById('read_less3');
readMore3.addEventListener("click", ()=>{
    showExtra3.classList.toggle("showExtraContent");
    readMore3.style.display="none";
})
readLess3.addEventListener("click", ()=>{
    showExtra3.classList.remove("showExtraContent");
    readMore3.style.display="block";
})



const search = document.getElementById('search');
const showSearch = document.getElementById('showSearch');
search.addEventListener("click", ()=>{
    showSearch.classList.toggle("showSearchBox");
})


const brief = document.getElementById('brief');
const showBrief = document.getElementById('showBrief');
const  lessBrief = document.getElementById('lessBrief');
brief.addEventListener("click", ()=>{
    showBrief.classList.toggle("showExtraContent");
    brief.style.display="none";
})
lessBrief.addEventListener("click", ()=>{
    showBrief.classList.remove("showExtraContent");
    brief.style.display="block";
})
