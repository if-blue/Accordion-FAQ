document.querySelectorAll(".accordion-Container").forEach((item, index) =>{
    item.addEventListener("click", ()=>{
        const content = document.querySelectorAll(".accordion-Content")[index];

        content.classList.toggle("active")
    })
})