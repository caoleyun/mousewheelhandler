
//鼠标滚轮  处理程序
//原生



// __mousewheelhandler内部函数
function _mousewheelhandler(event){
			//→ 解决IE6、7、8和高级浏览器的不兼容
			event = event || window.event;
			//阻止默认事件
			////→ 解决IE6、7、8和高级浏览器的不兼容
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
			//Chrome、IE用的是event.wheelDelta;
			if(event.wheelDelta){
				var direction = event.wheelDelta > 0 ? 1 : -1;
			}else if(event.detail){
				//火狐用的是event.detail;
				var direction = event.detail > 0 ? -1 : 1;
			}

		console.log(direction);


		
}


//dom为要添加滚轮事件的元素
function mousewheelhandler(dom){
		//这里不用根据不同的浏览器进行判断，这是因为事件添加了如果浏览器不认识，不报错的。
		//给IE、CHrome添加事件
		dom.onmousewheel = _mousewheelhandler;
		try{
			//给火狐添加事件
			dom.addEventListener("DOMMouseScroll",_mousewheelhandler,false);
		}catch(err){
			
		}
		
}


export default mousewheelhandler;