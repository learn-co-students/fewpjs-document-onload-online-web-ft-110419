// Your code goes here
function click(){
    var ptag = document.getElementById("text")
ptag.textContent = ptag.textContent.replace("JavaScript is so cool. It lets me add text to my page programmatically.","This is really cool!")
}
document.addEventListener("DOMContentLoaded", function(){
    click()
});