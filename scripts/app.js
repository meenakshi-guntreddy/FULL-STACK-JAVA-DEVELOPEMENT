document
.getElementById("myForm")
.addEventListener("submit",function(event){

event.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

console.log(
"[Form Submission] Name: "
+ name +
", Email: "
+ email
);
console.log("[i-frame Loaded] Google Map");

});