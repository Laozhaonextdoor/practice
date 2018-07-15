$(function(){
//logo
	$(".logo-box").mouseenter(function(){
		$('.logo2').stop().animate({height:'50px'})
	}).mouseleave(function(){
		$('.logo2').stop().animate({height:'0'})
	})
	
	//banner图高度自适应
	function imgResize(){
		var DomWidth =$(window).width();
		var imgHeight=DomWidth * 700 /2000;
		$(".banner").css("height",imgHeight+"px")
	}
	imgResize()
	window.onresize=function(){
		imgResize()
	}
//分页
$(".paging ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
//侧栏
$(".sideBar").click(function(){
		$(this).stop().animate({right:"0px"})
	}).mouseleave(function(){
		$(this).stop().animate({right:"-50px"})
	})

//返回顶部
$(window).scroll(function(){
	if($(this).scrollTop()>400){
		$(".backTop").show()
	}else{
		$(".backTop").hide()
	}
})
$(".backTop").click(function(){
	$("html").animate({"scrollTop":0},1000)
})

})
