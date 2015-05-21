/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

	render: function () {
		return <li className="list-group-item pointer"><b>{this.props.value.areaName}</b>: {this.props.value.forecast} <i>({this.props.value.time})</i></li>;
	}

});