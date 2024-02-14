// กำหนด slideIndex เป็น 1
let slideIndex = 1;
showSlides(slideIndex);

// function กดเปลี่ยน slides
function plusSlides(n){
    showSlides(slideIndex += n);
}

// function สำหรับ dots เปลี่ยน slides (ปุ่มใสด้านล่าง)
function currentSlides(n){
    showSlides(slideIndex = n);
}

// function แสดงรูปของ slide
function showSlides(n){
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    console.log(slides);
    console.log(dots);

    // loop รูปภาพให้กด 1 ไปรูปสุดท้ายแล้วรูปไม่หาย
    if (n > slides.length){
        slideIndex = 1;
    }
    // loop รูปภาพให้กดจาก 1 ไปซ้ายแล้วไปรูปสุดท้าย
    if (n < 1){
        slideIndex = slides.length;
        
    }

    // loop รูปภาพ
    for(let i = 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }

    // การ loop ให้ dots active พอเปลี่ยนรูป จะแทนค่าเป็นค่าว่าง ไม่อย่างนั้น dots จะ active ตลอดเวลา
    for (let i = 0; i < dots.length; i++) {
 dots[i].className = dots[i].className.replace("active", "");
    }
    
    // ก็คือการเอาค่า SlideIndex ด้านบนที่กำหนดเป็น 1 มาบวกค่า เพื่อแสดงผลรูปภาพ
    // = slideIndex 1 + .... =
    // slideIndex - 1 = 0 = img 1
    // slideIndex 0 = 1 = img 2
    // slideIndex 1 = 2 = img 3
    // slideIndex 2 = 3 = img 4
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " active";


   
}


showSlides(slideIndex);