const   radioChoose = document.querySelectorAll('.choose__card'),  
        parent = '.choose__card',
        btn = document.querySelector('.button');


 pathLocation = "/saara/pages/p18.html";
 
btn.addEventListener('click', (e)=> {    
e.preventDefault() ; 
backPageArr.push('/saara/pages/p14.html');
sessionStorage.setItem('boolean' , "true");
sessionStorage.setItem('backPage', backPageArr);
location.href = pathLocation; 
}); 


radioChoose.forEach(elem => {
    elem.addEventListener('click', () => {
        radioChoose.forEach(k => {
            k.closest(parent).classList.remove('active')
        })  
            elem.closest(parent).classList.add('active') 
            btn.disabled = false; 
    })
})

 