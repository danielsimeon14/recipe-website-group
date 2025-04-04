// / variable
let openBtn = document.querySelectorAll("button")
let modalContainer = document.getElementById("modal-container")
let closeBtn = document.getElementById("close-btn")

// event listerner
openBtn.addEventListener('click', function(){
    modalContainer.style.display ='block'
});

closeBtn.addEventListener('click', function(e){
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none'
    }
})
