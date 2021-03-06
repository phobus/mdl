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
				html += '<li><a data-id="' + level + '1" href="" class="l-' + loop + '">' + randText(5) + '</a></li>';
				html += '<li><a data-id="' + level + '2" href="" class="l-' + loop + '">' + randText(6) + '</a></li>';
				html += '<li><a data-id="' + level + '3" href="" class="l-' + loop + '">' + randText(4) + '</a></li>';
			} else {
				for (var i = 0; i < num; i++) {
					html += '<li>';
					html += '<a href="" data-id="' + i + '" class="l-' + loop + '">' + arrow + randText(3) + '</a>';
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
