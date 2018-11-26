_satellite.pushAsyncScript(function(event, target, $variables){
  var prefixList = {
    'adobe': {
        'analytics_1': 's_',
        'analytics_2': 's2_gpv_p8',
        'analytics_3': 'gpv_',
        'analytics_4': '_sdsat',
        'analytics_5': 'AMCV_',
        'analytics_6': 'AAMC_',
        'analytics_7': 'AMCVS_',
        'analytics_8': 'demdex'
    },
    'audienceManager': {
        'aam': 'aam_'
    },
    'target' : {
        'mbox' : 'mbox'
    },
    'userzoom': {
        'uz': 'UZ_'
    }
};

function removeCookie(name) {
    if (name == 'mboxDisable') {return}
    try {
        document.cookie = name + '=expire; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=' + location.hostname + ';';
        if (location.hostname.split('.').length > 2) {
            document.cookie = name + '=expire; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=.' + location.hostname.split('.').splice(1).join('.') + ';';
        }
    } catch (e) {}
}

var cookieList = document.cookie.split(';');

if (_satellite.readCookie('CCFext') == "N") {
    try{
        for (var i = 0; i < cookieList.length; i++) {
            for (var key in prefixList) {
                for (var nestKey in prefixList[key]) {
                    if (cookieList[i].indexOf(prefixList[key][nestKey]) > -1) {
                        removeCookie(cookieList[i].split('=')[0].trim());
                    }
                }
            }
        }
    } catch(e){}
  try{
  	
    /* Opt out of Adobe Marketing Cloud advertising solutions for web-based ads */
    //new Image().src = '//pixel999.everesttech.net/999/optout?';

    /* Opt out of Adobe Marketing Cloud measurement and personalization solutions for websites */
    //new Image().src = '//www.rbs.omtrdc.net/optout.html?optout=1&confirm_change=1';

    /* block target */
    //new Image().src = '//rbs.tt.omtrdc.net/optout';
    _satellite.setCookie("mboxDisable", 1);
    
  
  }catch(err){}
} else if(_satellite.readCookie('CCFext') == "Y") {
    _satellite.removeCookie('mboxDisable');
}
});
