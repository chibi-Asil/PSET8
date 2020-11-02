$(document).ready(function(){
// TO DO: Set up a JS File
// Creation of the variables for the signing over of your soul


// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
} else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
}
//Function To Display Popup
function div_show() {
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
    document.getElementById('abc').style.display = "none";
}

$(document).ready(function() {
	$(".modalbox").fancybox();
	$("#contact").submit(function() { return false; });

$("#send").on("click", function(){
	var emailval  = $("#email").val();
	var msgval    = $("#msg").val();
	var msglen    = msgval.length;
	var mailvalid = validateEmail(emailval);

	if(mailvalid == false) {
		$("#email").addClass("error");
	}
	else if(mailvalid == true){
		$("#email").removeClass("error");
	}

	if(msglen < 4) {
		$("#msg").addClass("error");
	}
	else if(msglen >= 4){
		$("#msg").removeClass("error");
	}
