window.onload=function(){
			
			var list=document.getElementById("textList");
			var btnLeftAdd=document.getElementById("leftadd");
			var btnRightAdd=document.getElementById("rightadd");
			var btnLeftDelete=document.getElementById("leftdelete");
			var btnRightDelete=document.getElementById("rightdelete");
			var btn=document.getElementById("sort");
			
			var arr=[];

			btnRightAdd.onclick=function(){
				var num=document.getElementById("input1").value;
				if(10<=num&&num<=100){
					console.log(arr.push(num));
				}else{
					alert("限制输入的数字在10-100!");
				}

				show(arr);
			}

			btnLeftAdd.onclick=function(){
				var num=document.getElementById("input1").value;
				if(10<=num&&num<=100){
					console.log(arr.unshift(num));
				}else{
					alert("限制输入的数字在10-100!");
				}

				show(arr);
				
			}

			btnRightDelete.onclick=function(){
				arr.pop();
	    		show(arr);	
			}

			btnLeftDelete.onclick=function(){
				arr.shift();
	    		show(arr);	
			}


			function show(arr){
				if (arr.length>60) {
					
					alert("队列元素数量最多限制为60个添加失败！")
					return false;
				}

				removeAllLi();

				for (var i = 0; i < arr.length; i++) {
					var node=document.createElement("li");
					node.style.height=arr[i]+"px";
					list.appendChild(node);

				}
			}
				
			function removeAllLi(){
	    		var _li = list.getElementsByTagName('li');
	    		for(var i=_li.length-1;i>=0;i--){
	    		list.removeChild(_li[i]);
	    		}
	   		}

	   		btn.onclick=function(){

	   			var time=setInterval(function(){
	   				for (var i = 0; i < arr.length; i++) {
	   					for (var j = 0; j < arr.length-1-i; j++) {
	   						if (arr[j]>arr[j+1]) {
	   							var temp = arr[j+1];
	   							arr[j+1]=arr[j];
	   							arr[j]=temp;
	   							show(arr);
	   						}
	   					}
	   					clearInterval(time);
	   				}
	   				console.log(arr);
	   			},1000);

	       }
    }
