window.addEventListener('load', function() {
    event.preventDefault();

    let form = document.getElementById("addBook");

form.addEventListener("submit", function(event){

    let title = document.querySelector("input[name=title]")
    alert(`${title} was entered.`)




})

});



