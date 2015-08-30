( function() {
		var html = '';
		function createTable(rows) {
			html += '<ul>';
			for (var i = 0; i < rows; i++) {
				html += '<li><a><spam class="circle">' + randNum() + '</spam>' + randText(6) + '</a></li>';
			}
			html += '</ul>';
		}

		createTable(10);
		html = '<div id="table" class="bt-js-tree bt-tree">' + html + '</div>';
		return html;
	}());
