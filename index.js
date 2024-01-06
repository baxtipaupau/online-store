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