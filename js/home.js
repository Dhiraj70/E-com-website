const productcontainer = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productcontainer.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});


// product image hover

const productImg = document.querySelectorAll('.product-img img');
const imageSlide = document.querySelector('.image-slide');

let activeImageSlide = 0;

productImg.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
        productImg[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        imageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    });
});

// toggle size buttons product.html

const sizeBtn = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtn[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})

