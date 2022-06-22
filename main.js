const seach = document.querySelector(".search-box input"),
    images = document.querySelectorAll(".image-box");

seach.addEventListener("keyup", e => {

    if(e.key == "Enter"){
        let searchValue = seach.value,
            value = searchValue.toLowerCase();

            images.forEach(image => {
                if(value === image.dataset.name){
                    return image.style.display = "block"
                }
                image.style.display = "none"
            })
            console.log(value);
    }
});

seach.addEventListener("keyup", () => {

    if(seach.value != "") return;

    images.forEach(image => {
        //como no hay valor carga de nuevo todos lo heroes//
        return image.style.display = "block"
    });

})


