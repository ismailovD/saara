const   tabs = document.querySelectorAll('.p7__tabs'),
        btn = document.querySelector('.button'),
        backPage = document.querySelectorAll('.back-page');


let pathLocation = "/saara/pages/p20.html";
 

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
    backPageArr.push('/saara/pages/p7.html');
    sessionStorage.setItem('boolean' , "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation; 
}); 

const swiperP7 = new Swiper(".p7Swiper", {
    slidesPerView: 2,
    grid : {
        fill: 'row',
        rows: 1,
    },   
    spaceBetween:30,
    updateOnWindowResize:true,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: { 
            slidesPerView: 3,
            grid : {
                fill: 'row',
                rows: 2,
            },
        },
        992: {
            slidesPerView: 4,
            grid : {
                fill: 'row',
                rows: 2,
            },
        }
    }
 });
 
tabs.forEach(tab => {
    tab.addEventListener('click' , (e) => {
        e.preventDefault();
        if(tab.getAttribute('id') == "colorOrSize") {
            sessionStorage.setItem('tab', "1");
        }else if (tab.getAttribute('id') == "otherItems"){
            sessionStorage.setItem('tab', "2");
        } 
        location.href = '/saara/pages/option.html'; 
    })
})
 