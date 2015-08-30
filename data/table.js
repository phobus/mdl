( function() {
		function createTable(rows) {
			html += '<table><tbody>';
			for (var i = 0; i < rows; i++) {
				html += '<tr><td><a><spam class="circle">'+ 
				+
				'</spam></a></td></tr>';
			}
			html += '</tbody></table>';
		}

		createTable(10);
		html = '<div id="table" class="bt-js-tree bt-tree">' + html + '</div>';
		return html;
	}());
