"use strict";

var React   = require('react');
var ReactDOM = require('react-dom');

var StudentList = React.createClass({
	render() {
		return(<div>
					<div className = "row">
						<h4> Student Name</h4>
			   		</div>
			   		<div className = "row">
			   			<label> JOhn Doe</label>
			   		</div>
			   </div>)
	}
});

module.exports = StudentList ;