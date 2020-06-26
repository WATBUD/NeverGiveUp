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
 var md_x, md_y;
//  var  m_down_x, m_down_y, dx, dy ndx, ndy,m_move_x, m_move_y,;
function addMoveMouseEventListener(targetName = "") {
 
    document.getElementById(targetName).onmousedown = function (e) {
        move_div = document.getElementById(targetName);
        isDown = true;

        // //獲取div座標
        // dx = move_div.offsetLeft;//200
        // dy = move_div.offsetTop;//150
        //獲取滑鼠與div偏移量
        md_x = event.pageX- move_div.offsetLeft;
        md_y = event.pageY - move_div.offsetTop;
        var txtShow = document.getElementById('txtShow');
        move_divcs = document.getElementsByClassName("move_div");
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
            "move_div.offsetTop": move_div.offsetTop,
            "md_x": md_x,
            "md_y": md_y,
            //   "document.style.":document.style,      
        };
        txtShow.innerHTML = "onmousedown:<BR>";
        txtShow.innerText += JSON.stringify(obj).replace(/,/g, ',\n').replace(/{/g, '{\n').replace(/}/g, '\n}');
    }
    document.onmousemove = function (e) {
        move_div = document.getElementById(targetName);
        // dx = move_div.offsetLeft;//實時更新div的座標
        // dy = move_div.offsetTop;//滑鼠按下時移動才觸發
        if (isDown) {
            var ndx = event.pageX - md_x;//獲取新div滑鼠實時座標滑鼠與div=>X偏移量
            var ndy = event.pageY - md_y;//獲取新div滑鼠實時座標滑鼠與div=>X偏移量
            move_div.style.marginLeft = ndx + "px";//把新div座標值賦給div物件
            move_div.style.marginTop = ndy + "px";//把新div座標值賦給div物件
        };
    }
    document.onmouseup = function (e) {
        isDown = false;
    }
}




