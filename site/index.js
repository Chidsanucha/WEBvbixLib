 /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
 var dropdown = document.getElementsByClassName("dropdown-btn");
 var i;
 
 for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var dropdownContent = this.nextElementSibling;
   if (dropdownContent.style.display === "block") {
   dropdownContent.style.display = "none";
   } else {
   dropdownContent.style.display = "block";
   }
   });
 }
 function myFunction() {
/* Get the text field */
var copyText = document.getElementById("myInput");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
navigator.clipboard.writeText(copyText.value);

/* Alert the copied text */
alert("Copied the text: " + copyText.value);
}

function myFunction() {
 var input, filter, ul, button, h4, i, txtValue;
 input = document.getElementById("myInput");
 filter = input.value.toUpperCase();
 ul = document.getElementById("myUL");
 button = ul.getElementsByTagName("button");
 for (i = 0; i < button.length; i++) {
   h4 = button[i].getElementsByTagName("h4")[0];
     txtValue = h4.textContent || a.innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       button[i].style.display = "";
     } else {
       button[i].style.display = "none";
     }
 }
}