window.onload=function(){
			var list=document.getElementById("textList");
			var btnLeftAdd=document.getElementById("leftadd");
			var btnRightAdd=document.getElementById("rightadd");
			var btnLeftDelete=document.getElementById("leftdelete");
			var btnRightDelete=document.getElementById("rightdelete");
			var intxt=document.getElementById("input1");
			
			btnLeftAdd.onclick=function(){
				var text1=intxt.value;
				if(text1!=""){
					var textnode1=document.createTextNode(text1);
					var node1=document.createElement("li");
					node1.appendChild(textnode1);
					console.log(textnode1);
					list.insertBefore(node1,list.childNodes[0]);
				}else{
					alert("不能为空!");
				}
			}

			btnLeftDelete.onclick=function(){
				console.log(list.childNodes[0]);
				list.removeChild(list.childNodes[0]);
			}

			btnRightAdd.onclick=function(){
				var text=intxt.value;
				if(text!=""){
					var node=document.createElement("li");
					var textnode=document.createTextNode(text);
					console.log(textnode);
					node.appendChild(textnode);
					list.appendChild(node);	
				}else{
					alert("不能为空!");
				}
				
			}

			btnRightDelete.onclick=function(){
				console.log(list.lastChild);
				list.removeChild(list.lastChild);
			}

			

		}