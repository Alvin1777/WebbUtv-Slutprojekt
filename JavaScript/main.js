// Navigation
function toggleMenu() {
  //Togglar hamburger-menyn på/av
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
// End Navigation

// Page Transition

window.onload = () => {
  //Väntar på att fönstret ska ladda innan koden körs
  const transition_element = document.querySelector(".transition"); //Hämtar element med klassen "transition"
  const anchors = document.querySelectorAll("a"); //Hämtar alla ankarelement på sidan

  //Lägger till en fördröjning innan "is-active" -klassen tas bort från transitions_element
  setTimeout(() => {
    transition_element.classList.remove("is-active");
  }, 500); //Fördröjning på 500 millisekunder (0.5 sekunder)

  //Loopar igenom alla ankarelement
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    //Lägger till en event-listener
    //Denna lyssnare förhindrar standardbeteendet för ankarelementet, vilket är att navigera till en ny sida när det klickas på.
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href; //Hämtar måladressen från det klickade ankarelementet

      transition_element.classList.add("is-active"); //Lägger till "is-active" -klassen till transitions_element

      setTimeout(() => {
        window.location.href = target;
      }, 500);
      //Fördröjning på 500 millisekunder (0.5 sekunder) läggs till innan fönsteradressen ändras till target-adressen.
      //Detta gör att navigeringen till måladressen sker efter fördröjningen.
    });
  }
};

// End Page Transition
