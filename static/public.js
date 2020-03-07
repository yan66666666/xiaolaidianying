//当网页在打开时或网页窗口在改变大小时
//需要把根元素html标签的文字大小改变，
//一旦文字大小改变了，那么所有的以rem为单位的
//值也会一起改变
function rem(){
	//获到到html元素
	var html = document.documentElement;
	var w = html.offsetWidth;
	//公式：基准值/标准网页大小*当前网页的宽度
	html.style.fontSize = 100/350*w + "px";
}
rem() //当网页在打开时就执行它
//网页窗口在改变大小时,也执行它
window.onresize = rem;