'use strict';






document.addEventListener('keydown', function logKey(e) {

    if (e.code != "F12") {
      event.preventDefault();
      //event.stopPropagation();
    }
    //console.log(e);
    //targetValue.code=e.code;
    //totalKeydownArr.push(String(e.code));
    //console.log('keydown', JSON.stringify(AllFunctionMapping));

    console.log('keydown', e.keyCode, e.code);

  });
  document.addEventListener('mouseup', function logKey222(e) {
    console.log('mouseup', e);


  });
  document.addEventListener('keyup', function logKey222(e) {
    var targetValue = AllFunctionMapping.find((x) => x.code == String(e.code));
    totalKeydownArr.push(String(targetValue[switchShowType]));
    show_LogUIText();
    console.log('keyup', e);


  });
  