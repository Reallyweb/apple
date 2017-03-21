var times=3000;
var currentNum=0;
var nextNum=0;
var t1,t2;
var currenttime=0;
var t1=setInterval(auto,times);
function auto(){
	nextNum++;
	if(nextNum>$("li").length-1){
		nextNum=0;
	}
	// 当前这一张
	$("li").eq(currentNum).animate({width:"80%",height:"80%"});
	// 下一张
	$("li").eq(nextNum).animate({left:0},function(){
		$("li").eq(currentNum).css({width:"100%",height:"100%",left:"100%"});
		if(nextNum==0){
			flag=false;
		}
	}).css("z-index","1");
	currentNum=nextNum;
	currenttime=0;????????
}
// 按钮进度
t2=setInterval(progress,50);
function progress(){
	currenttime+=50;
	var bili=currenttime/times;
	if(bili>1){
		bili=1;
	}
	$(".progress").eq(currentNum).css("width",bili*100+"%");
	if(!flag){
		$(".progress").css("width",0);
		flag=true;
	}
}
// 点击按钮操作
$(".btn").click(function(){
	// var index=$(this).index(".btn");
	var index=$(this).index();
	nextNum=index;
	stop();
	function stop(){
		clearInterval(t1);
		clearInterval(t2);
		$(".progress").css("width",0).eq(nextNum).css("width","100%");
	}
})
if(currentNum<nextNum){
	// 当前这一张
	$("li").eq(currentNum).animate({width:"80%",height:"80%"});
	// 下一张
	$("li").eq(nextNum).animate({left:0},function(){
		$("li").eq(now).css("width","100%";"height","100%";"left","100%");
		if(nextNum==0){
			flag=false;
		}
	}).css("z-index","1");
}else{
	$("li").eq(currentNum).animate({left:"100%"}).css("z-index",1);
	$("li").eq(nextNum).css({left:0,top:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
		currentNum=nextNum;
	})
}
// 左右点击按钮
$(".left").click(function(){
	nextNum--;
	if(nextNum<0){
		nextNum=$("li").length-1;
	}
	stop();
})
$(".right").click(function(){
	nextNum++;
	if(nextNum>$("li").length-1){
		nextNum=0;
	}
	stop();
})
