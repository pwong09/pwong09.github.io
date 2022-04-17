//select the about link
const aboutEl = document.querySelector('.about');
//select about section
const aboutSectionEl = document.querySelector('#about');
// add an event listener
aboutEl.addEventListener('click', handleClick);
// show about section on click
function handleClick(e) {
    console.log(e.target)
    if (e.target.className === 'about') aboutSectionEl.style.display = 'block';
}
