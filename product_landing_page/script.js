const hamburger=document.getElementById("hamburger");
const nav=document.getElementById("nav-menu");

hamburger.addEventListener('click',()=>{
    nav.classList.toggle("show")
})

const handle=()=>{
    alert("Product Purchased Sucessfully!")
}