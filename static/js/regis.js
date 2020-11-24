$(document).ready(function() {
	var name 		= $('#name'); 		//id of first password field

    var password1 	= $('#password1');  //id of first password field
	var password2	= $('#password2');  //id of second password field

	var passwordsInfo 	= $('#pass-info'); //id of indicator element

	var phone 		= $('#phone'); 		//id of first phone field


	passwordStrengthCheck(password1,password2,name,phone,passwordsInfo); //call password check function

});

function passwordStrengthCheck(password1,password2,name,phone,passwordsInfo)
{
    //Must contain 5 characters or more
	var WeakPass = /(?=.{5,}).*/;
	//Must contain lower case letters and at least one digit.
	var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
	//Must contain at least one upper case letter, one lower case letter and one digit.
	var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
	//Must contain at least one upper case letter, one lower case letter and one digit.
	var VryStrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{5,}$/;
	// Only contain number 
	var phonereg = /^1[3|4|5|7|8][0-9]{9}$/;

	$(phone).on('blur', function(e) {
		if(phonereg.test(phone.val()))
		{
			passwordsInfo.removeClass().html("");
			document.getElementById("reg").disabled=false;

		}
		else
		{
			passwordsInfo.removeClass().addClass('weakpass').html("请输入正确的手机号！");
			document.getElementById("reg").disabled=true;
		}

	});

	$(name).on('blur', function(e) {
		if(name.val().replace(/(^\s*)|(\s*$)/g, "") == '')
		{
		    passwordsInfo.removeClass().addClass('weakpass').html("请输入名字");
			document.getElementById("reg").disabled=true;


		}
		else
		{
			passwordsInfo.removeClass().html("");
			document.getElementById("reg").disabled=false;
		}
	});

	$(password1).on('blur', function(e) {
		if(VryStrongPass.test(password1.val()))
		{
			passwordsInfo.removeClass().addClass('vrystrongpass').html("密码：Very Strong! (太好了，请您记住您的密码!)");
			document.getElementById("passcon").disabled=false;
		}
		else if(StrongPass.test(password1.val()))
		{
			passwordsInfo.removeClass().addClass('strongpass').html("密码：Strong! (加入字符组成更强的密码)");
			document.getElementById("passcon").disabled=false;
		}
		else if(MediumPass.test(password1.val()))
		{
			passwordsInfo.removeClass().addClass('goodpass').html("密码：Good! (输入大写字母组成更强的密码)");
			document.getElementById("passcon").disabled=false;
		}
		else if(WeakPass.test(password1.val()))
    	{
			passwordsInfo.removeClass().addClass('stillweakpass').html("密码：Still Weak! (输入数字组成更好的密码)");
    		document.getElementById("passcon").disabled=true;
    	}
		else
		{
			passwordsInfo.removeClass().addClass('weakpass').html("密码：Very Weak! (输入大于5个字符)");
			document.getElementById("passcon").disabled=true;
		}
	});

	$(password2).on('blur', function(e) {

		if(password1.val() !== password2.val())
		{
			passwordsInfo.removeClass().addClass('weakpass').html("密码输入不一致!");
			document.getElementById("passcon").disabled=true;
		}else{
			passwordsInfo.removeClass().addClass('goodpass').html("密码一致!");
			document.getElementById("passcon").disabled=false;
		}

	});


}
