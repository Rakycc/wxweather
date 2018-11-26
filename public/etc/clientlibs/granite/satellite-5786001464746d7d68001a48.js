_satellite.pushAsyncScript(function(event, target, $variables){
  try{
_satellite.notify("########################## STARTS LP LE2 " );  
	_satellite.getVar("le2_lp_init");
_satellite.notify("########################## STARTS LP 1 " );  
	_satellite.getVar("le2_lp_sectionFunctions");
_satellite.notify("########################## STARTS LP 2 " );  
	_satellite.getVar("le2_lp_sectionConfig");
_satellite.notify("########################## STARTS LP 3 " );  
	_satellite.getVar("le2_lp_platformTag");
_satellite.notify("########################## STARTS LP 4 " );  
	_satellite.getVar("le2_lp_mtagconfig");
_satellite.notify("########################## STARTS LP 5 " );
	_satellite.getVar("le2_lp_FAQWidget");
_satellite.notify("########################## STARTS LP 6 " );
  if(_satellite.getVar('sc_pageName_original') == "CATEGORY:NW>>PERSONAL"){_satellite.getVar("le2_thirdPartyCookies");}// module to check the third party cookies
_satellite.notify("########################## STARTS LP 7 " );  
	_satellite.getVar("le2_lp_startTag");
_satellite.notify("########################## LEAVES LP LE2 " );
}
catch(e){}
});
