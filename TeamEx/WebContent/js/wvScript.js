var pageW, pageH,pageDH, footerH;
var mobileW = 640;
var pageW2;
var mobileW2 = 640;
$(document).ready(function () {
    tabBoxS();
	menuS();
	scrollS();
	mainAni();//main animation
});

$(window).resize(function () {
    tabBoxS();
    popupRe();
    resizeS();
    scrollS();
});


function popupClose(){
	$('.coroPopupBox').fadeOut();
}

$(window).scroll(function(event){
	scrollS();
});

$(window).load(function(){
    //cropS();
    scrollS();
});

var cropW, cropH, cropN, cropImgW, cropImgH, cropImgN;
function cropS() {
    $(".cropImg").each(function () {
        cropW = $(this).width();
        cropW = cropW.toFixed(1);
        cropH = $(this).height();
        cropH = cropH.toFixed(1);
        cropN = cropW / cropH;
        cropImgW = $(this).find("img").width();
        //console.log(cropImgW);
        cropImgW = cropImgW.toFixed(1);
        cropImgH = $(this).find("img").height();
        //console.log(cropImgH);
        cropImgH = cropImgH.toFixed(1);
        cropImgN = cropImgW / cropImgH;
        //console.log("cropW : " + cropW + " cropH :" + cropH + " cropN : " + cropN);
        //console.log("cropImgW : " + cropImgW + " cropImgH :" + cropImgH + " cropImgN : " + cropImgN);
        //console.log($(this).find("img").attr("src"));
        //console.log("===============================");
        if (cropN < cropImgN) {
             //console.log("===============================1");
            if (cropImgN >= 1) {
                //console.log("===============================2");
                $(this).find("img").css("width", "auto");
                $(this).find("img").css("height", "100%");
                $(this).find("img").css("margin-left", -(((cropH * cropImgN) - cropW) / 2));
            }
        } else {
            $(this).find("img").css("width", "100%");
            $(this).find("img").css("height", "auto");
            $(this).find("img").css("margin-left", 0);
        }

    });
}



function resizeS(){
	pageW = $(window).width();
	

	if(pageW > 1240){
		
		$(".topAllMenuIn li").show();
	}
	
}

var tabW, tabN, tabH, tabM;
function tabBoxS() {
    $(".tabBox").each(function () {
        tabW = $(this).width();
        tabH = $(this).find("li").height();
        tabN = $(".tabBox li").length;
        pageW = $(window).width();
        $(this).find("li").each(function () {
            tabM = $(".tabBox ul li").height();
            //if (mobileW < pageW) {
                $(this).css("width", tabW / tabN);
            //} else {
            //    $(this).css("width", tabW / 2);
            //}
        });
        //if (mobileW < pageW) {
            $(".tabBox li span").css("width", tabW / tabN - 2);
        //} else {
         //   $(".tabBox li span").css("width", (tabW / 2) - 2);
        //}

    });
    
    $(".tabBox_sub02").each(function () {
        tabW2 = $(this).width();
        tabH2 = $(this).find("li").height();
        tabN2 = $(".tabBox_sub02 li").length;
        $(this).find("li").each(function () {
            tabM2 = $(".tabBox_sub02 ul li").height();
            if (mobileW < pageW) {
                $(this).css("width", tabW2 / tabN2);
            } else {
                $(this).css("width", tabW2 / 2);
            }
        });
        if (mobileW < pageW) {
            $(".tabBox_sub02 li span").css("width", tabW2 / tabN2 - 2);
        } else {
            $(".tabBox_sub02 li span").css("width", (tabW2 / 2) - 2);
        }

    });
    
}

function menuS(){
	
	
	$(".naviScrollIn > ul > li > a").click(function(){
		$(this).toggleClass("on");
		$(this).parent().find(".naviSubBox").slideToggle(300);
		$(this).siblings(".naviIconDown").toggleClass("on");
		$(".naviScrollIn > ul > li > a").not($(this)).parent().find(".naviSubBox").slideUp('300');
		$(".naviScrollIn > ul > li > a").not($(this)).removeClass('on');
		$(".naviScrollIn > ul > li > a").not($(this)).siblings('.naviIconDown').removeClass('on');
	});
	
/*	$(".naviScrollBox").mouseleave(function(){
		$(".naviSubBox").hide();
	});

	
	$(".naviScrollIn > ul > li").mouseleave(function(){
		$(".naviScrollIn > ul > li > a").removeClass("on");
		$(".naviIconDown").removeClass("on");
	});*/
	
	$(".aside ul li").on("hover", function(e) {
		if (e.type == "mouseenter") {
			srcN = $(this).find("img").attr("src");
			if(srcN !== undefined){
				srcN = srcN.replace(".png", "_on.png");
				$(this).find("img").attr("src", srcN);
			}
		}
		else { // mouseleave
			srcN = $(this).find("img").attr("src");
			if(srcN !== undefined){
				srcN = srcN.replace("_on.png", ".png");
				$(this).find("img").attr("src", srcN);
			}
		}
	});
	
	$(".content_sns ul li").on("hover", function(e) {
		
		
		if (e.type == "mouseenter") {
			srcN = $(this).find("img").attr("src");
			srcN = srcN.replace(".png", "_on.png");
			$(this).find("img").attr("src", srcN);
		}
		else { // mouseleave
			srcN = $(this).find("img").attr("src");
			srcN = srcN.replace("_on.png", ".png");
		    $(this).find("img").attr("src", srcN);
		}
	});
	
	$(".list_btn").click(function(){
		
		$(".list_btn").hide();
		$(".close_btn").show();
		
		
		pageW = $(window).width();		
	
		if(pageW < 1240){	
			$(".topAllMenuBox").show();
			$("html").addClass("popup_open");			
			$(".topAllMenuBg").click(function(){
				$(".topAllMenuBox").hide();
				$(".list_btn").show();
				$(".close_btn").hide();
				$("html").removeClass("popup_open");
			});
		}else if (pageW > 1240 ){	
			$(".topAllMenuBox").slideDown();
			
		}
		
	});
	
	$(".close_btn").click(function(){
		
		$(".close_btn").hide();
		$(".topAllMenuBox").slideUp();
		$(".list_btn").show();
/*		if(pageW < 1240){	
			$("html").removeClass("popup_open");  
		}*/
		$("html").removeClass("popup_open");
	});
	
	
	$(".mobile_header .close").click(function(){
		
		$(".close_btn").hide();
		$(".list_btn").show();
		$(".topAllMenuBox").hide();
		
		if(pageW < 1240){	
			
			$("html").removeClass("popup_open"); 
			
		}
		
	});
	
	
	$(".topAllMenuIn > span").click(function(){
		pageW = $(window).width();		
		adis = $(this).siblings("li").css("display");
		
		if(pageW < 1240){	
			if(adis == "none"){
			
			   $(".topAllMenuIn > li").hide();
			   $(this).siblings("li").show();	
			   $(".topAllMenuIn .fa").removeClass("fa-angle-up").addClass("fa-angle-down");			   
			   $(this).find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");			   
			
			}
			else {
				
			   $(".topAllMenuIn > li").hide();
			   $(this).find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");			   
				
			}
		}
	});
}


var scrollN,docN,quickH,quickMain, quickHeight;
function scrollS(){
	//menu scroll
	scrollN = $(window).scrollTop();
	pageW = $(window).width();
	pageH = $(window).height();
	pageDH = $(document).height();
	quickH = $(".asideLayout").find("ul").height();
	footerH = $(".footerLayout").height();
   
	if(pageW > 1240){
	    if($("div").hasClass("main_content")){
	    	quickHeight = $(".main_content").height();
	    	quickHeight += $(".topLayout").height();
	    	
	    	var popdis = $(".main_top_pop");
	    
	    	if(popdis.css("display") == "block"){
	    		
	    		//quickHeight += $(".main_top_pop").height() + 30;
	    		quickHeight += $(".main_top_pop").height();
	    	}else{
	    	
	    		
			}
	    	
	    	$(".asideLayout").css("height",quickHeight+1);
	   
	    }else{
	    	quickHeight = $(".contentLayout").height();
	    	quickHeight += $(".topLayout").height();
	    	$(".asideLayout").css("height",quickHeight+61);
	    }
    }
	
	
	if($("div").hasClass("main_animation")){
		quickMain = 155;
	}else{
		quickMain = 0;
	}
	docN = 248;
	if((quickH+45+70+quickMain)-pageH < scrollN){
		if(pageDH+quickMain -(footerH+pageH) < scrollN){
			quickH = scrollN+10 -(pageDH-(footerH+pageH));
			$(".top_btn").css("position","fixed");
			$(".top_btn").css("bottom",quickH);
		}else{
			$(".top_btn").css("position","fixed");
			$(".top_btn").css("bottom",10+quickMain);
		}
	}else{
		$(".top_btn").css("position","static");
	}
	
	if(pageW > mobileW){
		if(scrollN >= docN){
			$(".naviScrollBox").stop().fadeIn(300);
		}else{
			$(".naviScrollBox").stop().hide();
		}
	}else{
		if(scrollN >= 90){
			$(".naviScrollBox").stop().fadeIn(300);
		}else{
			$(".naviScrollBox").stop().hide();
		}
	}

	var naviN;
	$(".naviBoxIn > ul > li > a").each(function(){
		naviN = $(this).width();
		$(this).find("span").css("width",naviN);
	});
}


/* 팝업 */
var popupB, popupH, popupC, popupF, popupSH;
function popupS(n,m,w,h){
	if(m == "close"){
		$(n).fadeOut(300);
		$("html,body").removeClass("popup_open");
	}else{
		$(n).show(0,function(){
			$("html,body").addClass("popup_open");
			if(w == undefined || w == "full"){
				$(n).find(".popup_BoxIn").css({"width":"98%","margin-left":"0%","left":"1%"});
			}else{
				$(n).find(".popup_BoxIn").css({"width":w,"margin-left":-(w/2)});
			}
			if(h == undefined || h == "full"){
				$(n).find(".popup_BoxIn").css({"height":"80%","top":"10%"});
			}else{
				$(n).find(".popup_BoxIn").css("height",h);
			}
		});
		popupRe();
	}
	$(n).find(".popup_bg").click(function(){
		$(n).fadeOut(300);
		$("html,body").removeClass("popup_open");
	});
}
function popupRe(){
	if($("body").hasClass("popup_open")){
		$(".popup_Box").each(function(){
			if($(this).css("display")=="block"){
				popupB = $(this).find(".popup_BoxIn").height();
				popupH = $(this).find(".popupH").height();
				popupC = $(this).find(".popupCBox").height();
				popupF = $(this).find(".popupF").height();
				popupSH = popupB-((popupH+1) + popupC + popupF);
				if(popupSH < 0){
					$(this).find(".popupSBox").css("height","auto");
				}else{
					$(this).find(".popupSBox").css("height",popupSH);
				}
			}
		});
	}
}


function tabsClick(targetClass, targetId, obj){
	$(obj).closest("li").closest("ul").find("li").removeClass("on");
	$(obj).closest("li").addClass("on");
	$("." + targetClass).hide();
	$(targetId).show();

}

$.fn.wvMain = function(options){
	var defaults = {
		control :			'pointer',
		speed:				1000,
		setTime:			1000,
		listLiN : 			1,
		tabletN	:			1,
		mobileN	:			1,
		tabletW : 			1200,
		mobileW : 			640,
		listMargin :		0,
		listMobileMargin :	0,
		viewControl :    	'in',
		prevBu :			'<img src="/css/wvtex/img/wvUser/main_prevBu_off.png"/>',
		nextBu :			'<img src="/css/wvtex/img/wvUser/main_nextBu_off.png"/>',
		cssMode : 			false,
		auto :				true
	};
	var options = $.extend(defaults, options);
	var pageW = $(window).width();
	var tN = $(this);
	var thisTn;
	if(options.viewControl == "in"){
		thisTn = $(this);
	}else{
		thisTn = $(this).parent();
	}		
	var tNW = tN.width();
	var mainTN = 0;
	var vTime;
	var listN = tN.children("ul").children("li").length;
	var sHtml,listW;
	var listLiN;
	var typeN;
	var typeS;
	var delayN;
	var mainBg1;
	
	function tnSet(){
		pageW = $(window).width();
		if(pageW < options.mobileW){
			listLiN = options.mobileN;
			typeN = "mobile";
		}else if(pageW < options.tabletW){
			listLiN = options.tabletN;
			typeN = "tablet";
		}else{
			listLiN = options.listLiN;
			typeN = "web";
		}
		if(options.listLiN == 1){
			listW = tNW;
		}else{
			listW = tN.children("ul").children("li").width();
		}
		tNW = tN.width();
		listW = tNW/listLiN-options.listMargin+(options.listMargin/listLiN);
		tN.children("ul").children("li").css("width",listW);
		tN.children("ul").children("li").css("margin-right",options.listMargin);
		tN.children("ul").css("width",(listW+options.listMargin)*listN);
		tN.children("ul").css("margin-left",-((listW+options.listMargin)*mainTN));
		if(typeN !== typeS || typeS == undefined){
			if(options.control == "pointer" || options.control == "duel"){
			    sHtml = '<div class="wvNumBox">';
			    tN.children("ul").children("li").each(function(m){
			    	
			    	if((m) % listLiN == 0){
			    		if(mainTN == m){
			    			sHtml += '<a href="javascript:void(0);" class="on '+m+' " lnum="'+m+'"></a>';
			    		}else{
			    			sHtml += '<a href="javascript:void(0);"  class="'+m+'" lnum="'+m+'"></a>';
			    		}
			    	}
			    });
			    if(options.auto){
			    	sHtml += '<div class="wvNumBoxIn"><a href="javascript:;"><span class="fa fa-pause">정지</span></a></div>';
				}else{
					sHtml += '<div class="wvNumBoxIn"><a href="javascript:;"><span class="fa fa-play">플레이</span></a></div>';
				}
			    sHtml += '</div>';
			    thisTn.find(".wvNumBox").remove();
			    if(options.viewControl == "in"){
			    	tN.prepend(sHtml);
			    }else{
			    	tN.before(sHtml);
			    }
			    thisTn.find(".wvNumBox > a").click(function(){
		    		mainTN = $(this).attr("lNum");
		    		thisTn.find(".wvNumBox > a").removeClass("on");
		    		$(this).addClass("on");
		    		vsStart(Number(mainTN));
		    	});
			    thisTn.find(".wvNumBoxIn").click(function(){
	    			if(options.auto){
	    				clearTimeout(vTime);
	    				thisTn.find(".wvNumBoxIn span").removeClass("fa-pause");
	    				thisTn.find(".wvNumBoxIn span").addClass("fa-play");
	    				thisTn.find(".wvNumBoxIn span").text("플레이");
	    				options.auto = false;
	    			}else{
	    				options.auto = true;
	    				vsStart(Number(mainTN));
	    				thisTn.find(".wvNumBoxIn span").removeClass("fa-play");
	    				thisTn.find(".wvNumBoxIn span").addClass("fa-pause");
	    				thisTn.find(".wvNumBoxIn span").text("정지");
	    			}
    			});
			}
			if(options.control == "next" || options.control == "duel"){
				if(typeS == undefined){
					sHtml = '<div class="wvNextBox">';
				    sHtml += '<a class="prevBu" href="javascript:void(0);">'+options.prevBu+'</a>';
				    sHtml += '<a class="nextBu" href="javascript:void(0);">'+options.nextBu+'</a>';
				    sHtml += '</div>';
				    if(options.viewControl == "in"){
				    	thisTn.prepend(sHtml);
				    }else{
				    	tN.before(sHtml);
				    }
				    thisTn.find(".prevBu").click(function(){
				        if (mainTN == 0){
				            mainTN = listN-options.listLiN;
				        }else{
				            mainTN--;
				        }
				        vsStart(mainTN);
				    });
				    thisTn.find(".nextBu").click(function(){
				        if (mainTN == listN-options.listLiN){
				            mainTN = 0;
				        }else{
				            mainTN++;
				        }
				        vsStart(mainTN);
				    });
				}
				if(options.viewControl == "in"){
					if(listN <= listLiN){
			    		tN.find(".wvNextBox").hide();
			    	}else{
			    		tN.find(".wvNextBox").show();
			    	}
				}else{
					if(listN <= listLiN){
			    		tN.parent().find(".wvNextBox").hide(); 
			    	}else{
			    		tN.parent().find(".wvNextBox").show();
			    	}
				}
			}
			typeS = typeN;
		}
	}
	function vsStart(n){
	      clearTimeout(vTime);
	      mainTN = n;
	      tN.find(".wvNumBox a").removeClass("on");
	      tN.find(".wvNumBox a").eq(Math.floor(n/listLiN)).addClass("on");
	      if(options.cssMode){
	         tN.children("ul").css("transition","all "+(options.speed/1000)+"s ease");
	         tN.children("ul").css("margin-left",-((listW+options.listMargin)*n));
	      }else{
	         tN.children("ul").stop().animate({"margin-left":-((listW+options.listMargin)*n)},options.speed);
	      }
	      mainBg1 = $("#mainScroll > ul").find("li").eq(mainTN).attr("bgN");
	      $(".main_box01").find(".process_list").eq(mainTN).children("li").css("margin-top",250);
	      $(".main_box01").find(".process_list").eq(mainTN).css("z-index",3);
	      $(".main_box01").css("background-color",mainBg1);      
	      $(".main_box01").find(".process_list").eq(mainTN).children("li").each(function(n){
	         delayN = 300 * n;
	         $(this).delay(delayN).animate({"margin-top":0},300,function(){
	            if(n == 3){
	               $(".main_box01").find(".process_list").css("z-index",1);
	               $(".main_box01").find(".process_list").eq(mainTN).css("z-index",2);
	            }
	         });
	         
	      });
	      $(".mainBgBox ul li").eq(mainTN).hide();
	      $(".mainBgBox ul li").eq(mainTN).css("z-index",3);
	      $(".mainBgBox ul li").eq(mainTN).fadeIn(900,function(){
	         $(".mainBgBox ul li").css("z-index",1);
	         $(".mainBgBox ul li").eq(mainTN).css("z-index",2);
	      });
	      
	      if(options.auto){
	         if (mainTN >= listN-options.listLiN){
	            vTime=setTimeout(function(){ vsStart(0); }, options.setTime);
	         }else{
	            vTime=setTimeout(function(){ vsStart(n+listLiN); }, options.setTime);
	         }
	      }      
	      
	   }
	tnSet();
	if(options.auto){
		vTime=setTimeout(function(){ vsStart(0); }, 300);
	}
	$(window).resize(function(){
		tnSet();
	});
}

$.fn.wvSilder = function(options){
	var defaults = {
		control :			'pointer',
		speed:				1000,
		setTime:			1000,
		listLiN : 			1,
		tabletN	:			1,
		mobileN	:			1,
		tabletW : 			1200,
		mobileW : 			640,
		listMargin :		0,
		listMobileMargin :	0,
		viewControl :    	'in',
		prevBu :			'<img src="/css/wvtex/img/wvUser/main_prevBu_off.png"/>',
		nextBu :			'<img src="/css/wvtex/img/wvUser/main_nextBu_off.png"/>',
		cssMode : 			false,
		auto :				true,
		loop :				false
	};
	var options = $.extend(defaults, options);
	var pageW = $(window).width();
	var tN = $(this);
	var thisTn;
	if(options.viewControl == "in"){
		thisTn = $(this);
	}else{
		thisTn = $(this).parent();
	}		
	var tNW = tN.width();
	if(options.loop){
		var mainTN = 1;
	}else{
		var mainTN = 0;
	}
	var vTime;
	var listN = tN.children("ul").children("li").length;
	var sHtml,listW;
	var listLiN;
	var typeN;
	var typeS;
	var cloneN = 0;
	// slider drag 이벤트 (2023-12-06 차동원)
	var startPoint = 0;
	var endPoint = 0;
	var sensitive = 50;
	if(options.loop){
		tN.children("ul").find("li:last-child").clone().prependTo(tN.children("ul"));
		tN.children("ul").find("li:eq(1)").clone().appendTo(tN.children("ul"));
		cloneN = 2;
		listN = listN+2;
	}
	function tnSet(){
		pageW = $(window).width();
		if(pageW < options.mobileW){
			listLiN = options.mobileN;
			typeN = "mobile";
		}else if(pageW < options.tabletW){
			listLiN = options.tabletN;
			typeN = "tablet";
		}else{
			listLiN = options.listLiN;
			typeN = "web";
		}
		tNW = tN.width();
		listW = tNW/listLiN-options.listMargin+(options.listMargin/listLiN);
		tN.children("ul").children("li").css("width",listW);
		tN.children("ul").children("li").css("margin-right",options.listMargin);
		tN.children("ul").css("width",(listW+options.listMargin)*listN);
		tN.children("ul").css("margin-left",-((listW+options.listMargin)*mainTN));
		if(typeN !== typeS || typeS == undefined){
			if(options.control == "pointer" || options.control == "duel"){
			    sHtml = '<div class="wvNumBox">';
			    tN.children("ul").children("li").each(function(m){
			    	if(options.loop && m == 0 || options.loop && m == listN ){
			    		
			    	}else{
				    	if((m) % listLiN == 0){
				    		if(mainTN == m){
				    			sHtml += '<a href="javascript:void(0);" class="on '+m+' " lnum="'+m+'"></a>';
				    		}else{
				    			sHtml += '<a href="javascript:void(0);"  class="'+m+'" lnum="'+m+'"></a>';
				    		}
				    	}
			    	}
			    });
			    if(options.auto){
			    	//sHtml += '<div class="wvNumBoxIn"><a href="javascript:;"><span class="fa fa-pause">정지</span></a></div>';
				}else{
					sHtml += '<div class="wvNumBoxIn"><a href="javascript:;"><span class="fa fa-play">플레이</span></a></div>';
				}
			    sHtml += '</div>';
			    thisTn.find(".wvNumBox").remove();
			    if(options.viewControl == "in"){
			    	tN.prepend(sHtml);
			    }else{
			    	tN.before(sHtml);
			    }
			    
			    // dragstart/end는 PC
			    // touchstart/end는 모바일
			    $(thisTn).on({
			    	'touchstart': function(e){
			    		startPoint = e.originalEvent.touches[0].pageX;
			    	},
			    	'touchend': function(e){
			    		endPoint = e.originalEvent.changedTouches[0].pageX;
			    		// 민감도 보다 작으면 함수종료
			    		if(Math.abs(startPoint - endPoint) < sensitive) return;
			    		
			    		var firstElem = $('.wvNumBox > a').first();
			    		var lastElem = $('.wvNumBox > a').last();
			    		var selectedTag;
			    		if(startPoint + sensitive < endPoint){ // 왼쪽드래그
			    			// 끝이면 함수 종료
			    			if(!$('.wvNumBox > .on').prev('a').length) return;
			    			selectedTag = $('.wvNumBox > .on').prev('a');
			    			// 마지막으로 돌아가기
//			    			if(!$('.wvNumBox > .on').prev('a').length){
//			    				selectedTag = lastElem;
//			    			} 
			    		} else if(startPoint > endPoint + sensitive){ // 오른쪽 드래그
			    			// 끝이면 함수 종료
			    			if(!$('.wvNumBox > .on').next('a').length) return;
			    			selectedTag = $('.wvNumBox > .on').next('a');
			    			// 마지막으로 돌아가기
//			    			if(!$('.wvNumBox > .on').next('a').length){
//			    				selectedTag = firstElem;
//			    			}
			    		}

			    		mainTN = $(selectedTag).attr("lNum");			    		
			    		thisTn.find(".wvNumBox > a").removeClass("on");
			    		$(selectedTag).addClass("on");
			    		vsStart(Number(mainTN));
			    	}
			    })
			    
			    thisTn.find(".wvNumBox > a").click(function(){
		    		mainTN = $(this).attr("lNum");
		    		thisTn.find(".wvNumBox > a").removeClass("on");
		    		$(this).addClass("on");
		    		vsStart(Number(mainTN));
		    	});
			    thisTn.find(".wvNumBoxIn").click(function(){
	    			if(options.auto){
	    				clearTimeout(vTime);
	    				thisTn.find(".wvNumBoxIn span").removeClass("fa-pause");
	    				thisTn.find(".wvNumBoxIn span").addClass("fa-play");
	    				thisTn.find(".wvNumBoxIn span").text("플레이");
	    				options.auto = false;
	    			}else{
	    				options.auto = true;
	    				vsStart(Number(mainTN));
	    				thisTn.find(".wvNumBoxIn span").removeClass("fa-play");
	    				thisTn.find(".wvNumBoxIn span").addClass("fa-pause");
	    				//thisTn.find(".wvNumBoxIn span").text("정지");
	    			}
    			});
			}
			if(options.control == "next" || options.control == "duel"){
				if(typeS == undefined){
					sHtml = '<div class="wvNextBox">';
				    sHtml += '<a class="prevBu" href="javascript:void(0);">'+options.prevBu+'</a>';
				    sHtml += '<a class="nextBu" href="javascript:void(0);">'+options.nextBu+'</a>';
				    sHtml += '</div>';
				    if(options.viewControl == "in"){
				    	thisTn.prepend(sHtml);
				    }else{
				    	tN.before(sHtml);
				    }
				    thisTn.find(".prevBu").click(function(){
				        if (mainTN == 0){
				        	if(options.loop){
				        		tN.children("ul").css("transition","none");
				        		tN.children("ul").css("margin-left",-((listW+options.listMargin)*(listN-2)));
				        		mainTN = (listN-options.listLiN)-2;
				        		vTime=setTimeout(function(){ vsStart(mainTN); }, 100);
				        	}else{
				        		mainTN = listN-options.listLiN;
				        		vsStart(mainTN);
				        	}	
				        }else{
				            mainTN--;
				            vsStart(mainTN);
				        }
				        
				    });
				    thisTn.find(".nextBu").click(function(){
				        if (mainTN == listN-options.listLiN){
				        	if(options.loop){
				        		tN.children("ul").css("transition","none");
				        		tN.children("ul").css("margin-left",-((listW+options.listMargin)));
				        		mainTN = 2;
				        		vTime=setTimeout(function(){ vsStart(mainTN); }, 100);
				        	}
				        }else{
				            mainTN++;
				            vsStart(mainTN);
				        }
				        
				    });
				}
				if(options.viewControl == "in"){
					if(listN <= listLiN){
			    		tN.find(".wvNextBox").hide();
			    	}else{
			    		tN.find(".wvNextBox").show();
			    	}
				}else{
					if(listN <= listLiN){
			    		tN.parent().find(".wvNextBox").hide(); 
			    	}else{
			    		tN.parent().find(".wvNextBox").show();
			    	}
				}
			}
			typeS = typeN;
		}
	}
	function vsStart(n){
		clearTimeout(vTime);
		mainTN = n;
		tN.find(".wvNumBox a").removeClass("on");
		tN.find(".wvNumBox a").eq(Math.floor(n/listLiN)).addClass("on");
		if(options.loop){
		}
		if(options.cssMode){
			tN.children("ul").css("transition","all "+(options.speed/1000)+"s ease");
			tN.children("ul").css("margin-left",-((listW+options.listMargin)*n));
		}else{
			tN.children("ul").stop().animate({"margin-left":-((listW+options.listMargin)*n)},options.speed);
		}
		if(options.auto){
			if (mainTN >= listN-options.listLiN){
				if(options.loop){
	        		tN.children("ul").css("transition","none");
	        		tN.children("ul").css("margin-left",0);
	        		mainTN = 1;
	        		vTime=setTimeout(function(){ vsStart(mainTN); }, 100);
	        	}else{
	        		vTime=setTimeout(function(){ vsStart(0); }, options.setTime);
	        	}
			}else{
				vTime=setTimeout(function(){ vsStart(n+listLiN); }, options.setTime);
			}
		}		
		
	}
	tnSet();
	if(options.auto){
		vTime=setTimeout(function(){ vsStart(0); }, 300);
	}
	$(window).resize(function(){
		tnSet();
	});
	
	var startX, endX;

	tN.on('touchstart', function(e) {
	  startX = e.originalEvent.touches[0].clientX;
	});

	tN.on('touchend', function(e) {
	  endX = e.originalEvent.changedTouches[0].clientX;
	  var deltaX = startX - endX;

	  if (Math.abs(deltaX) > 50) {
	    if (deltaX > 0) {
	      // swipe left → next
	      mainTN = (mainTN + listLiN >= listN) ? 0 : mainTN + listLiN;
	    } else {
	      // swipe right → prev
	      mainTN = (mainTN - listLiN < 0) ? listN - listLiN : mainTN - listLiN;
	    }
	    vsStart(mainTN);
	  }
	});

}

$.fn.wvImgViewer = function(options){
	var defaults = {
		speed:				1000,
		setTime:			1000,
		listLiN : 			1,
		tabletN	:			1,
		mobileN	:			1,
		tabletW : 			1200,
		mobileW : 			640,
		listMargin :		0,
		listMobileMargin :	0,
		viewControl :    	'in',
		prevBu :			'<img src="/css/wvtex/img/wvUser/main_prevBu_off.png"/>',
		nextBu :			'<img src="/css/wvtex/img/wvUser/main_nextBu_off.png"/>',
		cssMode : 			false,
		auto :				false,
		textType :			false
	};
	var options = $.extend(defaults, options);
	var pageW = $(window).width();
	var tN = $(this);	
	var tNW = tN.width();
	var mainTN = 0;
	var imgTN = 0;
	if(options.viewControl == "in"){
		thisTn = $(this);
	}else{
		thisTn = $(this).parent();
	}
	var vTime;
	var listN = tN.find(".photoImgView li").length;
	var sHtml,listW;
	var listLiN;
	var typeN;
	var typeS;
	var thisN,tnIW,tnIH,thisIW,thisIH,iHN,thisText;
	tNW = tN.width();
	function tnView(n){
		imgTN = n;
		tnIW = tN.find(".photoImgView").width();
    	tnIH = tN.find(".photoImgView").height();
    	thisIW = tN.find(".photoImgView ul li").eq(n).find("img").width();
    	thisIH = tN.find(".photoImgView ul li").eq(n).find("img").height();
    	
    	if(tnIW/tnIH >= thisIW/thisIH){
    		tN.find(".photoImgView ul li").eq(n).find("img").css("width","auto");
    		tN.find(".photoImgView ul li").eq(n).find("img").css("height","100%");
    	}else{
    		tN.find(".photoImgView ul li").eq(n).find("img").css("width","100%");
    		tN.find(".photoImgView ul li").eq(n).find("img").css("height","auto");
    		iHN = (tnIH-thisIH)/2;
    		tN.find(".photoImgView ul li").eq(n).find("img").css("margin-top",iHN);
    	}
    	if(options.textType){
    		thisText = tN.find(".photoImgView ul li").eq(n).find("img").attr("alt");
        	tN.find(".fac_tit span").text(thisText);
    	}
    	tN.find(".photoImgView ul li").eq(n).css("opacity",0);
    	tN.find(".photoImgView ul li").eq(n).css("z-index",3);
    	tN.find(".photoImgView ul li").eq(n).animate({"opacity":1},300,function(){
    		tN.find(".photoImgView ul li").each(function(){
    			if($(this).css("z-index") == 2){
    				$(this).css("z-index",1);
    			}
    		});
    		tN.find(".photoImgView ul li").eq(n).css("z-index",2);
    	});
    	tN.find(".photoImgViewList ul").find("li").removeClass("on");
    	tN.find(".photoImgViewList ul").find("li").eq(thisN).addClass("on");
	}
	function tnSet(){
		pageW = $(window).width();
		if(pageW < options.mobileW){
			listLiN = options.mobileN;
			typeN = "mobile";
		}else if(pageW < options.tabletW){
			listLiN = options.tabletN;
			typeN = "tablet";
		}else{
			listLiN = options.listLiN;
			typeN = "web";
		}
		tNW = tN.width();
		//tN.find(".photoImgView").css("width",tNW);
		tN.find(".photoImgViewList").css("width",tNW);
		listW = tNW/listLiN-options.listMargin+(options.listMargin/listLiN);
		tN.find(".photoImgViewList li").css("width",listW);
		tN.find(".photoImgViewList li").css("margin-right",options.listMargin);
		tN.find(".photoImgViewList ul").css("width",(listW+options.listMargin)*listN);
		tN.find(".photoImgViewList ul").css("margin-left",-((listW+options.listMargin)*mainTN));
		tN.find(".photoImgViewList").find("img").animate({"opacity":1},1300);
		if(typeN !== typeS || typeS == undefined){
			
			if(typeS == undefined){
				sHtml = '<div class="wvNextBox">';
			    sHtml += '<a class="prevBu" href="javascript:void(0);" style="display:none;">'+options.prevBu+'</a>';
			    sHtml += '<a class="nextBu" href="javascript:void(0);">'+options.nextBu+'</a>';
			    sHtml += '</div>';
			    if(options.viewControl == "in"){
			    	thisTn.prepend(sHtml);
			    }else{
			    	tN.before(sHtml);
			    }
			    thisTn.find(".prevBu").click(function(){
			        if (mainTN <= 0){
			        	thisTn.find(".prevBu").hide();
			            //mainTN = listN-options.listLiN;
			        }else{
			            mainTN--;
			            thisTn.find(".nextBu").show();
			        }
			        vsStart(mainTN);
			    });
			    thisTn.find(".nextBu").click(function(){
			        if (mainTN == listN-listLiN){
			            //mainTN = 0;
			        	alert();
			        	thisTn.find(".nextBu").hide();
			        }else{
			        	mainTN++;
			            thisTn.find(".prevBu").show();
			        }
			        
			        vsStart(mainTN);
			    });
			    tN.find(".photoImgViewList ul li").click(function(){
			    	thisN = $(this).index();
					if(thisN !== imgTN){
			    		tnView(thisN);
					}
			    });
			}
			if(listN <= listLiN){
	    		tN.find(".wvNextBox").hide();
	    	}else{
	    		tN.find(".wvNextBox").show();
	    	}
			typeS = typeN;
		}
	}
	function vsStart(n){
		clearTimeout(vTime);
		mainTN = n;
		if(mainTN == 0){
			thisTn.find(".prevBu").hide();
		}
		if (mainTN == listN-listLiN){
			thisTn.find(".nextBu").hide();
		}
		if(options.cssMode){
			tN.find(".photoImgViewList ul").css("transition","all "+(options.speed/1000)+"s ease");
			tN.find(".photoImgViewList ul").css("margin-left",-((listW+options.listMargin)*n));
		}else{
			tN.find(".photoImgViewList ul").stop().animate({"margin-left":-((listW+options.listMargin)*n)},options.speed);
		}
		if(options.auto){
			if (mainTN >= listN-options.listLiN){
				vTime=setTimeout(function(){ vsStart(0); }, options.setTime);
			}else{
				vTime=setTimeout(function(){ vsStart(n+1); }, options.setTime);
			}
		}		
		
	}
	
	tnSet();
	tnView(0);
	
	if(options.auto){
		vTime=setTimeout(function(){ vsStart(0); }, 300);
	}
	$(window).resize(function(){
		tnSet();
	});
}


function mainAni(){
	pageW = $(window).width();
	var setTime = 4000;
	var listN = $(".main_animation > ul > li").length;
	var mainAN = 0;
	var listL, listUrl,listUrl2, listIn;
	var listW = $(".main_animation > ul > li").width();
	var textN = ["나에게 맞는 맞춤형 교육안내","아이티윌에서 진로상담 시작","내일배움카드 신청 및 고용센터 안내","아이티윌의 다양한 교육과정 확인","1:1멘토링을 통한 이력서컨설팅 지원","취업에 성공한 수강생들의 후기"]
	
	mainTime=setInterval(function(){ mainAniS(0); }, setTime);
	function mainAniS(){
		if(mainAN == listN-1){
			mainAN = -2;
			$(".main_aCar").animate({"left":pageW+listW},300,function(){
				$(".main_aCar").hide(300);
				$(".main_aText").hide();
				//$(".main_aCar").css("transition","all 0.9s ease");
			});
		}else if(mainAN == -2){
			mainAN = -1;
			$(".main_aCar").find("img").attr("src","/css/wvtex/img/wvUser/car.gif");
			$(".main_aCar").css("left",-200);
			$(".main_aCar").show();
			
		}else{
			mainAN++;
			listL = $(".main_animation").find("li").eq(mainAN).offset().left;
			mainL = (listW*(mainAN+1)-pageW)/listW;
			if(mainAN >= 1){
				$(".main_aText").show();
				$(".main_aCar").show();
			}
			if(mainAN == 5){
				$(".main_aCar").find("img").attr("src","/css/wvtex/img/wvUser/car2.gif");
			}
			if(mainL > 0){
				
				if(mainAN == 5){
					$(".main_animation > ul").css("margin-left",-(mainL*listW+20));
				}else{
					$(".main_animation > ul").css("margin-left",-(mainL*listW+40));
				}
				$(".main_aCar").css("left",listL-((listL+listW+40)-pageW));
			}else{
				$(".main_animation > ul").css("margin-left",0);
				if(listL < 0){
					$(".main_aCar").css("left",0);
				}else{
					$(".main_aCar").css("left",listL);
				}
			}
			$(".main_animation > ul > li").find(".stapOn").fadeOut(300);
			$(".main_animation > ul > li").eq(mainAN).find(".stapOn").fadeIn(300);
		}
		$(".main_aText").text(textN[mainAN]);
		if(pageW < 450){
			$(".main_aText").addClass("main_aText2");	
		}else{
			$(".main_aText").removeClass("main_aText2");	
		}
		
	}
	$(".main_animation > ul > li").mouseenter(function(){
		
		listIn = $(this).index();
		mainAN = listIn-1;
		clearTimeout(mainTime);
		if(listIn == 0){
			$(".main_aText").hide();
		}else if(listIn == 5){
			$(".main_aCar").find("img").attr("src","/css/wvtex/img/wvUser/car2.gif");
		}else{
			$(".main_aCar").find("img").attr("src","/css/wvtex/img/wvUser/car.gif");
		}
		mainAniS()
	});
	$(".main_animation > ul > li").mouseleave(function(){
		mainTime=setInterval(function(){ mainAniS(0); }, setTime);
	});
	$(".main_aCar").click(function(){
		if(mainAN == 0){
			//location.href='/cmn/cnsl/hiddenEduRegist.do';
		}else if(mainAN == 1){
			location.href='/cmn/cnsl/online/cnslMain.do';
		}else if(mainAN == 2){
			window.open('http://www.hrd.go.kr/hrdp/ct/pctfo/PCTFO0100T.do');
		}else if(mainAN == 3){
			location.href='/cmn/eduCrseMain/1000000/all/eduCrseMainList.do';
		}else if(mainAN == 4){
			location.href='/cmn/sym/mnu/mpm/1020400/htmlMenuView.do';
		}else if(mainAN == 5){
			location.href='/cmn/board/BBSMSTR_000000000031/bbsList.do';
		}
	});
	$(window).resize(function(){
		pageW = $(window).width();
		listW = $(".main_animation > ul > li").width();
		mainL = (listW*(mainAN+1)-pageW)/listW;
	});
} 	

