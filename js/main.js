window.addEventListener("scroll", function(){
    let nav = this.document.getElementById("my_nav");
    if(this.window.scrollY > 20){
        nav.classList.add("display")
    }
    else{
        nav.classList.remove("display")
    }
})

/* My Nav ScrollY */
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".my_nav");
    if (window.scrollY > 20) {
      nav.classList.add("display");
    } else {
      nav.classList.remove("display");
  
    }
  });  
  
/*   
  const subnav = document.querySelector(".subnav");
   window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
      subnav.style.display = "block";
    }
  });   */

  /* hamburger manu */
function menu(x){
    x.classList.toggle("change");
    let nav = document.querySelector(".nav_links");
    if(nav.style.display === "block"){
        nav.style.display = "none";
    }
else{
    nav.style.display = "block";
}
}
  
  const close = document.querySelector(".ri-close-line");
  close.onclick = () => {
    let subnav = document.querySelector(".subnav").style.display = "none";
  };
  
  /* Styling My Nav Input */
   let input = document.getElementById("myInput");
  let search = document.getElementById("search");
  
  search.addEventListener("click", function () {
    input.classList.add("input-open");
  });
  
