/** @jsx React.DOM */
var React = require('react');

React.renderComponent(
        <h1>Hello, world!</h1>,
        document.getElementById("app")
      );

/** @jsx React.DOM */

var React = require('react'),
	Forecast = require('./component/forecast')

$(function () {
    React.renderComponent(<Forecast/>, $("#app")[0]);
});