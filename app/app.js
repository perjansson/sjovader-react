/** @jsx React.DOM */
var React = require('react');

React.renderComponent(
        <h1>Hello, world!</h1>,
        document.getElementById("app")
      );

/** @jsx React.DOM */

var React = require('react'),
	Forecasts = require('./component/forecasts')

$(function () {
    React.renderComponent(
    	<div>
	    	<div className="jumbotron">
			  <h1>Sjöväderprognosen</h1>
			  <p>Från <a href="http://www.smhi.se/vadret/hav-och-kust/sjovader" target="_blank">SMHI</a></p>
			</div>
	    	<Forecasts/>
    	</div>, 
    	$("#app")[0]);
});