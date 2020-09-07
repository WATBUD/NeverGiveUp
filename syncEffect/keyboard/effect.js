

class Effect {
	constructor() {
		// interact block
		this.audio = 'random';
		this.autoplay = 'null';
		this.interact = 'interact';
		this.x = 0;
		this.y = 0;
		this.interact_x = 0;	// local
		this.interact_y = 0;	// local
		this.interact_mode = 'press';
		// animation block
		this.during = 300;
		this.delay = 0;
		this.cooldown = 100;
		this.fadein = 0;
		this.fadeout = 0;
		this.animations = [];	// local
		this.queue_size = 100;	// local
        this.frame = 0;			// local
		// layer block
		this.hide = false;
		this.opacity = 1.0;
		this.blend_mode = 'overlap';
		this.local_blend_mode = 'overlap';
		// color block
		this.gradient = false;
		this.use_scales = false;
		this.defaultcolors = [
			hsl2rgb( 45, 60, 60),
			hsl2rgb(135, 60, 60),
			hsl2rgb(225, 60, 60),
			hsl2rgb(315, 60, 60),
			[192,192,192]
		];
		this.defaultscales = [
			0, 0.2, 0.4, 0.6, 0.8
		];
		this.colors = new Array(this.defaultcolors.length);
		for (let i=0; i<this.defaultcolors.length; ++i) {
			this.colors[i] = [0,0,0];
			assigncolor(this.colors[i], this.defaultcolors[i]);
		}
		this.scales = this.defaultscales.slice(0);
		this.color_number = this.defaultcolors.length;	// local
	}
	initGUI() {
		this.gui = new dat.GUI({hideable: false});
		this.gui.hide();

		var that = this;
		var folder = this.gui.addFolder('interact');
		folder.open();
		var location_mode = ['null','interact','random','center','predefine'];
		folder.add(this, "audio", location_mode)
		.title('音訊：無、互動地點、隨機地點、指定地點、正中央');
		folder.add(this, "autoplay", location_mode)
		.title('自動：無、互動地點、隨機地點、指定地點、正中央');
		folder.add(this, "interact", location_mode)
		.title('互動：無、互動地點、隨機地點、指定地點、正中央');
		folder.add(this, "x").min(0).max(1024).step(1)
		.title('指定地點X座標　範圍:正負整數　單位:像素');
		folder.add(this, "y").min(0).max(768).step(1)
		.title('指定地點Y座標　範圍:正負整數　單位:像素');
		folder.add(this, "interact_mode", ['down','press'])
		.title('互動模式：按下播放、按住播放');

		var folder = this.gui.addFolder('animation');
		folder.open();
		folder.add(this, "during").min(0).max(1000).step(10)
		.title('播放長度　範圍:[0,1000]　單位:幀');
		folder.add(this, "delay").min(0).max(1000).step(10)
		.title('延遲時間（首次CD時間）　範圍:[0,1000]　單位:幀');
		folder.add(this, "cooldown").min(0).max(1000).step(10)
		.title('間距時間（每次CD時間）　範圍:[0,1000]　單位:幀');
		folder.add(this, "fadein").min(0).max(1).step(0.1)
		.title('淡入時間比例　範圍:[0,1]　單位:比例');
		folder.add(this, "fadeout").min(0).max(1).step(0.1)
		.title('淡出時間比例　範圍:[0,1]　單位:比例');

		var folder = this.gui.addFolder('layer');
		folder.open();
		folder.add(this, "hide").onChange(function(){manager.showEffectNames();})
		.title('隱藏');
		folder.add(this, "opacity").min(0).max(1).step(0.1)
		.title('不透明程度　範圍:[0,1]　單位:比例');
		folder.add(this, "blend_mode", ['add','maximum','overlap','overwrite'])
		.title('混色模式：相加、最大值、重疊、覆寫');
		folder.add(this, "local_blend_mode", ['add','maximum','overlap','overwrite'])
		.title('同層互動效果混色模式：相加、最大值、重疊、覆寫');

		var folder = this.gui.addFolder('color');
		folder.open();
		this.folder = folder;
		folder.add(this, "gradient")
		.title('色彩漸層');
		folder.add(this, "use_scales").onChange(function(){that.toggleScale();})
		.title('色彩播放速度編輯器')
		this.guicolors = new Array(this.defaultcolors.length);
		this.guiscales = new Array(this.defaultscales.length);
		for (let i=0; i<this.color_number; ++i) {
			this.guicolors[i] = folder.addColor(this.colors, i, this.colors[i]).name('color ' + (i+1)).title('色彩 範圍:[0,255]');
			if (this.use_scales) this.guiscales[i] = folder.add(this.scales, i, this.scales[i]).name('scale ' + (i+1)).min(0).max(1).step(.1).title('色彩位置　範圍:[0,1)　單位:比例');
		}
	}
	createColor() {
		if (this.color_number >= this.defaultcolors.length) return;
		var i = this.color_number++;
		assigncolor(this.colors[i], this.defaultcolors[i]);
		this.scales[i] = this.defaultscales[i];

		this.guicolors[i] = this.folder.addColor(this.colors, i, this.colors[i]).name('color ' + (i+1)).title('色彩 範圍:[0,255]');
		if (this.use_scales) this.guiscales[i] = this.folder.add(this.scales, i, this.scales[i]).name('scale ' + (i+1)).min(0).max(1).step(.1).title('色彩位置　範圍:[0,1)　單位:比例');
	}
	removeColor() {
		if (this.color_number <= 1) return;
		var i = --this.color_number;

		this.folder.remove(this.guicolors[i]);
		if (this.use_scales) this.folder.remove(this.guiscales[i]);
	}
	toggleScale() {
		if (this.use_scales) {
			for (let i=0; i<this.color_number; ++i)
				this.folder.remove(this.guicolors[i]);
			for (let i=0; i<this.color_number; ++i) {
				this.guicolors[i] = this.folder.addColor(this.colors, i, this.colors[i]).name('color ' + (i+1)).title('色彩 範圍:[0,255]');
				this.guiscales[i] = this.folder.add(this.scales, i, this.scales[i]).name('scale ' + (i+1)).min(0).max(1).step(.1).title('色彩位置　範圍:[0,1)　單位:比例');
			}
		} else {
			for (let i=0; i<this.color_number; ++i)
				this.folder.remove(this.guiscales[i]);
		}
	}
	getColor(result, scale, loop) {
		scale -= Math.floor(scale);	// [0, 1)
		if (!this.use_scales) {
			if (!this.gradient) {
				scale *= this.color_number;
				var index = Math.floor(scale);
				assigncolor(result, this.colors[index]);
			} else {
				if (loop) scale *= this.color_number;
				else      scale *= (this.color_number - 1);
				if (loop) scale -= 0.5;		// align to !gradient
				var index = Math.floor(scale);
				var color1 = this.colors[(index + this.color_number) % this.color_number];
				var color2 = this.colors[(index + 1) % this.color_number];
				var ratio = scale - index;
				interpolatecolor(result, color1, color2, ratio);
			}
		} else {
			var min_index = 0;
			var min_scale = 1.1;
			var max_index = 0;
			var max_scale = 0;
			for (let i=0; i<this.color_number; ++i) {
				if (this.scales[i] >= max_scale)
					max_scale = this.scales[max_index = i];
				if (this.scales[i] < min_scale)
					min_scale = this.scales[min_index = i];
			}

			var lower_index = -1;
			var lower_scale = 0;
			var upper_index = this.color_number;
			var upper_scale = 1;
			for (let i=0; i<this.color_number; ++i)
				if (this.scales[i] <= scale) {
					if (this.scales[i] >= lower_scale)
						lower_scale = this.scales[lower_index = i];
				} else {
					if (this.scales[i] < upper_scale)
						upper_scale = this.scales[upper_index = i];
				}

			if (loop) {
				if (lower_index == -1)
					lower_scale = this.scales[lower_index = max_index] - 1;
				if (upper_index == this.color_number)
					upper_scale = this.scales[upper_index = min_index] + 1;
			} else {
				if (lower_index == -1)
					lower_scale = this.scales[lower_index = min_index];
				if (upper_index == this.color_number)
					upper_scale = this.scales[upper_index = max_index];
			}

			if (!this.gradient) {
				assigncolor(result, this.colors[lower_index]);
			} else {
				if (lower_scale == upper_scale)
					assigncolor(result, this.colors[lower_index]);
				else {
					var color1 = this.colors[lower_index];
					var color2 = this.colors[upper_index];
					var ratio = (scale - lower_scale) / (upper_scale - lower_scale);
					interpolatecolor(result, color1, color2, ratio);
				}
			}
		}
	}
	clearAnimations() {
		this.animations = [];
	}
	initAnimationStatus(interact_type) {
		var status = 'delay';
		if (this.interact_mode === 'press' && interact_type === 'interact') {
			if (this.delay == 0) status = 'hold';
		} else {
			if (this.delay == 0) status = 'play';
			if (this.during == 0) status = 'end';
		}
		return status;
	}
	pushAnimations(interact_type, key, x, y) {
		// empty
	}
	unholdAnimations(interact_type, key) {
		if (this.interact_mode !== 'press') return;
		for (let animation of this.animations)
			if (animation.status === 'hold'
			 && animation.interact_type === interact_type
			 && animation.key === key) {
				animation.status = 'play';
				animation.holdframe = animation.frame;
				animation.frame = 0;
			}
	}
	update(region, devices) {
		this.updateAnimations(region, devices);
		this.interactAnimations(region, devices);
		this.autoplayAnimations(region, devices);
		this.audioAnimations(region, devices);
	}
//		const STATUS_DELAY = 0;
//		const STATUS_HOLD  = 1;
//		const STATUS_PLAY  = 2;
//		const STATUS_END   = 3;
//		const STATUS_MASK  = 3;
//		const STATUS_SHIFT = 0;
//		function assign(status, mask, shift) {
//			animation.status &= ~mask;
//			animation.status |= (status << shift);
//		}
//		function equal(status, mask, shift) {
//			return (animation.status & mask) == (status << shift);
//		}
	updateAnimations(region, devices) {
		while (this.animations.length > this.queue_size)
			this.animations.shift();

		for (let animation of this.animations) {
			animation.frame++;
			if (animation.frame > 10000) {
				animation.status = 'end';
				animation.frame = 0;
			}
			if (animation.status === 'delay'
			 && animation.frame >= this.delay) {
				animation.status = 'play';
				if (this.interact_mode === 'press' && animation.interact_type === 'interact') animation.status = 'hold';
				animation.frame = 0;
			}
			if (animation.status === 'hold') {
				// change status via unholdAnimation()
			}
			if (animation.status === 'play'
			 && animation.frame >= this.during) {
				animation.status = 'end';
				animation.frame = 0;
			}
		}

		while (this.animations.length > 0 && this.animations[0].status === 'end')
			this.animations.shift();
	}
	interactAnimations(region, devices) {
//		if (this.interact === 'null') return;
		for (let i=0; i<devices.length; ++i) {
			for (let index=0; index<devices[i].keyframes.length; ++index) {
				var keyframe = devices[i].keyframes[index];
				var keydown  = devices[i].keydowns[index];
				var light    = devices[i].lights[index];
				if (keydown) {
					this.interact_x = light.x;
					this.interact_y = light.y;
					if (this.interact === 'null') continue;
					if ((this.cooldown == 0 && keyframe == 0)
					 || (this.cooldown > 0 && keyframe % this.cooldown == 0)) {
						var [x, y] = this.getLocation(region, devices, this.interact);
						this.pushAnimations('interact', index, x, y);
					}
				} else {
					if (keyframe == 0) {
						this.unholdAnimations('interact', index);
					}
				}
			}
		}
	}
	audioAnimations(region, devices) {
		if (this.audio === 'null') return;
		if (audioCapture.onset) {
			var index = 0xffff;
			var [x, y] = this.getLocation(region, devices, this.audio);
			this.pushAnimations('audio', index, x, y);
		}
	}
	autoplayAnimations(region, devices) {
		if (this.autoplay === 'null') return;
		if (this.cooldown == 0) return;

		if (this.frame == 0) {
			var index = 0xffff;
			var [x, y] = this.getLocation(region, devices, this.autoplay);
			this.pushAnimations('autoplay', index, x, y);
		}
		this.frame ++;
		this.frame %= this.cooldown;
	}
	getRandomLight(devices) {
		var length = 0;
		for (let i=0; i<devices.length; ++i)
			length += devices[i].lights.length;
		if (length == 0) return [-1, null];

		var index = Math.floor(Math.random() * length);
		var i = 0;
		for (i=0; index >= devices[i].lights.length; ++i)
			index -= devices[i].lights.length;
		return [index, devices[i].lights[index]];
	}
	getLocation(region, devices, location_mode) {
		if (location_mode === 'interact') {
			return [this.interact_x, this.interact_y];
		} else if (location_mode === 'random') {
			var [index, light] = this.getRandomLight(devices);
			return [light.x, light.y];
		} else if (location_mode === 'center') {
			return [region.cx, region.cy];
		} else if (location_mode === 'predefine') {
			return [this.x, this.y];
		} else {
			return [0, 0];
		}
	}
	setLocation(x, y) {
		this.x = x;
		this.y = y;
	}
	init(region) {
		this.x = region.cx;
		this.y = region.cy;
		this.interact_x = region.cx;
		this.interact_y = region.cy;
	}
	draw(ctx) {
		ctx.strokeStyle = "lightgreen";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc(this.x, this.y, 8, 0, 2*Math.PI);
		ctx.stroke();
	}
}

class Band extends Effect {
	constructor() {
		super();
		this.description = "彩帶";
		this.shape = 'linear';
		this.speed = 20;
		this.width = 1000;
		this.angle = 0;
		this.direction = true;
		this.queue_size = 1;	// local
	}
	initGUI() {
		super.initGUI();
		var folder = this.gui.addFolder('effect');
		folder.open();
		folder.add(this, "shape", ['linear','conic','radial'])
		.title('造型');
		folder.add(this, "speed").min(1).max(20).step(1)
		.title('移動速度　範圍:[1,oo]　單位:像素/幀');
		folder.add(this, "width").min(100).max(10000).step(100)
		.title('寬度　範圍:[1,oo]　單位:像素');
		folder.add(this, "angle").min(0).max(360).step(20)
		.title('移動方向（直線造型）　範圍:無限制(360循環)　單位:幅角');
		folder.add(this, "direction")
		.title('移動方向　範圍:朝外/朝內');
	}
	pushAnimations(interact_type, key, x, y) {
		this.animations.push({
			status : this.initAnimationStatus(interact_type),
			interact_type : interact_type,
			key : key,
			frame : 0,
			holdframe : 0,
			x: x,
			y: y,
		});
	}
	render(lights, region, outputs, selects) {
		if (this.animations.length === 0) return;
		var animation = this.animations[0];
		if (animation.status === 'delay') return;
		if (animation.status === 'end') return;

		var theta = 2 * Math.PI * this.angle / 360;
		var dx =  Math.cos(theta);
		var dy = -Math.sin(theta);
		if (Math.abs(dx) < 1e-5) dx = 0;
		if (Math.abs(dy) < 1e-5) dy = 0;

		for (let i=0; i<lights.length; ++i) {
			if (!selects[i]) continue;
			var light = lights[i];

			var d = 0;
			if (this.shape === 'linear') {
				d = light.x * dx + light.y * dy;
			} else if (this.shape === 'conic') {
				d = Math.hypot(light.x - animation.x, light.y - animation.y);
			} else if (this.shape === 'radial') {
				d = Math.atan2(light.y - animation.y, light.x - animation.x);
				d = d / (2 * Math.PI) * 360;
			}

			var frame = animation.holdframe + animation.frame;
			var position = frame * this.speed;
			position *= (this.direction ? +1 : -1);
			var width = (this.shape === 'radial') ? 360 : this.width;
			if (width > 0) position %= width;

			var scale = 0;
			if (width > 0) scale = (d - position) / width;
			var output = [0,0,0];
			this.getColor(output, scale, true);

			if (this.during > 0 && animation.status === 'play') {
				var ratio   = frame / this.during;
				var fadein  = (this.fadein  == 0) ? 1.0 : (ratio / this.fadein);
				var fadeout = (this.fadeout == 0) ? 1.0 : ((1.0 - ratio) / this.fadeout);
				if (this.interact_mode === 'press') fadein = 1.0;
				var opacity = Math.min(1.0, fadein, fadeout);
				mulcolor(output, opacity);
			}
			blendcolor(outputs[i], output, this.opacity, this.blend_mode);
		}
	}
}

class Wave extends Effect {
	constructor() {
		super();
		this.description = "波紋/星光/呼吸/下雨";
		this.shape = 'linear';
		this.speed = 20;
		this.width = 100;
		this.angle = 0;
		this.boundary = false;
		this.soft = false;
		this.ground = false;
		this.concatenate = false;
		this.color_index = 0;	// local
	}
	initGUI() {
		super.initGUI();
		var folder = this.gui.addFolder('effect');
		folder.open();
		folder.add(this, "shape", ['linear','symmetric linear','conic','rain','flame','firework','breath'])
		.title('造型');
		folder.add(this, "speed").min(1).max(20).step(1)
		.title('移動速度　範圍:[1,oo]　單位:像素/幀');
		folder.add(this, "width").min(100).max(10000).step(100)
		.title('寬度　範圍:[1,oo]　單位:像素');
		folder.add(this, "angle").min(0).max(360).step(20)
		.title('移動方向　範圍:無限制(360循環)　單位:幅角');
		folder.add(this, "boundary")
		.title('於邊界啟動');
		folder.add(this, "soft")
		.title('柔邊');
		folder.add(this, "ground")
		.title('背景色彩平均分配');
		folder.add(this, "concatenate")
		.title('色彩連鎖　一次按鍵連續播放每個色彩');
	}
	pushAnimations(interact_type, key, x, y) {
		this.animations.push({
			status : this.initAnimationStatus(interact_type),
			interact_type : interact_type,
			key : key,
			frame : 0,
			holdframe : 0,
			x : x,
			y : y,
			color : this.colors[this.color_index],
		});
		this.color_index = (this.color_index + 1) % this.color_number;
	}
	render(lights, region, outputs, selects) {
		var theta = 2 * Math.PI * this.angle / 360;
		var dx =  Math.cos(theta);
		var dy = -Math.sin(theta);
		if (Math.abs(dx) < 1e-5) dx = 0;
		if (Math.abs(dy) < 1e-5) dy = 0;
		var rx = (dx > 0) ? 0 : region.width;
		var ry = (dy > 0) ? 0 : region.height;

		for (let i=0; i<lights.length; ++i) {
			if (!selects[i]) continue;
			var light = lights[i];
			var output = [0,0,0];
			var has_output = false;
			for (let animation of this.animations) {
				if (animation.status === 'delay') continue;
				if (animation.status === 'end') continue;

				var x = animation.x;
				var y = animation.y;
				if (this.boundary) {
					if (this.shape === 'linear' || this.shape === 'symmetric linear') {
						x = rx;
						y = ry;
					} else {
						var px = (dx == 0) ? 1e5 : (rx - x) / dx;
						var py = (dy == 0) ? 1e5 : (ry - y) / dy;
						if (Math.abs(px) < Math.abs(py)) {x = rx; y += dy * px;}
						else                             {y = ry; x += dx * py;}
					}
				}

				var frame = animation.holdframe + animation.frame;
				var scale = 0, ratio = 0.5;
				if (this.shape === 'linear' || this.shape === 'symmetric linear') {
					var d = (light.x - x) * dx + (light.y - y) * dy;
					if (this.shape === 'symmetric linear') d = Math.abs(d);
					if (d < 0) continue;
					var position = frame * this.speed;
					if (!(d >= position - this.width && d < position)) continue;
					position = d - (position - this.width);
					if (this.width > 0) scale = position / this.width;
					if (this.width > 0) ratio = position / this.width;
				} else if (this.shape === 'conic') {
					var d = Math.hypot(light.x - x, light.y - y);
					var position = frame * this.speed;
					if (!(d >= position - this.width && d < position)) continue;
					position = d - (position - this.width);
					if (this.width > 0) scale = position / this.width;
					if (this.width > 0) ratio = position / this.width;
				} else if (this.shape === 'rain') {
					var position = frame * this.speed;
					x += position * dx;
					y += position * dy;
					if (!(x >= light.x1 && x <= light.x2
					   && y >= light.y1 && y <= light.y2)) continue;
					if (this.during > 0) scale = frame / this.during;
					if (animation.status === 'hold') scale = 0;
					ratio = 0.5;
				} else if (this.shape === 'flame') {
					var position = frame * this.speed;
					x += position * dx;
					y += position * dy;
					var d = Math.hypot(light.x - x, light.y - y);
					if (d > this.width / 2) continue;
					if (this.during > 0) scale = frame / this.during;
					if (animation.status === 'hold') scale = 0;
					if (this.width > 0)  ratio = 0.5 - d / this.width;
				} else if (this.shape === 'firework') {
					var d = Math.hypot(light.x - x, light.y - y);
					if (d > this.width / 2) continue;
					if (this.during > 0) scale = frame / this.during;
					if (animation.status === 'hold') scale = 0;
					if (this.width > 0)  ratio = 0.5 - d / this.width;
				} else if (this.shape === 'breath') {
					if (this.during > 0) scale = frame / this.during;
					if (animation.status === 'hold') scale = 0;
					ratio = 0.5;
				}

				var color = [0,0,0];
				if (this.ground) {
//					var d = (light.x - region.x1) * dx
//					      + (light.y - region.y1) * dy;
//					d -= dmin;
//					var D = Math.abs(region.width  * dx)
//					      + Math.abs(region.height * dy);
					var d = light.x - region.x1;
					var D = region.width;
					var scale = d / D;
					this.getColor(color, scale, false);
				} else if (this.concatenate) {
					this.getColor(color, scale, false);
				} else {
					assigncolor(color, animation.color);
				}
				var soft = 1.0;
				if (this.soft) {
					ratio = 1 - Math.abs(ratio * 2 - 1);	// linear mountain
					ratio = 1 - Math.pow(2, -5 * ratio);	// easeOutExpo
					soft = ratio;
				}
				var fade = 1.0;
				if (this.during > 0 && animation.status === 'play') {
					var ratio   = animation.frame / this.during;
					var fadein  = (this.fadein  == 0) ? 1.0 : (ratio / this.fadein);
					var fadeout = (this.fadeout == 0) ? 1.0 : ((1.0 - ratio) / this.fadeout);
					if (this.interact_mode === 'press') fadein = 1.0;
					fade = Math.min(1.0, fadein, fadeout);
				}
				var opacity = soft * fade;
				blendcolor(output, color, opacity, this.local_blend_mode);
				has_output = true;
			}
			if (has_output)
				blendcolor(outputs[i], output, this.opacity, this.blend_mode);
		}
	}
}

class Fire extends Effect {
	constructor() {
		super();
		this.description = "火焰";
		this.diffuse = 0.1;
		this.fire = 0.5;
		this.boundary = true;
	}
	initGUI() {
		super.initGUI();
		var folder = this.gui.addFolder('effect');
		folder.open();
		folder.add(this, "diffuse").min(0).max(1).step(0.1)
		.title('傳遞速度　範圍:[0,1]　單位:比例');
		folder.add(this, "fire").min(0).max(1).step(0.1)
		.title('興旺程度　範圍:[0,1]　單位:比例');
		folder.add(this, "boundary")
		.title('於邊界啟動');
	}
	init(region) {
		super.init(region);
		this.bitmap = new Bitmap(50, region);
		this.array = this.bitmap.array;
		this.X = this.bitmap.X;
		this.Y = this.bitmap.Y;
	}
	pushAnimations(interact_type, key, x, y) {
		this.animations.push({
			status : this.initAnimationStatus(interact_type),
			interact_type : interact_type,
			key : key,
			frame : 0,
			holdframe : 0,
			x : x,
			y : y,
		});
	}
	render(lights, region, outputs, selects) {
		for (let animation of this.animations) {
			if (animation.status === 'delay') continue;
			if (animation.status === 'end') continue;
			var [inside, x0, y0] = this.bitmap.read(animation.x, animation.y, region, true);
			if (!inside) continue;
			if (this.boundary) y0 = this.Y;
			this.array[y0][x0] += this.fire * (1 + Math.random() / 2);
			if (this.array[y0][x0] > 100) this.array[y0][x0] = 100;
		}

		var one_minus_diffuse = 1 - this.diffuse;
		for (let y=0; y<this.Y; ++y) {
			for (let x=0; x<this.X; ++x) {
				this.array[y][x] *= one_minus_diffuse;
				var value = 0;
				if (x == 0) {
					value += this.array[y+1][x];
					value += this.array[y+1][x+1];
					this.array[y][x] += value / 2 * this.diffuse;
				} else if (x == this.X - 1) {
					value += this.array[y+1][x];
					value += this.array[y+1][x-1];
					this.array[y][x] += value / 2 * this.diffuse;
				} else {
					value += this.array[y+1][x];
					value += this.array[y+1][x-1];
					value += this.array[y+1][x+1];
					this.array[y][x] += value / 3 * this.diffuse;
				}
			}
		}

		for (let x=0; x<this.X; ++x)
			this.array[this.Y][x] *= one_minus_diffuse;

		for (let i=0; i<lights.length; ++i) {
			if (!selects[i]) continue;
			var light = lights[i];
			var output = [255, 32, 2];
			var [inside, x0, y0, scale] = this.bitmap.read(light.x, light.y, region);
			if (!inside) continue;
			mulcolor(output, scale);
//			this.getColor(output, scale, false);
			blendcolor(outputs[i], output, this.opacity, this.blend_mode);
		}
	}
}

class Spectrum extends Effect {
	constructor() {
		super();
		this.description = "音訊";
	}
	initGUI() {
		super.initGUI();
		var folder = this.gui.addFolder('effect');
		folder.open();
	}
	init(region) {
		super.init(region);
		this.bitmap = new Bitmap(50, region);
		this.array = this.bitmap.array;
		this.X = this.bitmap.X;
		this.Y = this.bitmap.Y;
	}
	render(lights, region, outputs, selects) {
		if (!audioCapture.onplay) return;
		var magnitudes = audioCapture.data;

		const shift = 2;
		for (let i=0; i<this.X && i+shift<magnitudes.length; ++i) {
			var scale = Math.max(0, magnitudes[i + shift] - 64) / (256 - 64 - 1);
			var height = Math.floor(scale * this.Y);
			for (let j=0; j<this.Y; ++j)
				this.array[this.Y-1-j][i] = (j < height ? 1 : 0);
		}

		for (let i=0; i<lights.length; ++i) {
			if (!selects[i]) continue;
			var light = lights[i];
			var output = [0,0,0];
			var scale = (light.x - region.x1) / region.width;
			this.getColor(output, scale, false);
			var [inside, x0, y0, scale] = this.bitmap.read(light.x, light.y, region);
			if (!inside) continue;
			if (scale == 0) continue;
			mulcolor(output, scale);
			blendcolor(outputs[i], output, this.opacity, this.blend_mode);
		}
	}
}
var EffectArrayclass=[new Band(),new Wave(),new Fire(),new Spectrum()];
