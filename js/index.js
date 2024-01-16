const initSlider =()=>{
    const imageList = document.querySelector(".slider-wrapper .img-list");
    const slideButtons = document.querySelectorAll(".scroll .slide-button");

    slideButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            // console.log(button);
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", initSlider);

const initSlider2 =()=>{
    const imageList = document.querySelector(".category-item .category-list");
    const slideButtons = document.querySelectorAll(".scroll2 .slide-button2");

    slideButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            // console.log(button);
            const direction = button.id === "prev-slide2" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", initSlider2);