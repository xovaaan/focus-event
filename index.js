let text = document.querySelector("input");
text.addEventListener("blur", function(){
    text.style.backgroundColor = "transparent";
    text.style.padding = "0"; 

})
text.addEventListener("blur", function(e){
    text.value = e.target.value.toUpperCase();

})

text.addEventListener("focus", function(){
    text.style.backgroundColor = "orange";
    text.style.padding = "1rem"; 

})


