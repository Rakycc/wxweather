_satellite.pushBlockingScript(function(event, target, $variables){
  try {
    var add = "";
    var originalPage = _satellite.getVar('sc_pageName_original');
    var originalPath = window.location.pathname;
	var brand = _satellite.getVar('sc_brand');
	var url =window.location.href;
    if ((url.match("http://personal.natwest.com/personal/mortgages/buy-to-let1.html")) || (url.match("http://personal.natwest.com/personal/mortgages/m/a/natwest-btl-mortgages.html")) || (url.match("http://personal.natwest.com/personal/mortgages/buy-to-let.html")) || (url.match("http://www.natwest.com/personal/mortgages/buy-to-let.ashx")) ) {
        add = "59bab51a1294c6d112f6e42b";
    } else if (url.match("https://personal.natwest.com/personal/mortgages/secure/buy-to-let-mortgages-agreement-in-principle/aipresult-yes.html")) {
		add = "59bab51d1294c6d112f6e431";
	} else if (url.match("https://personal.natwest.com/personal/mortgages/secure/buy-to-let-mortgages-agreement-in-principle.html")) {
		add = "59bab51d1294c6d112f6e432";
	} else if ((url.match("http://personal.natwest.com/personal/mortgages/mortgages-ddl-res.html")) || (url.match("http://personal.natwest.com/personal/mortgages.html")) ) {
		add = "59bab51a1294c6d112f6e426"; 
	} else if (url.match("https://personal.natwest.com/personal/mortgages/secure/itlresult.html")) {
		add = "59bab51d1294c6d112f6e430"; 
	} else if (url.match("http://personal.natwest.com/personal/mortgages/cashback.html")) {
		add = "59bab51a1294c6d112f6e42c"; 
	} else if (url.match("http://personal.natwest.com/personal/mortgages/first-time-buyers.html")) {
		add = "59bab51a1294c6d112f6e427"; 
	} else if (url.match("http://personal.natwest.com/personal/mortgages/95-percent-mortgages.html")) {
		add = "59bab51a1294c6d112f6e428";
	} else if ((url.match("https://personal.natwest.com/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-yes.html")) || (url.match("https://personal.natwest.com/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-yesless.html")) ) {
		add = "59bab51a1294c6d112f6e42d";
	} else if ((url.match("https://personal.natwest.com/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-nomatch.html")) || (url.match("https://personal.natwest.com/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-unavailable.html")) || (url.match("https://personal.natwest.com/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-no.html")) ) {
		add = "59bab51a1294c6d112f6e42e"; 
	} else if (url.match("https://personal.natwest.com/personal/mortgages/secure/mortgage-agreement-in-principle.html")) {
		add = "59bab51d1294c6d112f6e433"; 
	} else if (url.match("http://personal.natwest.com/personal/mortgages/moving-home.html")) {
		add = "59bab51a1294c6d112f6e42a"; 
	} else if (url.match("https://personal.natwest.com/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-maybe-all.html")) {
		add = "59bab51a1294c6d112f6e42f";
	} else if (url.match("http://personal.natwest.com/personal/mortgages/remortgage-to-natwest.html")) {
		add = "59bab51a1294c6d112f6e429";
	} else if ((url.match("http://personal.rbs.co.uk/personal/mortgages/m/a/rbs-btl-mortgages.html")) || (url.match("http://personal.rbs.co.uk/personal/mortgages/buy-to-let.html")) ){
		add = "59bab51d1294c6d112f6e439"; 
	} else if ((url.match("https://personal.rbs.co.uk/personal/mortgages/secure/buy-to-let-mortgages-agreement-in-principle/aipresult-yes.html")) || (url.match("https://personal.rbs.co.uk/personal/mortgages/secure/buy-to-let-mortgages-agreement-in-principle.html")) || (url.match("https://personal.rbs.co.uk/personal/mortgages/buy-to-let-mortgage-aip.html")) ) {
		add = "59bab51d1294c6d112f6e43f";
	} else if ((url.match("http://personal.rbs.co.uk/personal/mortgages/mortgages-ddl-res.html")) || (url.match("http://personal.rbs.co.uk/personal/mortgages.html")) ) {
		add = "59bab51d1294c6d112f6e434"; 
	} else if (url.match("https://personal.rbs.co.uk/personal/mortgages/secure/itlresult.html")) {
		add = "59bab51d1294c6d112f6e43a"; 
	} else if (url.match("http://personal.rbs.co.uk/personal/mortgages/first-time-buyers.html")) {
		add = "59bab51d1294c6d112f6e438"; 
	} else if ((url.match("http://personal.rbs.co.uk/personal/mortgages/95-percent-mortgages.html")) || (url.match("http://personal.rbs.co.uk/personal/mortgages/help-to-buy.html"))) {
		add = "59bab51d1294c6d112f6e435"; 
	} else if (url.match("https://personal.rbs.co.uk/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-yes.html")) {
		add = "59bab51d1294c6d112f6e43c"; 
	} else if ((url.match("https://personal.rbs.co.uk/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-nomatch.html")) || (url.match("https://personal.rbs.co.uk/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-no.html")) ) {
		add = "59bab51d1294c6d112f6e43e"; 
	} else if (url.match("https://personal.rbs.co.uk/personal/mortgages/secure/mortgage-agreement-in-principle.html")) {
		add = "59bab51d1294c6d112f6e440"; 
	} else if ((url.match("http://personal.rbs.co.uk/personal/mortgages/pre-apply-information.html")) || (url.match("http://personal.rbs.co.uk/personal/mortgages/online-mortgage-application.html"))){
		add = "59bab51d1294c6d112f6e437"; 
	} else if (url.match("https://personal.rbs.co.uk/personal/mortgages/secure/mortgage-agreement-in-principle/aipresult-yesless.html")) {
		add = "59bab51d1294c6d112f6e43d"; 
	} else if (url.match("http://personal.rbs.co.uk/personal/mortgages/remortgage-to-rbs.html")) {
		add = "59bab51d1294c6d112f6e436"; 
	}		
	
    if (add) {
        _satellite.getVar('sc_triggerAvocet');
        triggerAvocet(add);
    }
} catch (e1) {
    console.log("###Exception###" + e1)
}

});
