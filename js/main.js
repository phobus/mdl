( function() {
		'use strict';

		var btNavigation = document.getElementById('bt-navigation');
		var btInbox = document.getElementById('bt-inbox');

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

		document.addEventListener('ClickTree', ListClickHandler);
		function ListClickHandler(event) {
			createToast('* Event || level: ' + event.detail.level + ' | id: ' + event.detail.id + ' | text: ' + event.detail.text);
		}

	}());
