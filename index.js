let details = document.querySelectorAll('.details');
let pictures = document.querySelectorAll('.pictures');
let reasons = document.querySelectorAll('.reasons');
let descriptions = document.querySelectorAll('.description');
let clickedAlready = Array.from(details).fill(false);


function isMobile(){
    return /iPhone|Android/i.test(navigator.userAgent);
}
if(isMobile()){
    details.forEach(function (detail, index) {
        detail.style.height = "15em";
        reasons[index].style.fontSize = "30px";
        descriptions[index].style.fontSize = "22px";
    });
}
details.forEach(function (detail, index) {
    detail.addEventListener('click', function () {

        // Toggle the rotation
        let currentRotation = getComputedStyle(detail).getPropertyValue('--rotation') || '0deg';
        currentRotation = parseInt(currentRotation);
        const newRotation = (currentRotation + 180) % 360; // Rotate by 180 degrees

        detail.style.transition = 'transform 1s ease';
        detail.style.transform = `rotateY(${newRotation}deg)`;
        detail.style.setProperty('--rotation', newRotation + 'deg');
        // Toggle the visibility of the corresponding reasons and pictures elements
        if (clickedAlready[index]) {
            setTimeout(() => {
                reasons[index].style.display = 'block';
                pictures[index].style.display = 'none';
                descriptions[index].style.display = 'block';
            }, 300);
        } else {
            setTimeout(() => {
                reasons[index].style.display = 'none';
                descriptions[index].style.display = 'none';
                pictures[index].style.display = 'block';
            }, 300);
        }
        console.log(clickedAlready[index]);
        clickedAlready[index] = !clickedAlready[index];
    });
});
