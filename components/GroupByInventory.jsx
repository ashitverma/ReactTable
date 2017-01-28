"use strict";

var React   = require('react');
var ReactDOM = require('react-dom');

var GroupByModel = require('./GroupByModel.jsx');

var GroupByInventory = React.createClass({
	
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
		var groupedByModelData = this.groupByModel(this.props.leads, "model");
		
		return( 
	<td className={"shift"+this.props.className+" table table-striped"} style={{left:"28%",position:"relative"}}>
					
						{
				        	groupedByModelData.map(function(groupedByModelDataRow, key, val){
							return(
							<tr className={"shiftModal"+groupedByModelDataRow.model}>
				       					 <td>{groupedByModelDataRow.model}</td>
				       					  <GroupByModel key = {key} leads = {groupedByModelDataRow.subgroup}/>
				       				</tr>
								);
							})
					    }
					
			   </td>
		)
	}
});

module.exports = GroupByInventory ;