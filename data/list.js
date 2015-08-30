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
				html += '<li><a data-id="' + loop + '1" href="" class="l-' + loop + '"><spam class="circle">B</spam>item 0' + loop + '0</a></li>';
				html += '<li><a data-id="' + loop + '2" href="" class="l-' + loop + '"><spam class="circle">B</spam>item 05' + loop + '</a></li>';
				html += '<li><a data-id="' + loop + '3" href="" class="l-' + loop + '"><spam class="circle">C</spam>item 14' + loop + '</a></li>';
				html += '<li><a data-id="' + loop + '4" href="" class="l-' + loop + '"><spam class="circle">I</spam>item 0' + loop + '0</a></li>';
				html += '<li><a data-id="' + loop + '5" href="" class="l-' + loop + '"><spam class="circle">R</spam>item 05' + loop + '</a></li>';
				html += '<li><a data-id="' + loop + '6" href="" class="l-' + loop + '"><spam class="circle">N</spam>item 14' + loop + '</a></li>';
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

		createList(2, 6);
		html = '<div id="list" class="bt-js-tree bt-tree">' + html + '</div>';
		return html;

	}());
