const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

// toggle moreBtn
moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});

// show/hidden moreBtn
window.addEventListener('resize', () => { showMoreBtn(title) });
window.addEventListener('load', () => { showMoreBtn(title) });

function showMoreBtn(element) {
  if (element.offsetHeight < element.scrollHeight) {
    moreBtn.style.visibility = "visible";
  } else {
    moreBtn.style.visibility = "hidden";    
  }
}
