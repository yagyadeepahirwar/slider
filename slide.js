var slideIndex=1;

// next and previout slide move function

function plushSlide(n)
{
    slideIndex+=n;
    showSlide(slideIndex);
}

// move to perticular slide by clicking on dot
function currentSlide(n){
    slideIndex=n;
    showSlide(n);
}
function showSlide(n)
{
    let slides= document.querySelectorAll(".slide");
    let dots= document.querySelectorAll(".dot");
    
    for(let i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    for(let i=0;i<dots.length;i++)
    {
        dots[i].classList.remove("active");
    }
    if(n>slides.length){
        slideIndex= 1;
    }
    if(n<1){
        slideIndex=slides.length;
    }
    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].classList.add("active");
}

showSlide(slideIndex);