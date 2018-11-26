function createRightAD(comid){
	var adhtml='';

	adhtml+='<div class="box" style="padding:0px">';

	adhtml+='<a href="http://www.bankofchina.com/pbservice/pb1/201303/t20130304_2179916.html"><img src="http://www.bankofchina.com/pbservice/pb1/201303/W020140113753084676483.jpg" width="240" height="76" border="0"></a>';

	adhtml+='</div>';

	$("#"+comid).html(adhtml);
}
createRightAD("PL_RIGHT_AD");