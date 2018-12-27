$(function(){
	$.ajax({
		type:"get",
		url:"../testdata/detail-info.json",
		dataType:"json",
		data:{	
			
		}, 
		success:function(data){
			filldata(data);
			
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('系统错误，联系管理员');
			}
	})
})
function filldata(jsonValue){
	 var obj=jsonValue.testdata;
	 for(var i=0;i<obj.length;i++){
		 for(var key in obj[i])
		 $("[id=" + key + "]").val(obj[i][key]);
	 }
  
}


	 


