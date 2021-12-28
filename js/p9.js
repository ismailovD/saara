const btn = document.querySelector('.button'),
    backPage = document.querySelectorAll('.back-page');

let pathLocation = "/saara/pages/p16.html"

let backLocation;
let trueOrFalse = sessionStorage.getItem('boolean');
let dataStorage = sessionStorage.getItem('backPage');
let backPageArr = dataStorage.split(',');
console.log(backPageArr);
if (Boolean(trueOrFalse)) {
    backLocation = backPageArr[backPageArr.length - 1];
    console.log(backLocation);
} else {
    backPageArr.pop();
    console.log(backPageArr);
    backLocation = backPageArr[backPageArr.length - 1];
    console.log(backLocation);
}
console.log(backPageArr);
backPage.forEach(back => {
    back.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.setItem('boolean', "");
        sessionStorage.setItem('backPage', backPageArr);
        console.log(backPageArr);
        location.href = backLocation;
    })
})
btn.addEventListener('click', (e) => {
    e.preventDefault();
    backPageArr.push('/saara/pages/p9.html');
    sessionStorage.setItem('boolean', "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation;
}); 