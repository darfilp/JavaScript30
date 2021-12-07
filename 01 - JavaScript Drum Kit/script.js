window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; //обнуление
    key.classList.add('playing');
    audio.play();
});

const keys = document.querySelectorAll('.key');

function removeAnimation(e) {
    this.classList.remove('playing');
} 

keys.forEach(key => key.addEventListener('transitionend', removeAnimation));
