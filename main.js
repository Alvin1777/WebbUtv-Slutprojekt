


// function validateForm() {
//     // Hämtar värdena från formuläret
//     let email = document.getElementById('email').value;

//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       alert('Vänligen ange en korrekt e-postadress.');
//       return false;
//     }
// }


//Navigation 
function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu")
    const navigation = document.querySelector(".navigation")
    toggleMenu.classList.toggle("active")
    navigation.classList.toggle("active")
}
// End Navigation