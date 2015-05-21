/** @jsx React.DOM */
var React = require('react'),
	_ = require("underscore"),
	Forecast = require('./forecast')

module.exports = React.createClass({

	getInitialState: function() {
		return {
			forecasts: ["F1", "F2", "F3", "F4"]
		}
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