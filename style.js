const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
console.log(addressclose)
addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "none"
})
// slider-------------------------------------------------------------------------------------------------------------------------------
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0 
rightbtn.addEventListener('click', function(){
    index = index + 1
    if(index > imgNumber.length - 1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%" 
})
leftbtn.addEventListener('click', function(){
    index = index - 1
    if(index <= 0){
        index = imgNumber.length - 1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
// slider 1-----------------------------------------------------------------------------------------------------------------------------
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click", function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// slider 2-----------------------------------------------------------------------------------------------------------------------------
function imgAuto (){
    index = index + 1
    if(index > imgNumber.length - 1){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
    imgNumberLi[index].classList.add("active")
    //console.log(index)
}
setInterval(imgAuto, 5000)
// slider product-----------------------------------------------------------------------------------------------------------------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items-content')
rightbtntwo.addEventListener('click', function(){
    index = index + 1
    if(index > imgNumbertwo.length - 1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content-container").style.right = index * 100+"%" 
})
leftbtntwo.addEventListener('click', function(){
    index = index - 1
    if(index <= 0){
        index = imgNumbertwo.length - 1
    }
    document.querySelector(".slider-product-one-content-items-content-container").style.right = index * 100+"%"
})


//--------------------------------------------------------------------------------------------------------------------------------------
let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; 
    document.querySelector('.image-wrapper').style.transform = `translateX(${offset}%)`;
}
function prevSlide() {
    showSlide(currentSlide - 1);
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
function filterLocations() {
    const selectedLocation = document.getElementById('location-select').value;
    const locations = document.querySelectorAll('.location');
    locations.forEach(location => {
        if (selectedLocation === '' || location.getAttribute('data-location') === selectedLocation) {
            location.style.display = 'block';
        } else {
            location.style.display = 'none';
        }
    });
}
showSlide(currentSlide);
