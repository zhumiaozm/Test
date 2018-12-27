//  $('#getCodeBtn').on('click', function () {
// 	var getCodeBtn = document.getElementById("getCodeBtn");
// 	var time = 60;   //倒计时5秒
//     var timer = setInterval(fun1, 1000);    //设置定时器
//     getCodeBtn.disabled = true;   //当点击后倒计时时候不能点击此按钮
//     function fun1() {
//             time--;
//             if(time>=0) {
//                 getCodeBtn.innerHTML = time + "s后重新发送";
//             }else{
//                 getCodeBtn.innerHTML = "重新发送验证码";
//                 getCodeBtn.disabled = false;    //倒计时结束能够重新点击发送的按钮
//                 clearTimeout(timer);    //清除定时器
//                 time = 60;   //设置循环重新开始条件
//             }
//         }
// }
 

window.onload = function (){
    var userName = document.getElementById("userName");
    var newPsw = document.getElementById("newPsw");
	var confirmPsw = document.getElementById("confirmPsw");

    $('#submit').on('click', function () {
        // setCookie('user', userName, 1); //1天到期
        // userCookie = getCookie('user');
        // userName.value = filterData(userCookie);
        if(!newPsw.value || !userName.value) {// 非空校验  
			alert("输入不能为空！"); 
            // return:false;
	    } else if(newPsw.value.length < 3 || newPsw.value.length > 20) {//长度校验  
	        alert("新密码长度必须在3~20之间！");
            // return:false;
	    }else{
			if(newPsw.value == confirmPsw.value){
				alert("密码修改成功！");
				window.location.href = "login.html";
			}else{
				alert("两次密码输入不一致！");
                // return:false;
			}
		}  
        //修改后的数据提交
        $.ajax({
            type:"POST",
            url:"",
            // data:data,
            dataType:'json',
        success:function(data){
            alert(data);
            if(data==1){
                window.location.href = "home-page.html";   
            }else{
            alert("登录失败，请重试!");
            }
        }
        });
    })
}