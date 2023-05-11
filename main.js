
// Navigation 
function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu")
    const navigation = document.querySelector(".navigation")
    toggleMenu.classList.toggle("active")
    navigation.classList.toggle("active")
}
// End Navigation


// Page Transition

window.onload = () => {
    const transition_element = document.querySelector('.transition')
    const anchors = document.querySelectorAll('a')

    setTimeout( () => {
         transition_element.classList.remove('is-active')
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_element.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target
            }, 500);
        })
    }
}

// End Page Transition