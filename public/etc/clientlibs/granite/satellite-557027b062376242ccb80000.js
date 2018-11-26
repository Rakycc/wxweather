_satellite.pushBlockingScript(function(event, target, $variables){
  try {
    var GetElByCN = function (e) {
      if (document.getElementsByClassName) return document.getElementsByClassName(e);
      e = e.replace(/ *$/, '');
      if (document.querySelectorAll) return document.querySelectorAll((' ' + e).replace(/ +/g, '.'));
      e = e.replace(/^ */, '');
      var t = e.split(/ +/),
      n = t.length;
      var r = document.getElementsByTagName('*'),
      i = r.length;
      var s = [
      ];
      var o,
      u,
      a;
      for (o = 0; o < i; o++) {
        a = true;
        for (u = n; u--; ) if (!RegExp(' ' + t[u] + ' ').test(' ' + r[o].className + ' ')) a = false;
        if (a) s.push(r[o])
      }
      return s
    };
    var pn = _satellite.getVar('sc_pageName_original');
    if (pn) {
      if (typeof tmParam != 'undefined') {
        var theChilds = GetElByCN('overlay-link');
        setTimeout(function () {
          for (var i = 0; i < theChilds.length; i++) {
            var currLi = theChilds[i];
            currLi.onmouseover = function () {
              var text = this.innerHTML;
              text = text.replace(/(<([^>]+)>)/g, '').replace(/&nbsp;/g, ' ');
              text = text.replace(/(\r\n|\n|\r)/gm, '');
              text = text.trim();
              window.tmParam.sc_linktitle = text
            };
            currLi.onclick = function () {
              try {
                if (s3) var temps = s3;
                var str = 'LightBox : ' + window.tmParam.sc_linktitle;
                temps.linkTrackVars = 'events,pageName,prop11,prop2,prop24,prop4,prop5,prop6,prop7,prop8,eVar1,eVar29,eVar3,eVar32,eVar47,eVar5,eVar50,eVar51,eVar55,eVar58';
                temps.linkTrackEvents = 'event41';
                temps.events = 'event41';
                temps.eVar32 = str;
                temps.tl(this, 'o', str)
              } catch (st) {
              }
            }
          }
        }, 900);
        var socialChilds = GetElByCN('social-bar__link');
        if (socialChilds) setTimeout(function () {
          for (var i = 0; i < socialChilds.length; i++) {
            var soLi = socialChilds[i];
            soLi.onclick = function () {
              try {
                if (s3) var temps = s3;
                var str = 'AEM - Social Bar Links : ' + this.title;
                temps.linkTrackVars = 'events,pageName,prop11,prop2,prop24,prop4,prop5,prop6,prop7,prop8,eVar1,eVar29,eVar3,eVar32,eVar47,eVar5,eVar50,eVar51,eVar55,eVar58';
                temps.linkTrackEvents = 'event41';
                temps.events = 'event41';
                temps.eVar32 = str;
                temps.tl(this, 'o', str)
              } catch (st) {
              }
            }
          }
        }, 900)
      }
      if (pn.match('WIP>CAMPAIGNS>MAKE-A-NEW-YEARS-RESOLUTION>INDEX')) {
        var els2 = GetElByCN('overlay-link');
        setTimeout(function () {
          try {
            if (s3) var temps = s3;
            for (var i = 0, l = els2.length; i < l; i++) {
              var el = els2[i];
              el.onclick = function () {
                this.textstr = this.innerHTML;
                this.textstr = this.textstr.replace(/(<([^>]+)>)/g, '').replace(/&nbsp;/g, ' ');
                temps.linkTrackVars = 'None';
                temps.linkTrackEvents = 'None';
                temps.tl(this, 'o', s3.pageName + ' : ' + this.textstr)
              }
            }
          } catch (st) {
          }
        }, 900);
        var els = document.getElementsByTagName('a');
        setTimeout(function () {
          try {
            if (s3) var temps = s3;
            for (var i = 0, l = els.length; i < l; i++) {
              var el = els[i];
              if (el.href === 'https://applink.natwest.com/PrivateWebpage') el.onclick = function () {
                temps.linkTrackVars = 'None';
                temps.linkTrackEvents = 'None';
                temps.tl(this, 'o', s3.pageName + ' : Get the Mobile App')
              };
              if (el.href === 'http://applink.lateralgroup.co.uk/PrivateWebpage') el.onclick = function () {
                temps.linkTrackVars = 'None';
                temps.linkTrackEvents = 'None';
                temps.tl(this, 'o', s3.pageName + ' : Get the Mobile App')
              }
            }
          } catch (st) {
          }
        }, 900)
      }
    }
  } catch (a) {
  }
});
