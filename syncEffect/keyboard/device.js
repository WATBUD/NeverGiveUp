class Device {
	constructor(device_type, coordinates, keycodes, image) {
		this.type = device_type;
		if (!keycodes) keycodes = [];

		var x1 = 1e9, y1 = 1e9, x2 = -1e9, y2 = -1e9;
		for (let i=0; i<coordinates.length; ++i)
			for (let j=0; j<4; ++j) {
				x1 = Math.min(x1, coordinates[i][j].x);//[0]:左上角 [1]:右上角 [2]:右下角 [3]:左下角
				y1 = Math.min(y1, coordinates[i][j].y);
				x2 = Math.max(x2, coordinates[i][j].x);
				y2 = Math.max(y2, coordinates[i][j].y);
			}
        console.log('Device',x1,y1,x2,y2);
		this.position = {
			x      : -14,
			y      : -24,
			width  : image.width,
			height : image.height,
		}

		this.region = {
			x      : 0,
			y      : 0,
			width  : x2 - x1,
			height : y2 - y1,
		};

		this.lights = new Array(coordinates.length);
		for (let i=0; i<coordinates.length; ++i) {
			var light = {};
			light.x1 = coordinates[i][0].x - x1;
			light.y1 = coordinates[i][0].y - y1;
			light.x2 = coordinates[i][2].x - x1;
			light.y2 = coordinates[i][2].y - y1;
			light.x  = (light.x1 + light.x2) / 2;
			light.y  = (light.y1 + light.y2) / 2;
//			light.code = (i < keycodes.length) ? keycodes[i] : '';
			this.lights[i] = light;
		}

		// given name, return light index
		var array = new Array(keycodes.length);
		for (let i=0; i<keycodes.length; ++i)
			array[i] = [keycodes[i], i];
		this.keycodemap = new Map(array);

		this.keyframes = new Array(keycodes.length).fill(0);
		this.keydowns  = new Array(keycodes.length).fill(false);

		this.image = image;
	}
	move(dx, dy) {
		this.position.x += dx;
		this.position.y += dy;
		this.region.x += dx;
		this.region.y += dy;
		for (let light of this.lights) {
			light.x1 += dx;
			light.y1 += dy;
			light.x2 += dx;
			light.y2 += dy;
			light.x  += dx;
			light.y  += dy;
		}
	}
	draw(ctx, colors, selects) {
		ctx.roundRect(this.position.x, this.position.y, this.position.width, this.position.height, 16);
		ctx.fillStyle = 'rgb(32,32,32)';
		ctx.fill();

		if (this.image)
			ctx.drawImage(this.image, this.position.x, this.position.y);

		for (let i=0; i<this.lights.length; ++i) {
			var light = this.lights[i];
			ctx.roundRect(light.x1, light.y1, light.x2 - light.x1, light.y2 - light.y1, 6);
			if (colors && colors[i]) {
				ctx.fillStyle = 'rgba(' + colors[i][0] + ',' + colors[i][1] + ',' + colors[i][2] + ', 0.6)';
				ctx.fill();
			}
			if (selects && selects[i]) {
				ctx.lineWidth = 1;
				ctx.strokeStyle = 'rgba(204,172,0,1.0)';
				ctx.stroke();
			}
		}
	}
}
