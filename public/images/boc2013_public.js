/**
* @see 将页面滚动到指定的位置
* @param obj:对象
*/
function scroll_to_target(objid){
	var obj = document.getElementById(objid);
	var t = $(obj);
	if(t != undefined && $(obj).offset() != null){
		//判断是否有DOCTYPE声明，有与没有，scrollTop不一样
		var scrollPos; 
		if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat')
			scrollPos = document.documentElement;  
		else if (typeof document.body != 'undefined')
			scrollPos = document.body;
		var next_top = $(obj).offset().top;
		$(scrollPos).animate({ scrollTop : next_top }, "slow");
	}
}
/**
* @see 获取某一个页面属性后面的东西
* @param obj:对象
*/
function get_param_value(paramname){
	var curhref = window.location.href + "";
	var curindex = curhref.indexOf("?"+paramname+"=");
	if(curindex == -1){
		curindex = curhref.indexOf("&"+paramname+"=");
		if(curindex == -1)
			return "";
	}
	curindex = curindex+paramname.length+2;
	var cureindex = curhref.indexOf("&",curindex);
	if(cureindex == -1)
		cureindex = curhref.length;
	var curvalue = curhref.substring(curindex,cureindex);
	return curvalue;
}
/**
 * 替换
 */
String.prototype.ReplaceAll = function(AFindText,ARepText)
{
	var raRegExp = new RegExp(AFindText,"g")
	try{
	var res = this.replace(raRegExp,ARepText);
	return res;
	}catch(e){return "";}
}
/**
 * @see 分析URL地址，加载页面的AD对象
 * @param obj:对象
*/
function get_hotnews_js(htmlname,curdomain){
	var curhref = window.location.href+"";	
	if(!curdomain)
		curdomain = getDomain(curhref);
	var curindex = curhref.indexOf(curdomain);
	if(curindex == -1)
		return;
	var cureindex = curhref.indexOf("/",curindex+curdomain.length);
	if(cureindex == -1)
		return;
	//得到当前的一级栏目
	var curchnlname = curhref.substring(curindex+curdomain.length,cureindex);
	//如果curchnlname是 big5,则在进行获取
	if(curchnlname == "big5"){
		cureindex = curhref.indexOf("/",cureindex+1);
		if(cureindex == -1)
			return;
		curchnlname = curhref.substring(curindex+curdomain.length+4,cureindex);
	}
	if(curchnlname != "custserv"){
		var cururl = curhref.substring(0,cureindex+1)+htmlname;
		//在页面中动态加载当前的页面
		loadJs(cururl);
	}
}
//返回一个地址的域名信息
function getDomain(curlocation){
	var curdomain = "";
	try{
		var si = curlocation.indexOf("http://");
		var ei = curlocation.indexOf("/",si+7);
		curdomain = curlocation.substring(si,ei);
	}catch(e){}
	return curdomain+"/";
}
//在页面中动态加载一个JS
function loadJs(jsurl){
	var oHead = document.getElementsByTagName('HEAD').item(0);
	var oScript= document.createElement("script");
	oScript.type = "text/javascript";
	oScript.src= jsurl;
	oHead.appendChild( oScript);
}