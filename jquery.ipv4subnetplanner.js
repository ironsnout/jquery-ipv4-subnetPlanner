


	//MAIN FUNCTION
	$.fn.ipv4subnetplanner = function(){
		
		var fields_table =  "<table id=\"ipv4subnetplannerFields\">" +
							"	<tr>"+
							"		<td>"+
							"			<input id=\"f1\" name=\"f1\" type=\"text\" maxlength=3>"+
							"		</td>"+
							"		<td>.</td>"+
							"		<td>"+
							"			<input id=\"f2\" name=\"f2\" type=\"text\" maxlength=3>"+
							"		</td>"+
							"		<td>.</td>"+
							"		<td>"+
							"			<input id=\"f3\" name=\"f3\" type=\"text\" maxlength=3>"+
							"		</td>"+
							"		<td>.</td>"+
							"		<td>"+
							"			<input id=\"f4\" name=\"f4\" type=\"text\" maxlength=3>"+
							"		</td>"+
							"		<td>/</td>"+
							"		<td>"+
							"			<input id=\"netmask\" name=\"netmask\" type=\"text\" placeholder=\"netmask (CIDR notation)\">"+
							"		</td>"+
							"	</tr>"+
							"</table>"+
							"<input id=\"ipcalc_calc\" name=\"ipcalc_calc\" class=\"ipcalc_submit\" type=\"button\" value=\"Calculate\">";
		
		
		var error_box = "<div id=\"ipv4subnetplannerErroroBox\"></div>";
		
		$(this).append("<div id=\"ipv4subnetplannerMainContainer\"></div>");
		$("#ipv4subnetplannerMainContainer").append(fields_table);
		$("#ipv4subnetplannerMainContainer").append(error_box);
	};	
