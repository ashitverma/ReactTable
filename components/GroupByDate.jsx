"use strict";

var React   = require('react');
var ReactDOM = require('react-dom');

var GroupByInventory = require('./GroupByInventory.jsx');

var GroupByDate = React.createClass({
	
	groupByInventory: function(collection, attribute) {
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
	        groupedArray.push({"inventory":values[j], "subgroup":result[j]});
	    }
	    return groupedArray;
	},
	
	render() {
		var groupedByDate = this.groupByInventory(this.props.leads, "inventory");
		
		return( 
				<td>
						{
				        	groupedByDate.map(function(groupedByDateDataRow, key, val){
							return(
									<tr className={"shiftTr"+groupedByDateDataRow.inventory}>
				       					 <td>{groupedByDateDataRow.inventory}</td>
				       					 <GroupByInventory key = {key} leads = {groupedByDateDataRow.subgroup} className={groupedByDateDataRow.inventory}/>
				       				</tr>
								);
							})
					      }
					
			   </td>
		)
	}
});

module.exports = GroupByDate ;