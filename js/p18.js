const   contentLeft = document.querySelector('.p18__left'),
        contentRight = document.querySelector('.p18__right'),
        wrapperRight = document.querySelector('.content__right'),
        contentBtns = document.querySelector('.p18__buttons'),
        dropBtn = document.querySelector('.p18__payment-btn'),
        btn = document.querySelector('.button'),
        backPage = document.querySelectorAll('.back-page');


let pathLocation = "/saara/pages/p17.html";
 

let backLocation;
let trueOrFalse = sessionStorage.getItem('boolean'); 
let dataStorage = sessionStorage.getItem('backPage');
let backPageArr = dataStorage.split(','); 
console.log(backPageArr); 
if(Boolean(trueOrFalse)){ 
    backLocation = backPageArr[backPageArr.length - 1]; 
    console.log(backLocation);
    
}else { 
    backPageArr.pop();
    console.log(backPageArr); 
    backLocation = backPageArr[backPageArr.length - 1];
    console.log(backLocation);
} 
console.log(backPageArr);
backPage.forEach(back => { 
    back.addEventListener('click', (e) => {
        e.preventDefault(); 
        sessionStorage.setItem('boolean' , ""); 
        sessionStorage.setItem('backPage', backPageArr);
        console.log(backLocation);
        location.href = backLocation; 
    })
})
btn.addEventListener('click', (e)=> {    
    e.preventDefault() ; 
    backPageArr.push('/saara/pages/p21.html');
    sessionStorage.setItem('boolean' , "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation; 
}); 
dropBtn.addEventListener('click', () => {
    location.href = '/saara/pages/p19.html';
})
window.addEventListener('load', ()=> {
    if(window.innerWidth < 768){
        changeContent() 
    }
})
window.addEventListener('resize', ()=> {
    if(window.innerWidth < 768){
        changeContent() 
    }else {
        returnContent()
    }
})




function changeContent() {
    contentLeft.appendChild(contentRight); 
    contentLeft.appendChild(contentBtns); 
}
function returnContent() {
    wrapperRight.appendChild(contentRight); 
    contentRight.appendChild(contentBtns); 
}
