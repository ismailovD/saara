const productTabs = document.querySelectorAll('.product__item'),
    productShow = document.querySelectorAll('.product__scoreboard'),
    panelItem = document.querySelectorAll('.product__panel-item'),
    showImg = document.querySelector('.product__target-img'),
    productNAme = document.querySelector('.product__info-title'),
    productStars = document.querySelectorAll('.product__star'),
    productNewPrice = document.querySelector('.product__price-new'),
    productOldPrice = document.querySelector('.product__price-old'),
    productBottomTabs = document.querySelectorAll('.product__bottom-btn'),
    productBottomShow = document.querySelectorAll('.product__bottom-show');

let products = {
    targetImg1: {
        name: "Name of the product",
        star: 1,
        newPrice: 12.55,
        oldPrice: 15.15
    },
    targetImg2: {
        name: "Name of the product",
        star: 2,
        newPrice: 20.15,
        oldPrice: 23.75
    },
    targetImg3: {
        name: "Name of the product",
        star: 3,
        newPrice: 28.95,
        oldPrice: 32.25
    },
    targetImg4: {
        name: "Name of the product",
        star: 4,
        newPrice: 31.05,
        oldPrice: 35.00
    }
}

productNAme.innerHTML = products['targetImg1'].name;
productStars.forEach(star => {
    star.classList.remove('like')
})
for (let x = 0; x < products['targetImg1'].star; x++) {
    productStars[x].classList.add('like')
}
productNewPrice.innerHTML = "$" + String(products['targetImg1'].newPrice.toFixed(2));
productOldPrice.innerHTML = "$" + String(products['targetImg1'].oldPrice.toFixed(2));

showImg.setAttribute('src', panelItem[0].children[0].getAttribute('src'))
productTabs.forEach(el => {
    el.addEventListener('click', () => {
        for (let i = 0; i < productTabs.length; i++) {
            productTabs[i].classList.remove("active")
        }
        el.classList.add('active')
        productShow.forEach(elem => {
            elem.classList.remove('visible');
            if (el.getAttribute('data-id') === elem.getAttribute('id')) {
                elem.classList.add('visible')
            }
        })
    })
})


panelItem.forEach(item => {
    item.addEventListener('click', () => {
        for (let j = 0; j < panelItem.length; j++) {
            panelItem[j].classList.remove('active')
        }
        item.classList.add('active');
        showImg.setAttribute('src', item.children[0].getAttribute('src'));
        let objName = item.children[0].getAttribute('id');
        productNAme.innerHTML = products[objName].name;
        productStars.forEach(star => {
            star.classList.remove('like')
        })
        for (let x = 0; x < products[objName].star; x++) {
            productStars[x].classList.add('like')
        }
        productNewPrice.innerHTML = "$" + String(products[objName].newPrice.toFixed(2));
        productOldPrice.innerHTML = "$" + String(products[objName].oldPrice.toFixed(2));

    })
})


productBottomTabs.forEach(tab => {
    tab.addEventListener('click', ()=> { 
        for(let i = 0; i < productBottomTabs.length; i++){
            productBottomTabs[i].classList.remove('active');
            productBottomShow[i].classList.remove('active');
        }
        let showId = tab.getAttribute('data-code');
        tab.classList.add('active');
        document.querySelector("#" + showId).classList.add('active')
    })
})