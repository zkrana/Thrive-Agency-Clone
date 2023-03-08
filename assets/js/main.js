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