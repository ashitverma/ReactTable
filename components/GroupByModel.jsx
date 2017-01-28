"use strict";

var React   = require('react');
var ReactDOM = require('react-dom');


var GroupByModel = React.createClass({
	
	groupByCity: function(collection, attribute) {
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
	        groupedArray.push({"City":values[j], "subgroup":result[j]});
	    }
	    return groupedArray;
	},
	
	render() {
		var groupedByCityData = this.groupByCity(this.props.leads, "City");
		return( 
				<td style={{left:"13%",position:"relative"}}><table className="table table-striped" style={{left:"9%",position:"relative"}}>
					<tbody>
						{
				        	groupedByCityData.map(function(groupedByCityDataRow, key, val){
				        		var totalLeads = groupedByCityDataRow.subgroup;
							return(
									<tr>
				       					 <td style={{left: "4%",position:"relative"}}>{groupedByCityDataRow.City}</td>
				       					 <td style={{left:"22%",position:"relative"}}>{totalLeads[0].total_leads}</td>
				       					 <td style={{left:"80%",position:"relative"}}>{totalLeads[0].total_sales}</td>
				       					 <td style={{left:"139%",position:"relative"}}>{totalLeads[0].total_cash}</td>
				       					 <td style={{left:"177%",position:"relative"}}>{totalLeads[0].discount}</td>
				       				</tr>
								);
							})
					    }
					</tbody>
					</table>
			   </td>
		)
	}
});

module.exports = GroupByModel ;