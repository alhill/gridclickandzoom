$(function(){
    [...document.getElementsByClassName("item")].map((elem) => {
        elem.addEventListener("click", (event) => {
            if( !([...event.target.classList].includes("btn-close") )) {
                elem.classList.add("selected");
            }
        });
        elem.addEventListener("transitionend", (event) => {
            if(event.propertyName === "opacity") {
                elem.classList.remove("ontransition");
            }
        })
    });
    [...document.getElementsByClassName("btn-close")].map((elem) => {
        elem.addEventListener("click", () => {
            elem.parentNode.parentNode.classList.remove("selected");
            elem.parentNode.parentNode.classList.add("ontransition");
        });
    });
});