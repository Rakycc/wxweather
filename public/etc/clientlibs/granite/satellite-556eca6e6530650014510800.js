_satellite.pushBlockingScript(function(event, target, $variables){
  try {
  function b3() {
    var C1 = document.querySelectorAll('h3[class^="accordion__head"]');
    var C2 = C1[this.myVar];
    var C3 = C2.textContent.replace(/(\r\n|\n|\r)/gm, '').replace(/\s{2,}/g, ' ').trim();
    var C4 = document.title.split('|');
    var C5 = C4[0].replace('natwest', '').replace('rbs', '');
    s3.linkName = C5 + ' : ' + C3;
    C3 = s3.linkName;
    s3.tl(true, 'o', C3);
  }
if(!((_satellite.getVar('sc_pageName_original').match("INFO:NW>TOOL>EMAILTOOL")) ||
  (_satellite.getVar('sc_pageName_original').match("INFO:RBS>TOOL>EMAILTOOL"))))
{  
  var b1 = document.querySelectorAll('div[class^="accordion__item accordion__item"]');
  for (var index = 0; index < b1.length; ++index) {
    var b2 = b1[index];
    b2.myVar = index;
    b2.addEventListener('click', b3);
  }
}
} catch (err) {
}
});
