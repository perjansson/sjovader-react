/** @jsx React.DOM */

require("./store/forecaststore");

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