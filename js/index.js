const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
    selector: ".hero-list",
    duration: 500,
    loop: true,
    easing: 'cubic-bezier(.17,.67,.32,1.34)',

  });

function onNextClick() {
    mySiema.next();
}
function onPrevClick() {
    mySiema.prev();
}

next.addEventListener('click', onNextClick);
prev.addEventListener('click', onPrevClick);

const lightbox = new SimpleLightbox('.gallery a', { 
    closeText: "&#10008", /*https://old.unicode-table.com/en/*/
});
 
AOS.init();