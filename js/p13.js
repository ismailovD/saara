const   contentHidden = document.querySelector('.p13__content.hidden'),
        contentLeft = document.querySelector('.p13__left'),
        contentRight = document.querySelector('.p13__right'),
        btn = document.querySelector('.button'),
        backPage = document.querySelectorAll('.back-page');


let pathLocation = "/saara/pages/p14.html";


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
backPageArr.push('/saara/pages/p13.html');
sessionStorage.setItem('boolean' , "true");
sessionStorage.setItem('backPage', backPageArr);
location.href = pathLocation; 
}); 


window.addEventListener('load', ()=> {
    if(window.innerWidth < 992){
        changeContent() 
    }
})
window.addEventListener('resize', ()=> {
    if(window.innerWidth < 992){
        changeContent() 
    }else {
        returnContent()
    }
})




function changeContent() {
    contentLeft.appendChild(contentRight);  
}
function returnContent() {
    contentHidden.appendChild(contentRight);  
}