const buttons = document.querySelectorAll("[data-image-slider-button]");
const slides = document.querySelector("[slides_of_data]");
let currentIndex = 0;

function showSlide(index) {
    for (let i = 0; i < slides.children.length; i++) {
        slides.children[i].style.display = "none";
    }
    slides.children[index].style.display = "block";
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.children.length;
    showSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    showSlide(currentIndex);
}

function startAutoSlide() {
    setInterval(() => {
        showNextSlide();
    }, 5000); 
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.imageSliderButton === "next" ? 1 : -1;
        currentIndex = (currentIndex + offset + slides.children.length) % slides.children.length;
        showSlide(currentIndex);
    });
});


startAutoSlide();




//Readmore Button

var readMoreBtn = document.querySelector('.readMoreBtn');
var hiddenContent = document.querySelector('.hide');


hiddenContent.style.display = 'none';


readMoreBtn.addEventListener('click',()=>{
    
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        readMoreBtn.textContent = 'Read Less'; 
    } else {
        hiddenContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More'; 
    }
});

