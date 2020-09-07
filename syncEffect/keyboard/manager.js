class Manager {
	constructor() {
		this.devices = [];
		this.effects = [];
		this.outputs = [];	// device -> [r,g,b] array
		this.selects = [];	// (device, effect) -> bool array

		this.region = {
			x1       : 0,
			y1       : 0,
			x2       : 0,
			y2       : 0,
			x        : 0,
			y        : 0,
			width    : 0,
			height   : 0,
			diameter : 0,
		};

		this.effect_index = -1;
		this.effect = null;
		this.device_index = -1;
		this.device = null;

		this.show_effect = null;
	}
	reset() {
		this.outputs = new Array(this.devices.length);
		for (let i=0; i<this.devices.length; ++i) {
			this.outputs[i] = new Array(this.devices[i].lights.length);
			for (let j=0; j<this.outputs[i].length; ++j) {
				this.outputs[i][j] = [0,0,0];
			}
		}

		this.selects = new Array(this.devices.length);
		for (let i=0; i<this.devices.length; ++i) {
			this.selects[i] = new Array(this.effects.length);
			for (let j=0; j<this.effects.length; ++j) {
				this.selects[i][j] = new Array(this.devices[i].lights.length).fill(true);
			}
		}
	}
	updateRegion() {
		var x1 = 1e9, y1 = 1e9, x2 = -1e9, y2 = -1e9;
		if (this.devices.length == 0) x1 = y1 = x2 = y2 = 0;
		for (let device of this.devices) {
			x1 = Math.min(x1, device.region.x);
			y1 = Math.min(y1, device.region.y);
			x2 = Math.max(x2, device.region.x + device.region.width);
			y2 = Math.max(y2, device.region.y + device.region.height);
		}
		this.region.x1 = x1;
		this.region.y1 = y1;
		this.region.x2 = x2;
		this.region.y2 = y2;
		this.region.cx = (x1 + x2) / 2;
		this.region.cy = (y1 + y2) / 2;
		this.region.width  = x2 - x1;
		this.region.height = y2 - y1;
		this.region.diameter = Math.hypot(x2 - x1, y2 - y1);
	}
	setBlendMode(blend_mode) {
		for (let i=0; i<this.effects.length; ++i) {
			this.effects[i].blend_mode = blend_mode;
			this.effects[i].gui.updateDisplay();
		}
	}
	setOpacity(opacity) {
		for (let i=0; i<this.effects.length; ++i) {
			this.effects[i].opacity = opacity;
			this.effects[i].gui.updateDisplay();
		}
	}
	pushDevice(device) {
		this.devices.push(device);

		var outputs = new Array(device.lights.length);
		for (let j=0; j<outputs.length; ++j)
			outputs[j] = [0,0,0];
		this.outputs.push(outputs);

		var selects = new Array(this.effects.length);
		for (let j=0; j<selects.length; ++j)
			selects[j] = new Array(device.lights.length).fill(true);
		this.selects.push(selects);

		// screen position
		var x = this.devices.length * 20;
		var y = this.devices.length * 20;
		device.move(x, y);
		this.updateRegion();
	}
	popDevice() {
		this.devices.pop();
		this.outputs.pop();
		this.selects.pop();
		this.updateRegion();
	}
	pushEffect(effect) {
		effect.init(this.region);
		this.effects.push(effect);
		for (let i=0; i<this.devices.length; ++i) {
			var selects = new Array(this.devices[i].lights.length).fill(true);
			this.selects[i].push(selects);
		}

		if (this.effect_index < 0)
			this.effect = this.effects[this.effect_index = 0];

		effect.initGUI();
		this.showGUI();
	}
	popEffect() {
		if (this.effects.length == 0) return;

		this.effects.pop();
		for (let i=0; i<this.devices.length; ++i)
			this.selects[i].pop();

		if (this.effect_index >= this.effects.length)
			this.effect_index--;
		if (this.effect_index < 0)
			this.effect = null;
		else
			this.effect = this.effects[this.effect_index];

		this.showGUI();
	}
	insertEffect(effect) {
		if (this.effect_index < 0) this.effect_index = 0;

		effect.init(this.region);
		this.effects.splice(this.effect_index, 0, effect);
		for (let i=0; i<this.devices.length; ++i) {
			var selects = new Array(this.devices[i].lights.length).fill(true);
			this.selects[i].splice(this.effect_index, 0, selects);
		}

		this.effect = this.effects[this.effect_index];

		effect.initGUI();
		this.showGUI();
	}
	insertAfterEffect(effect) {
        console.log(effect);
		this.effect_index++;
		this.insertEffect(effect);
	}
	deleteEffect() {
		if (this.effects.length == 0) return;

		this.effects.splice(this.effect_index, 1);
		for (let i=0; i<this.devices.length; ++i)
			this.selects[i].splice(this.effect_index, 1);

		if (this.effect_index >= this.effects.length)
			this.effect_index--;
		if (this.effect_index < 0)
			this.effect = null;
		else
			this.effect = this.effects[this.effect_index];

		this.showGUI();
	}
	selectEffect(index) {
		if (!(index >= 0 && index < this.effects.length)) return;
		this.effect = this.effects[this.effect_index = index];
		this.showGUI();
	}
	changeEffect(diff) {
		var index = this.effect_index + diff;
		if (index < 0) index = 0;
		if (index >= this.effects.length - 1) index = this.effects.length - 1;
		if (index == this.effect_index) return;
		this.effect = this.effects[this.effect_index = index];
		this.showGUI();
	}
//	initGUI() {
//		for (let effect of this.effects) effect.initGUI();
//		this.effect_index = 0;
//		this.effect = this.effects[this.effect_index];
//		this.showGUI();
//	}
	showGUI() {
		if (this.show_effect)
			this.show_effect.gui.hide();
		if (this.effect_index < 0) {
			this.show_effect = null;
		} else {
			this.show_effect = this.effect;
			this.show_effect.gui.show();
		}
		this.showEffectNames();
	}
	showEffectNames() {
		if (this.effects.length == 0) {
			output.innerHTML = '請新增燈效';
			return;
		}
		var str = '';
		for (let i=0; i<this.effects.length; ++i) {
			var effect = this.effects[i];
			if (effect == this.effect) str += '<strong><span style="color: gold;">'
			if (effect.hide) str += '<span style="opacity: 0.3;">';
			str += ' 🠊 ';
			str += effect.description;
//			str += ' ' + effect.constructor.name;
			if (effect.hide) str += '</span>';
			if (effect == this.effect) str += '</span></strong>'
		}
		output.innerHTML = str;
	}
	setLocation(x, y) {
		if (!this.effect) return;
		this.effect.setLocation(x, y);
		this.effect.gui.updateDisplay();
	}
	event(device_type, keycode, trigger) {
		for (let i=0; i<this.devices.length; ++i) {
			var device = this.devices[i];
			if (device.type != device_type) continue;
			if (device.type === 'keyboard') {
				var index = device.keycodemap.get(keycode);
				if (index === 'undefined') continue;
			} else if (device.type === 'mouse') {
				var index = device.lights.length - 1;
				if (index < 0) continue;
			}
			device.keyframes[index] = 0;
			device.keydowns[index] = trigger;
		}
	}
	update() {
		for (let effect of this.effects)
			effect.update(this.region, this.devices);

		for (let i=0; i<this.devices.length; ++i) {
			for (let j=0; j<this.devices[i].keyframes.length; ++j) {
				this.devices[i].keyframes[j]++;
				this.devices[i].keyframes[j] %= 1000000; // lcm(effect.cooldown)
			}
		}
	}
	render() {
		for (let i=0; i<this.devices.length; ++i)
			for (let j=0; j<this.outputs[i].length; ++j)
				assigncolor(this.outputs[i][j], [0,0,0]);

		if (!this.effect) return;
		if (this.effect.hide) return;
		for (let i=0; i<this.devices.length; ++i) {
			var device = this.devices[i];
			var outputs = this.outputs[i];
			var selects = this.selects[i][this.effect_index];
			this.effect.render(device.lights, this.region, outputs, selects);
		}
	}
	draw(ctx) {
		for (let i=0; i<this.devices.length; ++i) {
			var device = this.devices[i];
			var outputs = this.outputs[i];
			var selects = this.selects[i][this.effect_index];
			device.draw(ctx, outputs, selects);
		}
		if (this.effect) this.effect.draw(ctx);
	}
	renderAll() {
		for (let i=0; i<this.devices.length; ++i)
			for (let j=0; j<this.outputs[i].length; ++j)
				assigncolor(this.outputs[i][j], [0,0,0]);

		for (let i=0; i<this.devices.length; ++i) {
			var device = this.devices[i];
			var outputs = this.outputs[i];
			for (let j=0; j<this.effects.length; ++j) {
				var effect = this.effects[j];
				var selects = this.selects[i][j];
				if (effect.hide) continue;
				effect.render(device.lights, this.region, outputs, selects);
			}
		}
	}
	drawAll(ctx) {
		for (let i=0; i<this.devices.length; ++i) {
			var device = this.devices[i];
			var outputs = this.outputs[i];
			device.draw(ctx, outputs, null);
		}
	}
	selectAll(bool) {
		if (!(this.effect_index >= 0 && this.effect_index < this.effects.length)) return;
		for (let i=0; i<this.devices.length; ++i) {
			var select = this.selects[i][this.effect_index];
			for (let j=0; j<select.length; ++j)
				select[j] = bool;
		}
	}
	selectXY(x, y, bool) {
		if (!(this.effect_index >= 0 && this.effect_index < this.effects.length)) return;
		for (let i=0; i<this.devices.length; ++i) {
			var select = this.selects[i][this.effect_index];
			for (let j=0; j<select.length; ++j) {
				var light = this.devices[i].lights[j];
				if (x >= light.x1 && x <= light.x2
				 && y >= light.y1 && y <= light.y2)
					select[j] = bool;
			}
		}
	}
	selectSegment(x1, y1, x2, y2, bool) {
		if (!(this.effect_index >= 0 && this.effect_index < this.effects.length)) return;
		for (let i=0; i<this.devices.length; ++i) {
			var select = this.selects[i][this.effect_index];
			for (let j=0; j<select.length; ++j) {
				var light = this.devices[i].lights[j];
				if (x1 < light.x1 && x2 < light.x1) continue;
				if (x1 > light.x2 && x2 > light.x2) continue;
				if (y1 < light.y1 && y2 < light.y1) continue;
				if (y1 > light.y2 && y2 > light.y2) continue;
				var dx = x2 - x1;
				var dy = y2 - y1;
				var c = x1 * y2 - x2 * y1;
				var c1 = light.x1 * dy - light.y1 * dx - c;
				var c2 = light.x1 * dy - light.y2 * dx - c;
				var c3 = light.x2 * dy - light.y1 * dx - c;
				var c4 = light.x2 * dy - light.y2 * dx - c;
				if (c1 > 0 && c2 > 0 && c3 > 0 && c4 > 0) continue;
				if (c1 < 0 && c2 < 0 && c3 < 0 && c4 < 0) continue;
				select[j] = bool;
			}
		}
	}
	selectRegion(x1, y1, x2, y2, bool) {
		if (!(this.effect_index >= 0 && this.effect_index < this.effects.length)) return;
		if (x1 > x2) [x1, x2] = [x2, x1];
		if (y1 > y2) [y1, y2] = [y2, y1];
		for (let i=0; i<this.devices.length; ++i) {
			var select = this.selects[i][this.effect_index];
			for (let j=0; j<select.length; ++j) {
				var light = this.devices[i].lights[j];
				if (!(light.x2 <= x1 || light.x1 >= x2
				   || light.y2 <= y1 || light.y1 >= y2))
					select[j] = bool;
			}
		}
	}
	holdDevice(x, y) {
		this.device_index = -1;
		this.device = null;
		for (let i=this.devices.length-1; i>=0; --i) {
			var position = this.devices[i].position;
			if (x >= position.x && x <= position.x + position.width
			 && y >= position.y && y <= position.y + position.height) {
				this.device_index = i;
				this.device = this.devices[i];
				return;
			}
		}
	}
	dragDevice(dx, dy) {
		if (!this.device) return;
		this.device.move(dx, dy);
		this.updateRegion();
	}
	dropDevice(x, y) {
		this.device_index = -1;
		this.device = null;
		this.updateRegion();
	}
	createColor() {
		if (!this.effect) return;
		this.effect.createColor();
	}
	removeColor() {
		if (!this.effect) return;
		this.effect.removeColor();
	}
	toggleScale() {
		if (!this.effect) return;
		this.effect.toggleScale();
	}
}
