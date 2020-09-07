一、加法模式：乘上透明度，直接累加。
output = 0;
output += effect1 * opacity1;
output += effect2 * opacity2;
.....

二、覆蓋模式：後面蓋掉前面，根據透明度。
output = 0;
output = output * (1-opacity1) + effect1 * opacity1;
output = output * (1-opacity2) + effect2 * opacity2;
......

三、每個燈效都做了去背：
一個燈效之中，沒有著色的地方，設定為完全透明。

四、單一燈效之中，多個動畫效果：
波紋：總是採用加法模式。（快速敲擊多個按鍵，新的效果和舊的效果直接相加）
呼吸、下雨：總是採用覆蓋模式。（快速敲擊多個按鍵，新的效果覆蓋舊的效果。）
