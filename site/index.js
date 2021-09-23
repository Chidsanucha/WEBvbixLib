 /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
 var dropdown_domain = document.getElementsByClassName("dropdown-domain");
 var i;
 
 for (i = 0; i < dropdown_domain.length; i++) {
   dropdown_domain[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var dropdownContent_domain = this.nextElementSibling;
   if (dropdownContent_domain.style.display === "block") {
   dropdownContent_domain.style.display = "none";
   } else {
   dropdownContent_domain.style.display = "block";
   }
   });
 }
 var dropdown_flow = document.getElementsByClassName("dropdown-flow");
 var i;
 
 for (i = 0; i < dropdown_flow.length; i++) {
   dropdown_flow[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var dropdownContent_flow = this.nextElementSibling;
   if (dropdownContent_flow.style.display === "block") {
   dropdownContent_flow.style.display = "none";
   } else {
   dropdownContent_flow.style.display = "block";
   }
   });
 }
 var dropdown_script = document.getElementsByClassName("dropdown-script");
 var i;
 
 for (i = 0; i < dropdown_script.length; i++) {
   dropdown_script[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var dropdownContent_script = this.nextElementSibling;
   if (dropdownContent_script.style.display === "block") {
   dropdownContent_script.style.display = "none";
   } else {
   dropdownContent_script.style.display = "block";
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