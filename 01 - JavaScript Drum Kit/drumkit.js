
const myKeys = document.querySelectorAll('.key');
myKeys.forEach(k => k.addEventListener('transitioned', removeTransition)); 
function removeTransition(e){
    //if (e.propertyName != 'transformed') return;
    console.log(e);
    this.classList.remove('playing')
}
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);   
    
    function removeTransition(e){
        if (e.propertyName != 'transformed') return;
        console.log(e)
        this.classList.remove('playing')
    }
    
    if (audio && key) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        setTimeout(function(){}, .07);
        
        
    }
});