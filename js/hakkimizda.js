let counter = 0;
// const back = document.querySelector('#back');
// const next = document.querySelector('#next');
const calisanlar = document.querySelector('#calisanlar');
const max = document.querySelectorAll('.slide').length - 1;

function slidertimer() {
    if (counter < max) {
        counter++;
        console.log(counter);
        calisanlar.style.left = -630 * counter + 'px';
    }else {
        counter = 0;
        calisanlar.style.left = -630 * counter + 'px';
    }
}

let timer = setInterval(slidertimer, 3000);
