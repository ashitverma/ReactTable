"use strict";

var React   = require('react');
var ReactDOM = require('react-dom');

//var leads = require('./leads.json');

var GroupByDate = require('./GroupByDate.jsx');
import leads from '../data/leads.json'

var TestApp = React.createClass({
	
	groupByDate: function(collection, attribute) {

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
	        groupedArray.push({"date":values[j], "subgroup":result[j]});
	    }
	    console.log("hiiiii",groupedArray)
	    return groupedArray;
	},
	
	render() {
		console.log("asass",leads)
		var groupedByDateData = this.groupByDate(leads, "date");

		return( <div className = "landingPage">
					<table className="table table-striped">
					    <thead>
					      <tr>
					        <th>Date</th>
					        <th style={{float:"left"}}>Inventory</th>
					        <th style={{float: "left",left:"10%",position:"relative"}}>Model</th>
					        <th style={{float: "left",left:"20%",position:"relative"}}>City</th>
					        <th style={{float: "left",left:"34%",position:"relative"}}>Total Leads</th>
					        <th style={{float: "left",left:"40%",position:"relative"}}>Total Sales</th>
					        <th style={{float: "left",left:"50%",position:"relative"}}>Total Cash</th>
					        <th style={{float: "left",left:"60%",position:"relative"}}>Average Discount</th>
					      </tr>
					    </thead>
					    <tbody>
					    	{
					        	groupedByDateData.map(function(groupedByDateDataRow, key, val){
								return(
										<tr className="shiftDate">
					       					 <td>{groupedByDateDataRow.date}</td>
					       					 <GroupByDate key = {key} leads = {groupedByDateDataRow.subgroup} />
					       				</tr>
									);
								})
					        }
					    </tbody>
					 </table>
				</div>)
	}
});

module.exports = TestApp ;