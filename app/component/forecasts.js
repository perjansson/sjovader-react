/** @jsx React.DOM */
var React = require('react'),
	_ = require("underscore"),

	Forecast = require("./forecast"),

	dispatcher = require("../dispatcher"),
	emitter = require("../emitter");

module.exports = React.createClass({

	getInitialState: function() {
		return {
			forecasts: []
		}
	},

	componentWillMount: function() {
		emitter.on("forecasts-changed", function(forecasts) {
			this.setState({ forecasts: forecasts});
		}.bind(this));
	},

	componentDidMount: function() {
		dispatcher.dispatch({ type: "all-forecasts"});
	},

	componentWillUnmount: function () {
		emitter.off("all-forecasts")
	},

	renderForecasts: function() {
		return _.map(this.state.forecasts, function(forecast) {
			return <Forecast value={forecast}/>;
		});
	},

	render: function() {
		return <div>
			<h4>Prognoser...</h4>
			<ul className="list-group">
				{this.renderForecasts()}
			</ul>
		</div>;
	}
});