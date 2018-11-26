// JavaScript Document
/*导航*/
var s_bMoveLeft = true;
var s_oTimer = null;
var s_oTimerOut = null;
var s_iSpeed = 3;
function MM_findObj(n, d) { 
	var p,i,x;
	if(!d) 
		d=document; 
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) 
		x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) 
		x=d.getElementById(n); 
		return x;
}

function showHideLayer() { 
	var i,p,v,obj,args=showHideLayer.arguments;
	for (i=0; i<(args.length-2); i+=3) 
	if ((obj=MM_findObj(args[i]))!=null) 
	{
		v=args[i+2];
		if (obj.style) 
		{ 
			obj=obj.style;
			v=(v=='show')?'visible':(v=='hide')?'hidden':v; 
		}
    	obj.visibility=v; 
	}
}
//选项卡切换
function tabs(tabId, tabNum){
	$(tabId+' .tab_nav li').removeClass('selected');
	$(tabId+' .tab_nav li').eq(tabNum).addClass('selected');
	$(tabId+' .tab_content').hide();
	$(tabId+' .tab_content').eq(tabNum).show();
}


$(document).ready(function(){
	//网银登录
	var h_logbtn = $('.hover_btn');
	var h_menu = $('.hover_menu').hide();
	h_logbtn.click(function(){
		h_menu.fadeToggle('fast');
		return false;
	})
	$("body").click(function(){
		h_menu.hide();
		})
	//分享
	var share_c = $('.share_pop').hide();
	var share_bt = $('.share');
	share_bt.click(function(){
		share_c.fadeToggle(400);
		return false;
	});
	$("body").click(function(){
		share_c.hide();
		})
	//隔行变色
	$('.publish table tr:odd').addClass('odd');
	//理财计算器
	var info_bt = $('.info_2 > a');
	var info_menu = $('.info2_menu').hide();
	info_bt.click(function(){
		info_menu.fadeToggle('fast');
		return false;
	})
	$("body").click(function(){
		info_menu.hide();
		})
	//ATM分布
	var ATM_bt = $('.info_ATM > a');
	var ATM_menu = $('.ATM_menu').hide();
	ATM_bt.click(function(){
		ATM_menu.fadeToggle('fast');
		return false;
	})
	$("body").click(function(){
		ATM_menu.hide();
		})
		
		$(".ATM_menu .ATM_key").click(function(){
			ATM_menu.show();
			return false;
			})
			$(".ATM_menu .ATM_bt").click(function(){
			ATM_menu.show();
			return false;
			})
			$(".ATM_menu select").click(function(){
			ATM_menu.show();
			return false;
			})

	
	//轮播图
	if($("#loop").length >0){
		$('#loop ul')
		  .after('<div class="loop_btn" />')
		  .cycle({ 
			  fx: 'fade',
			  timeout: 4000,
			  pause: 1 ,
			  pager: '.loop_btn',
			  pagerEvent: 'mouseover',
			  pauseOnPagerHover: true,
			  cleartype: !$.support.opacity,
			  cleartypeNoBg: true,
			  activePagerClass: 'active',
			  pagerAnchorBuilder: function(idx, slide) { 
				  idx += 1;			
				  return '<span />'; 
			  }
		  });
	}
	
	//站内搜索
	$(".search_ipt").focus(function(){
		if($(this).val() == "请输入关键字"){
			$(this).val("").addClass("ipt_focus");
		}else{
			$(this).addClass("ipt_focus");
		}
	}).focusout(function(){
		if($(this).val() == ""){
			$(this).val("请输入关键字").removeClass("ipt_focus");
		}
	});	

})


//2014touch事件====弹出菜单
var bo = document.getElementsByTagName("body")[0];
var isIE = (document.all && window.ActiveXObject && !window.opera) ? true : false;
function tch_event(name){
	function touchStart(event) {
    name.style.display="none"
	}
	if(isIE){
		bo.attachEvent("touchstart", touchStart, false);
		bo.attachEvent("touchmove", touchStart, false);
		bo.attachEvent("touchend", touchStart, false);
	}else{
		bo.addEventListener("touchstart", touchStart, false);
		bo.addEventListener("touchmove", touchStart, false);
		bo.addEventListener("touchend", touchStart, false);
	}

	function touchbb(event) {
    name.style.display="block"
	event.stopPropagation();
	}
	if(isIE){
		name.attachEvent("touchmove", touchbb, false);
		name.attachEvent("touchstart", touchbb, false);
		name.attachEvent("touchend", touchbb, false);
	}else{
		name.addEventListener("touchmove", touchbb, false);
		name.addEventListener("touchstart", touchbb, false);
		name.addEventListener("touchend", touchbb, false);
	}
}
//touch事件 end

//2014touch事件====导航菜单
function tch_eventM(name){
	
	function touchStart2(event) {
    name.style.visibility="hidden";
	}
	if(isIE){
		bo.attachEvent("touchstart", touchStart2, false);
		bo.attachEvent("touchmove", touchStart2, false);
		bo.attachEvent("touchend", touchStart2, false);
	}
	else{
		bo.addEventListener("touchstart", touchStart2, false);
		bo.addEventListener("touchmove", touchStart2, false);
		bo.addEventListener("touchend", touchStart2, false);
	}

	function touchbb2(event) {
    name.style.visibility="visible";
	event.stopPropagation();
	}
	if(isIE){
		name.attachEvent("touchmove", touchbb2, false);
		name.attachEvent("touchstart", touchbb2, false);
		name.attachEvent("touchend", touchbb2, false);
	}else{
		name.addEventListener("touchmove", touchbb2, false);
		name.addEventListener("touchstart", touchbb2, false);
		name.addEventListener("touchend", touchbb2, false);
	}
}

//touch事件 end
//2014获取元素
function getElementsByClassName(n){
	var classElements = [],allElements = document.getElementsByTagName('*');
	for(var i = 0;i<allElements.length;i++){
		if(allElements[i].className == n){
			classElements[classElements.length]=allElements[i];	
		}	
	}
	return classElements;
}
if(typeof document.getElementsByClassName !='function'){  
         document.getElementsByClassName=getElementsByClassName;  
    }  
var className = document.getElementsByClassName('hd');
var subNav = document.getElementsByClassName('sub_menu');
for(var i = 0;i<className.length;i++){
	tch_event(className[i]);	
}
for(var i =0;i<subNav.length;i++){
	tch_eventM(subNav[i]);
}
