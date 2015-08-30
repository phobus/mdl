( function() {
		'use strict';

		var btNavigation = document.getElementById('bt-navigation');
		var btInbox = document.getElementById('bt-inbox');
		var btTable = document.getElementById('bt-table');

		atomic.post('data/nav.js').success(function(data, xhr) {
			var object = new Function("return " + data)();

			btNavigation.innerHTML = object;

			var nodes = btNavigation.querySelectorAll('ul');
			var size = nodes.length;
			for (var x = 1; x < size; x++) {
				nodes[x].classList.add('hidden');
			}

			componentHandler.upgradeDom();
		}).error(function(data) {

		});

		atomic.post('data/list.js').success(function(data, xhr) {
			var object = new Function("return " + data)();

			btInbox.innerHTML = object;

			var nodes = btInbox.querySelectorAll('ul');
			var size = nodes.length;
			for (var x = 1; x < size; x++) {
				nodes[x].classList.add('hidden');
			}
			circleColors();
			componentHandler.upgradeDom();
		}).error(function(data) {

		});

		atomic.post('data/table.js').success(function(data, xhr) {
			var object = new Function("return " + data)();

			btTable.innerHTML = object;
			circleColors();
			componentHandler.upgradeDom();
		}).error(function(data) {

		});
		document.addEventListener('ClickTree', ListClickHandler);
		function ListClickHandler(event) {
			var entidad = '9999',
			    zona,
			    cabecera,
			    oficina;
			if (event.detail.sender == 'nav') {
				switch(event.detail.level) {
				case 2:
					zona = event.detail.id;
					break;
				case 3:
					zona = event.detail.parent.id;
					cabecera = event.detail.id;
					break;
				case 4:
					zona = event.detail.parent.parent.id;
					cabecera = event.detail.parent.id;
					oficina = event.detail.id;
					break;
				}
				console.log(event.detail.level, entidad, zona, cabecera, oficina);
			} else if (event.detail.sender == 'list') {
				var area = event.detail.parent.parent.id,
				    categoria = event.detail.parent.id,
				    aplicacion = event.detail.id;
				console.log(event.detail.level, area, categoria, aplicacion);
			}
			createToast('* Event || sender: ' + event.detail.sender + ' | level: ' + event.detail.level + ' | id: ' + event.detail.id + ' | text: ' + event.detail.text);
		}

	}());
