window.onload=function(){
			var list=document.getElementById("textList");
			var btnLeftAdd=document.getElementById("leftadd");
			var btnRightAdd=document.getElementById("rightadd");
			var btnLeftDelete=document.getElementById("leftdelete");
			var btnRightDelete=document.getElementById("rightdelete");
			var intxt=document.getElementById("input1");
			var btnScreach=document.getElementById("screach");
			var btnResetting=document.getElementById("resetting");
			var intxt2=document.getElementById("input2");
			var li=list.getElementsByTagName("li");


			var arr=[];

			btnLeftAdd.addEventListener("click", function(){
				var strText=/[\r,\s，、]/gm;
				var text1=intxt.value;
				var strs= new Array();
				strs=text1.split(strText);
				for (var i = 0; i < strs.length; i++) {
					arr.unshift(strs[i]);
				}
				show();
			});

			btnRightAdd.addEventListener("click", function(){
				var strText=/[\r,\s，、]/gm;
				var text1=intxt.value;
				var strs= new Array();
				strs=text1.split(strText);
				for (var i = 0; i < strs.length; i++) {
					arr.push(strs[i]);
				}
				show();
			});

			btnRightDelete.addEventListener("click",function(){
				arr.pop();
				show();
			});

			btnLeftDelete.addEventListener("click",function(){
				arr.shift();
				show();
			});


			function show(){

				if (arr.length>60) {
					
					alert("队列元素数量最多限制为60个添加失败！")
					return false;
				}
                removeAll();

				for (var i = 0; i < arr.length; i++) {
					var node=document.createElement("li");
					node.innerHTML=arr[i];
					list.appendChild(node);

				}
				intxt.value="";
			}

			function removeAll(){
	    		var _li = list.getElementsByTagName('li');
	    		for(var i=_li.length-1;i>=0;i--){
	    		list.removeChild(_li[i]);
	    		}
	   		}

	   		btnScreach.addEventListener("click",function(){
	   			var t = intxt2.value;
	   			for (var i = 0; i < arr.length; i++) {
	   				if (arr[i].search(t)!=-1) {
	   				   console.log(arr[i].search(t));
	   					li[i].style.color="yellow";
	   					console.log(li[i]);
	   				}
	   			}
	   			intxt2.value="";
	   		});

	   		btnResetting.addEventListener("click",function(){
	   			for (var i = 0; i <li.length; i++) {
	   				li[i].style.color="#fff";
	   			}
	   		});


		}