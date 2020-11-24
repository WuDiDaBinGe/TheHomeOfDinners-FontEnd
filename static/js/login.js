$(document).ready(function() {
	var name 		= $('#name'); //id of first password field
    var pass 		= $('#password'); //id of first password field

	var passwordsInfo 	= $('#pass-info'); //id of indicator element

	passwordStrengthCheck(name,pass,passwordsInfo); //call password check function

});

function passwordStrengthCheck(name,pass,passwordsInfo)
{

	$(name).on('keyup', function(e) {
		if(name.val().replace(/(^\s*)|(\s*$)/g, "") == '')
		{
			passwordsInfo.removeClass().addClass('weakpass').html("Please input name");
			document.getElementById("losu").disabled=true;

		}
		else if(pass.val().replace(/(^\s*)|(\s*$)/g, "") == '')
		{
			passwordsInfo.removeClass().addClass('weakpass').html("Please input password");
			document.getElementById("losu").disabled=true;

		}

		else
		{
			passwordsInfo.removeClass().html("");
			document.getElementById("losu").disabled=false;

		}
	});

	$(password).on('keyup', function(e) {
		if(name.val().replace(/(^\s*)|(\s*$)/g, "") == '')
		{
			passwordsInfo.removeClass().addClass('weakpass').html("Please input name");
			document.getElementById("losu").disabled=true;

		}
		else if(pass.val().replace(/(^\s*)|(\s*$)/g, "") == '')
		{
			passwordsInfo.removeClass().addClass('weakpass').html("Please input password");
			document.getElementById("losu").disabled=true;

		}

		else
		{
			passwordsInfo.removeClass().html("");
			document.getElementById("losu").disabled=false;

		}
	});

}
