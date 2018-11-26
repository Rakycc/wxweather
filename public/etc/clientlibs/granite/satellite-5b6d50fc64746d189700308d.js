_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	_uzactfeed = window._uzactfeed || [];
	_uzactfeed.push(['_setID', 'CD51C7A5A789E81180D9005056A26EF2']);
	_uzactfeed.push(['_setSID', '65EB761CAF86E81180D8005056A2E9D6']);
	_uzactfeed.push(['_start']);
	(function() {
		var uz = document.createElement('script');
		uz.type = 'text/javascript';
		uz.async = true;
		uz.charset = 'utf-8';
		uz.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn4.userzoom.com/feedback/js/uz_feed.js?cuid=FC742306F6D9E311BEDA0022196C4538';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(uz, s);
	})();
} catch(e) {
	console.error("Failed to load Userzoom tag. " + e);
}
});
