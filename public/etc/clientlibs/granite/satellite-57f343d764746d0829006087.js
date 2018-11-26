_satellite.pushBlockingScript(function(event, target, $variables){
  
try{
(function() {
var arrMortgagesPageNames = ['PERSONAL>MORTGAGES>SECURE>AGREEMENTINPRINCIPLE>INDEX',
'PERSONAL>MORTGAGES>SECURE>ITLRESULT>INDEX',
'PERSONAL>MORTGAGES>SECURE>MORTGAGES-AND-FEES>INDEX',
'PERSONAL>MORTGAGES>SECURE>APPLY-KFI-AND-ELIGIBILITY>INDEX',
'PERSONAL>MORTGAGES>SECURE>APPLICATION-NEXT-STEPS>INDEX',
'PERSONAL>MORTGAGES>SECURE>APPLY-ONLINE>INDEX',
'INFO:NW>PERSONAL>MORTGAGES>SECURE>AGREEMENT-IN-PRINCIPLE-REMORTGAGE>MORTGAGES-AND-FEES>INDEX',
'INFO:NW>PERSONAL>MORTGAGES>SECURE>AGREEMENT-IN-PRINCIPLE-REMORTGAGE',
'INFO:NW>PERSONAL>MORTGAGES>SECURE>AGREEMENT-IN-PRINCIPLE-REMORTGAGE>ITLRESULT>INDEX',
'INFO:NW>PERSONAL>MORTGAGES>SECURE>AGREEMENT-IN-PRINCIPLE-REMORTGAGE>APPLY-KFI-AND-ELIGIBILITY>INDEX'			     
                            ];
var jugaadiMasla = false;
for(var i = 0;i < arrMortgagesPageNames.length; i++)
{
	if(window.tmParam.sc_pagename.match(arrMortgagesPageNames[i])){ 
		jugaadiMasla = true;
	}
}
if(jugaadiMasla){  
  var uz = document.createElement('script'); uz.type = 'text/javascript'; 
  uz.async = true; uz.charset = 'utf-8';
  uz.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn3.userzoom.com/uz.js?cuid=FC742306F6D9E311BEDA0022196C4538';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(uz, s);
}
})();

 }
catch(e){}
});
