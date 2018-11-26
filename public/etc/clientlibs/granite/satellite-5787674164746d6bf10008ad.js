try {
  _satellite.notify('############# HEAER 1');
  function webchat(b, a, k, g, l, c, t) {
    try {
      _satellite.notify('############# webChat 1');
      /*			window.lpGlob = {
				unit : b,
				Buttons : t,
				PageExclude : a,
				group : k,
				Section : g,
				Product : l,
				language : c,
				SliderDeviceType : 'desktop' 
			}*/
      /* check if the div exists and populate the variable in lp glod */
      var locVar = false;
      var abcd = $('.displaysidebar-webchat') [0];
      if (abcd) {
        _satellite.notify('########################### :: dsiplay :: ' + abcd.style.display);
        locVar = true;
      } else locVar = false;
      /*check the value that determines the display/hide logic and pass it here */
      var locJMselectionMob = true;
      var locJMselectionDesk = true;
      var arrMob = _satellite.getVar('le2_lp_arrayOfMobURLs');
      var arrDesk = _satellite.getVar('le2_lp_arrayOfDeskURLs');
      var found = false;
      for (var i = 0; i < arrMob.length && !found; i++) {
        if (document.location.href.match(arrMob[i])) {
          found = true;
          locJMselectionMob = false;
          locJMselectionDesk = true;
        }
      }
      if(!found)
      for (var i = 0; i < arrDesk.length && !found; i++) {
        if (document.location.href.match(arrDesk[i])) {
          found = true;
          locJMselectionMob = false;
          locJMselectionDesk = false;
        }
      }
      window.lpGlob = {
        unit: b,
        Buttons: t,
        //PageExclude : a,
        //group : k,
        //Section : g,
        Product: l,
        //language : c,
        displaysidebar: locVar,
        displaySlideOutOnMobile: locJMselectionMob,
        displaySlideOutOnDesktop: locJMselectionDesk,
        //SliderDeviceType : 'desktop' 
      }
      var lpDivID;
      var SlideoutFound = false;
      var divsAdded = [
      ];
      var divFound;
      for (i = 0; i < window.lpGlob.Buttons.length; i++) {
        switch (window.lpGlob.Buttons[i].Name) {
          case 'chat-marketing-textlink-':
            lpDivID = 'lpButtonDiv-marketing-textlink';
            break;
          case 'chat-marketing-':
            lpDivID = 'lpButtonDiv-marketing';
            break;
        }
        divFound = false;
        for (j = 0; j < divsAdded.length; j++) {
          if (divsAdded[j].divID == lpDivID) {
            divsAdded[j].divCount++;
            lpDivID += '-' + divsAdded[j].divCount.toString();
            divFound = true;
          }
      }
      if (!divFound) {
        divsAdded.push({
          divID: lpDivID,
          divCount: 1
        })
    }
    $('#' + window.lpGlob.Buttons[i].DivName).html('<div id="' + lpDivID + '"></div>');
  }

_satellite.notify('############# webChat ENd');
} catch (f) {
}
}
function webchat_slideout(a) {
try {
//window.lpGlob.SliderDeviceType = a
} catch (err) {
}
}/*
	function Global_webchat() {
		try {
			var i;
			var j;
			var lpDivID;
			var SlideoutFound = false;
			var divsAdded = [
			];
			var divFound;
			window.lpTag = window.lpTag || {};
			lpTag.vars = lpTag.vars || [];
			lpTag.dbs = lpTag.dbs || [];
			var check = window.lpGlob.PageExclude;
			if (check === '') {
				window.lpGlob.PageExclude = 'true'
			} else {
				if (check === 'true') {
					window.lpGlob.PageExclude = ''
				}
			}
			var arrLPvars = [{
					scope : 'page',
					name : 'unit',
					value : window.lpGlob.unit
				}, {
					scope : 'session',
					name : 'language',
					value : window.lpGlob.language
				}, {
					scope : 'page',
					name : 'PageExclude',
					value : window.lpGlob.PageExclude
				}, {
					scope : 'page',
					name : 'Group',
					value : window.lpGlob.group
				}, {
					scope : 'page',
					name : 'Section',
					value : window.lpGlob.Section
				}, {
					scope : 'page',
					name : 'webChatFallOut_Loans',
					value : _satellite.getVar('webChatFallOut_Loans')
				}, {
					scope : 'page',
					name : 'Product',
					value : window.lpGlob.Product
				}
			];
			lpTag.vars.push(arrLPvars);
			for (i = 0; i < window.lpGlob.Buttons.length; i++) {
				switch (window.lpGlob.Buttons[i].Name) {
				case 'chat-marketing-slideout-':
					lpDivID = 'lpButtonDiv-marketing-slideout';
					break;
				case 'chat-marketing-textlink-':
					lpDivID = 'lpButtonDiv-marketing-textlink';
					break;
				case 'chat-marketing-':
					lpDivID = 'lpButtonDiv-marketing';
					break;
				}
				divFound = false;
				for (j = 0; j < divsAdded.length; j++) {
					if (divsAdded[j].divID == lpDivID) {
						divsAdded[j].divCount++;
						lpDivID += '-' + divsAdded[j].divCount.toString();
						divFound = true;
					}
				}
				if (!divFound) {
					divsAdded.push({
						divID : lpDivID,
						divCount : 1
					})
				}
				$('#' + window.lpGlob.Buttons[i].DivName).html('<div id="' + lpDivID + '"></div>');
				if (window.lpGlob.Buttons[i].Name.indexOf('slideout-') >  - 1 && !SlideoutFound) {
					SlideoutFound = true;
					Global_webchat_slideout(lpDivID, window.lpGlob.SliderDeviceType)
				}
			}
		} catch (err) {}
	}
	*/
/*
	function Global_webchat_slideout(c, a) {
		try {
			var f = '#' + c;
			var b = navigator.userAgent.toLowerCase();
			var d = b.match(/(ipod|ipad)/);
			$(f).remove();
			if (a == 'desktop') {
				if (d) {
					$('div.main').after('<div class="displaysidebar-webchat-mobile mobile-chat"><div id="' + c + '"></div><div class="displaysidebar-webchat__fed"></div></div>');
					$('.displaysidebar-webchat-mobile').on('click', function () {
						var g = $('.displaysidebar-webchat-mobile').css('right');
						if (g == '-206px') {
							$('.displaysidebar-webchat-mobile').stop(true, false).animate({
								right : '0px'
							});
							$('.displaysidebar-webchat__fed').css('width', '0%')
							window.setTimeout(function () {
								$('.displaysidebar-webchat').stop(true, false).animate({
									right : '-206px'
								});
								$('.displaysidebar-webchat__fed').css('width', '30%')
							}, 5000);
						} else {
							$('.displaysidebar-webchat-mobile').stop(true, false).animate({
								right : '-206px'
							});
							$('.displaysidebar-webchat__fed').css('width', '30%')
						}
					})
				} else {
					$('div.main').after('<div id="' + c + '" class="displaysidebar-webchat"></div>');
					$(f).mouseover(f, function (g) {
						$(f).stop(true, false).animate({
							right : '0px'
						})
					});
					$(f).mouseout(f, function (g) {
						$(f).stop(true, false).animate({
							right : '-206px'
						})
					})
				}
			} else {
				$('div.main').after('<div class="displaysidebar-webchat mobile-chat"><div id="' + c + '"></div><div class="displaysidebar-webchat__fed"></div></div>');
				$('.displaysidebar-webchat').on('click', function () {
					var g = $('.displaysidebar-webchat').css('right');
					if (g == '-206px') {
						$('.displaysidebar-webchat').stop(true, false).animate({
							right : '0px'
						});
						$('.displaysidebar-webchat__fed').css('width', '0%');
						window.setTimeout(function () {
							$('.displaysidebar-webchat').stop(true, false).animate({
								right : '-206px'
							});
							$('.displaysidebar-webchat__fed').css('width', '30%')
						}, 5000);
						return false
					} else {
						$('.displaysidebar-webchat').stop(true, false).animate({
							right : '-206px'
						});
						$('.displaysidebar-webchat__fed').css('width', '30%')
					}
				})
			}
		} catch (f) {}
	} */

} catch (err) {
}

