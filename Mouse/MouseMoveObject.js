  /*
    * 分析：
    * 獲取滑鼠實時移動的座標；m_move_x,m_move_y
    * 滑鼠按下時的座標；m_down_x,m_down_y
    * div的座標；dx,dy
    * 滑鼠按下時，滑鼠與div的偏移量；md_x,md_y
    * div的新座標；ndx,ndy
    */
   var isDown = false;//記錄滑鼠狀態
   var move_div;//要操作的div物件
   var m_move_x, m_move_y, m_down_x, m_down_y, dx, dy, md_x, md_y, ndx, ndy;
   document.getElementById("move_div").onmousedown = function (e) {
       move_div = document.getElementById("move_div");
       isDown = true;
       //獲取滑鼠按下時座標
       m_down_x = event.pageX;
       m_down_y = event.pageY;
       //獲取div座標
       dx = move_div.offsetLeft;//200
       dy = move_div.offsetTop;//150
       //獲取滑鼠與div偏移量
       md_x = m_down_x - dx;
       md_y = m_down_y - dy;
       var txtShow = document.getElementById('txtShow');
       move_divcs= document.getElementsByClassName("move_div");
       console.log(event);
       console.log(move_div.attributes);
       // console.log("div_dir");
       // console.dir(move_div);
       console.log("class_dir");
       console.dir(move_divcs[0]);
       var obj = {
           'event.pageX': event.pageX,
           "event.pageY": event.pageY,
           "move_div.offsetLeft": move_div.offsetLeft,
           "move_div.offsetTop":  move_div.offsetTop,
           "md_x":md_x,
           "md_y":md_y,
           //   "document.style.":document.style,      
       };
       txtShow.innerHTML="onmousedown:<BR>";
       txtShow.innerText+= JSON.stringify(obj).replace(/,/g, ',\n').replace(/{/g, '{\n').replace(/}/g, '\n}');

   }

   document.onmousemove = function (e) {
       move_div = document.getElementById("move_div");
       //實時更新div的座標
       dx = move_div.offsetLeft;
       dy = move_div.offsetTop;
       //獲取滑鼠移動實時座標
       m_move_x = event.pageX;
       m_move_y = event.pageY;
       //滑鼠按下時移動才觸發
       if (isDown) {
           //獲取新div座標，滑鼠實時座標 - 滑鼠與div的偏移量
           ndx = m_move_x - md_x;
           ndy = m_move_y - md_y;
           //把新div座標值賦給div物件
           move_div.style.left = ndx + "px";
           move_div.style.top = ndy + "px";
       };
   }
   document.onmouseup = function (e) {
       isDown = false;
   }




