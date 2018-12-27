window.onload = function (){
    var userName = document.getElementById("userName");
    var userPsw = document.getElementById("userPsw");

    var data=[{userName:"123",userPsw:"123"}
        ];

    $('#btn-login').on('click', function () {
        // setCookie('user', userName, 1); //1天到期
        // userCookie = getCookie('user');
        // userName.value = filterData(userCookie);
        if(userName.value == ""){      //非空校验
            alert("用户名不能为空！");
            return false;
        }else if(userPsw.value == ""){
            alert("密码不能为空！");
            return false;
        }else{                       //登录校验
            if(userName.value == "123" && userPsw.value == "123"){
            //alert("登录成功");
                window.location.href="home-page.html";
           }else{
                alert("用户名或密码错误!");
                return false;
           } 
        }
        
        $.ajax({
            type:"POST",
            url:"",
            data:data,
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