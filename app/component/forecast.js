/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

	render: function () {
		return <li className="list-group-item pointer">{this.props.value}</li>;
	}

});