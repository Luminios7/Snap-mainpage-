
function closeMenu() {
    document.getElementById("sidepanel").style.width="0";
}
//* to close the menu icon

function openMenu() {
    document.getElementById("sidepanel").style.width="440px";
}
 //* to open the menu icon

 
var dropdown = document.getElementsByClassName("features");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click",
    function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }else {
            dropdownContent.style.display = "block";
        }
    });

}


var dropdown = document.getElementsByClassName("company");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click",
    function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }else {
            dropdownContent.style.display = "block";
        }
    });
}
 