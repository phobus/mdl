( function() {
		var html = '';
		function createTable(rows) {
			html += '<ul>';
			for (var i = 0; i < rows; i++) {
				html += '<li><a><spam class="circle">' + randNum() + '</spam>' + randText(6) + '</a></li>';
			}
			html += '</ul>';
		}

		createTable(5);
		html = '<div id="table" class="bt-js-tree bt-tree mdl-shadow--2dp">' + html + '</div>';
		return html;
	}());
