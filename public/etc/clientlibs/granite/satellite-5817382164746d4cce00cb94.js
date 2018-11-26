_satellite.pushAsyncScript(function(event, target, $variables){
  (function(win,doc){

var scriptElement, scrSrc;

if (typeof (win.ClickTaleCreateDOMElement) != "function")
{
	win.ClickTaleCreateDOMElement = function(tagName)
	{
		if (doc.createElementNS)
		{
			return doc.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return doc.createElement(tagName);
	}
}

win.WRInitTime=(new Date()).getTime();

scriptElement = ClickTaleCreateDOMElement('script');
scriptElement.type = "text/javascript";

scrSrc = doc.location.protocol=='https:'? 'https://cdnssl.clicktale.net/':	'http://cdn.clicktale.net/';

scrSrc += 'www36/ptc/9dfe501b-f717-49cb-af08-e868adcb62c7.js';

scriptElement.src = scrSrc;

doc.getElementsByTagName('body')[0].appendChild(scriptElement);
})(window,document);
});
