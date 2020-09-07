function hsl2rgb(h, s, l) {
	if (!isFinite(h)) h = 0;
	if (!isFinite(s)) s = 0;
	if (!isFinite(l)) l = 0;

	h /= 60;
	if (h < 0) h = 6 - (-h % 6);
	h %= 6;

	s = Math.max(0, Math.min(1, s / 100));
	l = Math.max(0, Math.min(1, l / 100));

	var c = (1 - Math.abs((2 * l) - 1)) * s;
	var x = c * (1 - Math.abs((h % 2) - 1));

	if      (h < 1) {r = c; g = x; b = 0;}
	else if (h < 2) {r = x; g = c; b = 0;}
	else if (h < 3) {r = 0; g = c; b = x;}
	else if (h < 4) {r = 0; g = x; b = c;}
	else if (h < 5) {r = x; g = 0; b = c;}
	else            {r = c; g = 0; b = x;}

	var m = l - c / 2;
	var r = Math.round((r + m) * 255);
	var g = Math.round((g + m) * 255);
	var b = Math.round((b + m) * 255);
	return [r, g, b];
}

function assigncolor(color, color1) {
	for (let i=0; i<3; ++i)
		color[i] = color1[i];
}

function addcolor(color, color1) {
	for (let i=0; i<3; ++i)
		color[i] += color1[i];
}

function mulcolor(color, ratio) {
	for (let i=0; i<3; ++i)
		color[i] *= ratio;
}

function interpolatecolor(color, color1, color2, ratio) {
	for (let i=0; i<3; ++i)
		color[i] = color1[i] * (1 - ratio) + color2[i] * ratio;
}

function blendcolor(color, color1, opacity, blend_mode) {
	if (blend_mode === 'add') {
		for (let i=0; i<3; ++i)
			color[i] += color1[i] * opacity;
	} else if (blend_mode === 'maximum') {
		for (let i=0; i<3; ++i)
			color[i] = Math.max(color[i], color1[i] * opacity);
	} else if (blend_mode === 'overlap') {
//		interpolatecolor(color, color, color1, opacity);
		for (let i=0; i<3; ++i)
			color[i] = color[i] * (1 - opacity) + color1[i] * opacity;
	} else if (blend_mode === 'overwrite') {
		for (let i=0; i<3; ++i)
			color[i] = color1[i] * opacity;
	}
}
