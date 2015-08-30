( function() {
		var arrow = '<i class="material-icons">keyboard_arrow_right</i>';
		var html = '';
		function createList(level, num, loop) {
			if (!loop) {
				loop = 0;
			}
			loop++;
			html += '<ul>';
			if (level == 0) {
				html += '<li><a data-id="' + level + '1" href="" class="l-' + loop + '">item 0' + loop + '0</a></li>';
				html += '<li><a data-id="' + level + '2" href="" class="l-' + loop + '">item 05' + loop + '</a></li>';
				html += '<li><a data-id="' + level + '3" href="" class="l-' + loop + '">item 14' + loop + '</a></li>';
			} else {
				for (var i = 0; i < num; i++) {
					html += '<li>';
					html += '<a href="" data-id="' + i + '" class="l-' + loop + '">' + arrow + 'level  ' + loop + '</a>';
					createList(level - 1, num, loop);
					html += '</li>';
				}
			}
			html += '</ul>';
		}

		createList(3, 10);
		html = '<div id="nav" class="bt-js-tree bt-tree bt-tree-buttons">' + html + '</div>';
		return html;

	}());
