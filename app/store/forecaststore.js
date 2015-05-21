var dispatcher = require("../dispatcher"),
	emitter = require("../emitter");

var ForecastStore = function() {

	this.forecasts = [];

	dispatcher.register(function(payload) {
		switch (payload.type) {
			case "all-forecasts":
				this.all();
				break;
		}
	}.bind(this));

	this.all = function() {
		$.get("/forecasts").then(function (data) {
			this.forecasts = JSON.parse(data);
			notify.call(this);
		}.bind(this));
	}.bind(this);

	function notify() {
		emitter.emit("forecasts-changed", this.forecasts);
	}

}

module.exports = new ForecastStore();