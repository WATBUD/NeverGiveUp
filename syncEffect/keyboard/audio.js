class AudioCapture {
	constructor() {
		var that = this;
		this.audio = document.getElementById('audio');
		this.audio.onplay  = function() {that.onplay = true;};
		this.audio.onpause = function() {that.onplay = false;};
		this.audio.onfocus = function() {that.audioContext.resume();};

		this.audioContext = new AudioContext();
		this.analyser = this.audioContext.createAnalyser();
		this.analyser.fftSize = 1024;
		this.data     = new Uint8Array(this.analyser.frequencyBinCount);
		this.source   = this.audioContext.createMediaElementSource(this.audio);
		this.source.connect(this.analyser);
		this.source.connect(this.audioContext.destination);

		this.log_magnitudes = new Float32Array(this.analyser.frequencyBinCount).fill(1);
		this.queue = new Array(0);

		this.onsetting = false;
		this.onset = false;
	}
	update() {
		this.analyser.getByteFrequencyData(this.data);
		this.onsetDetection();
	}
	onsetDetection() {
		var new_sum = 0;
		for (let i=0; i<this.data.length; ++i) {
			var new_log_magnitude = Math.log(1 + this.data[i]);
			new_sum += Math.max(0, new_log_magnitude - this.log_magnitudes[i]);
			this.log_magnitudes[i] = new_log_magnitude;
		}

		this.queue.push(new_sum);
		if (this.queue.length < 8) return;	// 8-points smoothing
		var old_sum = this.queue.shift();

		if (new_sum > old_sum && new_sum > this.data.length * 0.1) {
			if (this.onsetting) this.onset = false;
			else this.onsetting = this.onset = true;
		} else {
			this.onsetting = this.onset = false;
		}
	}
	load(file) {
		if (file && file.type.match('audio.*|video.*')) {
			var that = this;
			var reader = new FileReader;
			reader.onload = function(e) {
				that.audio.src = e.target.result;
				that.audio.focus();
				that.audio.play();
			}
			reader.readAsDataURL(file);
		}
	}
};

var audioCapture = new AudioCapture();

document.getElementById('input').onchange = function(e) {
	audioCapture.load(e.target.files[0]);
};
document.body.ondrop = function(e) {
	e.stopPropagation();
	e.preventDefault();
	audioCapture.load(e.dataTransfer.files[0]);
};
document.body.ondragover = function(e) {
	e.stopPropagation();
	e.preventDefault();
	e.dataTransfer.dropEffect = 'move';
};
