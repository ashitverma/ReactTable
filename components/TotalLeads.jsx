"use strict";

var React   = require('react');
var ReactDOM = require('react-dom');

var TotalLeads = React.createClass({
	
	groupByModel: function(collection, attribute) {
		var i = 0, val, index, values = [], result = [];
        var groupedArray = []
	    for (; i < collection.length; i++) {
	        val = collection[i][attribute];
	        index = values.indexOf(val);
	        if (index > -1)
	            result[index].push(collection[i]);
	        else {
	            values.push(val);
	            result.push([collection[i]]);
	        }
	    }
	    for (var j= 0; j < result.length; j++) {
	        groupedArray.push({"model":values[j], "subgroup":result[j]});
	    }
	    return groupedArray;
	},
	
	render() {
		return( 
				<span> my name
			   <span>
		)
	}
});

module.exports = TotalLeads ;