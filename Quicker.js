class Quicker {
	/**
	 * @param {CanvasRenderingContext2D}
	**/
	constructor (rr, config) {
		if (!(rr instanceof CanvasRenderingContext2D)) {
			throw new TypeError("Incorrect argument.");
		}

		if (config == null || config.constructor != Object) {
			config = {};
		} else {
			config.pointSize = config.pointSize || 2;
		}

		this._config = config;
		this._rr = rr;

		this.drawAxes();
	}

	cleanDrawn () {
		this._rr.clearRect(0, 0, this._rr.canvas.width, this._rr.canvas.height);
	}

	drawAxes () {
		this.cleanDrawn();

		const width = this._rr.canvas.width;
		const height = this._rr.canvas.height;

		rr.beginPath();
		rr.moveTo(width / 2, 0);
		rr.lineTo(width / 2, height + width / 2);
		rr.moveTo(0, height / 2);
		rr.lineTo(width, height / 2);
		rr.stroke();
	}

	drawPoint (point) {
		this.drawAxes();
		
		this._rr.beginPath();

		point[0] = point[0] + this._rr.canvas.width / 2;

		point[1] = point[1] * -1;
		point[1] = point[1] + this._rr.canvas.height / 2;

		this._rr.arc(point[0], point[1], this._config.pointSize, 0, 2 * Math.PI, true);
		this._rr.fill();
		this._rr.stroke();
	}
}