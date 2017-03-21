$(function(){
    // 小屏下拉列表
    var flag1=true;
    window.onresize=function() {
        var clientH = $(window).height();
        var clientW = $(window).width();
        $(".nume").css("height", clientH);
        if(clientW>765){
            $(".nume").css("display","none");
            flag=true;
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
        }
    }
    window.onresize();
    $(".small .btn").click(function(){
        if(flag1){
            $(".line1").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".line2").css({
                transform:"translate(0,-3px) rotate(-45deg)"
            })
            flag1=false
        }else{
            $(".line1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".line2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            flag1=true
        }
        $(".nume").slideToggle(1000);
    })
    // 轮播图
    var times=3000;
    var currentNum=0;
    var nextNum=0;
    var t1,t2;
    var currenttime=0;
    var flag=true;
     t1=setInterval(auto,times);
    function auto(){
        nextNum++;
        if(nextNum>$(".img").length-1){
            nextNum=0;
        }
        // 当前这一张
        $(".img").eq(currentNum).animate({width:"80%",height:"80%"});
        // 下一张
        $(".img").eq(nextNum).animate({left:0},function(){
            $(".img").eq(currentNum).css({width:"100%",height:"100%",left:"100%"});
            if(nextNum==0){
                flag=false;
            }
            currentNum=nextNum;
            currenttime=0;
        }).css("zIndex",1);
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
// // 点击按钮操作
    $(".lbtn").click(function(){
        var index=$(this).index();
        nextNum=index;
        stop();
    })
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
        $(".progress").css("width",0).eq(nextNum).css("width","100%");
        
        if(currentNum<nextNum){
            // 当前这一张
            $(".img").eq(currentNum).animate({width:"80%",height:"80%"});
            // 下一张
            $(".img").eq(nextNum).animate({left:0},function(){
                $(".img").eq(currentNum).css({width:"100%",height:"100%",left:"100%"});
                if(nextNum==0){
                    flag=false;
                }
                currentNum=nextNum;
                currenttime=0;
            }).css("zIndex",1);
        }else{
            $(".img").eq(currentNum).animate({left:"100%"}).css("zIndex",1);
            $(".img").eq(nextNum).css({left:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            });
        }
    }   
// 左右点击按钮
    $(".leftbtn").click(function(){
        nextNum--;
        if(nextNum<0){
            nextNum=$(".img").length-1;
        }
        stop();
    })
    $(".rightbtn").click(function(){
        nextNum++;
        if(nextNum>$("li").length-1){
            nextNum=0;
        }
        stop();
    })
    $(".add").click(function(){
        if(!$(this).parents("li").find(".footermune").hasClass("ok")){
            $(this).css({transform:"rotate(45deg)"});
            $(this).parents("li").find(".footermune").slideToggle("normal").addClass("ok");
        }else{
            $(this).css({transform:"rotate(0deg)"});
            $(this).parents("li").find(".footermune").slideToggle("normal").removeClass("ok");
        }
    })
    // $(".aa").click(function(){
    //     if(!$(this).parents("li").find(".footermune").hasClass("ok")){
    //         $(this).parents("li").find(".footermune").slideToggle(1000).addClass("ok");
    //     }else{
    //         $(this).parents("li").find(".footermune").slideToggle(1000).removeClass("ok");
    //     }
    // })
})

