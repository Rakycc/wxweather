_satellite.pushBlockingScript(function(event, target, $variables){
  var sc_le2_dataReceiver = function(e) {
    try {
        _satellite.notify("Data received from Analytics proxy, full data object \n" + JSON.stringify(e));
        s3.eVar42 = e.skill;
      	s3.eVar45 = e.agentId;
      	s3.eVar43 = e.conversationId;
      	s3.eVar46 = e.monitoringSessionId;
      	s3.eVar167 = e.campaignId;
      
      	s3.events = "";
		if (e.state === 'chatting') {
			if(sessionStorage.getItem('sc_chatting') === null){
				s3.eVar44 = _satellite.getVar('sc_pageName');
				s3.events = e.conversationId ? "event71:"+e.conversationId : "event71";
				var brand = "The Brand"; //From your CRM
				var pageHierarchy = "Category -> Subcategory -> Page";

				_satellite.notify('%c     Chatting state events      ', 'background: #222; color: #bada55;');

				_satellite.notify(
						"Chat Skill:" + e.skill + "\n",
						"Brand: " + brand + "\n",
						"Chat Start Page: " + window.location.href + "\n",
						"Page Hierarchy: " + pageHierarchy + "\n",
						"ConversationId (real-time session ID): " + e.conversationId + "\n",
						"Agent: " + e.agentName + " ID: " + e.agentId
				);
				s3.tl();
				s3.events = "event1";
				sessionStorage.setItem('sc_chatting',"sc_chatting");
			}
		}
        if (e.state === 'interactive') {
			if(sessionStorage.getItem('sc_interactive') === null){
				s3.events = e.conversationId ? "event52:"+e.conversationId : "event52";
				_satellite.notify('%c     Interactive state event     ', 'background: #222; color: #bada55;');
				s3.tl();
				s3.events = "event1";
				sessionStorage.setItem('sc_interactive',"sc_interactive");
			}
		}
        if (e.state === 'ended') {
			if(sessionStorage.getItem('sc_ended') === null){
				s3.events = e.conversationId ? "event50:"+e.conversationId : "event50";
				_satellite.notify('%c     Ended state event   ', 'background: #222; color: #bada55;');
				s3.tl();
				s3.events = "event1";
				sessionStorage.setItem('sc_ended',"sc_ended");
			}
			sessionStorage.removeItem('sc_chatting');
			sessionStorage.removeItem('sc_interactive');
			sessionStorage.removeItem('sc_ended');
		}
      //s3.clearVars();
    }
    catch(err){
        _satellite.notify("dataReceived" + err);
    }
};
 
window.sc_le2_dataReceiver = sc_le2_dataReceiver;
});
