// selecting items

const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".sidebar-toggle");
const links = document.querySelector(".links");
const sidebar = document.querySelector(".sidebar");


toggleBtn.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar");
    toggleBtn.classList.toggle("sidebar-stop");
    
});

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
    toggleBtn.classList.toggle("sidebar-stop");
})