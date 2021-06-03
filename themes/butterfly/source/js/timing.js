let message = document.getElementsByTagName("timing")[0];
message.style.color = "cyan"; //设置颜色
var endtime = new Date("2022/06/07 09:00:00"); //设置目标日期
function showTime(){
	var stime = new Date();
	var time = endtime - stime;
	if(time > 0){
		var day = Math.floor(time/1000/3600/24); 
		var hour = Math.floor(time%(3600*24*1000)/1000/3600);
		var min = Math.floor(time%(3600*24*1000)/1000%3600/60);
		var sec = Math.floor(time%(3600*24*1000)/1000%3600%60);
		var str ='高考加油!距离2022年高考还有'+day+'天'+hour+'小时'+min+'分钟'+sec+'秒'; //设置字符串
		message.innerHTML = str;
	}
}
setInterval(showTime,1000);