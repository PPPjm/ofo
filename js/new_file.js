$(function(){
	$("#fullPage").fullpage({
		verticalCentered:false,//不垂直居中，自己控制
		anchors:['page1','page2','page3','page4','page5','page6','page7','page8','page9'],
		navigation:true,
		navigationTooltips:['page1','page2','page3','page4','page5','page6','page7','page8','page9'],
		
//		afterLoad:function(anchorLink,index){
//			if(index=="2"){
//				$(".section2").find("h3").delay(500).animate({
//					left:"0"
//				},1500,"easeOutExpo");
//				$(".section2").find("p").delay(500).animate({
//					right:"0"
//				},1500,"easeOutExpo");
//			}
//			if(index=="3"){
//				$(".section3").find("h3").fadeIn(2000);
//			}
//		},
//		onLeave:function(index,direction){
//			if(index=="2"){
//				$(".section2").find("h3").delay(500).animate({
//					left:"-120%"
//				},1500,"easeOutExpo");
//				$(".section2").find("p").delay(500).animate({
//					right:"-120%"
//				},1500,"easeOutExpo");
//			}
//			if(index=="3"){
//				$(".section3").find("h3").fadeOut(2000);
//			}
//		}
		
        afterLoad:function(link,index){
        	switch(index){
        		case 1:
        		move(".section1 h2").scale(2).end();
        		break;
        		case 2:
        		move(".section2 h1").set("margin-left","20%").end();
        		move(".section2 h3").set("margin-left","20%").end();
        		move(".section2 p").set("margin-left","60%").end();
        		break;
        		case 3:
//      		move(".section3 .s3-one").set("margin-top","20%").end();
//      		move(".section3 .s3-two").set("margin-top","15%").end();
        		move(".section3 .s3-img1").set("margin-left","70%").end();
        		move(".section3 .s3-img2").set("margin-top","0").end();
        		break;
        		case 4:
        		move(".section4 .s4-one").rotate(360).scale(1.4).set("color","#145577").end();
        		move(".section4 .s4-two").rotate(-360).scale(1.4).set("color","#145577").end();
        		move(".section4 img").set("margin-top","28%").end();
        		break;
        		case 5:
        		move(".section5 h3").x(516).y(575).scale(1.5).set("color","Sienna").set("font-weight","bold").end();
        		move(".section5 p").x(-484).y(616).scale(1.5).set("color","Sienna").set("font-weight","bold").end();
        		break;
        		case 6:
        		break;
        		case 7:
        		move(".section7 .s7-img").set("margin-left","0").duration("4s").end();
        		break;
        		case 8:
        		break;
        		case 9:
        		move(".section9 img").set("margin-top","10%").scale(1.5).end();
        		break;
        		default:
        		break;
        	}
        },
         onLeave:function(link,index){
        	switch(index){
        		case 1:
        		move(".section1 h2").scale(1).end();
        		break;
        		case 2:
        		move(".section2 h1").set("margin-left","1500px").end();
        		move(".section2 h3").set("margin-left","1500px").end();
        		move(".section2 p").set("margin-left","-1500px").end();
        		break;
        		case 3:
//      		move(".section3 .s3-one").set("margin-top","-1500px").end();
//      		move(".section3 .s3-two").set("margin-top","1500px").end();
        		move(".section3 .s3-img1").set("margin-left","1500px").end();
        		move(".section3 .s3-img2").set("margin-top","1500px").end();
        		break;
        		case 4:
        		move(".section4 .s4-one").rotate(-360).scale(1).set("color","black").end();
        		move(".section4 .s4-two").rotate(360).scale(1).set("color","black").end();
        		move(".section4 img").set("margin-top","-1500px").end();
        		break;
        		case 5:
        		move(".section5 h3").x(0).y(0).scale(1).set("color","black").set("font-weight","normal").end();
        		move(".section5 p").x(0).y(0).scale(1).set("color","black").set("font-weight","normal").end();
        		break;
        		case 6:
        		break;
        		case 7:
        		move(".section7 .s7-img").set("margin-left","1500px").end();
        		break;
        		case 8:
        		break;
        		case 9:
        		move(".section9 img").set("margin-top","-1500px").scale(1).end();
        		break;
        		default:
        		break;
        	}
        },
        afterRender:function(){
				
				}
	})
	$(window).resize(function(){
		        autoScrolling();
		    });
		
		    function autoScrolling(){
		        var $ww = $(window).width();
		        if($ww < 1024){
		            $.fn.fullpage.setAutoScrolling(false);
		        } else {
		            $.fn.fullpage.setAutoScrolling(true);
		        }
		    }
//实时设置滚动配置。 定义页面滚动行为的方式。 如果设置为true，则将使用"自动"滚动，否则将使用站点的"手动"或"正常"滚动。		
		 autoScrolling();
})
