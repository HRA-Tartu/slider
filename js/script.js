let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right")

var slided = 0;
rightButton.addEventListener("click", function() {
    slided -= document.querySelector(".product-item").offsetWidth
        // slided = slided - document.querySelector(".product-item").offsetWidth;
    let calculation = document.querySelector("#slider>.container").offsetWidth - 2 * (document.querySelector(".product-item").offsetWidth)
    if (slided * (-1) < calculation) {
        let slider = document.querySelector("#slider>.container")
        slider.style.transform = `translateX(${slided}px)`
            // slider.style.tranform = "translateX("+slided+"px)"
    } else {
        let slider = document.querySelector("#slider>.container")
        slider.style.transform = `translateX(0px)`
        slided = 0;
    }
})

leftButton.addEventListener("click", function() {
    if (slided != 0) {
        slided += document.querySelector(".product-item").offsetWidth
    }



    let slider = document.querySelector("#slider>.container")
    slider.style.transform = `translateX(${slided}px)`

})