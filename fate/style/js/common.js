(function() {
		window.scrollBox = function(a) {
			var b = this;
			b.box = a.box || ".scrollBox";
			b.top = a.top || "0px";
			b.minWidth = a.minWidth || 0;
			b.bottom = a.bottom || 0;
			b.space = a.space || 20;
			b.transition = a.transition == false ? false : true;
			if (a.maxHeightBox) {
				b.maxHeight = $(a.maxHeightBox).offset().top + $(a.maxHeightBox).height()
			}
			b.init()
		};
		scrollBox.prototype = {
			init: function() {
				var e = this,
					d = window.innerWidth,
					b = window.innerHeight;
				boxT = $(e.box).offset().top, boxH = $(e.box).height(), boxMT = 0;
				$(window).resize(function() {
					e.throttle(c, 200, 3000)()
				});
				if (d >= e.minWidth) {
					if (e.transition) {
						$(e.box).css("transition", "margin 0.1s ease-out");
						$(window).scroll(function() {
							e.throttle(a, 200, 3000)()
						})
					} else {
						$(window).scroll(function() {
							a()
						})
					}
					a()
				}
				function c() {
					d = window.innerWidth;
					b = window.innerHeight;
					boxT = $(e.box).offset().top - parseFloat($(e.box).css("margin-top"));
					boxH = $(e.box).height()
				}
				function a() {
					if (d >= e.minWidth) {
						if (e.maxHeight < boxT + boxH + e.space) {
							return false
						}
						var g = $(window).scrollTop();
						if (boxH > b - e.top - e.space * 2) {
							if (g <= (boxT - e.top - e.space)) {
								$(e.box).css({
									"margin-top": "0"
								})
							} else {
								if (e.maxHeight) {
									if (g > e.maxHeight + e.space - b) {
										$(e.box).css({
											"margin-top": e.maxHeight - boxT - boxH + "px"
										});
										return false
									}
								}
								var f = g - boxT - (boxH + e.bottom + e.space - b);
								if (f < boxMT) {
									if (g < $(e.box).offset().top - e.top - e.space) {
										boxMT = g - boxT + e.top + e.space
									}
								} else {
									boxMT = f
								}
								$(e.box).css({
									"margin-top": boxMT + "px"
								})
							}
						} else {
							if (g <= (boxT - e.top - e.space)) {
								$(e.box).css({
									"margin-top": "0"
								})
							} else {
								if (e.maxHeight) {
									if (g > e.maxHeight - boxH - e.top - e.space) {
										return false
									}
								}
								var f = g - boxT + e.top + e.space;
								$(e.box).css({
									"margin-top": f + "px"
								})
							}
						}
					}
				}
			},
			throttle: function(c, b, a) {
				var e = null;
				var d = null;
				return function() {
					var f = +new Date();
					!d && (d = f);
					if (a && f - d > a) {
						c();
						d = f
					} else {
						clearTimeout(e);
						e = setTimeout(function() {
							c();
							d = null
						}, b)
					}
				}
			}
		}
	}());

function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)){
		return document.getElementById(objectId);
	}else if(document.all && document.all(objectId)){
		return document.all(objectId);
	}else if(document.layers && document.layers[objectId]){
		return document.layers[objectId];
	}else{
		return false;
	}
}
function showHide(e,objname){
	var obj = getObject(objname);
	if(obj.style.display == "block"){
		obj.style.display = "none";	
	}else{
		obj.style.display = "block";	
	}
}


$(document).ready(function() {
    var A = document.location;
    $(".nav a").each(function() {
        if (this.href == A.toString().split("#")[0]) {
            $(this).addClass("cur");
            return false;
        }
    });
});
$(document).ready(function() {
    $("#mnav").click(function() {
        $(".nav").fadeToggle(500);
		$(".search").fadeOut();
		$(".login").fadeOut();
    });
    $("#msearch").click(function() {
        $(".search").fadeToggle(500);
		 $(".nav").fadeOut();
		 $(".login").fadeOut();
    });
	 $("#muser").click(function() {
        $(".login").fadeToggle(500);
		 $(".nav").fadeOut();
		 $(".search").fadeOut();
    });
});


$(function() {
	var nav = $(".nav");
	var win = $(window);
	var sc = $(document);
	win.scroll(function() {
		if (sc.scrollTop() >= 140) {
			nav.addClass("fixednav");
		} else {
			nav.removeClass("fixednav");
            nav.removeClass("hide");
		}
	})
});

$(function(){  
        //页面初始化的时候，获取滚动条的高度（上次高度）  
        var start_height = $(document).scrollTop();  
        //获取导航栏的高度(包含 padding 和 border)  
        var fixednav_height = $('.fixednav').outerHeight();  
        $(window).scroll(function() {  
            //触发滚动事件后，滚动条的高度（本次高度）  
            var end_height = $(document).scrollTop();  
            //触发后的高度 与 元素的高度对比  
            if (end_height > fixednav_height){  
                $('.fixednav').addClass('hide');  
            }else {  
                $('.fixednav').removeClass('hide');  
            }  
            //触发后的高度 与 上次触发后的高度  
            if (end_height < start_height){  
                $('.fixednav').removeClass('hide');  
            }  
            //再次获取滚动条的高度，用于下次触发事件后的对比  
            start_height = $(document).scrollTop();  
        });  
    });  
	
	$(function(){  
        //页面初始化的时候，获取滚动条的高度（上次高度）  
        var start_height = $(document).scrollTop();  
        //获取导航栏的高度(包含 padding 和 border)  
        var fixednav_height = $('.waphead').outerHeight();  
        $(window).scroll(function() {  
            //触发滚动事件后，滚动条的高度（本次高度）  
            var end_height = $(document).scrollTop();  
            //触发后的高度 与 元素的高度对比  
            if (end_height > fixednav_height){  
                $('.waphead').addClass('waphide');  
            }else {  
                $('.waphead').removeClass('waphide');  
            }  
            //触发后的高度 与 上次触发后的高度  
            if (end_height < start_height){  
                $('.waphead').removeClass('waphide');  
            }  
            //再次获取滚动条的高度，用于下次触发事件后的对比  
            start_height = $(document).scrollTop();  
        });  
    });  